import { InfiniteScroll, List, SwipeAction, Tabs } from 'antd-mobile';
import style from './index.less';
import { connect } from 'umi';
import { useState } from 'react';

const Statistics = ({ dispatch, tableLoading = false, listData, hasMore }) => {
  const [type, setType] = useState('expenditure');
  const rightActions = [
    {
      key: 'delete',
      text: '删除',
      color: 'danger',
    },
  ];

  //tab切换请求
  const changeTab = (val) => {
    console.log(val);
    setType(val);
    val === 'income'
      ? dispatch({
          type: 'statistics/getListTwo',
          payload: {
            curPage: 1,
            pageSize: 10,
          },
        })
      : dispatch({
          type: 'statistics/getList',
          payload: {
            curPage: 1,
            pageSize: 10,
          },
        });
  };
  //无限滚动
  const refresh = () => {
    dispatch({
      type: 'statistics/getList',
      payload: type,
    });
  };

  return (
    <div className={style.main}>
      <Tabs onChange={changeTab}>
        <Tabs.Tab title="支出" key="expenditure" />
        <Tabs.Tab title="收入" key="income" />
      </Tabs>
      <List loading={tableLoading}>
        {listData.map((i, indexOne) => {
          return (
            <div className={style.list} key={indexOne}>
              <header className={style.header}>
                <div className={style.word}>{i.date}</div>
                <div className={style.word}>￥ {i.tData}</div>
              </header>
              {i.record.map((j, indexTwo) => {
                return (
                  <div className={style.action} key={indexTwo}>
                    <SwipeAction
                      rightActions={rightActions}
                      onAction={() => {
                        dispatch({
                          type: 'statistics/deleteData',
                          payload: {
                            indexOne,
                            indexTwo,
                          },
                        });
                      }}
                    >
                      <div className={style.content}>
                        <div>
                          <span className={style.word1}>{j.method}</span>
                          <span className={style.word2}>{j.remarks}</span>
                        </div>
                        <div className={style.word3}>￥{j.mData}</div>
                      </div>
                    </SwipeAction>
                  </div>
                );
              })}
            </div>
          );
        })}
      </List>
      <InfiniteScroll loadMore={refresh} hasMore={hasMore} />
    </div>
  );
};

export default connect(({ statistics, loading }) => ({
  ...statistics,
  tableLoading: loading.effects['statistics/getList'],
}))(Statistics);
