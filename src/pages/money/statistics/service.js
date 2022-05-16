import { request } from 'umi';

//记账列表记录
export function getMoneyList(data) {
  return request('/api/getMoneyTable', {
    method: 'GET',
    params: data,
  });
}

export function getMoneyListTwo(data) {
  return request('/api/getMoneyTableTwo', {
    method: 'GET',
    params: data,
  });
}

export function deleteData(data) {
  return request('/api/delete', {
    method: 'POST',
    data: data,
  });
}
