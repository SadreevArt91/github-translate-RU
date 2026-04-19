// content/translator.js — движок перевода (оптимизированная версия).
//
// Ключевые идеи:
//  • Мутации пакуются в pending и flush'атся одним проходом (throttle через
//    microtask + rAF fallback). 200 мутаций подряд = 1 walk, а не 200.
//  • Walker сам reject'ит поддеревья forbidden-тегов (SVG, CODE, PRE, …),
//    вместо того чтобы заходить внутрь и проверять hasForbiddenAncestor
//    на каждом узле.
//  • pendingRoots дедуплицируются: если в очереди есть и родитель, и
//    потомок — оставляем только родителя.
//  • Отметки "переведено" хранятся в WeakMap/WeakSet, не в DOM. Это
//    экономит setAttribute/attributes-mutations.
//  • Observer слушает attribute-мутации только на aria-label и title
//    (реально переводимые), не на всём списке.

(function (root) {
  const ns = root.GitHubRu;
  const { guard, translateTime, buildIndex } = ns;
  const {
    isTranslatableTextNode,
    isTranslatableAttribute,
    hasForbiddenAncestor,
    FORBIDDEN_TAGS,
  } = guard;

  const TRANSLATABLE_ATTRS = ['aria-label', 'title', 'placeholder', 'alt', 'value', 'data-confirm'];
  // Динамически обновляемые атрибуты, за которыми ИМЕЕТ смысл следить в рантайме.
  const OBSERVED_ATTRS = ['aria-label', 'title'];

  const OBSERVER_OPTS = {
    childList: true,
    subtree: true,
    characterData: true,
    attributes: true,
    attributeFilter: OBSERVED_ATTRS,
  };

  const state = {
    enabled: true,
    level: 'full',
    showOriginal: false,
    userExceptions: new Set(),
    reportMode: false,
    index: { text: new Map(), attrs: {} },
    processed: new WeakSet(),      // обработанные текстовые узлы
    originals: new WeakMap(),      // node → [original, translated]
    elementDone: new WeakMap(),    // элемент → Set("attr:value")
    observer: null,
    pendingRoots: new Set(),
    flushScheduled: false,
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
      state.observer.takeRecords();
      state.observer.observe(document.documentElement, OBSERVER_OPTS);
    }
  }
  function withObserverPaused(fn) {
    pauseObserver();
    try { fn(); } finally { resumeObserver(); }
  }

  // ---------- lookup / перевод узла ----------

  function lookupContextual(core, parentEl) {
    const ctxKeys = state.index.contextualKeys;
    if (!ctxKeys || !parentEl || typeof parentEl.closest !== 'function') return null;
    const indices = ctxKeys.get(core);
    if (!indices) return null;
    const rules = state.index.contextual;
    for (let i = 0; i < indices.length; i++) {
      const rule = rules[indices[i]];
      if (!rule) continue;
      try {
        if (parentEl.closest(rule.selector)) {
          const t = rule.strings.get(core);
          if (t) return t;
        }
      } catch (_) {}
    }
    return null;
  }

  function lookupText(raw, parentEl) {
    // Быстрая проверка пробелов без regex
    let start = 0, end = raw.length;
    while (start < end && raw.charCodeAt(start) <= 32) start++;
    while (end > start && raw.charCodeAt(end - 1) <= 32) end--;
    if (start === end) return null;
    const core = start === 0 && end === raw.length ? raw : raw.slice(start, end);

    if (state.userExceptions.has(core)) return null;

    // 1) Контекстные правила (селектор-зависимые) - побеждают глобальный словарь
    let translated = lookupContextual(core, parentEl);
    // 2) Глобальный плоский словарь
    if (!translated) translated = state.index.text.get(core);
    // 3) Время (relative time и т.п.)
    if (!translated) {
      const t = translateTime && translateTime(core);
      if (t) translated = t;
    }
    if (!translated) return null;

    if (state.showOriginal && translated !== core) {
      translated = `${translated} (${core})`;
    }
    if (start === 0 && end === raw.length) return translated;
    return raw.slice(0, start) + translated + raw.slice(end);
  }

  function translateTextNode(node) {
    if (state.processed.has(node)) return;
    if (!isTranslatableTextNode(node)) {
      state.processed.add(node);
      return;
    }
    const next = lookupText(node.nodeValue, node.parentElement);
    if (next == null) {
      if (state.reportMode) {
        const parent = node.parentElement;
        if (parent && !parent.hasAttribute('data-ghru-untranslated')) {
          parent.setAttribute('data-ghru-untranslated', '1');
        }
      }
      state.processed.add(node);
      return;
    }
    if (next !== node.nodeValue) {
      state.originals.set(node, [node.nodeValue, next]);
      node.nodeValue = next;
    }
    state.processed.add(node);
  }

  // ---------- атрибуты ----------

  function translateAttributes(el) {
    if (!el || el.nodeType !== Node.ELEMENT_NODE) return;
    if (hasForbiddenAncestor(el)) return;

    let done = state.elementDone.get(el);

    for (let i = 0; i < TRANSLATABLE_ATTRS.length; i++) {
      const attr = TRANSLATABLE_ATTRS[i];
      if (!el.hasAttribute(attr)) continue;
      const raw = el.getAttribute(attr);
      if (!raw) continue;
      // Пустые и пробельные — пропустим без лишних trim
      if (raw.length < 2 && !raw.trim()) continue;

      const doneKey = attr + '\x01' + raw;
      if (done && done.has(doneKey)) continue;

      if (!isTranslatableAttribute(el, attr)) {
        if (!done) { done = new Set(); state.elementDone.set(el, done); }
        done.add(doneKey);
        continue;
      }

      // Trim быстрее через charCodeAt
      let s = 0, e = raw.length;
      while (s < e && raw.charCodeAt(s) <= 32) s++;
      while (e > s && raw.charCodeAt(e - 1) <= 32) e--;
      const core = s === 0 && e === raw.length ? raw : raw.slice(s, e);

      const specific = state.index.attrs[attr];
      let translated = specific && specific.get(core);
      if (!translated) translated = state.index.text.get(core);

      if (!done) { done = new Set(); state.elementDone.set(el, done); }

      if (!translated) {
        done.add(doneKey);
        continue;
      }

      const next = s === 0 && e === raw.length
        ? translated
        : raw.slice(0, s) + translated + raw.slice(e);
      if (next !== raw) {
        el.setAttribute(attr, next);
      }
      done.add(doneKey);
      done.add(attr + '\x01' + next);
    }
  }

  // ---------- обход поддерева ----------

  // Кешируем ссылку на NodeFilter для скорости
  const FILTER_ACCEPT = NodeFilter.FILTER_ACCEPT;
  const FILTER_REJECT = NodeFilter.FILTER_REJECT;
  const SHOW_ELEMENT_TEXT = NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT;

  const acceptNodeFilter = {
    acceptNode(node) {
      if (node.nodeType === Node.TEXT_NODE) return FILTER_ACCEPT;
      // Элемент — reject всего поддерева, если тег запрещён
      if (FORBIDDEN_TAGS.has(node.tagName)) return FILTER_REJECT;
      return FILTER_ACCEPT;
    },
  };

  const WALK_BUDGET = 4000;

  function walkAndTranslate(rootNode) {
    if (!rootNode || !rootNode.isConnected) return;
    if (rootNode.nodeType === Node.TEXT_NODE) {
      translateTextNode(rootNode);
      return;
    }
    if (rootNode.nodeType !== Node.ELEMENT_NODE && rootNode.nodeType !== Node.DOCUMENT_NODE) return;
    if (rootNode.nodeType === Node.ELEMENT_NODE) {
      if (FORBIDDEN_TAGS.has(rootNode.tagName)) return;
      if (hasForbiddenAncestor(rootNode)) return;
      translateAttributes(rootNode);
    }

    const walker = document.createTreeWalker(rootNode, SHOW_ELEMENT_TEXT, acceptNodeFilter);
    let n, count = 0;
    while ((n = walker.nextNode())) {
      if (n.nodeType === Node.TEXT_NODE) translateTextNode(n);
      else translateAttributes(n);
      if (++count >= WALK_BUDGET) {
        state.pendingRoots.add(rootNode);
        scheduleFlush();
        break;
      }
    }
  }

  // Убирает из набора вложенные корни — оставляет только самые верхние
  function dedupeRoots(set) {
    if (set.size <= 1) return Array.from(set);
    const arr = Array.from(set);
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      const a = arr[i];
      if (!a || !a.isConnected) continue;
      let covered = false;
      for (let j = 0; j < arr.length; j++) {
        if (i === j) continue;
        const b = arr[j];
        if (!b || !b.isConnected) continue;
        // a вложен в b?
        if (b.nodeType === Node.ELEMENT_NODE && a !== b && b.contains(a)) {
          covered = true;
          break;
        }
      }
      if (!covered) result.push(a);
    }
    return result;
  }

  function runAll(targets) {
    withObserverPaused(() => {
      for (const t of targets) {
        if (!t || !t.isConnected) continue;
        walkAndTranslate(t);
      }
    });
  }

  // ---------- планировщик ----------

  function scheduleFlush() {
    if (state.flushScheduled) return;
    state.flushScheduled = true;
    const run = () => {
      state.flushScheduled = false;
      if (state.pendingRoots.size === 0) return;
      const roots = dedupeRoots(state.pendingRoots);
      state.pendingRoots.clear();
      if (roots.length) runAll(roots);
    };
    if (typeof requestIdleCallback === 'function') {
      requestIdleCallback(run, { timeout: 300 });
    } else {
      requestAnimationFrame(run);
    }
  }

  function enqueue(node) {
    state.pendingRoots.add(node);
    scheduleFlush();
  }

  // ---------- observer ----------

  function onMutations(mutations) {
    if (!state.enabled) return;
    if (pauseDepth > 0) return;

    for (let i = 0; i < mutations.length; i++) {
      const m = mutations[i];
      const type = m.type;
      if (type === 'childList') {
        const added = m.addedNodes;
        for (let j = 0; j < added.length; j++) {
          const node = added[j];
          const nt = node.nodeType;
          if (nt === Node.ELEMENT_NODE) {
            if (!FORBIDDEN_TAGS.has(node.tagName)) state.pendingRoots.add(node);
          } else if (nt === Node.TEXT_NODE) {
            state.pendingRoots.add(node);
          }
        }
      } else if (type === 'characterData') {
        state.processed.delete(m.target);
        state.pendingRoots.add(m.target);
      } else if (type === 'attributes') {
        const el = m.target;
        if (!el || el.nodeType !== Node.ELEMENT_NODE) continue;
        // Сбросим запись для конкретного атрибута в elementDone
        const done = state.elementDone.get(el);
        if (done) {
          const prefix = m.attributeName + '\x01';
          for (const k of done) if (k.startsWith(prefix)) done.delete(k);
        }
        state.pendingRoots.add(el);
      }
    }
    if (state.pendingRoots.size) scheduleFlush();
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

  // ---------- управление ----------

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
    state.elementDone = new WeakMap();
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
      if (settings.showOriginal !== state.showOriginal) needsRebuild = true;
      state.showOriginal = settings.showOriginal;
    }
    if (Array.isArray(settings.userExceptions)) {
      state.userExceptions = new Set(settings.userExceptions);
    }
    if (typeof settings.reportMode === 'boolean') state.reportMode = settings.reportMode;
    if (needsRebuild) {
      setIndex(settings.level || state.level);
      state.processed = new WeakSet();
      state.elementDone = new WeakMap();
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
