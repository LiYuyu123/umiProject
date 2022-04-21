import styles from './index.less';
import React from 'react';
import { qData, siteData } from '../../../../constants';
import { Col, Row, Spin } from 'antd';
import { connect, history } from 'umi';
import dayjs from 'dayjs';
import Progress from './components/Progress';

const detail = ({ dispatch, detailLoading = false, detailData }) => {
  return (
    <Spin spinning={detailLoading}>
      <div className={styles.detailContent}>
        <div
          className={styles.button}
          onClick={() => {
            history.back();
          }}
        >
          <div></div>
          返回
        </div>
        <div className={styles.mainContent}>
          {siteData.map((i, index) => {
            if (detailData[0] !== undefined && i.name === '站点信息') {
              const zInfo = detailData[0];
              Object.keys(zInfo).forEach((item, index) => {
                i.data[index].value = zInfo[item];
              });
            }
            if (detailData[1] !== undefined && i.name === '充电桩信息') {
              const cInfo = detailData[1];
              Object.keys(cInfo).forEach((item, index) => {
                i.data[index].value = cInfo[item];
              });
            }
            return (
              <section className={styles.site} key={index}>
                <div className={styles.siteWord}>{i.name}</div>
                <div>
                  className={styles.wrapperInfo}
                  style={{ height: i.height, width: i.width }}
                  {i.data.map((j, jIndex) => {
                    return (
                      <div className={styles.siteMain} key={jIndex}>
                        <span>{j.name}：</span>
                        <span>{j.value}</span>
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
          {qData.map((i, index) => {
            if (detailData[2] !== undefined && i.name === '充电枪1信息') {
              const qInfo = detailData[2];
              Object.keys(qInfo).forEach((item, index) => {
                if (qInfo[item] !== '') {
                  i.data[index].value = qInfo[item];
                }
              });
              i.soc = detailData[4].soc1;
            }
            if (detailData[3] !== undefined && i.name === '充电枪2信息') {
              const qInfo = detailData[3];
              Object.keys(qInfo).forEach((item, index) => {
                if (qInfo[item] !== '') {
                  i.data[index].value = qInfo[item];
                }
              });
              i.soc = detailData[4].soc2;
            }
            return (
              <section className={styles.site} key={index}>
                <div className={styles.siteH}>
                  <div className={styles.hWord}>{i.name}</div>
                  <div className={styles.leftH}>
                    <div className={styles.lWord}>
                      最近同步时间：
                      <span>
                        {dayjs(new Date()).format('YYYY-MM-DD hh:mm:ss')}
                      </span>
                    </div>
                    <div
                      className={styles.lButton}
                      onClick={() => {
                        dispatch({
                          type: 'detail/getDetail',
                          payload: {
                            date: dayjs(new Date()).format(
                              'YYYY-MM-DD hh:mm:ss',
                            ),
                          },
                        });
                      }}
                    >
                      <div></div>
                      刷新
                    </div>
                  </div>
                </div>
                <Row gutter={24}>
                  <Col span={12}>
                    <div
                      className={styles.wrapperInfo}
                      style={{ height: i.height, width: i.width }}
                    >
                      {i.data.map((j, jIndex) => {
                        return (
                          <div className={styles.siteMain} key={jIndex}>
                            <span>{j.name}：</span>
                            <span>{j.value}</span>
                          </div>
                        );
                      })}
                    </div>
                  </Col>
                  <Col span={12}>
                    <Progress soc={i.soc} />
                  </Col>
                </Row>
              </section>
            );
          })}
        </div>
      </div>
    </Spin>
  );
};

export default connect(({ detail, loading }) => ({
  ...detail,
  detailLoading: loading.effects['detail/getDetail'],
}))(detail);
