import {request} from "umi";

export function getResList() {
  return request('/api/getTable',{
    method:'GET',
  })
}
