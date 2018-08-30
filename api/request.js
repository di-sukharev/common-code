import { parseObjectToURL } from '../../tools';
import { API } from './URLs';

const apiRequest = async (endpoint, method = 'GET', data = null) => {
  try {
    const body = method === 'POST' && data ? JSON.stringify(data) : null;

    if (!body) endpoint += parseObjectToURL(data);

    console.log('REQ DATA --- ', data);
    console.log('REQ URL --- ', endpoint);

    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    // headers.append('Authorization', `Bearer ${token}`);

    const res = await fetch(API + endpoint, {
      method,
      headers,
      body,
      // mode: 'cors',
      // credentials: 'include',
    });

    const json = await res.json();

    console.log('RESPONSE', json);

    return json;
  } catch (err) {
    console.log('API ERROR --- ', err); // eslint-disable-line
    throw err;
  }
};

export default apiRequest;
