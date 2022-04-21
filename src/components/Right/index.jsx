import React from 'react';
import { connect, useModel } from 'umi';
import { Avatar, Dropdown, Menu, Space } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import styles from './index.less';

const GlobalHeaderRight = ({ dispatch }) => {
  const { initialState, setInitialState } = useModel('@@initialState');

  const onLogout = async () => {
    await dispatch({ type: 'login/logout' });
    // setInitialState(false);
  };

  const menuHeaderDropdown = (
    <Menu className={styles.menu}>
      <Menu.Item key="logout" onClick={onLogout}>
        <LogoutOutlined />
        退出登录
      </Menu.Item>
    </Menu>
  );

  return (
    <Space>
      {initialState && (
        <Dropdown overlay={menuHeaderDropdown}>
          <span className={styles.action} align="center">
            <Avatar
              size="small"
              src={
                'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png'
              }
              alt="avatar"
            />
            <span className={styles.name}>{initialState?.name}</span>
          </span>
        </Dropdown>
      )}
    </Space>
  );
};
export default connect(({ login }) => login)(GlobalHeaderRight);
