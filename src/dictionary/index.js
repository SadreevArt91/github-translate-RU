// dictionary/index.js — агрегатор всех модулей словаря.
// Собираем плоский Map для O(1) поиска + раздельный Map по атрибутам.
// Плюс поддержка контекстных правил: модуль может экспортировать массив
// contextual = [{ selector, strings }], где перевод применяется только
// внутри DOM-узла, совпадающего с селектором.
(function (root) {
  const ns = (root.GitHubRu = root.GitHubRu || {});
  const d = ns.dict || {};

  // Порядок модулей: поздние ПЕРЕОПРЕДЕЛЯЮТ ранние в плоском словаре.
  const MODULES = [
    'common', 'nav', 'repo', 'issues', 'pr',
    'actions', 'settings', 'profile', 'notifications', 'user-extras',
  ];

  const LEVELS = {
    minimal: new Set(['common', 'nav', 'user-extras']),
    standard: new Set(['common', 'nav', 'repo', 'issues', 'pr', 'notifications', 'profile', 'user-extras']),
    full: new Set(MODULES),
  };

  function buildIndex(level = 'full') {
    const allowed = LEVELS[level] || LEVELS.full;
    const text = new Map();
    const attrs = Object.create(null);
    const contextual = [];          // массив { selector, strings: Map }
    const contextualKeys = new Map(); // оригинал → [индекс в contextual]

    for (const name of MODULES) {
      if (!allowed.has(name)) continue;
      const m = d[name];
      if (!m) continue;

      if (m.strings) {
        for (const [k, v] of Object.entries(m.strings)) {
          const clean = k.replace(/\s*\(.*\)$/, '');
          text.set(clean, v);
        }
      }
      if (m.attributes) {
        for (const [attr, map] of Object.entries(m.attributes)) {
          attrs[attr] = attrs[attr] || new Map();
          for (const [k, v] of Object.entries(map)) {
            attrs[attr].set(k, v);
          }
        }
      }
      if (Array.isArray(m.contextual)) {
        for (const rule of m.contextual) {
          if (!rule || !rule.selector || !rule.strings) continue;
          const stringsMap = new Map();
          for (const [k, v] of Object.entries(rule.strings)) {
            stringsMap.set(k, v);
          }
          const idx = contextual.length;
          contextual.push({ selector: rule.selector, strings: stringsMap });
          for (const k of stringsMap.keys()) {
            const list = contextualKeys.get(k) || [];
            list.push(idx);
            contextualKeys.set(k, list);
          }
        }
      }
    }

    return { text, attrs, contextual, contextualKeys };
  }

  ns.buildIndex = buildIndex;
  ns.LEVELS = LEVELS;
})(typeof window !== 'undefined' ? window : globalThis);
