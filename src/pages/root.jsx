import { Redirect } from 'umi';

const Root = ({ routes }) => {
  console.log(routes[0].routes[2].role);
  return <Redirect to={routes[0].routes[2].role} />;
};

export default Root;
