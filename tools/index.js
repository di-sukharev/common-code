const isObject = obj => obj && typeof obj === 'object';

export const b64DecodeUnicode = str => {
  const cyrrilic = c => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`;
  return decodeURIComponent(
    atob(str)
      .split('')
      .map(cyrrilic)
      .join('')
  );
};
export const isExpired = time => Math.ceil((time - Date.now()) / 1000) <= 0;

export const isNotEmptyObject = obj => isObject(obj) && Object.keys(obj).length;

export const parseToken = token => {
  // Получить data из auth store токена |~начало токена~.data.~конец токена~|
  const [, data] = token.split('.');

  // Парсим b64 с киррилицей
  const pl = JSON.parse(b64DecodeUnicode(data));

  const payload = {
    ...pl,
    // Получаем локальное время истечения срока годности токена
    expired: Date.now() + (pl.exp - pl.iat) * 1000,
  };

  return payload;
};

export { default as LocalStorage } from './LocalStorage';

export const deleteSpaces = str => str.replace(/\s/g, '');

export const deletePhone7 = phone => phone.replace(/7/, '');

export const addPhone7 = phone => `7${phone}`;

export const deletePhonePlus = phone => phone.replace(/\+/, '');

export const formatCompany = (t, inn, name) => `${inn} ${t('Separator')} ${name}`;

export const isArray = arr => Array.isArray(arr);

export const isNotEmptyArray = arr =>
  arr && isArray(arr) && arr.length && !arr.some(i => i === undefined);

export const parseObjectToURL = obj => {
  const keys = Object.keys(obj);

  let params = '';

  keys.forEach((param, key) => {
    params += `${!key ? '?' : ''}${param}=${obj[param]}${key ? '&' : ''}`;
  });

  return params;
};
