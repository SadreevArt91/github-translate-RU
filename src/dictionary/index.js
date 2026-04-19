// dictionary/index.js — агрегатор всех модулей словаря.
// Собираем плоский Map для O(1) поиска + раздельный Map по атрибутам.
(function (root) {
  const ns = (root.GitHubRu = root.GitHubRu || {});
  const d = ns.dict || {};

  // Порядок модулей важен: более поздние ПЕРЕОПРЕДЕЛЯЮТ предыдущие.
  // Сначала общие кнопки и формы, затем — специфичные разделы.
  const MODULES = [
    'common', 'nav', 'repo', 'issues', 'pr',
    'actions', 'settings', 'profile', 'notifications',
  ];

  // Уровни перевода для настройки «уровень переводов»
  // minimal — только навигация + общий UI (common + nav)
  // standard — плюс repo/pr/issues/notifications
  // full — всё
  const LEVELS = {
    minimal: new Set(['common', 'nav']),
    standard: new Set(['common', 'nav', 'repo', 'issues', 'pr', 'notifications', 'profile']),
    full: new Set(MODULES),
  };

  function buildIndex(level = 'full') {
    const allowed = LEVELS[level] || LEVELS.full;
    const text = new Map();            // оригинал → перевод
    const attrs = Object.create(null); // attrName → Map(original → перевод)

    for (const name of MODULES) {
      if (!allowed.has(name)) continue;
      const m = d[name];
      if (!m) continue;
      if (m.strings) {
        for (const [k, v] of Object.entries(m.strings)) {
          // Некоторые ключи в словарях — помеченные синонимы вроде "Readme" или
          // "Issues (feature)". Такие псевдо-пометки вида " (...)" убираем —
          // они только чтобы различать одинаковые ключи внутри одного модуля.
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
    }

    return { text, attrs };
  }

  ns.buildIndex = buildIndex;
  ns.LEVELS = LEVELS;
})(typeof window !== 'undefined' ? window : globalThis);
