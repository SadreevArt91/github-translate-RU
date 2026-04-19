// dictionary/pr.js — Pull Requests: список, просмотр, ревью, diff-обвязка
(function (root) {
  const strings = {
    'New pull request': 'Новый пул-реквест',
    'Create pull request': 'Создать пул-реквест',
    'Compare & pull request': 'Сравнить и создать пул-реквест',

    // Статусы
    'Ready for review': 'Готов к ревью',
    'Mark as draft': 'Сделать черновиком',
    'Convert to draft': 'Перевести в черновик',
    'Reopen pull request': 'Переоткрыть пул-реквест',
    'Close pull request': 'Закрыть пул-реквест',
    'Merge pull request': 'Слить пул-реквест',
    'Squash and merge': 'Squash и слить',
    'Rebase and merge': 'Rebase и слить',
    'Create a merge commit': 'Создать merge-коммит',
    'Confirm merge': 'Подтвердить слияние',
    'Confirm squash and merge': 'Подтвердить squash и слияние',
    'Confirm rebase and merge': 'Подтвердить rebase и слияние',
    'You can also open this in GitHub Desktop or view command line instructions.':
      'Можно открыть в GitHub Desktop или посмотреть инструкции для командной строки.',

    // Вкладки
    'Conversation': 'Обсуждение',
    'Commits': 'Коммиты',
    'Checks': 'Проверки',
    'Files changed': 'Изменённые файлы',

    // Сайдбар
    'Reviewers': 'Рецензенты',
    'No reviews': 'Нет ревью',
    'Assignees': 'Исполнители',
    'No one assigned': 'Никто не назначен',
    'Assign yourself': 'Назначить себя',
    'Labels': 'Метки',
    'None yet': 'Пока нет',
    'Projects': 'Проекты',
    'Milestone': 'Веха',
    'No milestone': 'Без вехи',
    'Development': 'Разработка',
    'Successfully merging this pull request may close these issues.':
      'Успешное слияние этого пул-реквеста может закрыть указанные задачи.',
    'Notifications': 'Уведомления',
    'Subscribe': 'Подписаться',
    'Unsubscribe': 'Отписаться',
    'You’re receiving notifications because you’re watching this repository.':
      'Вы получаете уведомления, потому что отслеживаете этот репозиторий.',
    'Participants': 'Участники',
    'Lock conversation': 'Заблокировать обсуждение',
    'Unlock conversation': 'Разблокировать обсуждение',

    // Тело PR / комментарии (UI вокруг, не сам контент)
    'Leave a comment': 'Оставить комментарий',
    'Write': 'Написать',
    'Preview': 'Предпросмотр',
    'Add your comment here…': 'Напишите комментарий…',
    'Comment': 'Прокомментировать',
    'Comment on this pull request': 'Прокомментировать пул-реквест',
    'Submit review': 'Отправить ревью',
    'Start a review': 'Начать ревью',
    'Add a comment': 'Добавить комментарий',
    'Add single comment': 'Оставить отдельный комментарий',
    'Approve': 'Одобрить',
    'Request changes': 'Запросить изменения',
    'Comment review': 'Комментарий-ревью',
    'Approved': 'Одобрено',
    'Changes requested': 'Требуются изменения',
    'Pending review': 'Ревью в ожидании',
    'Re-request review': 'Повторно запросить ревью',
    'Resolve conversation': 'Закрыть обсуждение',
    'Unresolve conversation': 'Открыть обсуждение',
    'Show resolved': 'Показать решённые',
    'Hide resolved': 'Скрыть решённые',

    // Заголовок
    'wants to merge': 'хочет слить',
    'commits into': 'коммит(ов) в',
    'from': 'из',

    // Чек-листы / CI
    'All checks have passed': 'Все проверки пройдены',
    'Some checks haven’t completed yet': 'Часть проверок ещё не завершилась',
    'Some checks were not successful': 'Часть проверок завершилась с ошибкой',
    'Required': 'Обязательно',
    'Skipped': 'Пропущено',
    'Pending': 'В ожидании',
    'Queued': 'В очереди',
    'In progress': 'Выполняется',
    'Successful': 'Успешно',
    'Failing': 'Ошибка',
    'Cancelled': 'Отменено',
    'Show all checks': 'Показать все проверки',
    'Hide all checks': 'Скрыть проверки',
    'Re-run jobs': 'Перезапустить задания',
    'Re-run all jobs': 'Перезапустить все задания',
    'Re-run failed jobs': 'Перезапустить неуспешные задания',

    // Конфликты / merge
    'This branch has no conflicts with the base branch':
      'В ветке нет конфликтов с базовой',
    'This branch has conflicts that must be resolved':
      'В ветке есть конфликты, которые нужно разрешить',
    'Resolve conflicts': 'Разрешить конфликты',
    'Use the web editor': 'Открыть в веб-редакторе',
    'Update branch': 'Обновить ветку',
    'Update with merge commit': 'Обновить через merge-коммит',
    'Update with rebase': 'Обновить через rebase',
    'This branch is out-of-date with the base branch':
      'Ветка отстаёт от базовой',

    // Кнопки внизу
    'Delete branch': 'Удалить ветку',
    'Restore branch': 'Восстановить ветку',

    // Пустая страница списка PR
    'Welcome to pull requests!': 'Добро пожаловать в пул-реквесты!',
    'Pull requests help you collaborate on code with other people. As pull requests are created, they\'ll appear here in a searchable and filterable list. To get started, you should':
      'Пул-реквесты помогают совместно работать над кодом. Когда они будут созданы, они появятся здесь в виде списка с поиском и фильтрами. Чтобы начать, вам нужно',
    'Pull requests help you collaborate on code with other people. As pull requests are created, they\u2019ll appear here in a searchable and filterable list. To get started, you should':
      'Пул-реквесты помогают совместно работать над кодом. Когда они будут созданы, они появятся здесь в виде списка с поиском и фильтрами. Чтобы начать, вам нужно',
    'create a pull request': 'создать пул-реквест',

    // Баннер «Label issues and pull requests for new contributors»
    'Label issues and pull requests for new contributors':
      'Отмечайте задачи и пул-реквесты для новых контрибьюторов',
    'Now, GitHub will help potential first-time contributors':
      'Теперь GitHub будет помогать потенциальным новым контрибьюторам',
    'discover issues': 'находить задачи',
    'labeled with': 'помеченные меткой',
    'Dismiss': 'Скрыть',

    // ProTip
    'ProTip!': 'Совет!',
    'Exclude everything labeled': 'Исключить всё помеченное меткой',
  };

  const attributes = {
    'aria-label': {
      'Pull request author': 'Автор пул-реквеста',
      'Show options': 'Показать действия',
    },
    'placeholder': {
      'Leave a comment': 'Оставить комментарий',
      'Add your comment here…': 'Напишите комментарий…',
      'Title': 'Заголовок',
      'Add an optional extended description…': 'Добавьте подробное описание (необязательно)…',
    },
  };


  // Контекстные правила: статусы PR/Issue внутри label .State побеждают
  // общий словарь (где "Open"="Открыть", "Closed"="Закрыт" и т.п.)
  const contextual = [
    {
      selector: '.State, [data-testid="issue-state"], [data-testid="pull-request-state"], [data-testid="state-indicator"], .IssueLabel',
      strings: {
        'Open': 'Открыт',
        'Closed': 'Закрыт',
        'Merged': 'Слит',
        'Draft': 'Черновик',
      },
    },
  ];

  root.GitHubRu.dict = root.GitHubRu.dict || {};
  root.GitHubRu.dict.pr = { strings, attributes, contextual };
})(typeof window !== 'undefined' ? window : globalThis);
