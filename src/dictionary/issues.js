// dictionary/issues.js — Issues: список, фильтры, создание, метки
(function (root) {
  const strings = {
    'New issue': 'Новая задача',
    'Create issue': 'Создать задачу',
    'Submit new issue': 'Отправить новую задачу',
    'Submit issue': 'Отправить задачу',

    // Статусы
    'Close issue': 'Закрыть задачу',
    'Close as completed': 'Закрыть как выполненную',
    'Close as not planned': 'Закрыть как не будет сделана',
    'Reopen issue': 'Переоткрыть задачу',

    // Список
    'Filter issues': 'Фильтр задач',
    'Filter pull requests': 'Фильтр пул-реквестов',
    'Filters': 'Фильтры',
    'Author': 'Автор',
    'Label': 'Метка',
    'Projects': 'Проекты',
    'Milestones': 'Вехи',
    'Milestone': 'Веха',
    'Assignee': 'Исполнитель',
    'No assignee': 'Без исполнителя',
    'Sort': 'Сортировка',
    'Newest': 'Сначала новые',
    'Oldest': 'Сначала старые',
    'Most commented': 'Больше всего комментариев',
    'Least commented': 'Меньше всего комментариев',
    'Recently updated': 'Недавно обновлённые',
    'Least recently updated': 'Давно не обновлявшиеся',
    'Best match': 'Наиболее подходящие',
    'Most reactions': 'Больше всего реакций',

    // Пустое
    'Welcome to issues!': 'Добро пожаловать в задачи!',
    'Issues are used to track todos, bugs, feature requests, and more.':
      'Задачи используются для отслеживания дел, багов, идей и не только.',

    // Метки / вехи
    'Labels': 'Метки',
    'New label': 'Новая метка',
    'Edit label': 'Изменить метку',
    'Delete label': 'Удалить метку',
    'Color': 'Цвет',
    'Label name': 'Название метки',
    'Create milestone': 'Создать веху',
    'Edit milestone': 'Изменить веху',
    'Close milestone': 'Закрыть веху',

    // Форма создания
    'Write': 'Написать',
    'Preview': 'Предпросмотр',
    'Add a title': 'Укажите заголовок',
    'Type your description here…': 'Опишите задачу…',
    'Attach files by dragging & dropping, selecting or pasting them.':
      'Прикрепите файлы перетаскиванием, выбором или вставкой.',
    'Styling with Markdown is supported': 'Поддерживается разметка Markdown',

    // Реакции
    'Reactions': 'Реакции',
    'Add reaction': 'Добавить реакцию',
    'Pick your reaction': 'Выберите реакцию',

    // Действия с задачей
    'Pin issue': 'Закрепить задачу',
    'Unpin issue': 'Открепить задачу',
    'Transfer issue': 'Перенести задачу',
    'Delete issue': 'Удалить задачу',
    'Convert to discussion': 'Преобразовать в обсуждение',

    // Счётчики
    'issues': 'задач',
    'pull requests': 'пул-реквестов',
    'Open issues': 'Открытые задачи',
    'Closed issues': 'Закрытые задачи',
  };

  const attributes = {
    'placeholder': {
      'Filter issues': 'Фильтр задач',
      'Filter pull requests': 'Фильтр пул-реквестов',
      'Title': 'Заголовок',
    },
  };


  // Фильтры списка задач: кнопки-ссылки с href is:open / is:closed
  const contextual = [
    {
      selector: '.table-list-header-toggle, .issues-listing, .Subnav-search-context, a[href*="is%3Aopen"], a[href*="is%3Aclosed"], a[href*="is:open"], a[href*="is:closed"]',
      strings: {
        'Open': 'Открытые',
        'Closed': 'Закрытые',
      },
    },
  ];

  root.GitHubRu.dict = root.GitHubRu.dict || {};
  root.GitHubRu.dict.issues = { strings, attributes, contextual };
})(typeof window !== 'undefined' ? window : globalThis);
