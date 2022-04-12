import styles from './index.less'
import React from 'react';
import {
  Button,
  Form,
  Table,
  Input,
  Space,
  Select,

} from 'antd';
const Option = Select
export default function  editList ( ) {
  return (
    <div className={styles.editMain}>
      <div className={styles.header}>
        <section className={styles.headerWord1}> 设备管理 / 设备列表 / 运营设备 / 编辑运营设备信息</section>
        <section className={styles.headerWord2}>编辑运营设备信息</section>
      </div>
      <div className={styles.editContent}>
        <section className={styles.information}>
              <div className={styles.zWord}>充电桩信息</div>
              <div className={styles.zFrom}>
                <Form
                  labelCol={{
                    span: 2,
                  }}
                >
                  <Form.Item
                    label='OEM厂商'
                    name='manufacturer'
                    rules={[{ required: true, message: '请选择' }]}
                  >
                    <Select style={{ width: 400 }}>
                      <Option value="jack">大气</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label='充电桩型号'
                    name='model'
                    rules={[{ required: true, message: '请选择' }]}
                  >
                    <Select  style={{ width: 400 }}>
                      <Option value="jack">大气</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label='充电桩类型'
                    name='type'
                    rules={[{ required: true, message: '请选择' }]}
                  >
                    <Select  style={{ width: 400 }}>
                      <Option value="jack">大气</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label='充电桩功率'
                    name='power'
                    rules={[{ required: true, message: '请选择' }]}
                  >
                    <Input placeholder="请输入" allowClear style={{ width: 400 }}/>
                  </Form.Item>
                  <Form.Item
                    label='充电桩个数'
                    name='cNumber'
                    rules={[{ required: true, message: '请选择' }]}
                  >
                    <Input placeholder="请输入" allowClear style={{ width: 400 }}/>
                  </Form.Item>
                  <Form.Item
                    label='国际版本'
                    name='gEdition'
                    rules={[{ required: true, message: '请选择' }]}
                  >
                    <Select  style={{ width: 400 }}>
                      <Option value="jack">大气</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label='程序版本'
                    name='cEdition'
                    rules={[{ required: true, message: '请选择' }]}
                  >
                    <Select style={{ width: 400 }}>
                      <Option value="jack">大气</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label='通讯协议版本'
                    name='agreement'
                    rules={[{ required: true, message: '请选择' }]}
                  >
                    <Select  style={{ width: 400 }}>
                      <Option value="jack">大气</Option>
                    </Select>
                  </Form.Item>
                </Form>
              </div>
        </section>
        <section className={styles.information}>
           <div className={styles.zWord}>充电枪信息</div>
           <div className={styles.zFrom}>
             <Form
               labelCol={{
                 span: 2,
               }}
             >
               <Form.Item
                 label='充电枪编号'
                 rules={[{ required: true, message: '请选择' }]}
               >
                 <Input placeholder="请输入" allowClear style={{ width: 400 }}/>
               </Form.Item>
               <Form.Item
                 label='充电枪名称'
                 rules={[{ required: true, message: '请选择' }]}
               >
                 <Input placeholder="请输入" allowClear style={{ width: 400 }}/>
               </Form.Item>
               <Form.Item
                 label='充电枪编号'
                 rules={[{ required: true, message: '请选择' }]}
               >
                 <Input placeholder="请输入" allowClear style={{ width: 400 }}/>
               </Form.Item>
               <Form.Item
                 label='充电枪名称'
                 rules={[{ required: true, message: '请选择' }]}
               >
                 <Input placeholder="请输入" allowClear style={{ width: 400 }}/>
               </Form.Item>
             </Form>
           </div>
        </section>
        <section className={styles.editButton}>
          <Space>
            <Button >重置</Button>
            <Button type="primary">
              搜索
            </Button>
          </Space>
        </section>
      </div>
    </div>)
}
