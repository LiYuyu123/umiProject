import { Redirect } from 'umi';

const Root = ({ routes }) => {
  console.log(routes);
  return <Redirect to={routes[0].routes[2].routes[0].role} />;
};

export default Root;
