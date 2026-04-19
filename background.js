// background.js — service worker для Manifest V3
// Отвечает за: хранение настроек по умолчанию, обработку hotkey для toggle,
// маршрутизацию сообщений между popup/options и content-скриптами.

const DEFAULTS = {
  enabled: true,
  level: 'standard', // 'minimal' | 'standard' | 'full'
  showOriginal: false,
  userExceptions: [], // массив строк, которые пользователь хочет оставить без перевода
};

// Инициализация настроек при установке / обновлении
chrome.runtime.onInstalled.addListener(async () => {
  const current = await chrome.storage.sync.get(null);
  const merged = { ...DEFAULTS, ...current };
  await chrome.storage.sync.set(merged);
});

// Горячая клавиша: переключение перевода
chrome.commands.onCommand.addListener(async (command) => {
  if (command !== 'toggle-translation') return;
  const { enabled = true } = await chrome.storage.sync.get('enabled');
  await chrome.storage.sync.set({ enabled: !enabled });
  // content-скрипты сами подпишутся на изменение через chrome.storage.onChanged
});

// Маршрутизация сообщений (например, от popup к активной вкладке)
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg?.type === 'PING') {
    sendResponse({ ok: true });
    return;
  }
  if (msg?.type === 'RELAY_TO_TAB' && msg.tabId && msg.payload) {
    chrome.tabs.sendMessage(msg.tabId, msg.payload).catch(() => {});
    sendResponse({ ok: true });
    return;
  }
});
