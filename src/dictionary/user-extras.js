// dictionary/user-extras.js — дополнительные переводы, которые не попали
// в тематические словари (common, nav, repo и т.д.). Используется как
// «подушка безопасности»: сюда можно быстро докинуть новые строки, не
// перебирая, в какой модуль их положить. Загружается последним, поэтому
// ключи отсюда побеждают одноимённые из других модулей.
(function (root) {
  const strings = {
  };

  const attributes = {};

  root.GitHubRu = root.GitHubRu || {};
  root.GitHubRu.dict = root.GitHubRu.dict || {};
  root.GitHubRu.dict['user-extras'] = { strings, attributes };
})(typeof window !== 'undefined' ? window : globalThis);
