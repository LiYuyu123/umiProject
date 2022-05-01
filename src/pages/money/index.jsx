import { TabBar } from 'antd-mobile';
import {
  HistogramOutline,
  ShopbagOutline,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons';
import style from './index.less';
import { history } from 'umi';
import { useState } from 'react';

const Layout = (props) => {
  const [pathStatus, setPathStatus] = useState('/money/moneying');

  const jump = (value) => {
    setPathStatus(value);
    history.push(value);
  };

  const tabs = [
    {
      key: '/money/moneying',
      title: '记账',
      icon: <ShopbagOutline />,
    },
    {
      key: '/money/statistics',
      title: '统计',
      icon: <HistogramOutline />,
    },
    {
      key: '/money/lables',
      title: '标签',
      icon: <UnorderedListOutline />,
    },
    {
      key: '/money/my',
      title: '个人中心',
      icon: <UserOutline />,
    },
  ];
  return (
    <div>
      <div> {props.children}</div>
      <TabBar
        className={style.tabBar}
        activeKey={pathStatus}
        onChange={(key) => jump(key)}
      >
        {tabs.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </div>
  );
};

export default Layout;
