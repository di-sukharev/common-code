import axios from 'axios';
import { isExpired, parseToken, LocalStorage } from '../tools';

const getAccessToken = async refresh => {
  try {
    /* eslint-disable no-use-before-define */
    const tokens = await request({
      url: '/auth/get-access-token',
      method: 'POST',
      data: { refreshToken: refresh.token },
    });

    const access = {
      token: tokens.accessToken,
      payload: parseToken(tokens.accessToken),
    };

    if (tokens.refreshToken) {
      refresh = {
        token: tokens.refreshToken,
        payload: parseToken(tokens.refreshToken),
      };
    }

    LocalStorage.setObject('access', access);
    LocalStorage.setObject('refresh', refresh);

    return { access, refresh };
  } catch (err) {
    throw err;
  }
};

const checkAccessToken = async () => {
  try {
    let tokens;

    const access = LocalStorage.getObject('access');
    const refresh = LocalStorage.getObject('refresh');

    if (!refresh) return;
    if (!access) return;
    if (!refresh.token) return;

    const expired = isExpired(access.payload.expired);

    if (expired) tokens = await getAccessToken(refresh);
    else tokens = { access, refresh };

    return tokens;
  } catch (err) {
    throw err;
  }
};

const request = async ({ needsAuth, ...options }) => {
  const headers = { 'Content-Type': 'application/json; charset=utf-8' };
  if (needsAuth) {
    const tokens = await checkAccessToken();
    headers.Authorization = `Bearer ${tokens.access.token}`;
  }
  const response = await axios.request({
    ...options,
    baseURL: '/api',
    headers,
  });
  return response.data;
};

export const TPL = data =>
  request({
    url: '/example/url',
    method: 'POST',
    data,
    needsAuth: true,
  });

