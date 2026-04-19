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
