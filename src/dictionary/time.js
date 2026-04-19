// dictionary/time.js — перевод относительных дат и периодов (regex-паттерны)
// GitHub использует как <relative-time> (web component — у него уже есть прямой текст),
// так и обычный текст вроде "opened 3 days ago" / "updated 2 hours ago".
(function (root) {
  const plural = root.GitHubRu.plural;

  // Формы: [one, few, many]
  const F_SECOND = ['секунду', 'секунды', 'секунд'];
  const F_MINUTE = ['минуту', 'минуты', 'минут'];
  const F_HOUR   = ['час', 'часа', 'часов'];
  const F_DAY    = ['день', 'дня', 'дней'];
  const F_WEEK   = ['неделю', 'недели', 'недель'];
  const F_MONTH  = ['месяц', 'месяца', 'месяцев'];
  const F_YEAR   = ['год', 'года', 'лет'];

  // Каждое правило: { re, build(match) → string }
  // Применяем к целой строке (trim) — если совпало, меняем весь текст узла.
  const rules = [
    // "N second/minute/hour... ago"
    {
      re: /^(\d+)\s+seconds?\s+ago$/i,
      build: m => `${m[1]} ${plural(+m[1], F_SECOND)} назад`,
    },
    {
      re: /^(\d+)\s+minutes?\s+ago$/i,
      build: m => `${m[1]} ${plural(+m[1], F_MINUTE)} назад`,
    },
    {
      re: /^(\d+)\s+hours?\s+ago$/i,
      build: m => `${m[1]} ${plural(+m[1], F_HOUR)} назад`,
    },
    {
      re: /^(\d+)\s+days?\s+ago$/i,
      build: m => `${m[1]} ${plural(+m[1], F_DAY)} назад`,
    },
    {
      re: /^(\d+)\s+weeks?\s+ago$/i,
      build: m => `${m[1]} ${plural(+m[1], F_WEEK)} назад`,
    },
    {
      re: /^(\d+)\s+months?\s+ago$/i,
      build: m => `${m[1]} ${plural(+m[1], F_MONTH)} назад`,
    },
    {
      re: /^(\d+)\s+years?\s+ago$/i,
      build: m => `${m[1]} ${plural(+m[1], F_YEAR)} назад`,
    },
    // "last week/month/year"
    { re: /^last\s+week$/i,  build: () => 'на прошлой неделе' },
    { re: /^last\s+month$/i, build: () => 'в прошлом месяце' },
    { re: /^last\s+year$/i,  build: () => 'в прошлом году' },
    { re: /^yesterday$/i,    build: () => 'вчера' },
    { re: /^today$/i,        build: () => 'сегодня' },
    { re: /^tomorrow$/i,     build: () => 'завтра' },
    { re: /^just\s+now$/i,   build: () => 'только что' },
    { re: /^now$/i,          build: () => 'сейчас' },

    // "in N ..." (будущее)
    { re: /^in\s+(\d+)\s+seconds?$/i, build: m => `через ${m[1]} ${plural(+m[1], F_SECOND)}` },
    { re: /^in\s+(\d+)\s+minutes?$/i, build: m => `через ${m[1]} ${plural(+m[1], F_MINUTE)}` },
    { re: /^in\s+(\d+)\s+hours?$/i,   build: m => `через ${m[1]} ${plural(+m[1], F_HOUR)}` },
    { re: /^in\s+(\d+)\s+days?$/i,    build: m => `через ${m[1]} ${plural(+m[1], F_DAY)}` },
    { re: /^in\s+(\d+)\s+weeks?$/i,   build: m => `через ${m[1]} ${plural(+m[1], F_WEEK)}` },
    { re: /^in\s+(\d+)\s+months?$/i,  build: m => `через ${m[1]} ${plural(+m[1], F_MONTH)}` },
    { re: /^in\s+(\d+)\s+years?$/i,   build: m => `через ${m[1]} ${plural(+m[1], F_YEAR)}` },

    // on Jan 1, 2024 — оставляем как есть (пусть остаётся у нативного renderer)

    // "N open / N closed" — оставим словарю счётчиков

    // Контрибьюции на профиле: "5 contributions on January 15"
    {
      re: /^(\d+)\s+contributions?\s+on\s+(.+)$/i,
      build: m => {
        const n = +m[1];
        const forms = ['вклад', 'вклада', 'вкладов'];
        return `${n} ${plural(n, forms)} — ${m[2]}`;
      },
    },
    {
      re: /^No contributions on (.+)$/i,
      build: m => `Нет вкладов — ${m[1]}`,
    },
  ];

  function translateTime(text) {
    const t = text.trim();
    if (!t) return null;
    for (const r of rules) {
      const m = t.match(r.re);
      if (m) return r.build(m);
    }
    return null;
  }

  root.GitHubRu.translateTime = translateTime;
})(typeof window !== 'undefined' ? window : globalThis);
