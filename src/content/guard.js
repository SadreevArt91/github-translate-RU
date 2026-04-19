// content/guard.js — функция isTranslatable(node) и блеклист контейнеров.
//
// Главный принцип: ЛУЧШЕ НЕ ПЕРЕВЕСТИ, ЧЕМ ПЕРЕВЕСТИ ЛИШНЕЕ.
// Поэтому защищаем всё, что хоть чуть-чуть похоже на пользовательский
// контент или код. Сами текстовые узлы дополнительно проверяются по
// словарю — если строки нет в словаре, мы её и не трогаем.

(function (root) {
  // Теги, в которые мы вообще никогда не лезем
  const FORBIDDEN_TAGS = new Set([
    'SCRIPT', 'STYLE', 'NOSCRIPT', 'TEMPLATE', 'IFRAME',
    'CODE', 'PRE', 'KBD', 'SAMP', 'VAR',
    'TEXTAREA', 'INPUT', 'SELECT', 'OPTION',
    'svg', 'SVG', 'path', 'PATH',
  ]);

  // Селекторы-блеклисты: ближайший предок-совпадение → не переводим
  const FORBIDDEN_SELECTOR = [
    // Код, подсветка, diff, blob
    '.blob-code', '.blob-num', '.blob-wrapper',
    '.highlight', '.highlight-source', '.highlight-text',
    '[class*="react-code-"]', '[class*="react-blob-"]',
    '[data-testid="code-content"]',
    '.diff-table', '.file-diff', '.js-file-content',
    '.CodeMirror', '.cm-editor', '.cm-content', '.cm-line',
    '.monaco-editor',

    // Markdown / пользовательский контент
    '.markdown-body', '.comment-body', '.js-comment-body',
    '.js-issue-title', '.markdown-title',
    '[data-testid="markdown-body"]',

    // Пользовательские идентификаторы
    '.user-mention', '.team-mention', '.commit-ref',
    '.commit-author', '.commit-tease-sha', '.commit-id',
    '.sha', '.sha-block',
    '.author', '.opened-by',
    '[data-hovercard-type="user"]',
    '[data-hovercard-type="repository"]',
    '[data-hovercard-type="commit"]',

    // Имена файлов / путей
    '.file-info a', '.final-path',
    '[data-testid="file-name"]', '[aria-label="file name"]',
    '.breadcrumb a strong', // последний сегмент пути файла
    '.tree-browser-result',

    // Поля ввода и редактируемые области
    '[contenteditable="true"]', '[contenteditable=""]',

    // Выпадающие списки веток / тегов / репозиториев
    '.branch-name', '.css-truncate-target.branch',
    '[data-testid="anchor-button"][data-hovercard-type]',

    // Подсказки автодополнения, которые показывают чужие данные
    '.suggester-container', '.autocomplete-results',
  ].join(',');

  // Атрибут-маркер: мы можем явно пометить любой узел/поддерево
  // атрибутом data-ghru-skip="1" и не трогать его
  const SKIP_ATTR = 'data-ghru-skip';

  // Маркер уже переведённого узла (чтобы не зацикливаться)
  const DONE_ATTR = 'data-ghru-done';

  function hasForbiddenAncestor(node) {
    let el = node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement;
    let depth = 0;
    while (el && depth < 25) {
      if (FORBIDDEN_TAGS.has(el.tagName)) return true;
      if (el.hasAttribute && el.hasAttribute(SKIP_ATTR)) return true;
      // matches() может бросать на отсоединённых узлах — оборачиваем
      try {
        if (el.matches && el.matches(FORBIDDEN_SELECTOR)) return true;
      } catch (_) {}
      el = el.parentElement;
      depth++;
    }
    return false;
  }

  function isTranslatableTextNode(node) {
    if (!node || node.nodeType !== Node.TEXT_NODE) return false;
    const text = node.nodeValue;
    if (!text) return false;
    // Только пробелы / пустота — пропускаем
    if (!text.trim()) return false;
    // Похоже на чистый идентификатор / SHA / число
    const trimmed = text.trim();
    if (/^[0-9a-f]{7,40}$/i.test(trimmed)) return false; // SHA
    if (/^[#@][\w./-]+$/.test(trimmed)) return false;     // #1234, @user
    if (/^https?:\/\//i.test(trimmed)) return false;      // URL
    if (/^[\w.-]+\.(js|ts|tsx|jsx|py|rb|go|rs|md|yml|yaml|json|toml|html|css|sh|java|kt|c|h|cpp|hpp|cs|php|swift|lock)$/i.test(trimmed)) return false;
    if (hasForbiddenAncestor(node)) return false;
    return true;
  }

  // Можно ли переводить указанный атрибут на конкретном элементе?
  // (translateAttribute проверяет: атрибут видим пользователю, элемент — UI)
  function isTranslatableAttribute(el, attrName) {
    if (!el || el.nodeType !== Node.ELEMENT_NODE) return false;
    if (hasForbiddenAncestor(el)) return false;
    // value переводим только у submit-кнопок
    if (attrName === 'value') {
      if (el.tagName !== 'INPUT') return false;
      const t = (el.getAttribute('type') || '').toLowerCase();
      return t === 'submit' || t === 'button' || t === 'reset';
    }
    return true;
  }

  root.GitHubRu = root.GitHubRu || {};
  root.GitHubRu.guard = {
    isTranslatableTextNode,
    isTranslatableAttribute,
    hasForbiddenAncestor,
    SKIP_ATTR,
    DONE_ATTR,
  };
})(typeof window !== 'undefined' ? window : globalThis);
