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
      console.log(resData)
      return {
        ...resData,
        success:resData.code === 200,
        errorMessage: resData.message,
      };
    },
  },
};
