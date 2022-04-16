import {request} from "umi";

export function addFromData(data) {
  return request('/api/editData', {
    method: 'POST',
    data: data
  })
}

export function getFromData(data) {
  return request('/api/editInfo', {
    method: 'GET',
    params: data
  })
}
