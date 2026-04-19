#!/usr/bin/env node
// tools/check-missing.js — проверяет, каких английских фрагментов не хватает
// в словаре плагина.
//
// Использование:
//   1) Откройте нужную страницу GitHub, нажмите Ctrl+A → Ctrl+C, сохраните
//      текст в файл input.txt (или передайте через stdin).
//   2) node tools/check-missing.js input.txt
//      node tools/check-missing.js < input.txt

const fs = require('fs');
const path = require('path');

const DICT_DIR = path.join(__dirname, '..', 'src', 'dictionary');

// ---------- Собираем словарь ----------

// Декодируем JS-escape'ы в собранных ключах (\uXXXX, \n, \t, \', \", \\).
// Это важно, иначе ключ «...640\u00d7320px...» в словаре не матчится с «...640×320px...» на странице.
function unescapeJsString(s) {
  return s
    .replace(/\\u([0-9a-fA-F]{4})/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)))
    .replace(/\\x([0-9a-fA-F]{2})/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)))
    .replace(/\\n/g, '\n')
    .replace(/\\t/g, '\t')
    .replace(/\\'/g, "'")
    .replace(/\\"/g, '"')
    .replace(/\\\\/g, '\\');
}

function collectDictionary() {
  const keys = new Set();
  const files = fs.readdirSync(DICT_DIR).filter(f => f.endsWith('.js'));
  // Все 4 комбинации кавычек: 'a':'b', "a":"b", 'a':"b", "a":'b'.
  const patterns = [
    /'((?:[^'\\]|\\.)*)'\s*:\s*'((?:[^'\\]|\\.)*)'/g,
    /"((?:[^"\\]|\\.)*)"\s*:\s*"((?:[^"\\]|\\.)*)"/g,
    /'((?:[^'\\]|\\.)*)'\s*:\s*"((?:[^"\\]|\\.)*)"/g,
    /"((?:[^"\\]|\\.)*)"\s*:\s*'((?:[^'\\]|\\.)*)'/g,
  ];
  for (const f of files) {
    const src = fs.readFileSync(path.join(DICT_DIR, f), 'utf8');
    for (const re of patterns) {
      let m;
      while ((m = re.exec(src))) {
        const key = unescapeJsString(m[1]).replace(/\s*\(.*\)$/, '');
        keys.add(key);
      }
    }
  }
  return keys;
}

// ---------- Шум, который переводить не надо ----------

const NOISE_PATTERNS = [
  /^[0-9a-f]{7,40}$/i,                // SHA
  /^https?:\/\//i,                    // URL
  /^[@#][\w./-]+$/,                   // @user, #1234
  /^[\w.-]+\.(js|ts|tsx|jsx|py|rb|go|rs|md|yml|yaml|json|toml|html|css|sh|java|kt|c|h|cpp|hpp|cs|php|swift|lock)$/i,
  /^\d+([.,]\d+)?$/,                  // число
  /^[A-Z]{2,5}$/,                     // аббревиатуры и короткие коды (SSH, GPG, API…)
  /^[^A-Za-z]+$/,                     // нет латинских букв вообще
  /^[\s\d.,:/\\@#+()\[\]{}<>=?|-]+$/, // пунктуация
];

// Бренды и git-термины, которые НАМЕРЕННО не переводим
const DO_NOT_TRANSLATE = new Set([
  'GitHub', 'GitHub Actions', 'Actions', 'Codespaces', 'Copilot',
  'Dependabot', 'Marketplace', 'Pages', 'Packages', 'Discussions',
  'Projects', 'Sponsors', 'Advanced Security', 'Wiki', 'Gist',
  'Pulse', 'CI/CD', 'API', 'OAuth', 'SSH', 'GPG', 'SAML', 'SCIM',
  'main', 'master', 'origin', 'upstream', 'HEAD',
  'commit', 'push', 'pull', 'fetch', 'merge', 'rebase', 'cherry-pick',
  'stash', 'blame', 'diff',
  'README', 'README.md', 'LICENSE',
  'Workflows', 'webhook', 'token', 'runner', 'workflow', 'artifact',
]);

// Чисто русский текст — уже переведено
function isMostlyCyrillic(s) {
  const letters = s.replace(/[^A-Za-zА-Яа-яЁё]/g, '');
  if (!letters.length) return false;
  const cyr = s.match(/[А-Яа-яЁё]/g) || [];
  return cyr.length / letters.length > 0.5;
}

function isEnglishish(s) {
  const letters = s.match(/[A-Za-z]/g);
  return letters && letters.length >= 2;
}

// Репозиторные имена: kate-rup, user/repo — две–три подряд строчных буквы/цифры с дефисом/слэшем.
function looksLikeRepoName(s) {
  return /^[a-z0-9][a-z0-9._-]*(\/[a-z0-9][a-z0-9._-]*)?$/.test(s) && /[-_.]/.test(s);
}

function shouldSkip(s) {
  if (!s) return true;
  if (s.length > 200) return true;
  if (!isEnglishish(s)) return true;
  if (isMostlyCyrillic(s)) return true;
  if (DO_NOT_TRANSLATE.has(s)) return true;
  if (looksLikeRepoName(s)) return true;
  for (const re of NOISE_PATTERNS) if (re.test(s)) return true;
  return false;
}

// ---------- Разбор входного текста ----------

function splitIntoCandidates(text) {
  const lines = text
    .split(/\r?\n|•|·|\u2022/)
    .map(l => l.trim())
    .filter(Boolean);

  const out = [];
  for (const line of lines) {
    out.push(line);
    if (line.length > 80) {
      // Дополнительно — фрагменты до точки/восклицания/вопроса
      for (const frag of line.split(/(?<=[.!?])\s+/)) {
        const f = frag.trim();
        if (f && f !== line) out.push(f);
      }
    }
  }
  return out;
}

// ---------- main ----------

function main() {
  const args = process.argv.slice(2);
  let text = '';
  if (args.length && fs.existsSync(args[0])) {
    text = fs.readFileSync(args[0], 'utf8');
  } else if (!process.stdin.isTTY) {
    text = fs.readFileSync(0, 'utf8');
  } else {
    console.error('Передайте файл: node tools/check-missing.js input.txt');
    console.error('Или через stdin: node tools/check-missing.js < input.txt');
    process.exit(1);
  }

  const dict = collectDictionary();
  console.log(`В словаре: ${dict.size} ключей`);

  const candidates = splitIntoCandidates(text);
  const counts = new Map();
  for (const c of candidates) {
    if (shouldSkip(c)) continue;
    if (dict.has(c)) continue;
    counts.set(c, (counts.get(c) || 0) + 1);
  }

  const sorted = Array.from(counts.entries())
    .sort((a, b) => b[1] - a[1] || a[0].length - b[0].length);

  console.log(`Непереведённых кандидатов: ${sorted.length}\n`);
  const MAX = 200;
  for (const [s, n] of sorted.slice(0, MAX)) {
    console.log(`${String(n).padStart(3)}  ${s}`);
  }
  if (sorted.length > MAX) {
    console.log(`\n…и ещё ${sorted.length - MAX} (показано ${MAX})`);
  }
}

main();
