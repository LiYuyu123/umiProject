import {
  Button,
  FloatingBubble,
  Form,
  Input,
  NumberKeyboard,
  Popup,
  Selector,
  Toast,
  VirtualInput,
} from 'antd-mobile';
import { AddOutline } from 'antd-mobile-icons';
import style from './index.less';
import { connect } from 'umi';
import { useState } from 'react';

const MoneyIng = ({ dispatch }) => {
  const [show, setShow] = useState(false);
  const [form] = Form.useForm();
  const options = [
    {
      label: '收入',
      value: '1',
    },
    {
      label: '支出',
      value: '2',
    },
  ];

  const optionsOne = [
    {
      label: '衣',
      value: '1',
    },
    {
      label: '食',
      value: '2',
    },
    {
      label: '住',
      value: '3',
    },
    {
      label: '行',
      value: '4',
    },
  ];

  //提交数据
  const finishData = (val) => {
    dispatch({
      type: 'moneying/postMoney',
      payload: val,
    });
  };

  //添加标签
  const addLabel = (val) => {
    console.log(val);
    Toast.show({
      icon: 'success',
      content: '保存成功',
    });
    setShow(false);
    form.resetFields();
  };
  return (
    <div className={style.main}>
      <Form
        name="form"
        onFinish={finishData}
        footer={
          <Button block type="submit" color="primary" size="large">
            提交
          </Button>
        }
      >
        <Form.Item name="type" label="类型">
          <Selector options={options} columns={2} />
        </Form.Item>
        <Form.Item name="number" label="收入金额">
          <VirtualInput
            className={style.input}
            placeholder="请输入内容"
            keyboard={<NumberKeyboard className={style.number} />}
          />
        </Form.Item>
        <Form.Item name="remarks" label="备注">
          <Input placeholder="请输入内容" />
        </Form.Item>
        <Form.Item name="method" label="消费方式" rules={[{ required: true }]}>
          <Selector options={optionsOne} columns={4} />
        </Form.Item>
      </Form>
      <Popup
        visible={show}
        onMaskClick={() => {
          setShow(false);
        }}
        bodyStyle={{ height: '40vh' }}
      >
        <Form
          form={form}
          name="form"
          onFinish={addLabel}
          footer={
            <Button block type="submit" color="primary" size="large">
              确认
            </Button>
          }
        >
          <Form.Item name="labels" label="添加标签">
            <Input placeholder="请输入内容" />
          </Form.Item>
        </Form>
      </Popup>
      <FloatingBubble
        style={{
          '--initial-position-bottom': '130px',
          '--initial-position-right': '24px',
          '--edge-distance': '24px',
        }}
        onClick={() => {
          setShow(true);
        }}
      >
        <AddOutline fontSize={32} />
      </FloatingBubble>
    </div>
  );
};
export default connect(({ moneying }) => moneying)(MoneyIng);
