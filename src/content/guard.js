// content/guard.js — быстрые проверки "можно ли переводить".
//
// Главный принцип: ЛУЧШЕ НЕ ПЕРЕВЕСТИ, ЧЕМ ПЕРЕВЕСТИ ЛИШНЕЕ.
// Оптимизирован:
//  • hasForbiddenAncestor мемоизируется per-element в WeakMap
//  • форбид-селектор разделён на три уровня скорости:
//      1) tag          — проверка по tagName (O(1))
//      2) class tokens — проверка по classList (O(k), k — кол-во классов)
//      3) prefix       — className starts-with (для react-code-*, react-blob-*)
//      4) matches()    — только для редких составных селекторов
//  • walker может reject'ить поддерево по tag'у БЕЗ подъёма вверх.

(function (root) {
  // 1) Теги, в которые вообще никогда не лезем (rejected в walker)
  const FORBIDDEN_TAGS = new Set([
    'SCRIPT', 'STYLE', 'NOSCRIPT', 'TEMPLATE', 'IFRAME',
    'CODE', 'PRE', 'KBD', 'SAMP', 'VAR',
    'TEXTAREA', 'INPUT', 'SELECT', 'OPTION',
    'SVG',
  ]);

  // 2) Отдельные классы — matches() избыточен, работает с classList
  const FORBIDDEN_CLASS_TOKENS = new Set([
    'blob-code', 'blob-num', 'blob-wrapper',
    'highlight', 'highlight-source', 'highlight-text',
    'diff-table', 'file-diff', 'js-file-content',
    'CodeMirror', 'cm-editor', 'cm-content', 'cm-line',
    'monaco-editor',
    'markdown-body', 'comment-body', 'js-comment-body',
    'js-issue-title', 'markdown-title',
    'user-mention', 'team-mention',
    'commit-ref', 'commit-author', 'commit-tease-sha', 'commit-id',
    'sha', 'sha-block',
    'final-path',
    'branch-name',
    'suggester-container', 'autocomplete-results',
    'tree-browser-result',
  ]);

  // 3) Префиксы className (react-code-*, react-blob-*)
  const FORBIDDEN_CLASS_PREFIXES = ['react-code-', 'react-blob-'];

  // 4) Data-атрибуты: проверяются через dataset/getAttribute
  const FORBIDDEN_DATA = [
    ['testid', new Set(['code-content', 'markdown-body', 'file-name'])],
    ['hovercardType', new Set(['user', 'repository', 'commit'])],
  ];

  // 5) Сложное — для этого всё ещё нужен matches(). Это редкий путь.
  const FORBIDDEN_COMPLEX = [
    '[contenteditable="true"]',
    '[contenteditable=""]',
    '.breadcrumb a strong',
    '.file-info a',
    '[aria-label="file name"]',
    '.opened-by',
    '.author',
    '.css-truncate-target.branch',
  ].join(',');

  const SKIP_ATTR = 'data-ghru-skip';

  // Per-element кеш: true = forbidden, false = safe.
  // Очищается только когда элемент удаляется из DOM (WeakMap).
  const ancestorCache = new WeakMap();

  function isElementForbidden(el) {
    if (!el || el.nodeType !== Node.ELEMENT_NODE) return false;
    if (FORBIDDEN_TAGS.has(el.tagName)) return true;
    if (el.hasAttribute && el.hasAttribute(SKIP_ATTR)) return true;

    // classList (быстро)
    if (el.classList && el.classList.length) {
      for (const cls of el.classList) {
        if (FORBIDDEN_CLASS_TOKENS.has(cls)) return true;
        for (const pref of FORBIDDEN_CLASS_PREFIXES) {
          if (cls.startsWith(pref)) return true;
        }
      }
    }

    // data-* (быстро, без matches)
    const ds = el.dataset;
    if (ds) {
      for (const [key, values] of FORBIDDEN_DATA) {
        const v = ds[key];
        if (v && values.has(v)) return true;
      }
    }

    // Сложные селекторы (последняя попытка)
    try {
      if (el.matches && el.matches(FORBIDDEN_COMPLEX)) return true;
    } catch (_) {}

    return false;
  }

  function hasForbiddenAncestor(node) {
    let el = node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement;
    // Собираем путь до первого кешированного значения или до корня
    const path = [];
    while (el && path.length < 40) {
      const cached = ancestorCache.get(el);
      if (cached === true) {
        // Все собранные элементы — тоже forbidden
        for (const p of path) ancestorCache.set(p, true);
        return true;
      }
      if (cached === false) {
        // Все собранные — safe
        for (const p of path) ancestorCache.set(p, false);
        return false;
      }
      if (isElementForbidden(el)) {
        ancestorCache.set(el, true);
        for (const p of path) ancestorCache.set(p, true);
        return true;
      }
      path.push(el);
      el = el.parentElement;
    }
    // Дошли до корня — всё safe
    for (const p of path) ancestorCache.set(p, false);
    return false;
  }

  function isTranslatableTextNode(node) {
    if (!node || node.nodeType !== Node.TEXT_NODE) return false;
    const text = node.nodeValue;
    if (!text) return false;
    if (!text.trim()) return false;
    const trimmed = text.trim();
    if (trimmed.length < 2) return false;
    // Быстрый выход по первому символу для частых шумов
    const c = trimmed.charCodeAt(0);
    if (c === 35 /*#*/ || c === 64 /*@*/) {
      if (/^[#@][\w./-]+$/.test(trimmed)) return false;
    }
    if (/^[0-9a-f]{7,40}$/i.test(trimmed)) return false;
    if (c === 104 /*h*/ && /^https?:\/\//i.test(trimmed)) return false;
    if (/^[\w.-]+\.(js|ts|tsx|jsx|py|rb|go|rs|md|yml|yaml|json|toml|html|css|sh|java|kt|c|h|cpp|hpp|cs|php|swift|lock)$/i.test(trimmed)) return false;
    if (hasForbiddenAncestor(node)) return false;
    return true;
  }

  function isTranslatableAttribute(el, attrName) {
    if (!el || el.nodeType !== Node.ELEMENT_NODE) return false;
    if (hasForbiddenAncestor(el)) return false;
    if (attrName === 'value') {
      if (el.tagName !== 'INPUT') return false;
      const t = (el.getAttribute('type') || '').toLowerCase();
      return t === 'submit' || t === 'button' || t === 'reset';
    }
    return true;
  }

  function invalidateAncestorCache() {
    // Вызывать нельзя (WeakMap не поддерживает clear), но можем переназначить
    // Вызывается из translator при смене уровня перевода/переинициализации.
  }

  root.GitHubRu = root.GitHubRu || {};
  root.GitHubRu.guard = {
    isTranslatableTextNode,
    isTranslatableAttribute,
    hasForbiddenAncestor,
    isElementForbidden,
    FORBIDDEN_TAGS,
    SKIP_ATTR,
    invalidateAncestorCache,
  };
})(typeof window !== 'undefined' ? window : globalThis);
