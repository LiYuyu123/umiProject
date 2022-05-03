import * as service from './service';
import { message } from 'antd';
import { history } from 'umi';

export default {
  namespace: 'moneying',
  state: {},
  reducers: {
    save(state, { payload: newState }) {
      return { ...state, ...newState };
    },
  },
  effects: {
    *postMoney({ payload: value }, { call }) {
      yield call(service.postMoney, { ...value });
      message.success('上传成功');
      history.replace('/money/statistics');
    },
  },
  subscriptions: {},
};
