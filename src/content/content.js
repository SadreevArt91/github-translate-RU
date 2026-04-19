// content/content.js — точка входа content-скрипта.
// Запускается с run_at: document_start. Подписывается на настройки,
// строит индекс, навешивает MutationObserver, обрабатывает SPA-переходы Turbo.

(function (root) {
  const ns = root.GitHubRu;
  const translator = ns.translator;

  const DEFAULTS = {
    enabled: true,
    level: 'full',
    showOriginal: false,
    userExceptions: [],
    reportMode: false,
  };

  // Pre-hide: добавляем класс сразу, чтобы до первого перевода body был скрыт.
  // Сделано в prehide.css. Здесь только снимаем, когда готовы.
  document.documentElement.classList.add('ghru-prehide');

  // Безопасность: снимем pre-hide не позже чем через 1500мс в любом случае,
  // чтобы не «застрять» при неполадках.
  const fallbackUnhide = setTimeout(() => {
    document.documentElement.classList.remove('ghru-prehide');
  }, 1500);

  async function loadSettings() {
    try {
      const stored = await chrome.storage.sync.get(DEFAULTS);
      return { ...DEFAULTS, ...stored };
    } catch (_) {
      return DEFAULTS;
    }
  }

  function applyInitial(settings) {
    translator.setIndex(settings.level);
    translator.setSettings({
      enabled: settings.enabled,
      showOriginal: settings.showOriginal,
      userExceptions: settings.userExceptions,
      reportMode: settings.reportMode,
    });
    translator.startObserver();
    if (settings.enabled) {
      translator.applyAll();
    }
  }

  function onDomReady() {
    // Первичный проход — как только DOM доступен
    if (translator.state.enabled) {
      translator.applyAll();
    }
    document.documentElement.classList.remove('ghru-prehide');
    clearTimeout(fallbackUnhide);
  }

  // SPA-навигация GitHub (Turbo). MutationObserver сам отлавливает добавления,
  // но Turbo при render заменяет большие куски DOM — после этого имеет смысл
  // явно прогнать новый <main>. Делаем это с throttle, чтобы не дублировать.
  let reapplyScheduled = false;
  const reapply = () => {
    if (!translator.state.enabled) return;
    if (reapplyScheduled) return;
    reapplyScheduled = true;
    setTimeout(() => {
      reapplyScheduled = false;
      translator.applyAll();
    }, 50);
  };
  document.addEventListener('turbo:load', reapply);
  document.addEventListener('turbo:render', reapply);
  document.addEventListener('turbo:frame-load', reapply);
  document.addEventListener('pjax:end', reapply);
  document.addEventListener('soft-nav:end', reapply);

  // Реакция на смену настроек в storage
  chrome.storage.onChanged.addListener((changes, area) => {
    if (area !== 'sync') return;
    const patch = {};
    for (const [key, { newValue }] of Object.entries(changes)) {
      patch[key] = newValue;
    }
    translator.setSettings(patch);
  });

  // Приём сообщений из popup / background
  chrome.runtime.onMessage.addListener((msg) => {
    if (!msg) return;
    if (msg.type === 'REAPPLY') reapply();
    if (msg.type === 'TOGGLE') {
      chrome.storage.sync.get('enabled').then(({ enabled }) => {
        chrome.storage.sync.set({ enabled: !enabled });
      });
    }
  });

  // Инициализация
  loadSettings().then(settings => {
    applyInitial(settings);
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', onDomReady, { once: true });
    } else {
      onDomReady();
    }
  });
})(typeof window !== 'undefined' ? window : globalThis);
