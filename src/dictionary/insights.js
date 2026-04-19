// dictionary/insights.js — вкладка Insights репозитория.
// Pulse, Contributors, Community (+ Community standards), Traffic,
// Commits, Code frequency, Dependency graph, Network, Forks,
// Actions usage metrics, Actions performance metrics.
(function (root) {
  const strings = {
    // Боковая навигация Insights (дублируем часть repo.js явно, чтобы
    // точно применилось на /graphs/* и /pulse без зависимости от контекста).
    'Pulse': 'Pulse',
    'Contributors': 'Контрибьюторы',
    'Community': 'Сообщество',
    'Community standards': 'Стандарты сообщества',
    'Community Standards': 'Стандарты сообщества',
    'Traffic': 'Трафик',
    'Commits': 'Коммиты',
    'Code frequency': 'Частота коммитов',
    'Dependency graph': 'Граф зависимостей',
    'Network': 'Сеть',
    'Forks': 'Форки',
    'Actions usage metrics': 'Метрики использования Actions',
    'Actions performance metrics': 'Метрики производительности Actions',
    'Actions Usage Metrics': 'Метрики использования Actions',
    'Actions Performance Metrics': 'Метрики производительности Actions',

    // Pulse
    'Summary': 'Сводка',
    'Period:': 'Период:',
    'Period': 'Период',
    '1 week': '1 неделя',
    '1 month': '1 месяц',
    '3 months': '3 месяца',
    'Active pull requests': 'Активные пул-реквесты',
    'Active issues': 'Активные задачи',
    'Merged pull requests': 'Объединённые пул-реквесты',
    'Open pull requests': 'Открытые пул-реквесты',
    'Closed issues': 'Закрытые задачи',
    'New issues': 'Новые задачи',
    'Top Committers': 'Топ коммитеров',
    'Excluding merges,': 'Без учёта merge-коммитов,',

    // Contributors
    'Contributions': 'Вклад',
    'Contributions:': 'Вклад:',
    'Contributions per week to': 'Вклад за неделю в',
    'Weekly from': 'По неделям с',
    'over time': 'по времени',
    ', excluding merge commits': ', без учёта merge-коммитов',

    // Community / Community standards
    'Checklist': 'Чеклист',
    'Here\u2019s how this project compares to': 'Вот как этот проект соответствует',
    'Here\'s how this project compares to': 'Вот как этот проект соответствует',
    'recommended community standards': 'рекомендуемым стандартам сообщества',
    'the community profile': 'профилю сообщества',
    'What is': 'Что такое',
    'Add a description to your repository so people understand the goals of your project.':
      'Добавьте описание репозитория, чтобы другие понимали цели проекта.',
    'Issue templates': 'Шаблоны задач',
    'Pull request template': 'Шаблон пул-реквеста',
    'Contributing': 'Руководство для контрибьюторов',
    'Code of conduct': 'Кодекс поведения',

    // Community: пустое состояние Discussions + Community Insights
    'Enable Discussions to unlock Community Insights\!':
      'Включите Discussions, чтобы открыть Community Insights\!',
    'Discussions is the central space for your community to share announcements, ask questions, and host conversations.':
      'Discussions — центральное пространство, где сообщество может делать объявления, задавать вопросы и вести беседы.',
    'Set up discussions': 'Настроить Discussions',
    'Community Insights': 'Community Insights',

    // Traffic
    'Git clones': 'Git-клоны',
    'Clones': 'Клоны',
    'Cloners': 'Клонировали',
    'Visitors': 'Посетители',
    'Unique visitors': 'Уникальные посетители',
    'Unique cloners': 'Уникальные клонировавшие',
    'Total views': 'Всего просмотров',
    'Clones in last 14 days': 'Клонов за последние 14 дней',
    'Total views in last 14 days': 'Всего просмотров за последние 14 дней',
    'Unique visitors in last 14 days': 'Уникальных посетителей за последние 14 дней',
    'Unique cloners in last 14 days': 'Уникальных клонировавших за последние 14 дней',
    'Referring sites': 'Сайты-рефереры',
    'Popular content': 'Популярный контент',
    'No popular content data available for this period':
      'За этот период данных о популярном контенте нет',
    'No referring sites data available for this period':
      'За этот период данных о сайтах-реферерах нет',
    'Data in this table may take several days to appear.':
      'Данные в таблице могут появляться с задержкой в несколько дней.',

    // Commits (commit-activity)
    'Commits over the last year of': 'Коммиты за последний год —',
    'Number of commits per week': 'Число коммитов за неделю',

    // Code frequency
    'Additions': 'Добавления',
    'Deletions': 'Удаления',
    'Additions and deletions per week': 'Добавления и удаления за неделю',
    'Code frequency over the history of': 'Частота правок за всю историю —',
    'Frequency': 'Частота',

    // Dependency graph
    'Dependents': 'Зависящие',
    'Dependency graph is disabled': 'Граф зависимостей отключён',
    'Enable the dependency graph': 'Включить граф зависимостей',
    'Learn more about how we use your data.': 'Подробнее о том, как мы используем ваши данные.',

    // Network graph
    'Network graph': 'Граф сети',
    'Loading': 'Загрузка',
    'Please upgrade to the latest': 'Обновитесь до последней версии',

    // Forks (network/members)
    'No one has forked this repository yet.': 'Репозиторий ещё никто не форкнул.',
    'Forks are a great way to contribute to a repository. After':
      'Форки — отличный способ поучаствовать в репозитории. После того как вы',
    ', you can send the original author a': ', можно отправить автору',
    'forking a repository': 'форкнете репозиторий',
    'pull request': 'пул-реквест',
    'switch to list view': 'переключиться на список',

    // Dependency graph — описание и вкладки
    'Dependencies': 'Зависимости',
    'Track this repository\u2019s dependencies and sub-dependencies.':
      'Отслеживание зависимостей и подзависимостей репозитория.',
    'Track this repository\'s dependencies and sub-dependencies.':
      'Отслеживание зависимостей и подзависимостей репозитория.',
    'Track this repository\u2019s': 'Отслеживание зависимостей репозитория',
    'Track this repository\'s': 'Отслеживание зависимостей репозитория',
    'dependencies and sub-dependencies': 'и подзависимостей',
    'dependencies and sub-dependencies.': 'и подзависимостей.',

    // Network — тайм-лайн графа сети
    'Timeline of the most recent commits to this repository and its network ordered by most recently pushed to and updated daily.':
      'Последние коммиты в этом репозитории и его сети, отсортированные по дате push, обновляется ежедневно.',
    'Sorry, your browser doesn\u2019t support the <canvas> element.':
      'К сожалению, ваш браузер не поддерживает элемент <canvas>.',
    'Sorry, your browser doesn\'t support the <canvas> element.':
      'К сожалению, ваш браузер не поддерживает элемент <canvas>.',
    'Owners': 'Владельцы',
    'Owner': 'Владелец',

    // Короткие месяцы (Contributors/Commits/Network-timeline)
    'Jan': 'янв',
    'Feb': 'фев',
    'Mar': 'мар',
    'Apr': 'апр',
    'May': 'май',
    'Jun': 'июн',
    'Jul': 'июл',
    'Aug': 'авг',
    'Sep': 'сен',
    'Oct': 'окт',
    'Nov': 'ноя',
    'Dec': 'дек',

    // Actions metrics
    'Period: Current month': 'Период: текущий месяц',
    'Current month': 'Текущий месяц',
    'Total minutes': 'Всего минут',
    'Total job runs': 'Всего запусков заданий',
    'Total minutes across all workflows in this repository for current month':
      'Всего минут по всем workflow-файлам репозитория за текущий месяц',
    'Total job runs across all workflows in this repository for current month':
      'Всего запусков заданий по всем workflow-файлам репозитория за текущий месяц',
    'Avg job queue time': 'Среднее время ожидания задания',
    'Avg job run time': 'Среднее время выполнения задания',
    'Average queue time of jobs in this repository for current month':
      'Среднее время ожидания заданий в репозитории за текущий месяц',
    'Average run time of jobs in this repository for current month':
      'Среднее время выполнения заданий в репозитории за текущий месяц',
    'Job failure rate': 'Доля неудачных заданий',
    'Failure rate across jobs in this repository for current month':
      'Доля неудачных заданий в репозитории за текущий месяц',
    'Failed job usage': 'Потрачено на неудачные задания',
    'Total minutes used across failed jobs in this repository for current month':
      'Всего минут, потраченных на неудачные задания в репозитории за текущий месяц',
    'Runner type': 'Тип раннера',
    'Runtime OS': 'Операционная система',
    'No table data available yet.': 'Данных для таблицы пока нет.',
    'You don\'t have workflows on any of your organization repositories.':
      'В репозиториях вашей организации нет workflow-файлов.',
    'Get started with GitHub Actions': 'Начало работы с GitHub Actions',
    'Showing data from': 'Показаны данные с',

    // Highcharts a11y (статичные, безопасно)
    'Chart options': 'Параметры графика',
    'Customization settings': 'Настройки оформления',
    'End of interactive chart.': 'Конец интерактивного графика.',
    'View as data table, Chart': 'Смотреть как таблицу данных',
  };

  const attributes = {
    'aria-label': {
      'Chart options': 'Параметры графика',
      'Customization settings': 'Настройки оформления',
      'Period': 'Период',
      'switch to list view': 'Переключить на список',
    },
    'title': {
      'Period': 'Период',
    },
  };

  // Контекстные правила: фрагменты Pulse-сводки, опасные в общем словаре (and / to / has / have),
  // ограничены контейнером карточки Pulse Summary.
  const contextual = [
    {
      selector: '[class*="PulseSummary"], .pulse, .pulse-summary, [data-hpc] section:has(h2):has(.Box-body)',
      strings: {
        'author': 'автор',
        'authors': 'авторов',
        'has pushed': 'отправил(а)',
        'have pushed': 'отправили',
        'to main and': 'в main и',
        'to master and': 'в master и',
        'to all branches.': 'во все ветки.',
        'On': 'В',
        'files': 'файлов',
        'file': 'файл',
        'have changed and there have been': 'изменено, всего',
        'has changed and there has been': 'изменено, всего',
        'changed and there have been': 'изменено, всего',
        'changed and there has been': 'изменено, всего',
        'additions and': 'добавлений и',
        'addition and': 'добавление и',
        'additions': 'добавлений',
        'addition': 'добавление',
        'deletions.': 'удалений.',
        'deletion.': 'удаление.',
        'deletions': 'удалений',
        'deletion': 'удаление',
        'and': 'и',
        'to': 'в',
        'have': 'всего',
        'has': 'всего',
        'pushed': 'отправил(а)',
      },
    },
  ];

  root.GitHubRu.dict = root.GitHubRu.dict || {};
  root.GitHubRu.dict.insights = { strings, attributes, contextual };
})(typeof window !== 'undefined' ? window : globalThis);
