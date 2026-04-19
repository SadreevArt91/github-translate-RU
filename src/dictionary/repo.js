// dictionary/repo.js — страница репозитория, дерево файлов, ветки
(function (root) {
  const strings = {
    // Вкладки репозитория
    'Code': 'Код',
    '<> Code': '<> Код',
    'Wiki': 'Wiki',
    'Insights': 'Аналитика',
    'Projects': 'Проекты',
    'Discussions': 'Обсуждения',
    'Actions': 'Actions', // бренд
    'Packages': 'Packages',
    'Releases': 'Релизы',
    'Tags': 'Теги',
    'Branches': 'Ветки',

    // Действия с репо
    'Watch': 'Отслеживать',
    'Unwatch': 'Не отслеживать',
    'Star': 'В избранное',
    'Unstar': 'Убрать из избранного',
    'Starred': 'В избранном',
    'Fork': 'Форк',
    'Forks': 'Форки',
    'Sponsor': 'Поддержать',
    'Use this template': 'Использовать как шаблон',

    // Заголовки разделов
    'No description, website, or topics provided.': 'Описание, сайт и темы не указаны.',
    'No description provided.': 'Описание не указано.',
    'Topics': 'Темы',
    'Resources': 'Ресурсы',
    'License': 'Лицензия',
    'Code of conduct': 'Кодекс поведения',
    'Security policy': 'Политика безопасности',
    'Security advisories': 'Рекомендации по безопасности',
    'Private vulnerability reporting': 'Приватные сообщения об уязвимостях',
    'Dependabot alerts': 'Оповещения Dependabot',
    'Code scanning alerts': 'Оповещения сканирования кода',
    'Secret scanning alerts': 'Оповещения сканирования секретов',
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
    'Enabled': 'Включено',
    'Disabled': 'Отключено',
    'Needs setup': 'Нужна настройка',
    'Not enabled': 'Не включено',
    'Reporting tools': 'Инструменты отчётности',
    'Vulnerability reporting': 'Сообщения об уязвимостях',
    'Activity': 'Активность',
    'Custom properties': 'Пользовательские свойства',
    'Stars': 'Звёзды',
    'Watchers': 'Наблюдатели',
    'Languages': 'Языки',
    'Used by': 'Используется в',
    'Contributors': 'Контрибьюторы',
    'Deployments': 'Деплои',
    'Environments': 'Окружения',

    // Файловое дерево / просмотр
    'Go to file': 'Перейти к файлу',
    'Add file': 'Добавить файл',
    'Create new file': 'Создать новый файл',
    'Upload files': 'Загрузить файлы',
    'Find file': 'Найти файл',
    'Find a file': 'Найти файл',
    'Clone': 'Клонировать',
    'Download ZIP': 'Скачать ZIP',
    'Open with GitHub Desktop': 'Открыть в GitHub Desktop',
    'Open in Codespaces': 'Открыть в Codespaces',
    'Open in github.dev': 'Открыть в github.dev',
    'Latest commit': 'Последний коммит',
    'View all commits': 'Все коммиты',
    'History': 'История',
    'Permalink': 'Постоянная ссылка',
    'Raw': 'Сырой',
    'Blame': 'Blame',
    'Source': 'Исходник',
    'Preview': 'Предпросмотр',
    'Edit file': 'Изменить файл',
    'Edit this file': 'Изменить этот файл',
    'Delete file': 'Удалить файл',
    'Delete this file': 'Удалить этот файл',
    'Rename': 'Переименовать',
    'Move or rename': 'Переместить или переименовать',
    'Folder': 'Папка',
    'File': 'Файл',
    'Symlink': 'Символическая ссылка',

    // Ветки
    'main': 'main',          // НЕ переводим
    'master': 'master',      // НЕ переводим
    'Switch branches/tags': 'Переключить ветку или тег',
    'View all branches': 'Все ветки',
    'View all tags': 'Все теги',
    'Compare': 'Сравнить',
    'Compare changes': 'Сравнить изменения',
    'Default branch': 'Ветка по умолчанию',
    'Branch protection rules': 'Правила защиты веток',

    // README, метаданные
    'README': 'README',
    'README.md': 'README.md',
    'Readme': 'README',

    // Releases
    'Latest': 'Последний',
    'Pre-release': 'Предварительный',
    'Draft': 'Черновик',
    'Assets': 'Файлы',
    'Source code (zip)': 'Исходный код (zip)',
    'Source code (tar.gz)': 'Исходный код (tar.gz)',
    'Create a new release': 'Создать новый релиз',
    'Edit release': 'Изменить релиз',
    'Release notes': 'Заметки о релизе',

    // Insights
    'Pulse': 'Pulse',
    'Contributors graph': 'График контрибьюторов',
    'Community': 'Сообщество',
    'Community Standards': 'Стандарты сообщества',
    'Traffic': 'Трафик',
    'Commits': 'Коммиты',
    'Code frequency': 'Частота коммитов',
    'Dependency graph': 'Граф зависимостей',
    'Network': 'Сеть',
    'Forks (network)': 'Форки (сеть)',

    // Insights / счётчики (отдельные слова, осторожно)
    'commits': 'коммитов',
    'contributors': 'контрибьюторов',
    'forks': 'форков',
    'stars': 'звёзд',
    'watchers': 'наблюдателей',
    'releases': 'релизов',
    'tags': 'тегов',
    'branches': 'веток',

    // Empty states
    'There aren’t any open issues.': 'Открытых задач нет.',
    'There aren’t any open pull requests.': 'Открытых пул-реквестов нет.',

    // Wiki (пустая вкладка и общие строки)
    'Wikis provide a place in your repository to lay out the roadmap of your project, show the current status, and document software better, together.':
      'Wiki — это место в репозитории, где можно изложить дорожную карту проекта, показать текущий статус и вместе вести документацию.',
    'Create the first page': 'Создать первую страницу',
    'Create a custom sidebar': 'Создать пользовательскую боковую панель',
    'Create a custom footer': 'Создать пользовательский футер',
    'New page': 'Новая страница',
    'Edit page': 'Изменить страницу',
    'Pages': 'Страницы',
    'Clone this wiki locally': 'Клонировать эту Wiki локально',
    'Show sidebar': 'Показать боковую панель',
    'Hide sidebar': 'Скрыть боковую панель',

    // Projects (пустая вкладка репозитория)
    'Projects on GitHub are created at the repository owner\u2019s level (organization or user) and can be linked to a repository\u2019s Projects tab. Projects are suitable for cross-repository development efforts such as feature work, complex product roadmaps or even Issue triage.':
      'Проекты на GitHub создаются на уровне владельца репозитория (организации или пользователя) и могут быть привязаны к вкладке Projects репозитория. Они подходят для задач, выходящих за рамки одного репозитория: работы над фичами, сложных продуктовых дорожных карт и даже для сортировки задач.',
    'Projects on GitHub are created at the repository owner\'s level (organization or user) and can be linked to a repository\'s Projects tab. Projects are suitable for cross-repository development efforts such as feature work, complex product roadmaps or even Issue triage.':
      'Проекты на GitHub создаются на уровне владельца репозитория (организации или пользователя) и могут быть привязаны к вкладке Projects репозитория. Они подходят для задач, выходящих за рамки одного репозитория: работы над фичами, сложных продуктовых дорожных карт и даже для сортировки задач.',
    'Link a project': 'Привязать проект',
    'Create a project': 'Создать проект',
    'New project': 'Новый проект',
    // На случай, если DOM бьёт строку "Welcome to the X wiki!" на отдельные текстовые узлы
    'Welcome to the ': 'Добро пожаловать в Wiki репозитория ',
    ' wiki!': '!',
  };

  const attributes = {
    'aria-label': {
      'Star this repository': 'Добавить репозиторий в избранное',
      'Unstar this repository': 'Убрать репозиторий из избранного',
      'Fork this repository': 'Форкнуть репозиторий',
      'Toggle navigation': 'Переключить меню',
      'Branch menu': 'Меню веток',
      'File browser': 'Обозреватель файлов',
    },
    'placeholder': {
      'Go to file': 'Перейти к файлу',
      'Find a file': 'Найти файл',
    },
  };


  // "About" в сайдбаре репозитория = "О репозитории" (а не "О нас" из nav.js)
  const contextual = [
    {
      selector: '.BorderGrid-cell h2, .Layout-sidebar h2, .repository-content .BorderGrid h2',
      strings: {
        'About': 'О репозитории',
      },
    },
  ];

  root.GitHubRu.dict = root.GitHubRu.dict || {};
  root.GitHubRu.dict.repo = { strings, attributes, contextual };
})(typeof window !== 'undefined' ? window : globalThis);
