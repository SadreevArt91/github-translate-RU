// popup.js — простая форма, связанная с chrome.storage.sync
const DEFAULTS = {
  enabled: true,
  level: 'full',
  showOriginal: false,
};

const $ = id => document.getElementById(id);
const fields = ['enabled', 'level', 'showOriginal'];

async function load() {
  const stored = await chrome.storage.sync.get(DEFAULTS);
  $('enabled').checked = !!stored.enabled;
  $('level').value = stored.level || 'full';
  $('showOriginal').checked = !!stored.showOriginal;
}

function save() {
  chrome.storage.sync.set({
    enabled: $('enabled').checked,
    level: $('level').value,
    showOriginal: $('showOriginal').checked,
  });
}

fields.forEach(id => {
  $(id).addEventListener('change', save);
});

$('openOptions').addEventListener('click', () => {
  if (chrome.runtime.openOptionsPage) chrome.runtime.openOptionsPage();
  else window.open(chrome.runtime.getURL('src/options/options.html'));
});

load();
