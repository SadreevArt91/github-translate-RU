// options.js — страница настроек
const DEFAULTS = {
  enabled: true,
  level: 'full',
  showOriginal: false,
  userExceptions: [],
};

const $ = id => document.getElementById(id);

async function load() {
  const s = await chrome.storage.sync.get(DEFAULTS);
  $('enabled').checked = !!s.enabled;
  $('level').value = s.level || 'full';
  $('showOriginal').checked = !!s.showOriginal;
  $('userExceptions').value = (s.userExceptions || []).join('\n');
}

async function save() {
  const userExceptions = $('userExceptions').value
    .split('\n')
    .map(s => s.trim())
    .filter(Boolean);

  await chrome.storage.sync.set({
    enabled: $('enabled').checked,
    level: $('level').value,
    showOriginal: $('showOriginal').checked,
    userExceptions,
  });

  const status = $('status');
  status.textContent = 'Сохранено';
  setTimeout(() => (status.textContent = ''), 1500);
}

$('save').addEventListener('click', save);
$('openShortcuts').addEventListener('click', (e) => {
  e.preventDefault();
  chrome.tabs.create({ url: 'chrome://extensions/shortcuts' });
});

// Автосохранение чекбоксов/селекта
['enabled', 'level', 'showOriginal'].forEach(id => {
  $(id).addEventListener('change', save);
});

load();
