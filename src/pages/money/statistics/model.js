import * as service from './service';
import { Toast } from 'antd-mobile';

export default {
  namespace: 'statistics',
  state: {
    listData: [],
    curPage: 1,
    pageSize: 10,
    hasMore: false,
  },
  reducers: {
    save(state, { payload: newState }) {
      return { ...state, ...newState };
    },
    push(state, { payload: data }) {
      return state.listData.concat(data);
    },
    splice(state, { payload: { indexOne, indexTwo } }) {
      return state?.listData[indexOne]?.record.splice(indexTwo, 1);
    },
  },
  effects: {
    *getList({ payload: { curPage, pageSize } }, { call, put }) {
      const {
        data: { records = [], total },
      } = yield call(service.getMoneyList, { curPage, pageSize });
      yield put({
        type: 'save',
        payload: {
          listData: records,
          total: total,
          pageSize,
          curPage,
        },
      });
    },
    *getListTwo({ payload: { curPage, pageSize } }, { call, put }) {
      const {
        data: { records = [], total },
      } = yield call(service.getMoneyListTwo, { curPage, pageSize });
      yield put({
        type: 'save',
        payload: {
          listData: records,
          total: total,
          pageSize,
          curPage,
        },
      });
    },
    //TODO未测试
    *pullTo({ payload: { type } }, { call, select, put }) {
      Toast.show({
        icon: 'loading',
        content: '加载中…',
      });
      let curPage = yield select((state) => state.curPage);
      let pageSize = yield select((state) => state.pageSize);
      yield put({
        type: 'save',
        payload: {
          hasMore: true,
        },
      });
      curPage++;
      if (type === 'expenditure') {
        const {
          data: { records = [], total },
        } = yield call(service.getMoneyList, { curPage, pageSize });
        if (curPage === 50) {
          yield put({
            type: 'save',
            payload: {
              hasMore: false,
            },
          });
        }
        yield put({
          type: 'push',
          payload: records,
        });
      }
      if (typr === 'income') {
        const {
          data: { records = [], total },
        } = yield call(service.getMoneyListTwo, { curPage, pageSize });
        if (curPage === 50) {
          yield put({
            type: 'save',
            payload: {
              hasMore: false,
            },
          });
        }
        yield put({
          type: 'push',
          payload: records,
        });
      }
    },
    *deleteData({ payload: { indexOne, indexTwo } }, { call }) {
      yield call(service.deleteData, { indexOne, indexTwo });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/money/statistics') {
          dispatch({
            type: 'getList',
            payload: {
              curPage: 1,
              pageSize: 10,
            },
          });
        }
      });
    },
  },
};
