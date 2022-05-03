import {
  Button,
  Form,
  Input,
  NumberKeyboard,
  Selector,
  VirtualInput,
} from 'antd-mobile';

import style from './index.less';
import { connect } from 'umi';

const MoneyIng = ({ dispatch }) => {
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
          {/*<div*/}
          {/*  onClick={() =>*/}
          {/*    Dialog.confirm({*/}
          {/*      content: '人在天边月上明',*/}
          {/*      onConfirm: () => {*/}
          {/*        console.log('Confirmed');*/}
          {/*      },*/}
          {/*    })*/}
          {/*  }*/}
          {/*>*/}
          {/*  新增消费类型*/}
          {/*</div>*/}
          <Selector options={optionsOne} columns={4} />
        </Form.Item>
      </Form>
    </div>
  );
};
export default connect(({ moneying }) => moneying)(MoneyIng);
