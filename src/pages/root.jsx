import { Redirect } from 'umi';

const Root = ({ routes }) => {
  return <Redirect to={routes[0].routes[2].role} />;
};

export default Root;
