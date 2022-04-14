import { getResList} from "./server";
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
       const { data: { records = [] , total}} = yield call(getResList)
       yield put({
         type:'save',
         payload: {
           listData: records,
           total,
         }
       })
    }
  },
  subscriptions:{}
}
