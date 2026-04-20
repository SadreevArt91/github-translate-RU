# Журнал изменений

Формат основан на [Keep a Changelog](https://keepachangelog.com/ru/1.1.0/),
проект следует [SemVer](https://semver.org/lang/ru/).

## [1.1.0] — 2026-04-20

### Добавлено

- Новый модуль словаря **`discussions.js`** — страница `/<repo>/discussions`:
  категории (Announcements, General, Ideas, Polls, Q&A, Show and tell),
  статусы (Answered/Unanswered, Mark as answer), голосование, закрепление,
  формы нового обсуждения, пустые состояния.
- `settings.js`: разделы **Security**, **SSH/GPG keys**, **Emails**,
  **Notifications**, **Appearance** (темы, цветовые варианты, шрифты),
  **Applications** (OAuth/GitHub Apps), **Developer settings**
  (fine-grained и classic токены), **Billing and plans**.
- `profile.js`: страницы `/stars` и `/repositories` с фильтрами Type/Language,
  раздел **Gists** (All/Starred/Forked, пустое состояние, кнопки),
  **Sponsors** (Become a sponsor, Sponsoring, тип подписки),
  **Organizations** (фильтры Members/Role, вкладки Teams, People,
  Projects, Packages, Audit log, Verified domains и настройки).
- `explore.js`: переведены `/marketplace` (Featured, Apps, AI, Models, Popular)
  и `/marketplace/new` (листинг инструмента, About GitHub Marketplace,
  Adding webhooks, блок требований).
- `repo.js`: страница `/contribute` (Contribute to…, good first issue)
  и пустое состояние `/projects`.
- `pr.js`: пустое состояние `/pulls` и фильтр **Reviews**
  (Review required, Approved review, Reviewed by you, Not reviewed by you,
  Awaiting review from you).
- `issues.js`: попапы фильтров **Filter by author/assignee/label/project/
  milestone/reviewer** вместе с placeholder'ами.
- `actions.js`: страница `/actions/new` (Get started, Suggested, категории,
  блок «Learn more about GitHub Actions»).
- `insights.js`: пустое состояние `/forks`, переключатель «Switch to tree view».
- `common.js`: сообщения фильтров «Try adjusting your filters…», лоадер
  «Crunching the latest data, just for you. Hang tight…».

### Изменено

- Версия расширения в `manifest.json`: `1.0.0` → `1.1.0`.
- В `src/dictionary/index.js` обновлён список `MODULES` и уровень
  **Стандартный** дополнен `discussions`.
- Обновлён `README.md`: добавлена запись архитектуры (discussions.js,
  search.js, explore.js) и блок «Что нового в 1.1.0».

### Исправлено

- Конфликты переводов между модулями: `Admin` теперь единый (из `common.js`),
  `General` разведён контекстно (Actions «Общие» vs Discussions «Общее»),
  `Type`/`Language` — локально в `profile.js` для списков репозиториев.
- Убраны дубли строк в `actions.js` (Security, Show all, Code scanning, By).
- `insights.js`: «No one has forked this repository yet» без точки —
  соответствует реальной разметке GitHub.

## [1.0.0] — 2026-04-19

Первый публичный релиз.

- Базовый перевод навигации, репозитория, PR, Issues, Actions UI, Settings,
  Profile, Insights, Security, Notifications, Search.
- Движок: Manifest V3, TreeWalker + MutationObserver, Turbo-события, pre-hide
  без мигания английским текстом, soft-rollback через WeakMap.
- Три уровня перевода: минимальный, стандартный, полный.
- Popup и страница настроек, горячая клавиша **Alt + Shift + L**.
