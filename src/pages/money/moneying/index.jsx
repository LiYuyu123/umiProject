import {
  CapsuleTabs,
  Dialog,
  Form,
  Input,
  NumberKeyboard,
  Selector,
  VirtualInput,
} from 'antd-mobile';
import { useState } from 'react';
import style from './index.less';

const MoneyIng = () => {
  const [value, setValue] = useState('');
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
  const onInput = (value) => {
    setValue((v) => v + value);
  };

  const onDelete = () => {
    setValue((v) => v.slice(0, v.length - 1));
  };
  return (
    <div className={style.main}>
      <Form name="form">
        <Form.Item name="type" label="类型" rules={[{ required: true }]}>
          <Selector
            options={options}
            columns={2}
            defaultValue={['1']}
            onChange={(arr, extend) => console.log(arr, extend.items)}
          />
        </Form.Item>
        <Form.Item name="number" label="收入金额" rules={[{ required: true }]}>
          <VirtualInput
            className={style.input}
            placeholder="请输入内容"
            keyboard={
              <NumberKeyboard
                confirmText="确定"
                onInput={onInput}
                onDelete={onDelete}
                className={style.number}
              />
            }
          />
        </Form.Item>
        <Form.Item name="remarks" label="备注">
          <Input placeholder="请输入内容" />
        </Form.Item>
        <Form.Item name="method" label="消费方式" rules={[{ required: true }]}>
          <div
            onClick={() =>
              Dialog.confirm({
                content: '人在天边月上明',
                onConfirm: () => {
                  console.log('Confirmed');
                },
              })
            }
          >
            新增消费类型
          </div>
          <CapsuleTabs className={style.caps}>
            <CapsuleTabs.Tab title="水果" key="fruits" />
            <CapsuleTabs.Tab title="蔬菜" key="vegetables" />
            <CapsuleTabs.Tab title="动物" key="animals" />
          </CapsuleTabs>
        </Form.Item>
      </Form>
    </div>
  );
};
export default MoneyIng;
