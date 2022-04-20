import {addFromData, getFromData} from "@/pages/deviceManagement/equipmentList/edit/service";
import {message} from 'antd'
import {history} from "umi";

export default {
  namespace: 'addFrom',
  state: {
    editData: {},
  },
  reducers: {
    save(state, {payload: newState}) {
      return {...state, ...newState};
    }
  },
  effects: {
    //上传
    * postFrom({payload: {...values}}, {call}) {
      const res = yield call(addFromData, {...values});
      message.success('数据保存成功');
      history.back();
    },
    //获取编辑详情数据
    * getFromData({payload: {id, zName}}, {call, put}) {
      const {data} = yield call(getFromData, {id, zName})
      if(id && zName) {
        yield put({
          type: "save",
          payload: {
            editData: data
          }
        })
      }
    }
  },
  subscriptions: {
    setup({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        if (pathname === '/deviceManagement/equipmentList/edit') {
          dispatch({
            type: 'getFromData',
            payload: query
          });
        }
      });
    }
  }
}
