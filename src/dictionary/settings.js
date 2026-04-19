// dictionary/settings.js — Settings (личные + репозитория + организации)
(function (root) {
  const strings = {
    // Разделы левого меню
    'Public profile': 'Публичный профиль',
    'Account': 'Аккаунт',
    'Appearance': 'Внешний вид',
    'Accessibility': 'Доступность',
    'Notifications': 'Уведомления',
    'Billing and plans': 'Оплата и планы',
    'Billing': 'Оплата',
    'Plans': 'Планы',
    'Emails': 'Электронная почта',
    'Password and authentication': 'Пароль и аутентификация',
    'Sessions': 'Сессии',
    'SSH and GPG keys': 'Ключи SSH и GPG',
    'Organizations': 'Организации',
    'Enterprises': 'Корпоративные аккаунты',
    'Moderation': 'Модерация',
    'Blocked users': 'Заблокированные пользователи',
    'Interaction limits': 'Ограничения взаимодействия',
    'Code review limits': 'Ограничения код-ревью',
    'Repositories': 'Репозитории',
    'Packages': 'Packages',
    'Codespaces': 'Codespaces',
    'Organizations (sidebar)': 'Организации',
    'Applications': 'Приложения',
    'Installed GitHub Apps': 'Установленные GitHub Apps',
    'Authorized GitHub Apps': 'Авторизованные GitHub Apps',
    'Authorized OAuth Apps': 'Авторизованные OAuth-приложения',
    'Scheduled reminders': 'Запланированные напоминания',
    'Security log': 'Журнал безопасности',
    'Sponsorship log': 'Журнал спонсорства',
    'Developer settings': 'Настройки разработчика',

    // Профиль
    'Name': 'Имя',
    'Public email': 'Публичный email',
    'Bio': 'О себе',
    'URL': 'Сайт',
    'Company': 'Компания',
    'Location': 'Местоположение',
    'Pronouns': 'Местоимения',
    'Social accounts': 'Профили в соцсетях',
    'Profile picture': 'Аватар',
    'Edit': 'Изменить',
    'Remove': 'Удалить',
    'Upload a photo': 'Загрузить фото',
    'Update profile': 'Обновить профиль',

    // Безопасность
    'Change password': 'Сменить пароль',
    'Current password': 'Текущий пароль',
    'New password': 'Новый пароль',
    'Confirm new password': 'Подтвердите новый пароль',
    'Two-factor authentication': 'Двухфакторная аутентификация',
    '2FA is enabled': 'Двухфакторная аутентификация включена',
    '2FA is not enabled': 'Двухфакторная аутентификация не включена',
    'Enable two-factor authentication': 'Включить двухфакторную аутентификацию',
    'Recovery codes': 'Резервные коды',
    'Passkeys': 'Passkey-ключи',
    'Security keys': 'Ключи безопасности',
    'Authentication methods': 'Способы входа',

    // Уведомления
    'Default notifications email': 'Email для уведомлений по умолчанию',
    'Participating': 'В обсуждениях, в которых участвую',
    'Watching': 'За чем слежу',
    'Push notifications': 'Push-уведомления',
    'Email': 'По email',
    'Web': 'В интерфейсе',
    'Mobile': 'Мобильные',

    // Настройки репозитория
    'General (repo)': 'Общие',
    'Access': 'Доступ',
    'Collaborators': 'Коллабораторы',
    'Collaborators and teams': 'Коллабораторы и команды',
    'Moderation options': 'Параметры модерации',
    'Code and automation': 'Код и автоматизация',
    'Branches': 'Ветки',
    'Tags': 'Теги',
    'Rules': 'Правила',
    'Rulesets': 'Наборы правил',
    'Webhooks': 'Webhooks',
    'Environments': 'Окружения',
    'Pages': 'Pages',
    'Integrations': 'Интеграции',
    'Email notifications': 'Email-уведомления',
    'Autolink references': 'Автоссылки',
    'Secrets and variables': 'Секреты и переменные',
    'Deploy keys': 'Deploy-ключи',
    'Archives': 'Архивы',

    // Опасная зона
    'Danger Zone': 'Опасная зона',
    'Danger zone': 'Опасная зона',
    'Change visibility': 'Сменить видимость',
    'Transfer ownership': 'Передать владение',
    'Archive this repository': 'Архивировать репозиторий',
    'Unarchive this repository': 'Разархивировать репозиторий',
    'Delete this repository': 'Удалить репозиторий',
    'Make public': 'Сделать публичным',
    'Make private': 'Сделать приватным',
    'This action is not reversible. Please be certain.':
      'Это действие необратимо. Подумайте хорошо.',

    // Features
    'Features': 'Возможности',
    'Wikis': 'Wiki',
    'Restrict editing to collaborators only': 'Разрешить редактирование только коллабораторам',
    'Issues (feature)': 'Задачи',
    'Allow forking': 'Разрешить форки',
    'Discussions (feature)': 'Обсуждения',
    'Sponsorships': 'Спонсорство',
    'Projects (feature)': 'Проекты',
    'Preserve this repository': 'Сохранять этот репозиторий в архиве',
    'Table of contents': 'Оглавление',

    // Pull Requests политика
    'Pull Requests': 'Пул-реквесты',
    'Allow merge commits': 'Разрешить merge-коммиты',
    'Allow squash merging': 'Разрешить squash merge',
    'Allow rebase merging': 'Разрешить rebase merge',
    'Always suggest updating pull request branches':
      'Всегда предлагать обновление веток пул-реквестов',
    'Allow auto-merge': 'Разрешить авто-слияние',
    'Automatically delete head branches': 'Автоматически удалять ветки после слияния',

    // === Общие настройки репозитория (Repository → Settings → General) ===
    'Repository name': 'Название репозитория',
    'Rename': 'Переименовать',
    'Template repository': 'Репозиторий-шаблон',
    'Template repositories let users generate new repositories with the same directory structure and files.':
      'Репозитории-шаблоны позволяют создавать новые репозитории с такой же структурой папок и файлами.',
    'Learn more about template repositories': 'Подробнее про репозитории-шаблоны',
    'Include all branches': 'Включать все ветки',
    'Default branch': 'Ветка по умолчанию',
    'The default branch is considered the \u201cbase\u201d branch in your repository, against which all pull requests and code commits are automatically made, unless you specify a different branch.':
      'Ветка по умолчанию считается «базовой» в вашем репозитории — в неё автоматически направляются все пул-реквесты и коммиты, если вы явно не укажете другую.',
    'The default branch is considered the "base" branch in your repository, against which all pull requests and code commits are automatically made, unless you specify a different branch.':
      'Ветка по умолчанию считается «базовой» в вашем репозитории — в неё автоматически направляются все пул-реквесты и коммиты, если вы явно не укажете другую.',
    'Switch to another branch': 'Сменить ветку',
    'Rename branch': 'Переименовать ветку',

    // Releases
    'Releases': 'Релизы',
    'Enable release immutability': 'Включить неизменяемость релизов',
    'Disallow assets and tags from being modified once a release is published.':
      'Запретить изменение файлов и тегов после публикации релиза.',

    // Social preview
    'Social preview': 'Превью для соцсетей',
    'Upload an image to customize your repository\u2019s social media preview.':
      'Загрузите изображение, чтобы настроить превью вашего репозитория в соцсетях.',
    "Upload an image to customize your repository's social media preview.":
      'Загрузите изображение, чтобы настроить превью вашего репозитория в соцсетях.',
    'Images should be at least 640\u00d7320px (1280\u00d7640px for best display).':
      'Изображение должно быть не меньше 640\u00d7320 пикселей (1280\u00d7640 для лучшего отображения).',
    'Download template': 'Скачать шаблон',
    'Edit image': 'Изменить изображение',
    'Remove image': 'Удалить изображение',

    // Features (описания)
    'Wikis host documentation for your repository.':
      'Wiki хранит документацию вашего репозитория.',
    'Public wikis will still be readable by everyone.':
      'Публичные Wiki будут по-прежнему доступны всем для чтения.',
    'Issues integrate lightweight task tracking into your repository. Keep projects on track with issue labels and milestones, and reference them in commit messages.':
      'Задачи — лёгкий трекер работ в репозитории. Используйте метки и вехи, ссылайтесь на задачи в сообщениях коммитов.',
    'Allow users to opt into table of contents generation':
      'Разрешить пользователям включать автоматическое оглавление',
    'Display a link to sponsor this project': 'Показывать ссылку на поддержку проекта',
    'Forks of this repository must be in this organization':
      'Форки этого репозитория должны находиться в этой организации',

    // Pulls — детали
    'Default commit message': 'Сообщение коммита по умолчанию',
    'Default pull request title': 'Заголовок пул-реквеста по умолчанию',
    'Whenever there are new changes available in the base branch, present an \u201cupdate branch\u201d option in the pull request.':
      'Когда в базовой ветке появляются новые изменения, в пул-реквесте показывается кнопка «Обновить ветку».',

    // Интеграции
    'GitHub Apps': 'GitHub Apps',
    'Configure access and permissions for your integrations.':
      'Настройте доступ и права для ваших интеграций.',
    'No integrations installed.': 'Интеграций пока нет.',

    // Security and quality
    'Security and quality': 'Безопасность и качество',
    'Advanced Security': 'Advanced Security',
    'Actions secrets': 'Секреты Actions',
    'Codespaces secrets': 'Секреты Codespaces',
    'Dependabot secrets': 'Секреты Dependabot',

    // Копирайт/описание кнопок
    'Make default': 'Сделать по умолчанию',
    'Require contributors to sign off on web-based commits':
      'Требовать подписи для коммитов, созданных через веб-интерфейс',
    'Allow squash merging to use commit information from the pull request':
      'При squash merge брать информацию из пул-реквеста',
    'Automatically delete branches after pull requests are merged':
      'Автоматически удалять ветки после слияния пул-реквестов',

    // Access
    'Who has access': 'Кто имеет доступ',
    'Manage access': 'Управление доступом',
    'Add people': 'Добавить людей',
    'Add teams': 'Добавить команды',
    'Pending invitations': 'Ожидающие приглашения',
    'Access (section)': 'Доступ',

    // Pages / Environments
    'GitHub Pages': 'GitHub Pages',
    'Your GitHub Pages site is currently being built from the':
      'Ваш сайт GitHub Pages сейчас собирается из ветки',
    'Source': 'Источник',
    'Build and deployment': 'Сборка и деплой',
    'Custom domain': 'Свой домен',
    'Enforce HTTPS': 'Требовать HTTPS',

    // Общие подписи чекбоксов / предупреждения
    'This will permanently affect': 'Это необратимо затронет',
    'Please type': 'Введите',
    'to confirm.': 'для подтверждения.',
    // Половинки длинной фразы про Issues — на странице могут встречаться как два соседних узла
    'Issues integrate lightweight task tracking into your repository.':
      'Задачи — лёгкий трекер работ в вашем репозитории.',
    'Keep projects on track with issue labels and milestones, and reference them in commit messages.':
      'Используйте метки и вехи, ссылайтесь на задачи в сообщениях коммитов.',
  };

  const attributes = {};

  root.GitHubRu.dict = root.GitHubRu.dict || {};
  root.GitHubRu.dict.settings = { strings, attributes };
})(typeof window !== 'undefined' ? window : globalThis);
