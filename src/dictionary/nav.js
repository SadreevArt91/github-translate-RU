// dictionary/nav.js — верхняя навигация, глобальное меню, dashboard
(function (root) {
  const strings = {
    // Главная навигация GitHub (шапка)
    'Dashboard': 'Главная',
    'Pull requests': 'Пул-реквесты',
    'Pull Requests': 'Пул-реквесты',
    'Issues': 'Задачи',
    'Codespaces': 'Codespaces', // бренд, не переводим
    'Marketplace': 'Marketplace',
    'Models': 'Модели',
    'Explore': 'Обзор',
    'Notifications': 'Уведомления',
    'Your profile': 'Ваш профиль',
    'Your repositories': 'Ваши репозитории',
    'Your projects': 'Ваши проекты',
    'Your stars': 'Избранное',
    'Your gists': 'Ваши gist-ы',
    'Your organizations': 'Ваши организации',
    'Your sponsors': 'Ваши спонсоры',
    'Your enterprises': 'Ваши корпоративные аккаунты',
    'Upgrade': 'Перейти на новый план',
    'Feature preview': 'Предпросмотр функций',
    'Help': 'Справка',
    'Sign out': 'Выйти',
    'Sign in': 'Войти',
    'Sign up': 'Зарегистрироваться',
    'Sign in to GitHub': 'Вход в GitHub',
    'Sign up for GitHub': 'Регистрация в GitHub',
    'Switch account': 'Сменить аккаунт',
    'Set status': 'Задать статус',
    'Edit status': 'Изменить статус',
    'Clear status': 'Снять статус',
    'Busy': 'Занят',

    // Поиск
    'Search or jump to…': 'Поиск или переход…',
    'Search or jump to...': 'Поиск или переход…',
    'Type / to search': 'Нажмите / для поиска',
    'Jump to': 'Перейти к',
    'Commands': 'Команды',
    'Top result': 'Лучший результат',
    'No suggested jump to results': 'Нет подсказок для перехода',
    'Search syntax tips': 'Подсказки по синтаксису поиска',

    // Dashboard / Home
    'All activity': 'Вся активность',
    'Following': 'Подписки',
    'For you': 'Для вас',
    'Recent activity': 'Недавняя активность',
    'Latest changes': 'Последние изменения',
    'Explore repositories': 'Обзор репозиториев',
    'Top repositories': 'Популярные репозитории',
    'Find a repository…': 'Найти репозиторий…',
    'Find a repository...': 'Найти репозиторий…',
    'Filter by repository…': 'Фильтр по репозиторию…',
    'Show more activity': 'Показать больше активности',

    // Создание через «+»
    'New repository': 'Новый репозиторий',
    'Import repository': 'Импортировать репозиторий',
    'New codespace': 'Новый codespace',
    'New gist': 'Новый gist',
    'New organization': 'Новая организация',
    'New project': 'Новый проект',

    // Футер
    'Terms': 'Условия использования',
    'Privacy': 'Конфиденциальность',
    'Security': 'Безопасность',
    'Status': 'Статус',
    'Docs': 'Документация',
    'Contact': 'Контакты',
    'Contact GitHub': 'Связаться с GitHub',
    'Pricing': 'Цены',
    'API': 'API',
    'Training': 'Обучение',
    'Blog': 'Блог',
    'About': 'О компании',
    'Manage cookies': 'Управление cookies',
    'Do not share my personal information': 'Не передавать мои персональные данные',
  };

  const attributes = {
    'aria-label': {
      'Homepage': 'На главную',
      'Toggle navigation': 'Переключить меню',
      'Open global navigation menu': 'Открыть главное меню',
      'Open user navigation menu': 'Открыть меню пользователя',
      'View profile and more': 'Профиль и другие разделы',
    },
  };

  root.GitHubRu.dict = root.GitHubRu.dict || {};
  root.GitHubRu.dict.nav = { strings, attributes };
})(typeof window !== 'undefined' ? window : globalThis);
