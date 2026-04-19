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
    'About': 'О репозитории',
    'No description, website, or topics provided.': 'Описание, сайт и темы не указаны.',
    'No description provided.': 'Описание не указано.',
    'Topics': 'Темы',
    'Resources': 'Ресурсы',
    'License': 'Лицензия',
    'Code of conduct': 'Кодекс поведения',
    'Security policy': 'Политика безопасности',
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

  root.GitHubRu.dict = root.GitHubRu.dict || {};
  root.GitHubRu.dict.repo = { strings, attributes };
})(typeof window !== 'undefined' ? window : globalThis);
