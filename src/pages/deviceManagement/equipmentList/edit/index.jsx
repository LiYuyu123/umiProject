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
    location,
    preservationLoading = false,
    editData
  }
) => {
  const [form] = Form.useForm();

  useEffect(() => {
     form.setFieldsValue({...editData})
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
     history.back()
  }

  return (

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
                  <Input placeholder="请输入" allowClear style={{width: 400}} disabled={editData.id }/>
                </Form.Item>
                <Form.Item
                  label='国际版本'
                  name='gEdition'
                  rules={[{required: true, message: '请选择'}]}
                >
                  <Select style={{width: 400}} disabled={editData.id }>
                    <Option value="jack">大气</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  label='程序版本'
                  name='cEdition'
                  rules={[{required: true, message: '请选择'}]}
                >
                  <Select style={{width: 400}} disabled={editData.id }>
                    <Option value="jack">大气</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  label='通讯协议版本'
                  name='agreement'
                  rules={[{required: true, message: '请选择'}]}
                >
                  <Select style={{width: 400}} disabled={ editData.id }>
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
                         disabled={ editData.id }/>
                </Form.Item>
                <Form.Item
                  label='充电枪名称'
                  rules={[
                    {
                      required: true,
                      message: '请输入'
                    },
                    {
                      pattern: new RegExp("^[\u4e00-\u9fa5_a-zA-Z0-9.\\()\\ ()] {1,10}$"),
                      message: '中文/英文/数字/下划线/括号组成，不超过10个汉字长度'
                    }]}
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
                         disabled={editData.id }/>
                </Form.Item>
                <Form.Item
                  label='充电枪名称'
                  rules={[
                    {required: true, message: '请输入'},
                    {
                      pattern: new RegExp("^[\u4e00-\u9fa5_a-zA-Z0-9.\\()\\ ()] {1,10}$"),
                      message: '中文/英文/数字/下划线/括号组成，不超过10个汉字长度'
                    }]}
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

  )
}

export default connect(({addFrom, loading}) => ({
  ...addFrom,
  preservationLoading: loading.effects['addFrom/postFrom']
}))(editList)
