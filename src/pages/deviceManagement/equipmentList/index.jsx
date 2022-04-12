import styles from './index.less'
import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';

import {
  Button,
  Form,
  Table,
  Input,
  Space
} from 'antd';
const { Column } = Table;
export default function  equipmentList ( ) {
  const [form] = Form.useForm();
      return (
        <div
          style={{
            background: '#F5F7FA',
          }}
        >
          <PageContainer
            fixedHeader
            header={{
              title: '设备列表',
              breadcrumb: {
                routes: [
                  {
                    path: '',
                    breadcrumbName: ' 设备管理',
                  },
                  {
                    path: '',
                    breadcrumbName: ' 设备列表',
                  },
                ],
              },
            }}
            tabList={[
              {
                tab: '运营设备',
                key: '1',
              },
              {
                tab: '私桩设备',
                key: '2',
              },
              {
                tab: '未分配设备',
                key: '3',
              },
            ]}
          >
            <div className={styles.search}>
                     <Form
                    form={form}
                    size="large"
                    name="form-auth"
                    className={styles.from}
                  >
                    <div style={{marginLeft:'40px'}}>
                      <div className={styles.searchItem1}>
                         <Form.Item label="站点id" name="id">
                           <Input placeholder="请输入" allowClear />
                         </Form.Item>
                        <Form.Item label="站点名称" name="name">
                          <Input placeholder="请输入" allowClear />
                        </Form.Item>
                        <Form.Item label="充电桩编号" name="number">
                          <Input placeholder="请输入" allowClear />
                        </Form.Item>
                        <Form.Item label="充电桩功率" name="power">
                          <Input placeholder="请输入" allowClear />
                        </Form.Item>
                    </div>
                    <div className={styles.searchItem2}>
                        <Form.Item label="创建日期" name="cDate">
                          <Input placeholder="请输入" allowClear />
                        </Form.Item>
                        <Form.Item label="激活日期" name="jDate">
                          <Input placeholder="请输入" allowClear />
                        </Form.Item>
                        <Form.Item label="ICCID" name="ICCID">
                          <Input placeholder="请输入" allowClear />
                        </Form.Item>
                        <Form.Item label="充电枪编号" name="qNumber">
                          <Input placeholder="请输入" allowClear />
                        </Form.Item>
                      </div>
                    </div>
                    <div className={styles.wrapperB}>
                      <Form.Item>
                        <Space>
                          <Button >重置</Button>
                          <Button type="primary">
                            搜索
                          </Button>
                        </Space>
                      </Form.Item>
                    </div>
                  </Form>
                </div>
                <div className={styles.tableContent}>
                   <section className={styles.tableH}>
                      <div className={styles.hWord1}>设备列表</div>
                      <div className={styles.hWord2}>导出</div>
                   </section>
                  <div className={styles.table}>
                    <div>
                       <Table

                       >

                       </Table>
                    </div>
                  </div>
                  </div>
          </PageContainer>
        </div>
      )
}
