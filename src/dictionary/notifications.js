// dictionary/notifications.js — страница /notifications
(function (root) {
  const strings = {
    'Inbox': 'Входящие',
    'Saved': 'Сохранённые',
    'Mark as read': 'Отметить прочитанным',
    'Mark as unread': 'Отметить непрочитанным',
    'Mark as done': 'Отметить выполненным',
    'Mark all as read': 'Отметить все прочитанными',
    'Mark all as done': 'Отметить все выполненными',
    'Unsubscribe': 'Отписаться',
    'Subscribe': 'Подписаться',
    'Save for later': 'Сохранить на потом',
    'Unsave': 'Убрать из сохранённых',
    'Mute': 'Заглушить',
    'Unmute': 'Убрать заглушение',

<<<<<<< HEAD
    // Шапка /notifications
    'Notifications': 'Уведомления',
    'Manage notifications': 'Управлять уведомлениями',
    'Watched repositories': 'Отслеживаемые репозитории',
    'Subscriptions': 'Подписки',

    // Левый сайдбар
    'Folders': 'Папки',
    'Switch inbox': 'Переключить инбокс',
    'Add new filter': 'Добавить фильтр',
    'Participating': 'Участвую',

    // Табы и панель поиска
    'Unread': 'Непрочитанные',
    'Search notifications': 'Поиск по уведомлениям',
    'Sort by:': 'Сортировка:',
    'Newest to oldest': 'Сначала новые',
    'Oldest to newest': 'Сначала старые',
    'Group by:': 'Группировать по:',
    'Date': 'Дата',

    // Баннер про web notifications
    'Web notifications are currently disabled. You can enable them now in your':
      'Уведомления в браузере сейчас отключены. Вы можете включить их в',
    'notifications settings.': 'настройках уведомлений.',

    // Onboarding-карточка «Clear out the clutter»
    'Clear out the clutter.': 'Разгребите завалы.',
    'Get the most out of your new inbox by quickly and easily marking all of your previously read notifications as done.':
      'Используйте новый инбокс на полную: быстро отметьте все ранее прочитанные уведомления как выполненные.',
    'Get started': 'Начать',
    'Clean up your inbox': 'Очистите ваш инбокс',
    'Marking your notifications as "done" helps to create a more focused inbox. Don\'t worry - if there is new activity, you\'ll still be notified.':
      'Отметка уведомлений как «выполнено» помогает сфокусироваться на важном. Не переживайте — при новой активности уведомление всё равно придёт.',
    'Marking your notifications as "done" helps to create a more focused inbox. Don’t worry - if there is new activity, you’ll still be notified.':
      'Отметка уведомлений как «выполнено» помогает сфокусироваться на важном. Не переживайте — при новой активности уведомление всё равно придёт.',
    'Mark all read notifications as done': 'Отметить все прочитанные как выполненные',
    'This process could take a few moments depending on the quantity.':
      'Это может занять некоторое время в зависимости от количества.',

    // Группировка и пустое состояние
    'Notifications by date': 'Уведомления по дате',
    'Notifications by repository': 'Уведомления по репозиторию',
    'Take a break, write some code, do what you do best.':
      'Отдохните, напишите немного кода, займитесь тем, что у вас получается лучше всего.',

=======
>>>>>>> b233700ae40a269a5e416996bfe03aa9284bb265
    // Фильтры
    'Reason': 'Причина',
    'Repository': 'Репозиторий',
    'Review requested': 'Запрошено ревью',
    'Mentioned': 'Упомянули',
    'Assigned': 'Назначили',
    'Team mentioned': 'Упомянули команду',
    'Author': 'Автор',
    'Manual': 'Вручную',
    'CI activity': 'Активность CI',
    'Subscribed': 'Подписка',

    // Пустое состояние
    'All caught up!': 'Всё прочитано!',
    'You’re all caught up': 'Всё прочитано',
    'Take some time to review your notifications or celebrate the moment.':
      'Отдохните или отметьте момент.',

    // Настройки
    'Notification settings': 'Настройки уведомлений',
    'Email preferences': 'Настройки email',
    'Custom routing': 'Пользовательская маршрутизация',
    'Organization email': 'Email организации',
  };

  const attributes = {};


  // "Done" в списке уведомлений/фильтрах = "Выполнено" (а не "Готово")
  const contextual = [
    {
      selector: '.js-notifications-list, .notifications-list, [data-testid="notifications-list"], a[href*="query=is%3Adone"], a[href*="query=is:done"]',
      strings: {
        'Done': 'Выполнено',
      },
    },
<<<<<<< HEAD
    // Таб «All/Unread» над списком уведомлений
    {
      selector: '.notifications-v2, .notifications-page, [data-testid="notifications-tabs"], nav[aria-label="Notifications"], a[href="/notifications"]',
      strings: {
        'All': 'Все',
      },
    },
=======
>>>>>>> b233700ae40a269a5e416996bfe03aa9284bb265
  ];

  root.GitHubRu.dict = root.GitHubRu.dict || {};
  root.GitHubRu.dict.notifications = { strings, attributes, contextual };
})(typeof window !== 'undefined' ? window : globalThis);
