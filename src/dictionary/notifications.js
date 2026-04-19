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
  ];

  root.GitHubRu.dict = root.GitHubRu.dict || {};
  root.GitHubRu.dict.notifications = { strings, attributes, contextual };
})(typeof window !== 'undefined' ? window : globalThis);
