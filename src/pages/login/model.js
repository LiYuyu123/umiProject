import * as service from '@/service';
import { message } from 'antd';
import { history } from 'umi';
import { clearCookie, setCookie } from '@/utils/utils';

export default {
  namespace: 'login',
  state: {},
  reducers: {
    save(state, { payload: newState }) {
      return { ...state, ...newState };
    },
  },
  effects: {
    *getLogin({ payload: { value } }, { call }) {
      const { data } = yield call(service.login, { ...value });
      setCookie('token', data.token, 2);
      message.success('🎉 🎉 🎉  登录成功！');
      history.replace('/');
    },
    *logout(_, { call }) {
      yield call(service.logout);
      clearCookie('token');
      message.success('退出登录成功！');
      history.replace('/login');
    },
  },
  subscriptions: {},
};
