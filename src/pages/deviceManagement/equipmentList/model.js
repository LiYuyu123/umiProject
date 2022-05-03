import {
  exportList,
  getBottomList,
  getResList,
  postEnableData,
  searchList,
} from './service';
import download from 'downloadjs';
import { message } from 'antd';

export default {
  namespace: 'list',
  state: {
    total: 0,
    curPage: 1,
    pageSize: 10,
    listData: [],
    bListData: [],
  },
  reducers: {
    save(state, { payload: newState }) {
      return { ...state, ...newState };
    },
  },
  effects: {
    //获取table数据
    *getList(_, { call, put }) {
      const {
        data: { records = [], total },
      } = yield call(getResList);
      yield put({
        type: 'save',
        payload: {
          listData: records,
          total,
        },
      });
    },
    //下拉表格数据
    *getBottomList({ payload: { id } }, { call, put }) {
      const { data } = yield call(getBottomList, { id });
      yield put({
        type: 'save',
        payload: {
          bListData: data,
        },
      });
    },

    *postEnableData({ payload: { enable } }, { call }) {
      yield call(postEnableData, { enable });
      message.success('设置成功');
    },
    *searchList(
      { payload: { curPage = 1, pageSize = 10, ...values } },
      { call, put },
    ) {
      console.log(curPage);
      const {
        data: { records = [], total },
      } = yield call(searchList, { curPage, pageSize, ...values });
      yield put({
        type: 'save',
        payload: {
          listData: records,
          pageSize,
          curPage,
          params: values,
          total,
        },
      });
    },
    *listExport(_, { call }) {
      const { data } = yield call(exportList);
      download(data, '运行设备.xlsx');
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/deviceManagement/equipmentList') {
          dispatch({
            type: 'searchList',
            payload: {
              ...query,
            },
          });
        }
      });
    },
  },
};
