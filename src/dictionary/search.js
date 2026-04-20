// dictionary/search.js — страница глобального поиска /search.
// Вкладки результатов (Code / Repositories / Issues / Pull requests / Discussions / Users / More),
// левый сайдбар фильтров (Languages, Advanced), верхняя строка результатов,
// блоки сайдбара справа (Sponsor, Wikipedia-карточка, обратная связь).
(function (root) {
  const strings = {
    // Заголовок и левая панель
    'Filter by': 'Фильтр по',
    'Search Results': 'Результаты поиска',
    'Users': 'Пользователи',
    'Advanced search': 'Расширенный поиск',

    // Секции левого сайдбара
    'Languages': 'Языки',
    'More languages...': 'Больше языков…',
    'More languages\u2026': 'Больше языков…',
    'Advanced': 'Расширенные',

    // Поля Advanced
    'Owner': 'Владелец',
    'Size': 'Размер',
    'Number of followers': 'Число подписчиков',
    'Number of forks': 'Число форков',
    'Number of stars': 'Число звёзд',
    'Date created': 'Дата создания',
    'Date pushed': 'Дата последнего push',
    'Topic': 'Тема',
    'License': 'Лицензия',
    'Archived': 'Архивированные',

    // Верхняя строка результатов
    'Sort by:': 'Сортировка:',
    'results': 'результатов',
    'result': 'результат',
    'View topic': 'Открыть тему',
    'Wikipedia': 'Википедия',

    // Блоки в правом сайдбаре
    'Sponsor open source projects you depend on':
      'Поддержите open-source проекты, от которых вы зависите',
    'Contributors are working behind the scenes to make open source better for everyone\u2014give them the help and recognition they deserve.':
      'Контрибьюторы работают «за кулисами», чтобы open source становился лучше для всех — поддержите их и отметьте их вклад.',
    'Contributors are working behind the scenes to make open source better for everyone—give them the help and recognition they deserve.':
      'Контрибьюторы работают «за кулисами», чтобы open source становился лучше для всех — поддержите их и отметьте их вклад.',
    'Explore sponsorable projects': 'Найти проекты для спонсорства',
    'How can we improve search?': 'Как нам улучшить поиск?',
    'Give feedback': 'Оставить отзыв',

    // ProTip (альтернативный текст для /search)
    'Press the / key to activate the search input again and adjust your query.':
      'Нажмите клавишу /, чтобы снова активировать поле поиска и изменить запрос.',

    // Пустые состояния
    'We couldn’t find any repositories matching': 'Мы не нашли репозиториев по запросу',
    'We couldn\'t find any repositories matching': 'Мы не нашли репозиториев по запросу',
    'We couldn’t find any code matching': 'Мы не нашли кода по запросу',
    'We couldn\'t find any code matching': 'Мы не нашли кода по запросу',
    'We couldn’t find any users matching': 'Мы не нашли пользователей по запросу',
    'We couldn\'t find any users matching': 'Мы не нашли пользователей по запросу',
    'Try a different search?': 'Попробуйте другой запрос?',
    'Or feel free to': 'Или можете',
    'contact us': 'связаться с нами',
    'if you think this is a bug.': 'если считаете, что это ошибка.',
  };

  const attributes = {
    'aria-label': {
      'Filter by': 'Фильтр по',
      'Advanced search': 'Расширенный поиск',
      'Sort': 'Сортировка',
    },
    'placeholder': {
      'Search GitHub': 'Поиск по GitHub',
    },
  };

  // Контекстные правила для левого сайдбара Advanced на /search:
  // Public/Private там — множественное число ("Публичные/Приватные"),
  // в то время как в остальных местах GitHub это единственное ("Публичный/Приватный").
  const contextual = [
    {
      selector: 'aside[aria-label*="Advanced" i], form[data-advanced], .js-advanced-search, [data-testid="search-advanced"]',
      strings: {
        'Public': 'Публичные',
        'Private': 'Приватные',
      },
    },
  ];

  root.GitHubRu.dict = root.GitHubRu.dict || {};
  root.GitHubRu.dict.search = { strings, attributes, contextual };
})(typeof window !== 'undefined' ? window : globalThis);
