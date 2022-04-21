import { request } from 'umi';

export function getLoginInfo() {
  return request('/api/getLoginInfo', {
    method: 'GET',
  });
}

export function login(data) {
  return request('/api/getLogin', {
    method: 'POST',
    data: data,
  });
}

export function logout() {
  return request('/api/getLogout');
}
