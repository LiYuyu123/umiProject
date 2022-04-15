import {exportList, getResList, searchList} from "./server";
import download from 'downloadjs'
export default  {
  namespace:'list',
  state:{
    total: 0,
    curPage: 1,
    pageSize: 10,
    listData: [],
    params: {} //剩余参数
  },
  reducers:{
    save(state,{payload: newState}) {
      return { ...state,...newState};
    }
  },
  effects:{
    //获取table数据
    *getList(_,{call ,put}) {
       const { data: { records = [] ,total}} = yield call(getResList)
       yield put({
         type:'save',
         payload: {
           listData: records,
           total
         }
       })
    },
    *searchList( { payload:{ curPage = 1 ,pageSize = 10 ,...values } },{call ,put}) {
      const { data: { records = [] ,total}} = yield call(searchList, {curPage,pageSize,...values})
      yield put({
        type:'save',
        payload: {
          listData: records,
          pageSize,
          curPage,
          params: values,
          total
        }
      })
    },
    *listExport(_,{call}) {
       const { data } = yield call(exportList)
       download(data,'运行设备.xlsx')
    }
  },
  subscriptions:{}
}
