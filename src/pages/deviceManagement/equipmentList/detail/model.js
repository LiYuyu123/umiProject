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
      if( id) {
        yield put({
          type: 'save',
          payload: {
            detailData: data
          }
        })
      }
    }
  },
  subscriptions:{
    setup({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        if (pathname === '/deviceManagement/equipmentList/detail') {
          dispatch({
            type: 'getDetail',
            payload: {
              ...query
            }
          });
        }
      });
    }
  }
}
