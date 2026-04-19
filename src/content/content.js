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

  // Pre-hide: скрыли body через prehide.css, снимем класс после первого перевода
  document.documentElement.classList.add('ghru-prehide');

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
    if (translator.state.enabled) {
      translator.applyAll();
    }
    document.documentElement.classList.remove('ghru-prehide');
    clearTimeout(fallbackUnhide);
  }

  // SPA-переходы GitHub. Наблюдаем только за самыми "финальными" событиями,
  // чтобы не запускать applyAll по пять раз за навигацию. MutationObserver
  // и так подхватит все добавления — turbo-события нужны только для
  // финальной подчистки после массовой замены DOM.
  //
  // turbo:load    — полный переход по странице (после completion)
  // turbo:frame-load — загрузка <turbo-frame>
  // pjax:end      — legacy pjax
  let reapplyTimer = null;
  const reapply = () => {
    if (!translator.state.enabled) return;
    if (reapplyTimer) return;
    reapplyTimer = setTimeout(() => {
      reapplyTimer = null;
      translator.applyAll();
    }, 100);
  };
  document.addEventListener('turbo:load', reapply);
  document.addEventListener('turbo:frame-load', reapply);
  document.addEventListener('pjax:end', reapply);

  // Реакция на смену настроек
  chrome.storage.onChanged.addListener((changes, area) => {
    if (area !== 'sync') return;
    const patch = {};
    for (const [key, { newValue }] of Object.entries(changes)) {
      patch[key] = newValue;
    }
    translator.setSettings(patch);
  });

  chrome.runtime.onMessage.addListener((msg) => {
    if (!msg) return;
    if (msg.type === 'REAPPLY') reapply();
    if (msg.type === 'TOGGLE') {
      chrome.storage.sync.get('enabled').then(({ enabled }) => {
        chrome.storage.sync.set({ enabled: !enabled });
      });
    }
  });

  loadSettings().then(settings => {
    applyInitial(settings);
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', onDomReady, { once: true });
    } else {
      onDomReady();
    }
  });
})(typeof window !== 'undefined' ? window : globalThis);
