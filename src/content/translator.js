// content/translator.js — движок перевода.
// Главные принципы:
//  • Все наши правки DOM выполняются при отключённом MutationObserver
//    (pause/resume). Это единственный надёжный способ избежать
//    бесконечного цикла "перевели → observer сработал → перевели снова".
//  • Один узел переводится не чаще одного раза до инвалидации.
//  • Максимум полезной работы — в idle/rAF, без блокировки main thread.

(function (root) {
  const ns = root.GitHubRu;
  const { guard, translateTime, buildIndex } = ns;
  const { isTranslatableTextNode, isTranslatableAttribute, hasForbiddenAncestor, DONE_ATTR } = guard;

  const TRANSLATABLE_ATTRS = ['aria-label', 'title', 'placeholder', 'alt', 'value', 'data-confirm'];

  const OBSERVER_OPTS = {
    childList: true,
    subtree: true,
    characterData: true,
    attributes: true,
    attributeFilter: TRANSLATABLE_ATTRS,
  };

  const state = {
    enabled: true,
    level: 'full',
    showOriginal: false,
    userExceptions: new Set(),
    reportMode: false,
    index: { text: new Map(), attrs: {} },
    processed: new WeakSet(), // текстовые узлы, уже обработанные
    originals: new WeakMap(), // node → [original, translated]
    observer: null,
    rafScheduled: false,
    pendingRoots: new Set(),
  };

  // ---------- PAUSE/RESUME observer ----------

  let pauseDepth = 0;
  function pauseObserver() {
    if (!state.observer) return;
    if (pauseDepth === 0) state.observer.disconnect();
    pauseDepth++;
  }
  function resumeObserver() {
    if (!state.observer) return;
    pauseDepth = Math.max(0, pauseDepth - 1);
    if (pauseDepth === 0) {
      // Выбрасываем мутации, накопленные во время паузы, — это наши правки
      state.observer.takeRecords();
      state.observer.observe(document.documentElement, OBSERVER_OPTS);
    }
  }
  function withObserverPaused(fn) {
    pauseObserver();
    try { fn(); } finally { resumeObserver(); }
  }

  // ---------- ПЕРЕВОД ОДНОГО ТЕКСТОВОГО УЗЛА ----------

  function lookupText(raw) {
    const leadMatch = raw.match(/^\s+/);
    const trailMatch = raw.match(/\s+$/);
    const lead = leadMatch ? leadMatch[0] : '';
    const trail = trailMatch ? trailMatch[0] : '';
    const core = raw.slice(lead.length, raw.length - trail.length);
    if (!core) return null;

    if (state.userExceptions.has(core)) return null;

    let translated = state.index.text.get(core);
    if (!translated) {
      const t = translateTime && translateTime(core);
      if (t) translated = t;
    }
    if (!translated) return null;

    if (state.showOriginal && translated !== core) {
      translated = `${translated} (${core})`;
    }
    return lead + translated + trail;
  }

  function translateTextNode(node) {
    if (state.processed.has(node)) return;
    if (!isTranslatableTextNode(node)) return;
    const next = lookupText(node.nodeValue);
    if (next == null) {
      if (state.reportMode) {
        const parent = node.parentElement;
        if (parent && !parent.hasAttribute('data-ghru-untranslated')) {
          parent.setAttribute('data-ghru-untranslated', '1');
        }
      }
      // Отметим как обработанный, чтобы не дёргать его повторно. Если GitHub
      // изменит текст — characterData mutation очистит отметку (см. observer).
      state.processed.add(node);
      return;
    }
    if (next === node.nodeValue) {
      state.processed.add(node);
      return;
    }
    state.originals.set(node, [node.nodeValue, next]);
    node.nodeValue = next;
    state.processed.add(node);
  }

  // ---------- ПЕРЕВОД АТРИБУТОВ ----------

  function translateAttributes(el) {
    if (!el || el.nodeType !== Node.ELEMENT_NODE) return;
    if (hasForbiddenAncestor(el)) return;

    const doneAttrVal = el.getAttribute(DONE_ATTR) || '';
    const doneSet = new Set(doneAttrVal ? doneAttrVal.split('|') : []);
    let doneChanged = false;

    for (const attr of TRANSLATABLE_ATTRS) {
      if (!el.hasAttribute(attr)) continue;
      if (!isTranslatableAttribute(el, attr)) continue;

      const raw = el.getAttribute(attr);
      if (!raw || !raw.trim()) continue;

      const doneKey = `${attr}:${raw}`;
      if (doneSet.has(doneKey)) continue;

      const specific = state.index.attrs[attr];
      const core = raw.trim();
      let translated = specific && specific.get(core);
      if (!translated) translated = state.index.text.get(core);
      if (!translated) {
        // Отметим эту пару как рассмотренную (переводить нечего)
        doneSet.add(doneKey);
        doneChanged = true;
        continue;
      }

      const leadMatch = raw.match(/^\s+/);
      const trailMatch = raw.match(/\s+$/);
      const next = (leadMatch ? leadMatch[0] : '') + translated + (trailMatch ? trailMatch[0] : '');
      if (next !== raw) {
        el.setAttribute(attr, next);
      }
      doneSet.add(`${attr}:${next}`); // и исходный, и переведённый варианты
      doneSet.add(doneKey);
      doneChanged = true;
    }

    if (doneChanged) {
      el.setAttribute(DONE_ATTR, Array.from(doneSet).join('|'));
    }
  }

  // ---------- ОБХОД ПОДДЕРЕВА ----------

  const WALK_BUDGET = 5000; // максимум узлов за один проход, чтобы не блокировать main thread

  function walkAndTranslate(rootNode) {
    if (!rootNode) return;
    if (rootNode.nodeType === Node.TEXT_NODE) {
      translateTextNode(rootNode);
      return;
    }
    if (rootNode.nodeType !== Node.ELEMENT_NODE && rootNode.nodeType !== Node.DOCUMENT_NODE) return;
    if (rootNode.nodeType === Node.ELEMENT_NODE && hasForbiddenAncestor(rootNode)) return;

    if (rootNode.nodeType === Node.ELEMENT_NODE) translateAttributes(rootNode);

    const walker = document.createTreeWalker(
      rootNode,
      NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
      {
        acceptNode(node) {
          if (node.nodeType === Node.TEXT_NODE) return NodeFilter.FILTER_ACCEPT;
          const tag = node.tagName;
          if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'NOSCRIPT' || tag === 'TEMPLATE') {
            return NodeFilter.FILTER_REJECT;
          }
          return NodeFilter.FILTER_ACCEPT;
        },
      }
    );

    let n, count = 0;
    while ((n = walker.nextNode())) {
      if (n.nodeType === Node.TEXT_NODE) translateTextNode(n);
      else translateAttributes(n);
      if (++count >= WALK_BUDGET) {
        // Не обработали всё — запланируем добивку на следующий idle
        state.pendingRoots.add(rootNode);
        scheduleFlush();
        break;
      }
    }
  }

  function runAll(targets) {
    withObserverPaused(() => {
      for (const t of targets) {
        if (!t || !t.isConnected) continue;
        walkAndTranslate(t);
      }
    });
  }

  // ---------- ПЛАНИРОВЩИК ----------

  function scheduleFlush() {
    if (state.rafScheduled) return;
    state.rafScheduled = true;
    const run = () => {
      state.rafScheduled = false;
      if (state.pendingRoots.size === 0) return;
      const roots = Array.from(state.pendingRoots);
      state.pendingRoots.clear();
      runAll(roots);
    };
    if (typeof requestIdleCallback === 'function') {
      requestIdleCallback(run, { timeout: 200 });
    } else {
      requestAnimationFrame(run);
    }
  }

  function enqueue(node) {
    state.pendingRoots.add(node);
    scheduleFlush();
  }

  // ---------- OBSERVER ----------

  function onMutations(mutations) {
    if (!state.enabled) return;
    // pauseDepth>0 означает, что мутации — наши (не должны сюда попасть, т.к.
    // disconnect отменяет подписку, но takeRecords на всякий случай).
    if (pauseDepth > 0) return;

    for (const m of mutations) {
      if (m.type === 'childList') {
        for (const added of m.addedNodes) {
          if (added.nodeType === Node.ELEMENT_NODE || added.nodeType === Node.TEXT_NODE) {
            enqueue(added);
          }
        }
      } else if (m.type === 'characterData') {
        // Текст изменился — инвалидация кеша processed
        state.processed.delete(m.target);
        enqueue(m.target);
      } else if (m.type === 'attributes') {
        // GitHub мог переписать tooltip. Сбросим только запись в DONE_ATTR
        // для этого атрибута (не трогая остальные) и поставим элемент в очередь.
        const el = m.target;
        if (!el || el.nodeType !== Node.ELEMENT_NODE) continue;
        const done = (el.getAttribute(DONE_ATTR) || '').split('|').filter(Boolean);
        const filtered = done.filter(k => !k.startsWith(m.attributeName + ':'));
        if (filtered.length !== done.length) {
          withObserverPaused(() => {
            if (filtered.length) el.setAttribute(DONE_ATTR, filtered.join('|'));
            else el.removeAttribute(DONE_ATTR);
          });
        }
        enqueue(el);
      }
    }
  }

  function startObserver() {
    if (state.observer) return;
    state.observer = new MutationObserver(onMutations);
    state.observer.observe(document.documentElement, OBSERVER_OPTS);
  }
  function stopObserver() {
    if (state.observer) {
      state.observer.disconnect();
      state.observer = null;
    }
  }

  // ---------- УПРАВЛЕНИЕ ----------

  function setIndex(level) {
    state.level = level || 'full';
    state.index = buildIndex(state.level);
  }

  function applyAll() {
    runAll([document.documentElement]);
  }

  function revertAll() {
    withObserverPaused(() => {
      const walker = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_TEXT);
      let n;
      while ((n = walker.nextNode())) {
        const rec = state.originals.get(n);
        if (rec && n.nodeValue === rec[1]) n.nodeValue = rec[0];
      }
    });
    state.processed = new WeakSet();
  }

  function enable() {
    if (state.enabled) return;
    state.enabled = true;
    startObserver();
    applyAll();
  }
  function disable() {
    if (!state.enabled) return;
    state.enabled = false;
    stopObserver();
    revertAll();
  }

  function setSettings(settings) {
    let needsRebuild = false;
    if (settings.level && settings.level !== state.level) needsRebuild = true;
    if (typeof settings.showOriginal === 'boolean') {
      state.showOriginal = settings.showOriginal;
      needsRebuild = true;
    }
    if (Array.isArray(settings.userExceptions)) {
      state.userExceptions = new Set(settings.userExceptions);
    }
    if (typeof settings.reportMode === 'boolean') state.reportMode = settings.reportMode;
    if (needsRebuild) {
      setIndex(settings.level || state.level);
      state.processed = new WeakSet();
      applyAll();
    }
    if (typeof settings.enabled === 'boolean') {
      settings.enabled ? enable() : disable();
    }
  }

  ns.translator = {
    state,
    setIndex,
    applyAll,
    enable,
    disable,
    setSettings,
    startObserver,
    stopObserver,
  };
})(typeof window !== 'undefined' ? window : globalThis);
