import { request } from 'umi';

//上传记账记录
export function postMoney(data) {
  return request('/api/postMoney', {
    method: 'POST',
    data: data,
  });
}
