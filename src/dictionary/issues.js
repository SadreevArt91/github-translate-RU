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
<<<<<<< HEAD
    // Заголовки попапов фильтров
    'Filter by author': 'Фильтр по автору',
    'Filter by assignee': 'Фильтр по исполнителю',
    'Filter by label': 'Фильтр по меткам',
    'Filter by project': 'Фильтр по проекту',
    'Filter by milestone': 'Фильтр по вехе',
    'Filter by reviewer': 'Фильтр по ревьюеру',
    // Плейсхолдеры поиска внутри попапов фильтра
    'Filter users': 'Поиск пользователей',
    'Filter labels': 'Поиск меток',
    'Filter projects': 'Поиск проектов',
    'Filter milestones': 'Поиск вех',
    'Filter reviewers': 'Поиск ревьюеров',
=======
>>>>>>> b233700ae40a269a5e416996bfe03aa9284bb265
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

<<<<<<< HEAD
    // Попап фильтров (на /issues и /pulls)
    'Filter Issues': 'Фильтр задач',
    'Filter Pull Requests': 'Фильтр пул-реквестов',
    'Open issues and pull requests': 'Открытые задачи и пул-реквесты',
    'Your issues': 'Ваши задачи',
    'Your pull requests': 'Ваши пул-реквесты',
    'Everything assigned to you': 'Всё, что назначено вам',
    'Everything mentioning you': 'Всё с упоминанием вас',
    'View advanced search syntax': 'Подробнее о синтаксисе поиска',
    'Clear current search query, filters, and sorts':
      'Очистить поисковый запрос, фильтры и сортировку',

=======
>>>>>>> b233700ae40a269a5e416996bfe03aa9284bb265
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

<<<<<<< HEAD
    // /labels и /milestones
    'Search all labels': 'Поиск по меткам',
    'More list item action bar': 'Меню действий по элементу',
    'labels': 'меток',
    'label': 'метка',
    'List view': 'Списком',
    'You haven\u2019t created any Milestones.': 'Вы ещё не создали ни одной вехи.',
    'You haven\'t created any Milestones.': 'Вы ещё не создали ни одной вехи.',
    'Use Milestones to create collections of Issues and Pull Requests for a particular release or project.':
      'Используйте вехи, чтобы группировать задачи и пул-реквесты под конкретный релиз или проект.',
    'Create a milestone': 'Создать веху',
    'New milestone': 'Новая веха',

=======
>>>>>>> b233700ae40a269a5e416996bfe03aa9284bb265
    // Форма создания
    'Write': 'Написать',
    'Preview': 'Предпросмотр',
    'Add a title': 'Укажите заголовок',
    'Type your description here…': 'Опишите задачу…',
    'Attach files by dragging & dropping, selecting or pasting them.':
      'Прикрепите файлы перетаскиванием, выбором или вставкой.',
    'Styling with Markdown is supported': 'Поддерживается разметка Markdown',

<<<<<<< HEAD
    // /issues/new (форма)
    'Create new issue': 'Создать новую задачу',
    'Add a description': 'Опишите задачу',
    'Create more': 'Создать ещё одну',
    'Markdown input: edit mode selected.': 'Ввод Markdown: выбран режим редактирования.',
    'Markdown input: preview mode selected.': 'Ввод Markdown: выбран режим предпросмотра.',
    'Paste, drop, or click to add files': 'Вставьте, перетащите или кликните, чтобы прикрепить файлы',
    'Metadata': 'Метаданные',
    'Edit Assignees': 'Изменить исполнителей',
    'Edit Labels': 'Изменить метки',
    'Edit Projects': 'Изменить проекты',
    'Edit Milestone': 'Изменить веху',
    'No one': 'Никого',
    'No one -': 'Никого -',
    'No labels': 'Меток нет',
    'No projects': 'Проектов нет',
    'No milestone': 'Без вехи',
    'Remember, contributions to this repository should follow its contributing guidelines.':
      'Не забывайте: вклад в этот репозиторий должен соответствовать руководству для контрибьюторов.',

    // Markdown-тулбар
    'Heading': 'Заголовок',
    'Bold': 'Жирный',
    'Italic': 'Курсив',
    'Quote': 'Цитата',
    'Code': 'Код',
    'Link': 'Ссылка',
    'Unordered list': 'Маркированный список',
    'Numbered list': 'Нумерованный список',
    'Task list': 'Чеклист',
    'Mention': 'Упоминание',
    'Reference': 'Ссылка на другое',
    'Slash commands': 'Slash-команды',
    'Saved replies': 'Сохранённые ответы',
    'Add Files': 'Добавить файлы',

=======
>>>>>>> b233700ae40a269a5e416996bfe03aa9284bb265
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
<<<<<<< HEAD
    'aria-label': {
      'Clear current search query, filters, and sorts':
        'Очистить поисковый запрос, фильтры и сортировку',
    },
=======
>>>>>>> b233700ae40a269a5e416996bfe03aa9284bb265
    'placeholder': {
      'Filter issues': 'Фильтр задач',
      'Filter pull requests': 'Фильтр пул-реквестов',
      'Title': 'Заголовок',
<<<<<<< HEAD
      'Filter users': 'Поиск пользователей',
      'Filter labels': 'Поиск меток',
      'Filter projects': 'Поиск проектов',
      'Filter milestones': 'Поиск вех',
      'Filter reviewers': 'Поиск ревьюеров',
=======
>>>>>>> b233700ae40a269a5e416996bfe03aa9284bb265
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
