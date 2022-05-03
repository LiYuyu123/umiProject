import * as service from './service';

export default {
  namespace: 'statistics',
  state: {
    listData: [],
    curPage: 1,
    pageSize: 10,
    completeText: '', //下拉完成时的文案
  },
  reducers: {
    save(state, { payload: newState }) {
      return { ...state, ...newState };
    },
    push(state, { payload: data }) {
      return state.concat(data);
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
      let curPage = yield select((state) => state.curPage);
      let pageSize = yield select((state) => state.pageSize);
      curPage++;
      if (type === 'expenditure') {
        const {
          data: { records = [], total },
        } = yield call(service.getMoneyList, { curPage, pageSize });
        if (total === 50) {
          yield put({
            type: 'save',
            payload: {
              completeText: '暂无更多数据',
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
        if (total === 50) {
          yield put({
            type: 'save',
            payload: {
              completeText: '暂无更多数据',
            },
          });
        }
        yield put({
          type: 'push',
          payload: records,
        });
      }
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
