// dictionary/actions.js — GitHub Actions (UI, не переводим имена workflow и логи)
(function (root) {
  const strings = {
    'Actions': 'Actions',
    'All workflows': 'Все workflow',
    'Workflows': 'Workflows',
    'New workflow': 'Новый workflow',
    'Runs': 'Запуски',
    'Jobs': 'Задания',
    'Job': 'Задание',
    'Artifacts': 'Артефакты',
    'Runner': 'Раннер',
    'Runners': 'Раннеры',
    'Self-hosted runners': 'Собственные раннеры',
    'Larger runners': 'Мощные раннеры',
    'Caches': 'Кеш',
    'Attempt': 'Попытка',
    'Attempts': 'Попытки',
    'Workflow runs': 'Запуски workflow',
    'Filter workflow runs': 'Фильтр запусков',
    'Re-run workflow': 'Перезапустить workflow',
    'Re-run all jobs': 'Перезапустить все задания',
    'Re-run failed jobs': 'Перезапустить неуспешные задания',
    'Cancel workflow': 'Отменить workflow',
    'View workflow file': 'Открыть файл workflow',
    'Run workflow': 'Запустить workflow',
    'Usage': 'Использование',
    'Timing': 'Время',
    'Summary': 'Сводка',
    'Annotations': 'Аннотации',
    'Show logs': 'Показать логи',
    'Hide logs': 'Скрыть логи',
    'Search logs': 'Поиск по логам',
    'Download log archive': 'Скачать архив логов',
    'View raw logs': 'Открыть сырые логи',
    'Enable fullscreen': 'Во весь экран',
    'Exit fullscreen': 'Выйти из полноэкранного режима',

    // Статусы
    'Failure': 'Ошибка',
    'Cancelled': 'Отменено',
    'Skipped': 'Пропущено',
    'Queued': 'В очереди',
    'In progress': 'Выполняется',
    'Completed': 'Завершено',
    'Waiting for a runner': 'Ожидает раннера',
    'Timed out': 'Превышено время ожидания',
    'Action required': 'Требуется действие',

    // Секции
    'General': 'Общие',
    'Workflow permissions': 'Права workflow',
    'Approval for running fork pull request workflows from contributors':
      'Одобрение запуска workflow из форков сторонних контрибьюторов',
    'Allow select actions': 'Разрешить выбранные actions',
    'Allow all actions and reusable workflows': 'Разрешить все actions и переиспользуемые workflow',
    'Disable actions': 'Отключить actions',
    'Artifact and log retention': 'Хранение артефактов и логов',
    'Fork pull request workflows from outside collaborators': 'Workflow из форков внешних участников',
    // Страница «Choose a workflow» (первый запуск Actions)
    'Get started with GitHub Actions': 'Начните работу с GitHub Actions',
    'Build, test, and deploy your code.': 'Собирайте, тестируйте и деплойте код.',
    'Make code reviews, branch management, and issue triaging work the way you want.':
      'Делайте код-ревью, управляйте ветками и задачами так, как вам удобно.',
    'Select a workflow to get started.': 'Выберите workflow, чтобы начать.',
    'Skip this and set up a workflow yourself': 'Пропустить и настроить workflow вручную',
    'Categories': 'Категории',
    'Deployment': 'Деплой',
    'Automation': 'Автоматизация',
    'Continuous integration': 'Непрерывная интеграция',
<<<<<<< HEAD
    // Доп. блоки на /actions/new
    'Suggested for this repository': 'Рекомендовано для этого репозитория',
    'Browse all categories': 'Все категории',
    // Полная склейка двух предложений (на случай если GitHub склеивает текстовые узлы)
    'Build, test, and deploy your code. Make code reviews, branch management, and issue triaging work the way you want.':
      'Собирайте, тестируйте и деплойте код. Делайте код-ревью, управляйте ветками и задачами так, как вам удобно.',

    // Подвал «Learn more about GitHub Actions»
    'Learn more about GitHub Actions': 'Подробнее о GitHub Actions',
    'Getting started and core concepts': 'Начало работы и базовые концепции',
    'New to Actions? Start here. Learn the core concepts and how to get started.':
      'Только начинаете работать с Actions? Начните здесь — освоите базовые концепции и первые шаги.',
    'Configuring and managing workflows': 'Настройка и управление workflow',
    'Create custom workflows to control your project\u2019s life cycle processes.':
      'Создавайте свои workflow, чтобы управлять жизненным циклом проекта.',
    'Create custom workflows to control your project\'s life cycle processes.':
      'Создавайте свои workflow, чтобы управлять жизненным циклом проекта.',
    'Language and framework guides': 'Руководства по языкам и фреймворкам',
    'Guides for projects written in many programming languages.':
      'Руководства для проектов, написанных на разных языках программирования.',

    // Метки в карточках (категория)
=======
>>>>>>> b233700ae40a269a5e416996bfe03aa9284bb265
  };

  const attributes = {
    'placeholder': {
      'Filter workflow runs': 'Фильтр запусков',
      'Search logs': 'Поиск по логам',
    },
  };


  // Статус CI-запуска: "Success"/"Failure"/etc внутри бейджа workflow run
  // перевод "Success"="Успешно" (общий из common.js — "Готово")
  const contextual = [
    {
      selector: '.State, [data-testid="workflow-run-status"], [data-testid="status-indicator"], .octicon-check-circle-fill, .color-fg-success, svg[data-status]',
      strings: {
        'Success': 'Успешно',
      },
    },
  ];

  root.GitHubRu.dict = root.GitHubRu.dict || {};
  root.GitHubRu.dict.actions = { strings, attributes, contextual };
})(typeof window !== 'undefined' ? window : globalThis);
