// dictionary/explore.js — страницы /explore, /trending, /collections, /events.
// Topics, Trending, Collections, Events — табы Explore-секции.
// Marketplace — отдельная страница, базовый UI (Featured/Apps), бренды не трогаем.
(function (root) {
  const strings = {
    // Шапка/секции Explore
    'Explore': 'Обзор',
    'Trending': 'В тренде',
    'Collections': 'Коллекции',
    'Events': 'События',

    // Главная Explore
    'Here\u2019s what we found based on your interests\u2026':
      'Вот что мы нашли, исходя из ваших интересов…',
    'Here\'s what we found based on your interests...':
      'Вот что мы нашли, исходя из ваших интересов…',
    'starred topics': 'избранных тем',
    'starred topic': 'избранная тема',
    'starred repositories': 'избранных репозиториев',
    'starred repository': 'избранный репозиторий',
    'Trending repositories': 'Репозитории в тренде',
    'Trending repository': 'Репозиторий в тренде',
    'Trending developers': 'Разработчики в тренде',

    // Trending
    'See what the GitHub community is most excited about today.':
      'Посмотрите, что больше всего обсуждает сообщество GitHub сегодня.',
    'Repositories': 'Репозитории',
    'Developers': 'Разработчики',
    'Spoken Language:': 'Язык общения:',
    'Language:': 'Язык:',
    'Date range:': 'Период:',
    'Today': 'Сегодня',
    'Any': 'Любой',
    'Built by': 'Построен',
    'stars today': 'звёзд сегодня',
    'stars this week': 'звёзд за неделю',
    'stars this month': 'звёзд за месяц',
    'star today': 'звезда сегодня',
    'star this week': 'звезда за неделю',
    'star this month': 'звезда за месяц',

    // Pop-over «Filter by spoken language»
    'Filter by spoken language': 'Фильтр по языку общения',
    'Select your preferred spoken language in order to see matching trending results.':
      'Выберите предпочитаемый язык общения, чтобы видеть подходящие результаты.',
    'Got it!': 'Понятно!',

    // Topics-страница
    'Browse popular topics on GitHub': 'Популярные темы на GitHub',
    'Topics are labels that create subject-based connections between GitHub repositories.':
      'Темы — это метки, которые объединяют репозитории GitHub по предметным областям.',
    'Featured topics': 'Избранные темы',
    'See all topics': 'Все темы',

    // Collections
    'Curated lists and insight into burgeoning industries, topics, and communities.':
      'Подборки и наблюдения по растущим отраслям, темам и сообществам.',

    // Events
    'Events for the GitHub community.': 'События сообщества GitHub.',

    // === /marketplace ===
    'Enhance your workflow with extensions': 'Улучшайте рабочий процесс с помощью расширений',
    'Tools from the community and partners to simplify tasks and automate processes':
      'Инструменты от сообщества и партнёров для упрощения задач и автоматизации процессов',
    'Search for apps, actions, and models': 'Поиск приложений, actions и моделей',
    'Featured': 'Избранное',
    'Apps': 'Приложения',
    'AI': 'ИИ',
    'Popular': 'Популярные',
    // Заголовки разделов
    'Models for your every use case': 'Модели на любой случай',
    'Try, test, and deploy from a wide range of model types, sizes, and specializations.':
      'Пробуйте, тестируйте и развёртывайте модели разных типов, размеров и специализаций.',
    'Apps for your workflow': 'Приложения для вашего рабочего процесса',
    'Actions for your workflow': 'Actions для вашего рабочего процесса',
    'Browse all apps': 'Все приложения',
    'Browse all actions': 'Все actions',
    'Browse all models': 'Все модели',
    'See more': 'Ещё',
    // Карточки и детали
    'Free plan': 'Бесплатный план',
    'Paid': 'Платно',
    'Verified by GitHub': 'Проверено GitHub',
    'By': 'От',
    'Installed': 'Установлено',
    'Learn more about': 'Подробнее о',
    'Set up a plan': 'Выбрать план',
    'Set up a free plan': 'Оформить бесплатный план',
    'Try it free': 'Попробовать бесплатно',
    'Pricing Plans': 'Тарифы',
    'Types': 'Типы',

    // === /marketplace/new — страница подачи инструмента ===
    'List your tool': 'Выставить ваш инструмент',
    'List your tool on GitHub Marketplace': 'Выставьте ваш инструмент в GitHub Marketplace',
    'You have no tools to list on GitHub Marketplace': 'У вас нет инструментов, которые можно выставить в GitHub Marketplace',
    'Learn more about the requirements to list a tool on GitHub Marketplace.':
      'Подробнее о требованиях к размещению инструмента в GitHub Marketplace.',
    'More about tools and GitHub Marketplace': 'Подробнее об инструментах и GitHub Marketplace',
    'About GitHub Marketplace': 'О GitHub Marketplace',
    'How to create and list tools on the GitHub Marketplace, including guidelines for listing content, artwork, and screenshots.':
      'Как создавать и размещать инструменты в GitHub Marketplace, включая правила для текстов, оформления и скриншотов.',
    'Adding webhooks for a GitHub Marketplace listing': 'Добавление вебхуков к размещению в GitHub Marketplace',
    'Add webhooks for your app to notify you when specified events are triggered.':
      'Добавьте вебхуки для вашего приложения, чтобы получать уведомления о нужных событиях.',
  };

  const attributes = {
    'placeholder': {
      'Search for apps, actions, and models': 'Поиск приложений, actions и моделей',
    },
  };

  // Marketplace: Pricing -> 'Тарифы' (в nav.js это 'Цены' для /pricing).
  const contextual = [
    {
      selector: 'main[data-pjax-container] [data-hpc], body[class*="marketplace"] main, a[href*="/marketplace"]',
      strings: { 'Pricing': 'Тарифы' },
    },
    // /trending: This week / This month здесь — лейблы выбранного периода, короткие формы.
    {
      selector: '[data-target="trending"], a[href*="/trending"], nav[aria-label*="rending" i], .js-trending-date-filter, details[role="none"][id*="date"]',
      strings: {
        'This week': 'Эта неделя',
        'This month': 'Этот месяц',
      },
    },
  ];

  root.GitHubRu.dict = root.GitHubRu.dict || {};
  root.GitHubRu.dict.explore = { strings, attributes, contextual };
})(typeof window !== 'undefined' ? window : globalThis);
