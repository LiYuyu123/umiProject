import {getDetail} from "@/pages/deviceManagement/equipmentList/detail/service";

export default  {
  namespace:'detail',
  state:{
     detailData: []
  },
  reducers:{
    save(state,{payload: newState}) {
      return { ...state,...newState};
    }
  },
  effects:{
    //获取详情数据
    * getDetail({ payload:{ ...values} } , {call , put}) {
      const  { data } = yield call(getDetail,{...values})
      yield put({
        type:'save',
        payload: {
          detailData: data
        }
      })
    }
  },
  subscriptions:{}
}
