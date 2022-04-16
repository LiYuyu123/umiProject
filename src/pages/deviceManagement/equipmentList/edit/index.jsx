import styles from './index.less'
import React, {useEffect, useState} from 'react';
import {PageContainer} from '@ant-design/pro-layout';
import {connect, history} from "umi";
import {
  Button,
  Form,
  Input,
  Space,
  Select,

} from 'antd';

const Option = Select

const editList = (
  {
    dispatch,
    preservationLoading = false,
    editData
  }
) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({...editData})
    // const {query} = location
    // query && dispatch({
    //   type: 'addFrom/getFromData',
    //   payload: {
    //     ...query
    //   }
    // })
    // setX({...editData})
    // JSON.stringify(editData) !== '{}' && form.setFieldsValue({...x})
  }, [editData])

  //保存编辑
  const onPreservation = (values) => {
    dispatch({
      type: 'addFrom/postFrom',
      payload: {
        ...values
      }
    });
  }

  //取消
  const cancel = () => {
    form.resetFields;
    history.go(-1);
  }

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
              {
                path: '',
                breadcrumbName: ' 运营设备',
              },
              {
                path: '',
                breadcrumbName: ' 编辑运营设备',
              }
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
        <div className={styles.editContent}>
          <Form
            form={form}
            labelCol={{
              span: 2,
            }}
            onFinish={onPreservation}
          >
            <section className={styles.information}>
              <div className={styles.zWord}>充电桩信息</div>
              <div className={styles.zFrom}>
                <Form.Item
                  label='OEM厂商'
                  name='manufacturer'
                  rules={[{required: true, message: '请选择'}]}
                >
                  <Select style={{width: 400}}>
                    <Option value="jack">大气</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  label='充电桩型号'
                  name='model'
                  rules={[{required: true, message: '请选择'}]}
                >
                  <Select style={{width: 400}}>
                    <Option value="jack">大气</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  label='充电桩类型'
                  name='type'
                  rules={[{required: true, message: '请选择'}]}
                >
                  <Select style={{width: 400}}>
                    <Option value="jack">大气</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  label='充电桩功率'
                  name='power'
                  rules={[{required: true, message: '请输入'}]}
                >
                  <Input placeholder="请输入" allowClear style={{width: 400}}/>
                </Form.Item>
                <Form.Item
                  label='充电桩个数'
                  name='cNumber'
                  rules={[{required: true, message: '请输入'}]}
                >
                  <Input placeholder="请输入" allowClear style={{width: 400}} disabled={editData.cNumber !== undefined}/>
                </Form.Item>
                <Form.Item
                  label='国际版本'
                  name='gEdition'
                  rules={[{required: true, message: '请选择'}]}
                >
                  <Select style={{width: 400}} disabled={editData.gEdition !== undefined}>
                    <Option value="jack">大气</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  label='程序版本'
                  name='cEdition'
                  rules={[{required: true, message: '请选择'}]}
                >
                  <Select style={{width: 400}} disabled={editData.cEdition !== undefined}>
                    <Option value="jack">大气</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  label='通讯协议版本'
                  name='agreement'
                  rules={[{required: true, message: '请选择'}]}
                >
                  <Select style={{width: 400}} disabled={editData.agreement !== undefined}>
                    <Option value="jack">大气</Option>
                  </Select>
                </Form.Item>
              </div>
            </section>
            <section className={styles.information}>
              <div className={styles.zWord}>充电枪信息</div>
              <div className={styles.zFrom}>
                <Form.Item
                  label='充电枪编号'
                  rules={[{required: true, message: '请输入'}]}
                  name='oneCNumber'
                >
                  <Input placeholder="请输入" allowClear style={{width: 400}}
                         disabled={editData.oneCNumber !== undefined}/>
                </Form.Item>
                <Form.Item
                  label='充电枪名称'
                  rules={[{required: true, message: '请输入'}]}
                  name='oneCName'
                >
                  <Input placeholder="请输入" allowClear style={{width: 400}}/>
                </Form.Item>
                <Form.Item
                  label='充电枪编号'
                  rules={[{required: true, message: '请输入'}]}
                  name='twoCNumber'
                >
                  <Input placeholder="请输入" allowClear style={{width: 400}}
                         disabled={editData.twoCNumber !== undefined}/>
                </Form.Item>
                <Form.Item
                  label='充电枪名称'
                  rules={[{required: true, message: '请输入'}]}
                  name='twoCName'
                >
                  <Input placeholder="请输入" allowClear style={{width: 400}}/>
                </Form.Item>

              </div>
            </section>
            <Form.Item>
              <section className={styles.editButton}>
                <Space>
                  <Button onClick={cancel}>取消</Button>
                  <Button type="primary" htmlType="submit" loading={preservationLoading}>
                    保存
                  </Button>
                </Space>
              </section>
            </Form.Item>
          </Form>
        </div>
      </PageContainer>
    </div>
  )
}

export default connect(({addFrom, loading}) => ({
  ...addFrom,
  preservationLoading: loading.effects['addFrom/postFrom']
}))(editList)
