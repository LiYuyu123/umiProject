import * as service from "@/service";
import {message} from "antd";

export default  {
  namespace:'login',
  state:{

  },
  reducers:{
    save(state,{payload: newState}) {
      return { ...state,...newState};
    }
  },
  effects:{
     *login({ payload: { name ,password } },{ call }) {
         const { data } = yield call(service.login, { name ,password})
         document.cookie = `token = ${ data.token }`
         message.success('🎉 🎉 🎉  登录成功！');
         history.replace('/');
     },
    *logout({ payload: { name ,password } },{ call }) {
      yield call(service.logout, { name ,password})
      message.success('退出登录成功！');
      history.replace('/login');
    },
  },
  subscriptions:{

  }
}
