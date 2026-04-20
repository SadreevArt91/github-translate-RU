// dictionary/discussions.js — страница /<repo>/discussions.
// Основные категории и элементы интерфейса обсуждений.
(function (root) {
  const strings = {
    // Заголовок / создание
    'New discussion': 'Новое обсуждение',
    'Start a new discussion': 'Начать новое обсуждение',
    'Create discussion': 'Создать обсуждение',
    'Start discussion': 'Начать обсуждение',

    // Навигация/категории (оставляем семантически близкие переводы)
    'All discussions': 'Все обсуждения',
    'Announcements': 'Объявления',
    'Ideas': 'Идеи',
    'Polls': 'Опросы',
    'Q&A': 'Вопросы и ответы',
    'Show and tell': 'Покажи и расскажи',

    // Статусы
    'Answered': 'Отвечено',
    'Unanswered': 'Без ответа',
    'Mark as answer': 'Отметить как ответ',
    'Unmark as answer': 'Снять отметку ответа',
    'Answer': 'Ответ',
    'Pinned discussions': 'Закреплённые обсуждения',
    'Pin discussion': 'Закрепить обсуждение',
    'Unpin discussion': 'Открепить обсуждение',

    // Голосование / реакции
    'Upvote': 'Проголосовать',
    'Downvote': 'Голос против',
    'upvote': 'голос за',
    'upvotes': 'голосов за',
    'comment': 'комментарий',
    'comments': 'комментариев',

    // Фильтры / сортировка
    'Filter by category': 'Фильтр по категориям',
    'Filter by label': 'Фильтр по меткам',
    'Top': 'Популярные',
    'Top: Past day': 'Популярные: за день',
    'Top: Past week': 'Популярные: за неделю',
    'Top: Past month': 'Популярные: за месяц',
    'Top: Past year': 'Популярные: за год',
    'Top: All': 'Популярные: за всё время',

    // Пустое состояние
    'Let\u2019s start a discussion!': 'Начнём обсуждение!',
    'Let\'s start a discussion!': 'Начнём обсуждение!',
    'Start a conversation with your community':
      'Начните диалог с вашим сообществом',
    'No discussions found': 'Обсуждения не найдены',
    'There are no discussions to show': 'Обсуждений нет',
    'Welcome to discussions!': 'Добро пожаловать в обсуждения!',

    // Форма нового обсуждения
    'Select a category': 'Выберите категорию',
    'Discussion title': 'Заголовок обсуждения',
    'Write your discussion': 'Опишите обсуждение',
    'Select': 'Выбрать',

    // Действия с обсуждением
    'Edit discussion': 'Изменить обсуждение',
    'Delete discussion': 'Удалить обсуждение',
    'Transfer discussion': 'Перенести обсуждение',
    'Convert to issue': 'Преобразовать в задачу',
  };

  const attributes = {
    'placeholder': {
      'Search all discussions': 'Поиск по обсуждениям',
    },
  };

  // "Start" в блоке обсуждений = "Начать" (а не просто "Старт")
  const contextual = [
    {
      selector: '[data-testid="discussions-list"], .js-discussions-list, main [data-pjax-container] [data-hpc]',
      strings: {
        'Start a discussion': 'Начать обсуждение',
      },
    },
    // Категория "General" в меню обсуждений (не "Общие", как в Actions settings)
    {
      selector: 'nav[aria-label*="iscussion" i], [data-testid="discussions-categories-nav"], .js-discussions-category-nav, a[href*="/discussions/categories/"]',
      strings: {
        'General': 'Общее',
      },
    },
  ];

  root.GitHubRu.dict = root.GitHubRu.dict || {};
  root.GitHubRu.dict.discussions = { strings, attributes, contextual };
})(typeof window !== 'undefined' ? window : globalThis);
