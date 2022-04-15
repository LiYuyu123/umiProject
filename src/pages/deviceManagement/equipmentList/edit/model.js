import {addFromData, getFromData} from "@/pages/deviceManagement/equipmentList/edit/service";
import {message} from 'antd'
import {history} from "umi";
export default  {
  namespace:'addFrom',
  state:{
     editData: {},
  },
  reducers:{
    save(state,{payload: newState}) {
      return { ...state,...newState};
    }
  },
  effects:{
     //上传
    *postFrom( { payload: { ...values }},{ call }) {
       const  res  = yield call(addFromData,{...values});
         if(res.message === '数据上传成功') {
              message.success('数据保存成功')
              history.go(-1);
         }
    },
    //获取编辑详情数据
    *getFromData( { payload: { ...value} } , {call ,put}) {
       const { data } = yield call(getFromData, {...value})
       yield put( {
          type: "save",
          payload: {
            editData: data
          }
       })
    }
  },
  subscriptions:{}
}
