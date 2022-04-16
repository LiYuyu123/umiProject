import {request} from "umi";

//表格数据
export function getResList(data) {
  return request('/api/getTable',{
    method:'GET',
    params:data
  })
}

//获取下拉表格数据
export function getBottomList(data) {
   return request('/api/getBottomTable', {
     method:'GET',
     params: data
   })
}

 //上传充电枪是否启用数据
export function   postEnableData(data) {
  return request('/api/enableData',{
    method: 'POST',
    data: data
  })
}

//测试查询表格数据
export function  searchList(data) {
  return request('/api/searchTable',{
    method: 'GET',
    params: data
  })
}

//导出表格文件
export function  exportList(data) {
  return request('/api/exportList',{
    method: 'POST',
    data:data,
  })
}
