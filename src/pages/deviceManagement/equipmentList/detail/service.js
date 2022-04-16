import {request} from "umi"

export function getDetail(data) {
  return request('/api/detail', {
    method: 'GET',
    params: data
  })
}
