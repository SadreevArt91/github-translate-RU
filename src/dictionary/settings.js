// dictionary/settings.js — Settings (личные + репозитория + организации)
(function (root) {
  const strings = {
    // Разделы левого меню
    'Public profile': 'Публичный профиль',
    'Account': 'Аккаунт',
    'Appearance': 'Внешний вид',
    'Accessibility': 'Доступность',
    'Notifications': 'Уведомления',
<<<<<<< HEAD
=======
    'Billing and plans': 'Оплата и планы',
>>>>>>> b233700ae40a269a5e416996bfe03aa9284bb265
    'Billing': 'Оплата',
    'Plans': 'Планы',
    'Emails': 'Электронная почта',
    'Password and authentication': 'Пароль и аутентификация',
    'Sessions': 'Сессии',
<<<<<<< HEAD
=======
    'SSH and GPG keys': 'Ключи SSH и GPG',
>>>>>>> b233700ae40a269a5e416996bfe03aa9284bb265
    'Organizations': 'Организации',
    'Enterprises': 'Корпоративные аккаунты',
    'Moderation': 'Модерация',
    'Blocked users': 'Заблокированные пользователи',
<<<<<<< HEAD
=======
    'Interaction limits': 'Ограничения взаимодействия',
>>>>>>> b233700ae40a269a5e416996bfe03aa9284bb265
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
<<<<<<< HEAD
=======
    'Change password': 'Сменить пароль',
>>>>>>> b233700ae40a269a5e416996bfe03aa9284bb265
    'Current password': 'Текущий пароль',
    'New password': 'Новый пароль',
    'Confirm new password': 'Подтвердите новый пароль',
    'Two-factor authentication': 'Двухфакторная аутентификация',
    '2FA is enabled': 'Двухфакторная аутентификация включена',
    '2FA is not enabled': 'Двухфакторная аутентификация не включена',
    'Enable two-factor authentication': 'Включить двухфакторную аутентификацию',
<<<<<<< HEAD
=======
    'Recovery codes': 'Резервные коды',
>>>>>>> b233700ae40a269a5e416996bfe03aa9284bb265
    'Passkeys': 'Passkey-ключи',
    'Security keys': 'Ключи безопасности',
    'Authentication methods': 'Способы входа',

    // Уведомления
    'Default notifications email': 'Email для уведомлений по умолчанию',
<<<<<<< HEAD
=======
    'Participating': 'В обсуждениях, в которых участвую',
>>>>>>> b233700ae40a269a5e416996bfe03aa9284bb265
    'Watching': 'За чем слежу',
    'Push notifications': 'Push-уведомления',
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
<<<<<<< HEAD
=======
    'Pages': 'Pages',
>>>>>>> b233700ae40a269a5e416996bfe03aa9284bb265
    'Integrations': 'Интеграции',
    'Email notifications': 'Email-уведомления',
    'Autolink references': 'Автоссылки',
    'Secrets and variables': 'Секреты и переменные',
    'Deploy keys': 'Deploy-ключи',
    'Archives': 'Архивы',

    // Danger Zone — подробные описания каждой карточки
    'Change repository visibility': 'Сменить видимость репозитория',
    'This repository is currently public.': 'Сейчас репозиторий публичный.',
    'This repository is currently private.': 'Сейчас репозиторий приватный.',
    'This repository is currently internal.': 'Сейчас репозиторий внутренний.',
    'Effects of making this repository private': 'Последствия перевода репозитория в приватный',
    'Effects of making this repository public': 'Последствия перевода репозитория в публичный',
    'Effects of deleting this repository': 'Последствия удаления репозитория',
    'Disable branch protection rules': 'Отключить правила защиты веток',
    'Disable branch protection rules enforcement and APIs':
      'Отключить применение правил защиты веток и их API',
    'Transfer this repository to another user or to an organization where you have the ability to create repositories.':
      'Передать репозиторий другому пользователю или организации, где у вас есть права на создание репозиториев.',
    'Transfer': 'Передать',
    'Transfer ownership': 'Передать владение',
    'Mark this repository as archived and read-only.':
      'Пометить репозиторий как архивный и доступный только для чтения.',
    'Once you delete a repository, there is no going back. Please be certain.':
      'После удаления репозитория вернуть его нельзя. Действуйте внимательно.',
    'Please be certain.': 'Действуйте внимательно.',
    'There is no going back.': 'Обратного пути нет.',

    // Общие тексты интерфейса GitHub / навигация (aria-label, tooltip)
    'Global Navigation Menu': 'Главное меню навигации',
    'GitHub Homepage': 'Главная страница GitHub',
    'General settings': 'Общие настройки',
    'Preview feature': 'Предпросмотр функции',
    'Dismiss error': 'Скрыть ошибку',
    'Breadcrumbs': 'Хлебные крошки',
    'User avatar': 'Аватар пользователя',
    'Footer': 'Подвал',
    'Please reload this page': 'Перезагрузите страницу',
    'Suggestions': 'Подсказки',
    'Include my email address so I can be contacted':
      'Указать мой email, чтобы со мной могли связаться',

    // Модалки Danger Zone (архив/приватизация/удаление)
    'Before you archive, please consider:': 'Перед архивацией учтите:',
    'This repository will become read-only.': 'Репозиторий станет доступен только для чтения.',
    'All scheduled workflows will stop running.': 'Все запланированные workflow остановятся.',
    'You will still be able to fork the repository and unarchive it at any time.':
      'Вы по-прежнему сможете форкнуть репозиторий и разархивировать его в любой момент.',
    'I understand the consequences, archive this repository':
      'Я понимаю последствия, архивировать этот репозиторий',
    'Archive repository': 'Архивировать репозиторий',

    'I want to make this repository private': 'Я хочу сделать этот репозиторий приватным',
    'Change to private': 'Сделать приватным',
    'Security features will be unavailable:': 'Функции безопасности будут недоступны:',
    'Updating any repository settings': 'Обновление любых настроек репозитория',

    'I want to delete this repository': 'Я хочу удалить этот репозиторий',
    'Closing all open issues and pull requests': 'Закрытие всех открытых задач и пул-реквестов',
    'Will be disabled': 'Будет отключено',
    'will be disabled as part of this action': 'будет отключено в рамках этого действия',
    'This action will disable:': 'Это действие отключит:',

    // Branch protection rules
    'Disabling branch protection rules allows you to enforce branch and tag protections exclusively with Repository Rules.':
      'Отключение правил защиты веток позволяет использовать для защиты веток и тегов только Repository Rules.',
    'This will hide the branch protection settings and disable branch protection rules for this repository.':
      'Это скроет настройки защиты веток и отключит правила защиты веток для этого репозитория.',
    'Branch protection rule enforcement': 'Применение правил защиты веток',
    'Branch protection rule APIs': 'API правил защиты веток',
    '0 branch protection rules': '0 правил защиты веток',

    // Pull request merge — оставшееся
    'You must select squashing or rebasing option. This is because linear history is required on at least one protected branch.':
      'Нужно выбрать squash или rebase. Это потому, что на как минимум одной защищённой ветке требуется линейная история.',
    'Add all commits from the head branch onto the base branch individually.':
      'Добавлять все коммиты из исходной ветки в базовую по одному.',
    'You must select at least one option': 'Нужно выбрать хотя бы одну опцию',
    'Anyone can create a pull request': 'Любой может создать пул-реквест',
    'Only collaborators can create PRs': 'Пул-реквесты могут создавать только коллабораторы',
    'Collaborators only': 'Только коллабораторы',

    // Pushes
    'branches and tags can be updated in a push': 'веток и тегов можно обновить за один push',

    // Commits — фрагмент после ссылки «commit comments»
    '. Existing commit comments are not affected by this setting and will remain viewable, editable, and deletable.':
      '. На существующие комментарии настройка не влияет — их по-прежнему можно смотреть, редактировать и удалять.',
    'Developer Certificate of Origin (DCO)': 'Developer Certificate of Origin (DCO)',

    // Issues — шаблоны задач
    'Get organized with issue templates': 'Организуйте работу с шаблонами задач',
    'Give contributors issue templates that help you cut through the noise and help them push your project forward.':
      'Дайте контрибьюторам шаблоны задач, которые помогут отсеять шум и продвинуть проект вперёд.',
    'Set up templates': 'Настроить шаблоны',

    // Аватар — модалка загрузки
    'Upload an image\u2026': 'Загрузить изображение…',
    'Please upload a picture smaller than 1 MB.': 'Загрузите картинку размером меньше 1 МБ.',
    'Please upload a picture smaller than 10,000x10,000.':
      'Загрузите картинку размером меньше 10 000×10 000.',
    'We only support PNG, GIF, or JPG pictures.': 'Поддерживаются только PNG, GIF и JPG.',
    'Something went really wrong and we can\u2019t process that picture.':
      'Что-то пошло совсем не так, и обработать эту картинку не получилось.',
    'Something went really wrong and we can\'t process that picture.':
      'Что-то пошло совсем не так, и обработать эту картинку не получилось.',
    'File contents don\u2019t match the file extension.':
      'Содержимое файла не соответствует его расширению.',
    'File contents don\'t match the file extension.':
      'Содержимое файла не соответствует его расширению.',

    // README подсказки
    'Making a note in your README': 'Сделать пометку в вашем README',

    // Ветки / общее
    'Rename this branch': 'Переименовать эту ветку',
    'This file is empty.': 'Файл пуст.',

    // Смешанные варианты апострофов (GitHub’s + repository's)
    'Enabling this setting will require contributors to sign off on commits made through GitHub\u2019s web interface. Signing off is a way for contributors to affirm that their commit complies with the repository\'s terms, commonly the':
      'Этот параметр потребует от контрибьюторов подписывать (sign off) коммиты, сделанные через веб-интерфейс GitHub. Подпись — способ подтвердить, что коммит соответствует условиям репозитория, обычно',
    'Enabling this setting will require contributors to sign off on commits made through GitHub\'s web interface. Signing off is a way for contributors to affirm that their commit complies with the repository\u2019s terms, commonly the':
      'Этот параметр потребует от контрибьюторов подписывать (sign off) коммиты, сделанные через веб-интерфейс GitHub. Подпись — способ подтвердить, что коммит соответствует условиям репозитория, обычно',

    // Опасная зона
    'Danger Zone': 'Опасная зона',
    'Danger zone': 'Опасная зона',
    'Change visibility': 'Сменить видимость',
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
<<<<<<< HEAD
=======
    'Always suggest updating pull request branches':
      'Всегда предлагать обновление веток пул-реквестов',
    'Allow auto-merge': 'Разрешить авто-слияние',
>>>>>>> b233700ae40a269a5e416996bfe03aa9284bb265
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

    // Sponsorship (Settings → General → Features)
    'Sponsorships help your community know how to financially support this repository.':
      'Спонсорство помогает вашему сообществу понять, как финансово поддержать этот репозиторий.',
    'Display a "Sponsor" button': 'Показывать кнопку «Sponsor»',
    'Add links to GitHub Sponsors or third-party methods your repository accepts for financial contributions to your project.':
      'Добавьте ссылки на GitHub Sponsors или другие способы финансовой поддержки вашего проекта.',
    'Set up sponsor button': 'Настроить кнопку спонсорства',

    // Archive program (чекбокс «Архивировать репозиторий»)
    'Include this code in the': 'Включить этот код в',
    'Include this code in the GitHub Archive Program.':
      'Включить этот код в программу GitHub Archive Program.',

    // Discussions (Settings → General → Features)
    'Discussions is the space for your community to have conversations, ask questions and post answers without opening issues.':
      'Обсуждения — место, где ваше сообщество может общаться, задавать вопросы и публиковать ответы, не создавая задачи.',
    'Get started with Discussions': 'Начать с обсуждениями',
    'Engage your community by having discussions right in your repository, where your community already lives':
      'Вовлеките сообщество, проводя обсуждения прямо в репозитории, где ваше сообщество уже есть',
    'Set up discussions': 'Настроить обсуждения',

    // Projects (описание фичи в Settings → General, обе формы апострофа + фрагменты по предложениям)
    'Projects on GitHub are created at the repository owner\u2019s level (organization or user) and can be linked to a repository\u2019s Projects tab. Projects are suitable for cross-repository development efforts such as feature work, complex product roadmaps or even Issue triage.':
      'Проекты на GitHub создаются на уровне владельца репозитория (организации или пользователя) и могут быть привязаны к вкладке Projects репозитория. Они подходят для задач, выходящих за рамки одного репозитория: работы над фичами, сложных продуктовых дорожных карт и даже для сортировки задач.',
    'Projects on GitHub are created at the repository owner\'s level (organization or user) and can be linked to a repository\'s Projects tab. Projects are suitable for cross-repository development efforts such as feature work, complex product roadmaps or even Issue triage.':
      'Проекты на GitHub создаются на уровне владельца репозитория (организации или пользователя) и могут быть привязаны к вкладке Projects репозитория. Они подходят для задач, выходящих за рамки одного репозитория: работы над фичами, сложных продуктовых дорожных карт и даже для сортировки задач.',
    // фрагменты (если GitHub разбил описание на отдельные узлы)
    'Projects on GitHub are created at the repository owner\u2019s level (organization or user) and can be linked to a repository\u2019s Projects tab.':
      'Проекты на GitHub создаются на уровне владельца репозитория (организации или пользователя) и могут быть привязаны к вкладке Projects репозитория.',
    'Projects on GitHub are created at the repository owner\'s level (organization or user) and can be linked to a repository\'s Projects tab.':
      'Проекты на GitHub создаются на уровне владельца репозитория (организации или пользователя) и могут быть привязаны к вкладке Projects репозитория.',
    'Projects are suitable for cross-repository development efforts such as feature work, complex product roadmaps or even Issue triage.':
      'Они подходят для задач, выходящих за рамки одного репозитория: работы над фичами, сложных продуктовых дорожных карт и даже для сортировки задач.',

    // Pull requests (описания раздела Features)
    'Pull requests allow others to suggest changes to your repository.':
      'Пул-реквесты позволяют другим предлагать изменения в вашем репозитории.',
    'Pull request permissions': 'Права на пул-реквесты',
    'Creation allowed by:': 'Кому разрешено создавать:',
    'Creation allowed by': 'Кому разрешено создавать',
    'All users': 'Все пользователи',
    'If restricted, pull requests will still be readable by everyone who can see this repository.':
      'При ограничении пул-реквесты всё равно будут доступны для чтения всем, кто видит этот репозиторий.',

    // Pull requests (секция merge)
    'When merging pull requests, you can allow any combination of merge commits, squashing, or rebasing. At least one option must be enabled. If you have linear history requirement enabled on any protected branch, you must enable squashing or rebasing.':
      'При слиянии пул-реквестов можно разрешить любую комбинацию merge-коммитов, squash и rebase. Должна быть включена хотя бы одна опция. Если на защищённой ветке требуется линейная история, нужно включить squash или rebase.',
    'Add all commits from the head branch to the base branch with a merge commit.':
      'Добавлять все коммиты из исходной ветки в базовую через merge-коммит.',
    'Combine all commits from the head branch into a single commit in the base branch.':
      'Объединить все коммиты из исходной ветки в один коммит в базовой ветке.',
    'Upon rebase and merge, commits from the head branch will be rebased and added to the base branch.':
      'При rebase и merge коммиты из исходной ветки будут перенесены (rebase) и добавлены в базовую ветку.',
    'Presented when merging a pull request with merge.':
      'Показывается при слиянии пул-реквеста через merge.',
    'Presented when merging a pull request with squash.':
      'Показывается при слиянии пул-реквеста через squash.',
    'Presented when merging a pull request with rebase.':
      'Показывается при слиянии пул-реквеста через rebase.',
    'Default message': 'Сообщение по умолчанию',
    'Default to PR title and commit details': 'По умолчанию — заголовок PR и детали коммитов',
    'Default to PR title and description': 'По умолчанию — заголовок и описание PR',
    'Default to pull request title and commit details':
      'По умолчанию — заголовок пул-реквеста и детали коммитов',
    'Default to pull request title and description':
      'По умолчанию — заголовок и описание пул-реквеста',
    'Default to pull request title': 'По умолчанию — заголовок пул-реквеста',
    'Pull request title and commit details': 'Заголовок пул-реквеста и детали коммитов',
    'Pull request title and description': 'Заголовок и описание пул-реквеста',
    'Pull request title': 'Заголовок пул-реквеста',
<<<<<<< HEAD
=======
    'Allow merge commits': 'Разрешить merge-коммиты',
    'Allow squash merging': 'Разрешить squash merge',
    'Allow rebase merging': 'Разрешить rebase merge',
>>>>>>> b233700ae40a269a5e416996bfe03aa9284bb265
    'Always suggest updating pull request branches':
      'Всегда предлагать обновлять ветки пул-реквестов',
    'Allow auto-merge': 'Разрешить автослияние',
    'Waits for merge requirements to be met and then merges automatically.':
      'Дожидается выполнения условий слияния и сливает автоматически.',
<<<<<<< HEAD
=======
    'Automatically delete head branches': 'Автоматически удалять исходные ветки',
>>>>>>> b233700ae40a269a5e416996bfe03aa9284bb265
    'Deleted branches will remain in the repository for 90 days.':
      'Удалённые ветки сохраняются в репозитории 90 дней.',

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

    // PR — обновление веток, автослияние, очистка
    'Control how and when users are prompted to update their branches if there are new changes available in the base branch.':
      'Настройте, когда и как пользователям предлагать обновлять свои ветки при появлении новых изменений в базовой ветке.',
    'You can allow setting pull requests to merge automatically once all required reviews and status checks have passed.':
      'Можно разрешить автоматическое слияние пул-реквестов после того, как пройдут все обязательные ревью и проверки статусов.',
    'After pull requests are merged, you can have head branches deleted automatically.':
      'После слияния пул-реквестов исходные ветки могут удаляться автоматически.',
    'Deleted branches will still be able to be restored.':
      'Удалённые ветки можно будет восстановить.',
    'Learn more': 'Подробнее',
    'Learn more about this setting': 'Подробнее об этой настройке',
    'feedback': 'отзыв',
    'send us your': 'отправьте нам',
    ', and send us your': ', и отправьте нам',

    // Commits — раздел Settings → General
    'Commits': 'Коммиты',
    'Enabling this setting will require contributors to sign off on commits made through GitHub\u2019s web interface. Signing off is a way for contributors to affirm that their commit complies with the repository\u2019s terms, commonly the':
      'Если включить эту настройку, контрибьюторы должны будут подписывать коммиты, сделанные через веб-интерфейс GitHub. Подпись — это способ подтвердить, что коммит соответствует условиям репозитория, обычно это',
    'Enabling this setting will require contributors to sign off on commits made through GitHub\'s web interface. Signing off is a way for contributors to affirm that their commit complies with the repository\'s terms, commonly the':
      'Если включить эту настройку, контрибьюторы должны будут подписывать коммиты, сделанные через веб-интерфейс GitHub. Подпись — это способ подтвердить, что коммит соответствует условиям репозитория, обычно это',
    'Learn more about signing off on commits': 'Подробнее о подписи коммитов',
    'Allow comments on individual commits': 'Разрешить комментарии к отдельным коммитам',
    'Enabling this setting will allow anyone who can view this repository to add':
      'Если включить эту настройку, любой, кто может просматривать этот репозиторий, сможет добавлять',
    'commit comments': 'комментарии к коммитам',
    'Existing commit comments are not affected by this setting and will remain viewable, editable, and deletable.':
      'На существующие комментарии настройка не влияет — их по-прежнему можно просматривать, редактировать и удалять.',

    // Archives — раздел Settings → General
    'When creating source code archives, you can choose to include files stored using Git LFS in the archive.':
      'При создании архивов исходного кода можно включать в архив файлы из Git LFS.',
    'Include Git LFS objects in archives': 'Включать объекты Git LFS в архивы',
    'Git LFS usage in archives is billed at the same rate as usage with the client.':
      'Использование Git LFS в архивах тарифицируется так же, как и при использовании через клиент.',

    // Pushes — раздел Settings → General
    'Pushes': 'Пуши',
    'Limit how many branches and tags can be updated in a single push':
      'Ограничить, сколько веток и тегов можно обновить одним пушем',
    'Pushes will be rejected if they attempt to update more than this.':
      'Пуши будут отклонены, если в них обновляется больше указанного.',

    // Issues — раздел Settings → General
    'Issues': 'Задачи',
    'After merging a pull request, linked issues can be closed automatically.':
      'После слияния пул-реквеста связанные задачи могут закрываться автоматически.',
    'Auto-close issues with merged linked pull requests':
      'Автозакрытие задач при слиянии связанных пул-реквестов',
    'Whenever linked pull requests have merged, auto-close the issue.':
      'Когда связанные пул-реквесты будут слиты, задача закроется автоматически.',

    // Pages / Environments
    'GitHub Pages': 'GitHub Pages',
    'Your GitHub Pages site is currently being built from the':
      'Ваш сайт GitHub Pages сейчас собирается из ветки',
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

    // === Личные настройки: /settings/profile и связанные разделы ===
    // Сайдбар разделов аккаунта
    'Profile settings': 'Настройки профиля',
    'Overview': 'Обзор',
    'Contributions & activity': 'Вклады и активность',
    'Security': 'Безопасность',
    'Code, planning, and automation': 'Код, планирование и автоматизация',
    'Code security': 'Безопасность кода',
    'Saved replies': 'Сохранённые ответы',
    'Your personal account': 'Ваш личный аккаунт',

    // Биллинг
    'Billing and licensing': 'Оплата и лицензии',
    'Additional billing details': 'Дополнительная платёжная информация',
    'Budgets and alerts': 'Бюджеты и оповещения',
    'Education benefits': 'Образовательные льготы',
    'Payment history': 'История платежей',
    'Payment information': 'Платёжные данные',
    'Premium request analytics': 'Аналитика premium-запросов',
    'Usage': 'Использование',

    // Публичный профиль — поля и подписи
    'Available for hire': 'Готов(а) к работе',
    'Display current local time': 'Показывать текущее местное время',
    'Other users will see the time difference from their local time.':
      'Другие пользователи увидят разницу во времени относительно своего местного.',
    'Time zone': 'Часовой пояс',
    'Preferred spoken language': 'Предпочитаемый язык общения',
    'Select a verified email to display': 'Выберите подтверждённый email для отображения',
    'Connect your ORCID iD': 'Подключить ваш ORCID iD',
    'Update preferences': 'Сохранить настройки',
    'Don\u2019t specify': 'Не указывать',
    "Don't specify": 'Не указывать',

    // Местоимения
    'he/him': 'он/его',
    'she/her': 'она/её',
    'they/them': 'они/их',

    // Фото профиля
    'Remove photo': 'Удалить фото',

    // Achievements / Highlights / Activity
    'Show Achievements on my profile': 'Показывать достижения в моём профиле',
    'Your achievements will be shown on your profile.':
      'Ваши достижения будут отображаться в профиле.',
    'Your contribution graph, achievements, and activity overview will show your private contributions without revealing any repository or\n              organization information.':
      'Ваш график вкладов, достижения и обзор активности будут учитывать приватные вклады, не раскрывая информацию о репозитории или организации.',

    // Имя
    'Your name may appear around GitHub where you contribute or are mentioned.\n                    You can remove it at any time.':
      'Ваше имя может появляться на GitHub везде, где вы делаете вклад или где вас упоминают. Вы можете удалить его в любой момент.',

    // Дисклеймер по страничке
    'All of the fields on this page are optional and can be deleted at any\n                  time, and by filling them out, you\u2019re giving us consent to share this\n                  data wherever your user profile appears. Please see our':
      'Все поля на этой странице необязательны и могут быть удалены в любой момент. Заполняя их, вы даёте согласие на публикацию этих данных везде, где отображается ваш профиль. См. нашу',
    'All of the fields on this page are optional and can be deleted at any\n                  time, and by filling them out, you\'re giving us consent to share this\n                  data wherever your user profile appears. Please see our':
      'Все поля на этой странице необязательны и могут быть удалены в любой момент. Заполняя их, вы даёте согласие на публикацию этих данных везде, где отображается ваш профиль. См. нашу',
    ',\n        or read more about it at our': ', или подробнее в нашем',
    'privacy statement': 'заявлении о конфиденциальности',
    'to learn more about how we use this information.':
      ', чтобы узнать, как мы используем эти данные.',

    // Email приватность / company / social link
    'You have set your email address to private. To toggle email privacy,\n                      go to':
      'Вы указали свой email как приватный. Чтобы изменить этот параметр, перейдите в',
    'email settings': 'настройки email',
    'and uncheck "Keep my email address private."':
      'и снимите флажок «Keep my email address private».',
    'and uncheck \u201cKeep my email address private.\u201d':
      'и снимите флажок «Keep my email address private».',
    'other users and\n                    organizations to link to them.':
      'других пользователей и организаций, чтобы связать их с профилем.',
    'your company\u2019s GitHub\n                        organization to link it.':
      'GitHub-организацию вашей компании, чтобы связать её с профилем.',
    "your company's GitHub\n                        organization to link it.":
      'GitHub-организацию вашей компании, чтобы связать её с профилем.',

    // Приватность вклада
    // Точная DOM-строка, с переносом и 12 пробелами перед «followers, stars...»
    'Enabling this will hide your contributions and activity from your GitHub profile and from social features like\n            followers, stars, feeds, leaderboards and releases.':
      'Если включить, ваши вклады и активность будут скрыты из вашего профиля на GitHub, а также из соцфункций — подписчиков, звёзд, лент, таблиц лидеров и релизов.',

    // Trending / языки
    'Trending settings': 'Настройки «В тренде»',
    'Trending Repositories': 'Репозитории «В тренде»',
    "We'll use this language preference to filter the trending repository lists on":
      'Мы будем использовать этот язык при фильтрации списков популярных репозиториев на',
    'We\u2019ll use this language preference to filter the trending repository lists on':
      'Мы будем использовать этот язык при фильтрации списков популярных репозиториев на',

    // Save jobs profile
    'Save jobs profile': 'Сохранить профиль для работы',

    // Разработчикам (подвал страницы)
    'Building an application, service, or tool that integrates with GitHub?':
      'Создаёте приложение, сервис или инструмент, интегрирующийся с GitHub?',


    // === Добавки по скриншоту: скрытые кнопки/секции на /settings/profile ===
    // Приватность профиля
    'Make profile private and hide activity': 'Сделать профиль приватным и скрыть активность',
    'Include private contributions on my profile': 'Учитывать приватные вклады в моём профиле',
    'Read more': 'Подробнее',

    // GitHub Developer Program — тексты вокруг ссылок
    'GitHub Developer Program': 'GitHub Developer Program',
    'Join the GitHub Developer Program': 'Присоединиться к GitHub Developer Program',
    'GitHub developer program': 'GitHub Developer Program',

    // Секция Jobs profile
    'Jobs profile': 'Профиль для поиска работы',

    // Местоимения / кастомное поле
    'Custom': 'Другое',

    // Язык / соцсети
    'No Preference': 'Без предпочтений',
    'Hometown': 'Родной город',

    // Связки-фрагменты, которые GitHub разбил на отдельные текстовые узлы
    '@mention': '@упомянуть',
    'You can': 'Вы можете',
    'our': 'нашу',
    'page.': 'странице.',

    // ORCID
    'ORCID iD': 'ORCID iD',
    'ORCID provides a persistent identifier - an ORCID iD - that distinguishes you from every other researcher.':
      'ORCID — стойкий идентификатор (ORCID iD), отличающий вас от любого другого исследователя.',

    // Заголовок секции с именем пользователя (пример: «(SadreevArt91)»)
    'Go to your personal profile': 'Перейти в ваш личный профиль',

    // Поисковая модалка — подсказки/кнопки
<<<<<<< HEAD
    'Query': 'Запрос',
=======
    'Saved searches': 'Сохранённые поисковые запросы',
    'Use saved searches to filter your results more quickly':
      'Сохранённые поисковые запросы помогут быстрее фильтровать результаты',
    'Query': 'Запрос',
    'To see all available qualifiers, see our': 'Все доступные уточнения — в нашей',
>>>>>>> b233700ae40a269a5e416996bfe03aa9284bb265
    'Create saved search': 'Создать сохранённый поиск',
    '0 suggestions.': '0 подсказок.',
    'Give feedback': 'Оставить отзыв',
    'Provide feedback': 'Оставить отзыв',
    'Submit feedback': 'Отправить отзыв',
<<<<<<< HEAD
=======
    'We read every piece of feedback, and take your input very seriously.':
      'Мы читаем каждый отзыв и внимательно относимся к вашим замечаниям.',

>>>>>>> b233700ae40a269a5e416996bfe03aa9284bb265
    // Горячие клавиши (подсказки в командном пальете)
    'g then d': 'g, затем d',
    'g then p': 'g, затем p',
    'g then i': 'g, затем i',
    'forward slash': 'слеш',
    'Type': 'Введите',
    'to search': 'для поиска',

    // Флеш-сообщения GitHub (перелогин в соседней вкладке и т.п.)
<<<<<<< HEAD
    // Скип-линк и общие
    // === /settings/security — Password and authentication ===
    'Change password': 'Изменить пароль',
    'Update password': 'Обновить пароль',
    'Forgot password?': 'Забыли пароль?',
    'I forgot my password': 'Я забыл пароль',
    'Two-factor authentication is not enabled yet.': 'Двухфакторная аутентификация ещё не включена.',
    'Disable two-factor authentication': 'Отключить двухфакторную аутентификацию',
    'Authenticator app': 'Приложение-аутентификатор',
    'SMS/Text message': 'SMS',
    'Recovery codes': 'Коды восстановления',
    'View recovery codes': 'Показать коды восстановления',
    'Generate new recovery codes': 'Сгенерировать новые коды восстановления',
    'Add a passkey': 'Добавить passkey',
    'Active sessions': 'Активные сессии',
    'Web sessions': 'Веб-сессии',
    'Revoke session': 'Закрыть сессию',
    'Sign out': 'Выйти',
    'Sign in': 'Войти',
    'Signed in as': 'Вошли как',

    // === /settings/keys — SSH and GPG keys ===
    'SSH and GPG keys': 'SSH- и GPG-ключи',
    'SSH keys': 'SSH-ключи',
    'GPG keys': 'GPG-ключи',
    'Authentication keys': 'Ключи аутентификации',
    'Signing keys': 'Ключи подписи',
    'New SSH key': 'Новый SSH-ключ',
    'New GPG key': 'Новый GPG-ключ',
    'Add SSH key': 'Добавить SSH-ключ',
    'Add GPG key': 'Добавить GPG-ключ',
    'Key': 'Ключ',
    'Key type': 'Тип ключа',
    'Authentication Key': 'Ключ аутентификации',
    'Signing Key': 'Ключ подписи',
    'There are no SSH keys associated with your account.':
      'К вашему аккаунту не привязан ни один SSH-ключ.',
    'There are no GPG keys associated with your account.':
      'К вашему аккаунту не привязан ни один GPG-ключ.',
    'Learn how to generate a new SSH key': 'Как сгенерировать новый SSH-ключ',
    'Vigilant mode': 'Режим бдительности',
    'Flag unsigned commits as unverified': 'Помечать неподписанные коммиты как непроверенные',

    // === /settings/emails ===
    'Primary email address': 'Основной email',
    'Backup email address': 'Резервный email',
    'Add email address': 'Добавить email',
    'Add an email address': 'Добавить email',
    'Email preferences': 'Настройки email',
    'Keep my email addresses private': 'Скрывать мои email-адреса',
    'Block command line pushes that expose my email':
      'Блокировать пуши из командной строки, раскрывающие мой email',
    'Receive direct mentions, replies and team mentions':
      'Получать прямые упоминания, ответы и упоминания команды',
    'Verify email address': 'Подтвердить email',
    'Resend verification email': 'Отправить письмо для подтверждения ещё раз',
    'Unverified': 'Не подтверждён',

    // === /settings/notifications ===
    'Custom routing': 'Пользовательская маршрутизация',
    'Automatically watch repositories': 'Автоматически отслеживать репозитории',
    'Automatically watch teams': 'Автоматически отслеживать команды',
    'Ignoring': 'Игнорирую',
    'Email notification preferences': 'Настройки email-уведомлений',
    'Comments on Issues and Pull Requests': 'Комментарии к задачам и пул-реквестам',
    'Pull Request reviews': 'Ревью пул-реквестов',
    'Pull Request pushes': 'Пуши в пул-реквесты',
    'Your own updates': 'Ваши собственные обновления',
    'Dependabot alerts': 'Оповещения Dependabot',
    'Actions': 'Actions',

    // === /settings/appearance ===
    'Theme preferences': 'Настройки темы',
    'Theme mode': 'Режим темы',
    'Single theme': 'Одна тема',
    'Sync with system': 'Синхронизировать с системой',
    'Day theme': 'Светлая тема',
    'Night theme': 'Тёмная тема',
    'Light default': 'Светлая',
    'Light high contrast': 'Светлая контрастная',
    'Light Protanopia & Deuteranopia': 'Светлая для протанопии/дейтеранопии',
    'Light Tritanopia': 'Светлая для тританопии',
    'Dark default': 'Тёмная',
    'Dark high contrast': 'Тёмная контрастная',
    'Dark dimmed': 'Тёмная приглушённая',
    'Dark Protanopia & Deuteranopia': 'Тёмная для протанопии/дейтеранопии',
    'Dark Tritanopia': 'Тёмная для тританопии',
    'System font': 'Системный шрифт',
    'Use the system font': 'Использовать системный шрифт',
    'Markdown editor font': 'Шрифт редактора Markdown',
    'Emoji skin tone preference': 'Оттенок кожи эмодзи',
    'Tab size preference': 'Размер табуляции',

    // === /settings/applications ===
    'Revoke access': 'Отозвать доступ',
    'No authorized applications': 'Разрешённых приложений нет',

    // === /settings/developers ===
    'OAuth Apps': 'OAuth Apps',
    'Personal access tokens': 'Персональные токены доступа',
    'Fine-grained tokens': 'Токены с тонкой настройкой',
    'Tokens (classic)': 'Токены (классические)',
    'Revoke all': 'Отозвать все',
    'Revoke': 'Отозвать',
    'Delete token': 'Удалить токен',

    // === /settings/billing ===
    'Billing and plans': 'Оплата и тарифы',
    'Plans and usage': 'Тарифы и расход',
    'Payment method': 'Способ оплаты',
    'Billing history': 'История платежей',
    'Spending limit': 'Лимит расходов',
    'Current plan': 'Текущий тариф',
    'Downgrade': 'Сменить на меньший тариф',
    'Start free trial': 'Начать бесплатный период',
    'View invoice': 'Просмотреть счёт',
    'Billing cycle': 'Платёжный цикл',
    'Monthly': 'Ежемесячно',
    'Yearly': 'Ежегодно',
=======
    'You signed in with another tab or window.': 'Вы вошли в другой вкладке или окне.',
    'You signed out in another tab or window.': 'Вы вышли в другой вкладке или окне.',
    'You switched accounts on another tab or window.': 'Вы сменили аккаунт в другой вкладке или окне.',
    'to refresh your session.': 'для обновления сессии.',
    'You can\u2019t perform that action at this time.': 'Сейчас выполнить это действие нельзя.',
    "You can't perform that action at this time.": 'Сейчас выполнить это действие нельзя.',

    // Скип-линк и общие
    'Footer navigation': 'Навигация подвала',
>>>>>>> b233700ae40a269a5e416996bfe03aa9284bb265

  };

  const attributes = {};


  // "Source" в настройках GitHub Pages = "Источник" (в repo.js "Source" = "Исходник" — вкладка)
  // "Email" в канале уведомлений = "По email" (в common.js "Email" = "Электронная почта" — label)
  const contextual = [
    {
      selector: '#pages-form, .settings-next form, [data-target*="pages"]',
      strings: {
        'Source': 'Источник',
      },
    },
    {
      selector: '.notifications-list, [data-testid="notification-channels"], .js-notifications-email',
      strings: {
        'Email': 'По email',
      },
    },
    // «Сохранено» — статус кнопки Save… только внутри форм настроек (чтобы не ломать «Saved» в Inbox)
    {
      selector: 'form, .settings-next, [data-hpc], section[aria-labelledby]',
      strings: {
        'Saved': 'Сохранено',
      },
    },
<<<<<<< HEAD
    // 'Title' в форме SSH/GPG ключа — лучше «Название», но в общем словаре это «Заголовок».
    // Ограничиваем по форме ключа.
    {
      selector: '#ssh_key_form, #gpg_key_form, form[action*="/settings/keys"], form[action*="/settings/gpg"], form[action*="/settings/ssh"]',
      strings: {
        'Title': 'Название',
      },
    },
=======
>>>>>>> b233700ae40a269a5e416996bfe03aa9284bb265
  ];

  root.GitHubRu.dict = root.GitHubRu.dict || {};
  root.GitHubRu.dict.settings = { strings, attributes, contextual };
})(typeof window !== 'undefined' ? window : globalThis);
