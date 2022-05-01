import style from './index.less';
import React from 'react';
import { AutoCenter, Avatar, Button } from 'antd-mobile';
import { connect } from 'umi';

const My = ({ dispatch }) => {
  //退出登录
  const onLogout = async () => {
    await dispatch({ type: 'login/logout' });
    // setInitialState(false);
  };
  return (
    <div className={style.main}>
      <AutoCenter className={style.content}>
        <Avatar src="" style={{ '--border-radius': '50%', '--size': '80px' }} />
        <div className={style.infoName}>李子杰</div>
      </AutoCenter>
      <div className={style.button}>
        <Button block color="danger" size="large" onClick={onLogout}>
          退出登录
        </Button>
      </div>
    </div>
  );
};

export default connect(({ login }) => login)(My);
