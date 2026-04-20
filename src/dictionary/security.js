// dictionary/security.js — Security-вкладка репозитория.
// Левая панель навигации, обзор, Dependabot, Code scanning, Secret scanning,
// Advisories и Private vulnerability reporting.
// Базовые строки "Security policy", "Security advisories" и прочие заголовки
// сайдбара "About" уже лежат в repo.js, здесь — то, что появляется ТОЛЬКО
// на /security-страницах.
(function (root) {
  const strings = {
    // Левая навигация Security-вкладки
    'Security overview': 'Обзор безопасности',
    'Reporting': 'Отчёты',
    'Findings': 'Находки',
    'Malware': 'Вредоносное ПО',
    'Vulnerabilities': 'Уязвимости',
    'Policy': 'Политика',
    'Advisories': 'Рекомендации',
    'Vulnerability alerts': 'Оповещения об уязвимостях',
    'Vulnerability reports': 'Отчёты об уязвимостях',
    'Dependabot': 'Dependabot', // бренд, но оставляем на случай перерисовок
    'Secret scanning': 'Сканирование секретов',

    // Заголовки карточек обзора (дубли repo.js — явно чтобы точно применилось на /security)
    'Security policy': 'Политика безопасности',
    'Security advisories': 'Рекомендации по безопасности',
    'Private vulnerability reporting': 'Приватные сообщения об уязвимостях',
    'Dependabot alerts': 'Оповещения Dependabot',
    'Code scanning alerts': 'Оповещения сканирования кода',
    'Secret scanning alerts': 'Оповещения сканирования секретов',

    // Кнопки и ссылки карточек обзора
    'Set up a security policy': 'Настроить политику безопасности',
    'View security advisories': 'Смотреть рекомендации',
    'Enable vulnerability reporting': 'Включить отчёты об уязвимостях',
    'Enable Dependabot alerts': 'Включить оповещения Dependabot',
    'Configure security updates': 'Настроить обновления безопасности',
    'Set up code scanning': 'Настроить сканирование кода',
    'View detected secrets': 'Смотреть найденные секреты',
    'View alerts': 'Смотреть оповещения',
    'Enable': 'Включить',
    'Disable': 'Отключить',
    'Configure': 'Настроить',

    // Описания карточек (дубли из repo.js — явно)
    'Define how users should report security vulnerabilities for this repository':
      'Определите, как пользователи должны сообщать об уязвимостях в этом репозитории',
    'View or disclose security advisories for this repository':
      'Просматривайте и публикуйте рекомендации по безопасности для этого репозитория',
    'Allow users to privately report potential security vulnerabilities':
      'Разрешить пользователям приватно сообщать о потенциальных уязвимостях',
    'Get notified when one of your dependencies has a vulnerability':
      'Получать уведомления, когда в одной из ваших зависимостей найдена уязвимость',
    'Automatically detect common vulnerability and coding errors':
      'Автоматически находить распространённые уязвимости и ошибки в коде',
    'Get notified when a secret is pushed to this repository':
      'Получать уведомления, когда в репозиторий попадает секрет',

    // Статусы карточек
    'Needs setup': 'Нужна настройка',
    'Not enabled': 'Не включено',
    'Enabled': 'Включено',
    'Disabled': 'Отключено',

    // Заголовки и кнопки верхней панели
    'New draft security advisory': 'Новый черновик рекомендации',
    'Draft security advisory': 'Черновик рекомендации',
    'Report a vulnerability': 'Сообщить об уязвимости',
    'New report': 'Новый отчёт',
    'Submit report': 'Отправить отчёт',
    'Submit a report': 'Отправить отчёт',
    'Publish advisory': 'Опубликовать рекомендацию',
    'Request CVE': 'Запросить CVE',
    'Request CVE ID': 'Запросить CVE ID',
    'Add collaborator': 'Добавить соавтора',

    // Общие состояния / статусы оповещений
    'Dismissed': 'Отклонено',
    'Resolved': 'Разрешено',
    'Reopen': 'Открыть снова',
    'Mark as resolved': 'Пометить как разрешённое',
    'Reopen alert': 'Открыть оповещение снова',
    'No alerts found.': 'Оповещения не найдены.',
    'No open alerts': 'Открытых оповещений нет',
    'No closed alerts': 'Закрытых оповещений нет',

    // Уровни важности (Severity)
    'Severity': 'Уровень важности',
    'Critical': 'Критический',
    'High': 'Высокий',
    'Medium': 'Средний',
    'Moderate': 'Умеренный',
    'Low': 'Низкий',

    // Обзор — карточки функций (в repo.js уже есть похожие, здесь — варианты формулировки с других экранов)
    'Policy for reporting': 'Политика сообщения об уязвимостях',
    'Report and disclose': 'Сообщайте и публикуйте',
    'Get alerted when a vulnerability is found in one of your dependencies':
      'Получайте оповещения, когда в одной из ваших зависимостей найдена уязвимость',
    'Automatically detect vulnerabilities and coding errors':
      'Автоматически находите уязвимости и ошибки в коде',
    'Get alerted when a secret has been committed to this repository':
      'Получайте оповещения, когда в репозиторий попал секрет',

    // Раздел Dependabot
    'Dependabot alerts will show you when any of your dependencies have vulnerabilities.':
      'Оповещения Dependabot показывают, когда у ваших зависимостей есть уязвимости.',
<<<<<<< HEAD
=======
    'Enable Dependabot alerts': 'Включить оповещения Dependabot',
>>>>>>> b233700ae40a269a5e416996bfe03aa9284bb265
    'Disable Dependabot alerts': 'Отключить оповещения Dependabot',
    'Dependabot security updates': 'Обновления безопасности Dependabot',
    'Dependabot version updates': 'Обновления версий Dependabot',
    'Dependency': 'Зависимость',
    'Dependencies': 'Зависимости',
    'Package': 'Пакет',
    'Ecosystem': 'Экосистема',
    'Ecosystems': 'Экосистемы',
    'Manifest': 'Манифест',
    'Manifest file': 'Файл манифеста',
    'Vulnerable versions': 'Уязвимые версии',
    'Affected versions': 'Затронутые версии',
    'Patched version': 'Исправленная версия',
    'Patched versions': 'Исправленные версии',
    'First detected': 'Впервые обнаружено',
    'Detected': 'Обнаружено',
    'Fix available': 'Доступно исправление',
    'No fix available': 'Исправление недоступно',
    'Recently detected': 'Недавно обнаружено',
    'Automated security updates': 'Автоматические обновления безопасности',
    'Create security update': 'Создать обновление безопасности',
    'Show only alerts with available fixes': 'Показать только оповещения с исправлениями',
    'Filter by package': 'Фильтр по пакету',
    'Filter by ecosystem': 'Фильтр по экосистеме',
    'Filter by manifest': 'Фильтр по манифесту',
    'Filter by severity': 'Фильтр по важности',

    // Раздел Code scanning
    'Code scanning finds vulnerabilities and errors in this repository\u2019s code.':
      'Сканирование кода ищет уязвимости и ошибки в коде этого репозитория.',
    'Code scanning finds vulnerabilities and errors in this repository\'s code.':
      'Сканирование кода ищет уязвимости и ошибки в коде этого репозитория.',
<<<<<<< HEAD
=======
    'Set up code scanning': 'Настроить сканирование кода',
>>>>>>> b233700ae40a269a5e416996bfe03aa9284bb265
    'Configure code scanning': 'Настроить сканирование кода',
    'Set up': 'Настроить',
    'Tool': 'Инструмент',
    'Rule': 'Правило',
    'Rule ID': 'ID правила',
    'Branch': 'Ветка',
    'Most recent result': 'Последний результат',
    'Number of instances': 'Число случаев',
    'Categorization': 'Категория',
    'Upload SARIF': 'Загрузить SARIF',
    'View this alert in the scanner': 'Открыть оповещение в сканере',
    'Ignore rule': 'Игнорировать правило',
    'False positive': 'Ложное срабатывание',
    'Used in tests': 'Используется в тестах',
    'Won\u2019t fix': 'Не будем исправлять',
    'Won\'t fix': 'Не будем исправлять',

    // Раздел Secret scanning
    'Secret scanning will look for potential secrets in this repository.':
      'Сканирование секретов ищет потенциальные секреты в этом репозитории.',
    'Enable secret scanning': 'Включить сканирование секретов',
    'Push protection': 'Защита при push',
    'Secret type': 'Тип секрета',
    'Validity': 'Валидность',
    'Exposed': 'Раскрыт',
    'Revoked': 'Отозван',
    'Unknown': 'Неизвестно',
    'Bypass push protection': 'Обойти защиту push',

    // Advisories / CVE
    'Affected products': 'Затронутые продукты',
    'CVE ID': 'Идентификатор CVE',
    'CWE ID': 'Идентификатор CWE',
    'Weaknesses': 'Типы уязвимостей',
    'Credits': 'Благодарности',
    'Add credit': 'Добавить благодарность',
    'Impact': 'Влияние',
    'Patches': 'Патчи',
    'Workarounds': 'Обходные пути',
    'References': 'Ссылки',
    'Proof of concept': 'Доказательство концепции',
    'Description (required)': 'Описание (обязательно)',


    // Экраны под-вкладок Security (Dependabot / Code scanning / Secret scanning / Policy / Advisories)
    'Dependabot alerts are disabled.': 'Оповещения Dependabot отключены.',
    'Find alerts on your dev dependencies using': 'Найти оповещения о dev-зависимостях через',
    'To receive Dependabot alerts, you must first enable Dependabot alerts in':
      'Чтобы получать оповещения Dependabot, сперва включите их в',
    'Manage Dependabot rules': 'Управлять правилами Dependabot',
    'Manage account notification settings': 'Настройки уведомлений аккаунта',
    'Manage repository vulnerability settings': 'Настройки уязвимостей репозитория',
    'Refresh Dependabot alerts': 'Обновить оповещения Dependabot',

    'Code scanning helps you find and fix vulnerabilities and coding errors.':
      'Сканирование кода помогает находить и исправлять уязвимости и ошибки в коде.',
    'Code scanning is not enabled': 'Сканирование кода не включено',
    'Enable code scanning': 'Включить сканирование кода',
    'Security and quality': 'Безопасность и качество',

    'No secrets found.': 'Секреты не найдены.',
    'Your repository doesn\u2019t have any unresolved secrets.':
      'В репозитории нет нерешённых секретов.',
    'Your repository doesn\'t have any unresolved secrets.':
      'В репозитории нет нерешённых секретов.',
    'Provider': 'Провайдер',
    'Clear filter': 'Очистить фильтр',

    'Help your community understand how to securely report security vulnerabilities for your project.':
      'Помогите пользователям понять, как безопасно сообщать об уязвимостях вашего проекта.',
    'Start setup': 'Начать настройку',

    'Privately discuss, fix, and publish information about security vulnerabilities in your repository\u2019s code.':
      'Приватно обсуждайте, исправляйте и публикуйте информацию об уязвимостях в коде репозитория.',
    'Privately discuss, fix, and publish information about security vulnerabilities in your repository\'s code.':
      'Приватно обсуждайте, исправляйте и публикуйте информацию об уязвимостях в коде репозитория.',
    'There aren\u2019t any published security advisories': 'Опубликованных рекомендаций пока нет',
    'There aren\'t any published security advisories': 'Опубликованных рекомендаций пока нет',
    // Private vulnerability reporting
    'Private vulnerability reporting is enabled': 'Приватные сообщения об уязвимостях включены',
    'Private vulnerability reporting is not enabled': 'Приватные сообщения об уязвимостях не включены',
    'Only repository maintainers will see this report.':
      'Этот отчёт увидят только сопровождающие репозитория.',
    'Reporter': 'Автор сообщения',
  };

  const attributes = {
    'aria-label': {
      'Security overview': 'Обзор безопасности',
      'Dismiss this alert': 'Отклонить это оповещение',
      'Reopen this alert': 'Открыть это оповещение снова',
      'Filter alerts': 'Фильтровать оповещения',
    },
    'placeholder': {
      'Filter alerts': 'Фильтр оповещений',
      'Search alerts': 'Поиск по оповещениям',
    },
    'title': {
      'Critical severity': 'Критический уровень',
      'High severity': 'Высокий уровень',
      'Medium severity': 'Средний уровень',
      'Moderate severity': 'Умеренный уровень',
      'Low severity': 'Низкий уровень',
    },
  };

  // Контекстные правила — на Security-вкладке у нас отличается:
  // "Overview" — заголовок раздела,
  // "Active"/"Inactive" — статус секрета, а не пользователя,
  // "Dismiss"/"Dismiss alert" — «Отклонить», а не «Скрыть»,
  // "Maintainer" — «Сопровождающий», а не «Мейнтейнер»,
  // "Manage access" — «Управлять доступом» (глагол), а не «Управление доступом» (заголовок).
  const contextual = [
    {
      selector: '.security-overview, nav[aria-label*="Security"], [aria-label*="security" i][role="navigation"]',
      strings: {
        'Overview': 'Обзор',
      },
    },
    {
      selector: '[data-testid="secret-scanning"], .js-secret-scanning, [aria-label*="secret scanning" i]',
      strings: {
        'Active': 'Активен',
        'Inactive': 'Неактивен',
      },
    },
    {
      selector: '.js-check-all-container.security, [data-hpc] main:has([aria-label*="security" i]), [data-testid*="security" i], .security-advisory, .dependabot-update, .code-scanning-alert, .secret-scanning-alert',
      strings: {
        'Dismiss': 'Отклонить',
        'Dismiss alert': 'Отклонить оповещение',
        'Maintainer': 'Сопровождающий',
        'Manage access': 'Управлять доступом',
      },
    },
    // Advisories-вкладка: фильтрационные табы счётчиков «0 Draft / 0 Published / 0 Closed»
    {
      selector: '[aria-label*="advisor" i], [data-testid*="advisor" i], .js-advisory-filter, a[href*="/security/advisories"]',
      strings: {
        'Draft': 'Черновики',
        'Published': 'Опубликованные',
        'Closed': 'Закрытые',
        'Open': 'Открытые',
      },
    },
  ];

  root.GitHubRu.dict = root.GitHubRu.dict || {};
  root.GitHubRu.dict.security = { strings, attributes, contextual };
})(typeof window !== 'undefined' ? window : globalThis);
