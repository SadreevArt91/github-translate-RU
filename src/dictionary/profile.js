// dictionary/profile.js — Профиль пользователя и организации
(function (root) {
  const strings = {
    'Overview': 'Обзор',
    'Repositories': 'Репозитории',
    'Projects': 'Проекты',
    'Packages': 'Packages',
    'Followers': 'Подписчики',
    'Following': 'Подписки',
    'Follow': 'Подписаться',
    'Unfollow': 'Отписаться',
    'Block user': 'Заблокировать пользователя',
    'Unblock user': 'Разблокировать пользователя',
    'Report abuse': 'Пожаловаться',

    // Достижения / статистика
    'Achievements': 'Достижения',
    'Highlights': 'Достижения профиля',
    'Contribution activity': 'Активность вкладов',
    'Contributions in the last year': 'Вклады за последний год',
    'contribution in the last year': 'вклад за последний год',
    'contributions in the last year': 'вкладов за последний год',
    'Less': 'Меньше',
    'Learn how we count contributions': 'Как мы считаем вклады',
    'No activity in': 'Нет активности',
    'Contribution settings': 'Настройки активности',
    'Private contributions': 'Приватные вклады',
    'Activity overview': 'Обзор активности',
    'January': 'Январь',
    'February': 'Февраль',
    'March': 'Март',
    'April': 'Апрель',
    'May': 'Май',
    'June': 'Июнь',
    'July': 'Июль',
    'August': 'Август',
    'September': 'Сентябрь',
    'October': 'Октябрь',
    'November': 'Ноябрь',
    'December': 'Декабрь',
    'Jan': 'Янв',
    'Feb': 'Фев',
    'Mar': 'Мар',
    'Apr': 'Апр',
    'Jun': 'Июн',
    'Jul': 'Июл',
    'Aug': 'Авг',
    'Sep': 'Сен',
    'Oct': 'Окт',
    'Nov': 'Ноя',
    'Dec': 'Дек',
    'Mon': 'Пн',
    'Tue': 'Вт',
    'Wed': 'Ср',
    'Thu': 'Чт',
    'Fri': 'Пт',
    'Sat': 'Сб',
    'Sun': 'Вс',

    // Pinned
    'Pinned': 'Закреплено',
    'Customize your pins': 'Настроить закреплённые',
    'Popular repositories': 'Популярные репозитории',

    // Sidebar
    'Edit profile': 'Редактировать профиль',
    'Edit bio': 'Изменить био',
    'Achievements (section)': 'Достижения',
    'Set status': 'Задать статус',

    // Organization
    'People': 'Участники',
    'Teams': 'Команды',
    'Members': 'Участники',
    'Outside collaborators': 'Внешние коллабораторы',
    'Invitations': 'Приглашения',
    'Pending invitations': 'Ожидающие приглашения',
    'Invite member': 'Пригласить участника',
    'Invite someone': 'Пригласить кого-то',

    // === Вкладка Projects на профиле (пустое состояние) ===
    'Welcome to Projects': 'Добро пожаловать в Projects',
    'Built to be flexible and adaptable, Projects gives you a live canvas to filter, sort, and group issues and pull requests in a table, board, or roadmap. Tailor them to your needs with custom fields, saved views, workflows, and insights.':
      'Projects — гибкий и адаптивный инструмент: живое полотно, чтобы фильтровать, сортировать и группировать задачи и пул-реквесты в таблице, доске или дорожной карте. Настраивайте под свои задачи с помощью кастомных полей, сохранённых представлений, рабочих процессов и аналитики.',
    'Create your first GitHub project': 'Создайте ваш первый GitHub-проект',
    'Projects are a customizable, flexible tool for planning and tracking your work.':
      'Projects — настраиваемый и гибкий инструмент для планирования и отслеживания работы.',
    'New project': 'Новый проект',
    'Search results': 'Результаты поиска',
    '0 open and 0 closed projects found.': 'Найдено 0 открытых и 0 закрытых проектов.',
    'Learn more': 'Подробнее',

    // === Вкладка Packages на профиле (пустое состояние) ===
    'Get started with GitHub Packages': 'Начните работу с GitHub Packages',
    'Safely publish packages, store your packages alongside your code, and share your packages privately with your team.':
      'Безопасно публикуйте пакеты, храните их рядом с кодом и делитесь ими приватно со своей командой.',
    'Choose a registry': 'Выберите реестр',
    'GitHub Package Registry Icon': 'Иконка GitHub Package Registry',
    // Карточки реестров — названия оставляем брендовыми, переводим описания
    'A default package manager used for the Java programming language and the Java runtime environment.':
      'Стандартный пакетный менеджер для языка Java и его runtime-окружения.',
    'A free and open source package manager used for the Microsoft development platforms including .NET.':
      'Бесплатный пакетный менеджер с открытым исходным кодом для платформ разработки Microsoft, включая .NET.',
    'A standard format for distributing Ruby programs and libraries used for the Ruby programming language.':
      'Стандартный формат распространения программ и библиотек для языка Ruby.',
    'A package manager for JavaScript, included with Node.js. npm makes it easy for developers to share and reuse code.':
      'Пакетный менеджер для JavaScript, поставляется с Node.js. Упрощает обмен и переиспользование кода.',
    'A single place for your team to manage Docker images and decide who can see and access your images.':
      'Единое место для команды, где можно управлять Docker-образами и решать, кто может их видеть и использовать.',

    // === Вкладка Stars (Избранное) на профиле ===
    'Lists': 'Списки',
    'Last updated': 'Последнее обновление',
    'Sort by': 'Сортировать по',
    'Name ascending (A-Z)': 'По имени (А–Я)',
    'Name descending (Z-A)': 'По имени (Я–А)',
    'Newest': 'Сначала новые',
    'Oldest': 'Сначала старые',
    'Create list': 'Создать список',
    'Create a list to organize your starred repositories.':
      'Создайте список, чтобы сгруппировать избранные репозитории.',
    'Enabling this makes the list visible only to you.':
      'Делает список видимым только вам.',
    'Tip:': 'Подсказка:',
    'to add emoji to the name or description.':
      'чтобы добавить эмодзи в название или описание.',
    'Create your first list': 'Создайте свой первый список',
    'Create your first list.': 'Создайте свой первый список.',
    'Lists make it easier to organize and curate repositories that you have starred.':
      'Списки упрощают организацию и курирование репозиториев, которым вы поставили звезду.',
    // Пустое состояние Stars
    'You don\u2019t have any starred repositories yet.': 'У вас пока нет репозиториев в избранном.',
    "You don't have any starred repositories yet.": 'У вас пока нет репозиториев в избранном.',
    'As you': 'Когда вы',
    'explore GitHub': 'исследуете GitHub',
    ', star repositories to save them for later and they\u2019ll show up here.':
      ', добавляйте репозитории в избранное — они будут сохраняться здесь.',
    ", star repositories to save them for later and they'll show up here.":
      ', добавляйте репозитории в избранное — они будут сохраняться здесь.',
    // Фильтры и сортировка
    'Type: All': 'Тип: все',
    'Sort by: Recently starred': 'Сортировка: недавно добавленные',
    'Recently starred': 'Недавно добавленные в избранное',
    'Recently active': 'Недавно активные',
    'Most stars': 'Больше всего звёзд',
    'Showing results': 'Показаны результаты',
    'Sources': 'Исходные',
    'Can be sponsored': 'Можно спонсировать',
    'Mirrors': 'Зеркала',
    'Templates': 'Шаблоны',
  };

  const attributes = {};


  // Таб "Stars" на странице профиля = "Избранное" (а не "Звёзды" из repo.js)
  const contextual = [
    {
      selector: 'nav.UnderlineNav a[href*="tab=stars"], a[data-tab-item="stars"], [data-tab="stars"]',
      strings: {
        'Stars': 'Избранное',
      },
    },
  ];

  root.GitHubRu.dict = root.GitHubRu.dict || {};
  root.GitHubRu.dict.profile = { strings, attributes, contextual };
})(typeof window !== 'undefined' ? window : globalThis);
