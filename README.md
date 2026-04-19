# GitHub на русском

Браузерное расширение (Manifest V3) для перевода интерфейса GitHub на русский язык. Работает с `github.com`, `*.github.com` и `github.dev`.

Главный принцип: **переводим только UI, не трогаем код, имена и пользовательский контент.**

## Установка (для разработки)

### Chrome / Edge / Brave

1. Откройте `chrome://extensions`.
2. Включите «Режим разработчика».
3. Нажмите «Загрузить распакованное» и выберите папку с этим проектом.
4. Откройте любую страницу GitHub и обновите её.

### Firefox

Manifest V3 в Firefox имеет нюансы. Для разработки:

1. Откройте `about:debugging#/runtime/this-firefox`.
2. Нажмите «Загрузить временное дополнение…» и выберите `manifest.json`.

## Что переводится

- Навигация (шапка, меню, dashboard).
- Кнопки и формы (Save, Cancel, Create…).
- Метки разделов на странице репозитория, PR и Issues.
- Сообщения чек-листов и CI, фильтры, пагинация.
- Подписи в Settings (личных, репозитория, организации).
- Вкладка Insights (Pulse, Contributors, Community, Traffic, Commits, Code frequency, Dependency graph, Network, Forks, Actions metrics).
- Вкладка Security (Overview, Dependabot, Code scanning, Secret scanning, Policy, Advisories).
- Раздел уведомлений.
- Относительные даты («2 days ago» → «2 дня назад»).

## Что НЕ переводится (намеренно)

- Содержимое `<code>`, `<pre>`, diff, blob и любых редакторов кода.
- README, wiki, тело issues и PR, комментарии.
- Имена репозиториев, веток, тегов, файлов.
- Имена пользователей и организаций (`@username`, `org/repo`).
- SHA-хэши, номера PR/issue, URL.
- Бренды и команды Git (`git commit`, `push`, `merge`, `rebase`, `HEAD`, `main`, `origin`).
- Названия продуктов: `GitHub Actions`, `Codespaces`, `Copilot`, `Dependabot`, `Marketplace`, `Pages`, `Discussions`, `Packages`, `Projects`, `Sponsors`.

## Как пользоваться

- **Иконка расширения** — popup с быстрым переключателем перевода и уровнем.
- **Alt + Shift + L** — горячая клавиша toggle.
- **Страница настроек** — выбор уровня, режим «показать оригинал в скобках», список исключений.

### Уровни перевода

- **Минимальный** — только навигация и общие кнопки.
- **Стандартный** — плюс репозитории, задачи, пул-реквесты, профиль, уведомления, Insights.
- **Полный** — включая Settings, GitHub Actions и Security.

## Архитектура

```
github-russian/
├── manifest.json              — Manifest V3 + content scripts
├── background.js              — service worker (настройки, hotkey)
├── src/
│   ├── utils/
│   │   └── plural.js          — русская плюрализация
│   ├── dictionary/
│   │   ├── common.js          — общие кнопки и формы
│   │   ├── nav.js             — шапка и dashboard
│   │   ├── repo.js            — страница репозитория
│   │   ├── pr.js              — Pull Requests
│   │   ├── issues.js          — Issues
│   │   ├── actions.js         — GitHub Actions
│   │   ├── settings.js        — Settings (личные, репо, организация)
│   │   ├── profile.js         — Профиль
│   │   ├── notifications.js   — Inbox
│   │   ├── insights.js        — вкладка Insights
│   │   ├── security.js        — вкладка Security
│   │   ├── time.js            — относительное время (regex)
│   │   ├── user-extras.js     — место под пользовательские добавки
│   │   └── index.js           — агрегатор + уровни
│   ├── content/
│   │   ├── prehide.css        — pre-hide, чтобы не мигало по-английски
│   │   ├── guard.js           — isTranslatable(), блеклист
│   │   ├── translator.js      — TreeWalker + MutationObserver
│   │   └── content.js         — точка входа
│   ├── popup/                 — popup
│   └── options/               — страница настроек
├── icons/                     — иконки (положите свои 16/48/128)
├── tools/                     — вспомогательные скрипты сверки словаря
├── README.md
├── CONTRIBUTING.md
├── GLOSSARY.md
└── LICENSE
```

### Как работает движок

1. На `document_start` content-скрипт добавляет класс `ghru-prehide`, который скрывает body.
2. Из `chrome.storage.sync` читаются настройки и собирается индекс перевода под выбранный уровень.
3. По DOM проходит `TreeWalker`, заменяет текстовые узлы и переводимые атрибуты (`aria-label`, `title`, `placeholder`, `alt`, `value` у submit-кнопок, `data-confirm`).
4. Перед заменой каждый узел проверяется через `isTranslatable()` — у нас глубокий blacklist по тегам, селекторам и атрибуту `[data-ghru-skip]`.
5. После первого прохода `ghru-prehide` снимается.
6. `MutationObserver` ловит SPA-обновления и точечно дотранслирует новые поддеревья. Также подписаны Turbo-события (`turbo:load`, `turbo:render`, `turbo:frame-load`) и оборачивается `history.pushState/replaceState`.
7. Уже переведённые узлы отмечаются (`WeakSet`), а оригиналы сохраняются в `WeakMap` — это позволяет мягко откатывать перевод при отключении.

## Список тест-кейсов (ручная проверка)

1. Главная (dashboard) — лента, сайдбар.
2. Страница репозитория — все вкладки.
3. Просмотр файла — код **не** переведён, имя файла **не** переведено.
4. Просмотр PR — diff и тело PR **не** переведены, UI вокруг — да.
5. Создание Issue/PR — placeholder'ы переведены, ввод в textarea **не** трогается.
6. Settings (личные + репо).
7. Поиск — фасеты переведены, результаты — нет.
8. Actions — UI переведён, имена workflow и логи **не** переведены.
9. Insights — Pulse, Contributors, Community, Traffic и т.д.
10. Security — Overview и под-вкладки.
11. Discussions — UI, контент — нет.
12. Profile — UI, био и закреплённые репозитории — нет.
13. Organization, Teams.
14. Copilot / Codespaces — названия **не** переводятся.
15. Gist — UI.
16. Notifications inbox.

## Лицензия

MIT — см. `LICENSE`.
