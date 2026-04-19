// dictionary/common.js — базовые кнопки, общий UI, формы
(function (root) {
  const strings = {
    // Кнопки действий
    'Save': 'Сохранить',
    'Save changes': 'Сохранить изменения',
    'Save draft': 'Сохранить черновик',
    'Cancel': 'Отмена',
    'Create': 'Создать',
    'Delete': 'Удалить',
    'Remove': 'Удалить',
    'Edit': 'Изменить',
    'Update': 'Обновить',
    'Submit': 'Отправить',
    'Confirm': 'Подтвердить',
    'Close': 'Закрыть',
    'Open': 'Открыть',
    'Back': 'Назад',
    'Next': 'Далее',
    'Previous': 'Назад',
    'Done': 'Готово',
    'Apply': 'Применить',
    'Reset': 'Сбросить',
    'Clear': 'Очистить',
    'Add': 'Добавить',
    'Copy': 'Копировать',
    'Copied!': 'Скопировано!',
    'Copy link': 'Копировать ссылку',
    'Copy to clipboard': 'Копировать в буфер обмена',
    'Reply': 'Ответить',
    'Quote reply': 'Ответить с цитатой',
    'Continue': 'Продолжить',
    'Finish': 'Завершить',
    'Enable': 'Включить',
    'Disable': 'Отключить',
    'Learn more': 'Подробнее',
    'Show more': 'Показать больше',
    'Show less': 'Скрыть',
    'Show all': 'Показать все',
    'Show details': 'Показать подробности',
    'Hide details': 'Скрыть подробности',
    'More': 'Ещё',
    'Options': 'Параметры',
    'Settings': 'Настройки',
    'Preferences': 'Настройки',
    'Details': 'Подробности',

    // Формы
    'Name': 'Имя',
    'Description': 'Описание',
    'Title': 'Заголовок',
    'Email': 'Электронная почта',
    'Password': 'Пароль',
    'Username': 'Имя пользователя',
    'Search': 'Поиск',
    'Filter': 'Фильтр',
    'Filters': 'Фильтры',
    'Sort': 'Сортировка',
    'Sort by': 'Сортировать по',
    'Newest': 'Сначала новые',
    'Oldest': 'Сначала старые',
    'Most': 'Больше всего',
    'Least': 'Меньше всего',
    'Recently updated': 'Недавно обновлённые',
    'Least recently updated': 'Давно не обновлявшиеся',
    'Ascending': 'По возрастанию',
    'Descending': 'По убыванию',

    // Статусы
    'Loading\u2026': 'Загрузка\u2026',
    'Loading...': 'Загрузка\u2026',
    'Saving\u2026': 'Сохранение\u2026',
    'Updating\u2026': 'Обновление\u2026',
    'Success': 'Готово',
    'Error': 'Ошибка',
    'Warning': 'Предупреждение',
    'Info': 'Информация',
    'Required': 'Обязательно',
    'Optional': 'Необязательно',
    'Yes': 'Да',
    'No': 'Нет',
    // 'On'/'Off' перенесены в contextual (только для тогглов), чтобы «On main,» не превращалось в «Вкл main,».

    // Пагинация
    'Older': 'Старее',
    'Newer': 'Новее',
    'Page': 'Страница',
    'First': 'Первая',
    'Last': 'Последняя',

    // Заголовки модалок / общие
    'Are you sure?': 'Вы уверены?',
    'This action cannot be undone.': 'Это действие необратимо.',
    'Something went wrong': 'Что-то пошло не так',
    'No results': 'Нет результатов',
    'No results matched your search.': 'По вашему запросу ничего не найдено.',
    'Nothing to show': 'Пока ничего нет',

    // Видимость
    'Public': 'Публичный',
    'Private': 'Приватный',
    'Internal': 'Внутренний',

    // Дата / время общие
    'just now': 'только что',
    'now': 'сейчас',
    'Today': 'Сегодня',
    'Yesterday': 'Вчера',
    'Tomorrow': 'Завтра',
    'Last week': 'На прошлой неделе',
    'This week': 'На этой неделе',
    'This month': 'В этом месяце',
    'Last month': 'В прошлом месяце',
    'This year': 'В этом году',
    'Last year': 'В прошлом году',

    // Часто встречающиеся глаголы / ссылки
    'Choose': 'Выбрать',
    'Choose a file': 'Выбрать файл',
    'Browse': 'Обзор',
    'Upload': 'Загрузить',
    'Download': 'Скачать',
    'Install': 'Установить',
    'Uninstall': 'Удалить',
    'Verify': 'Подтвердить',
    'Send': 'Отправить',
    'Invite': 'Пригласить',
    'Accept': 'Принять',
    'Decline': 'Отклонить',
    'Revoke': 'Отозвать',
    'Revoke access': 'Отозвать доступ',
    'Resend': 'Отправить повторно',
    'Rotate': 'Перегенерировать',
    'Regenerate': 'Перегенерировать',
    'Generate': 'Создать',
    'Generate new token': 'Создать новый токен',
    'Leave': 'Покинуть',
    'Leave organization': 'Покинуть организацию',
    'Block': 'Заблокировать',
    'Unblock': 'Разблокировать',
    'Report': 'Пожаловаться',
    'Follow': 'Подписаться',
    'Unfollow': 'Отписаться',
    'Share': 'Поделиться',
    'Expand': 'Развернуть',
    'Collapse': 'Свернуть',
    'View': 'Посмотреть',
    'View all': 'Показать все',
    'Manage': 'Управлять',
    'Configure': 'Настроить',
    'Customize': 'Настроить',
    'Restart': 'Перезапустить',
    'Stop': 'Остановить',
    'Retry': 'Повторить',
    'Sync': 'Синхронизировать',
    'Refresh': 'Обновить',
    'Import': 'Импортировать',
    'Export': 'Экспортировать',
    'Print': 'Печать',

    // Заголовки-ярлыки
    'Visibility': 'Видимость',
    'Access (header)': 'Доступ',
    'Permissions': 'Права',
    'Role': 'Роль',
    'Roles': 'Роли',
    'Owner': 'Владелец',
    'Admin': 'Администратор',
    'Maintainer': 'Мейнтейнер',
    'Writer': 'Редактор',
    'Reader': 'Читатель',
    'Member': 'Участник',

    // Диалог подтверждения
    'Please type the following to confirm:': 'Введите следующее для подтверждения:',
    'I understand the consequences, delete this repository':
      'Я понимаю последствия, удалить этот репозиторий',
    'I have read and understand these effects.':
      'Я прочитал(-а) и осознаю последствия.',

    // Пустое / заглушки
    'No results found': 'Ничего не найдено',
    'Nothing here yet': 'Пока здесь пусто',
    'There is nothing to show.': 'Нечего показать.',
    'Try a different search': 'Попробуйте другой запрос',
    // Сессия / сеть / общие ошибки
    'You signed in with another tab or window.': 'Вы вошли в аккаунт в другой вкладке или окне.',
    'You signed out in another tab or window.': 'Вы вышли из аккаунта в другой вкладке или окне.',
    'You switched accounts on another tab or window.':
      'Вы переключили аккаунт в другой вкладке или окне.',
    'Reload': 'Перезагрузить',
    'Reload to refresh your session.': 'Перезагрузите, чтобы обновить сессию.',
    'to refresh your session.': 'чтобы обновить сессию.',
    'You can\u2019t perform that action at this time.':
      'Сейчас это действие недоступно.',
    'You can\'t perform that action at this time.':
      'Сейчас это действие недоступно.',
    'There was an error while loading.': 'При загрузке произошла ошибка.',
    'Please reload this page': 'Перезагрузите страницу',
    'Uh oh!': 'Ой!',

    // Feedback / saved searches
    'We read every piece of feedback, and take your input very seriously.':
      'Мы читаем каждый отзыв и очень серьёзно относимся к вашему мнению.',
    'Provide feedback': 'Оставить отзыв',
    'Submit feedback': 'Отправить отзыв',
    'Give feedback': 'Оставить отзыв',
    'Saved searches': 'Сохранённые поиски',
    'Create saved search': 'Создать сохранённый поиск',
    'Use saved searches to filter your results more quickly':
      'Используйте сохранённые поиски, чтобы быстрее фильтровать результаты',
    'Search code, repositories, users, issues, pull requests...':
      'Поиск по коду, репозиториям, пользователям, задачам и пул-реквестам...',
    'To see all available qualifiers, see our': 'Все доступные квалификаторы — в нашей',
    'documentation': 'документации',

    // Верх страницы / навигация
    'Skip to content': 'Пропустить к содержимому',
    'Create new...': 'Создать…',
    'Create new': 'Создать',
    'Open menu': 'Открыть меню',
    'Dismiss alert': 'Скрыть уведомление',
    'Dismiss': 'Скрыть',
    'Repository navigation': 'Навигация по репозиторию',
    'Footer navigation': 'Навигация в подвале',
    'Code scanning': 'Сканирование кода',
    'Cloud agent': 'Облачный агент',


    // Клавиатурные подсказки
    'to search': 'для поиска',
    'Up to': 'До',
    '(forward slash)': '(слэш)',
    '(g then d)': '(g, затем d)',


  };

  const attributes = {};

  root.GitHubRu = root.GitHubRu || {};
    // Контекстные правила common:
  // «On»/«Off» — только для тогглов/свитчей/checkbox, иначе портит Pulse-фразы вида «On main,».
  const contextual = [
    {
      selector: 'input[type="checkbox"] ~ *, .form-toggle, .js-toggle, [role="switch"], .ToggleSwitch, [data-toggle], [aria-pressed], [aria-checked]',
      strings: {
        'On': 'Вкл',
        'Off': 'Выкл',
      },
    },
  ];

root.GitHubRu.dict = root.GitHubRu.dict || {};
  root.GitHubRu.dict.common = { strings, attributes, contextual };
})(typeof window !== 'undefined' ? window : globalThis);
