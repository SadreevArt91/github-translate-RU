// utils/plural.js — русская плюрализация
// Правило: формы [one, few, many]
//   1 коммит, 21 коммит        → one
//   2 коммита, 3, 4, 22, 23    → few
//   0, 5..20, 25..30, ...      → many
//
// Использование:
//   plural(5, ['коммит', 'коммита', 'коммитов']) // → 'коммитов'

(function (root) {
  function plural(n, forms) {
    const abs = Math.abs(Math.trunc(n));
    const mod10 = abs % 10;
    const mod100 = abs % 100;
    if (mod10 === 1 && mod100 !== 11) return forms[0];
    if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return forms[1];
    return forms[2];
  }

  // Экспорт в глобальный неймспейс расширения
  root.GitHubRu = root.GitHubRu || {};
  root.GitHubRu.plural = plural;
})(typeof window !== 'undefined' ? window : globalThis);
