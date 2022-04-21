import { Button, Result } from 'antd';
import { history } from 'umi';

const NoFoundPage = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="抱歉，您访问的页面不存在,请点击回到首页"
      extra={
        <Button type="primary" onClick={() => history.push('/')}>
          回到首页
        </Button>
      }
    />
  );
};

export default NoFoundPage;
