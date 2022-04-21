import { getLoginInfo } from '@/service';
import Right from '@/components/Right';

export const dva = {
  config: {
    onError(e) {
      e.preventDefault();
      console.error(e.message);
    },
  },
};
// umi-request error处理
export const request = {
  errorConfig: {
    adaptor: (resData) => {
      return {
        ...resData,
        success: resData.code === 200,
        errorMessage: resData.message,
      };
    },
  },
};

// 页面初始化
export const getInitialState = async () => {
  const { data } = await getLoginInfo();
  return data;
};

// 布局设置
export const layout = () => {
  return {
    rightContentRender: () => <Right />,
  };
};
