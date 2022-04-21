import { Redirect } from 'umi';
import { getCookie } from '../utils/utils';

export default (props) => {
  if (getCookie('token')) {
    return <div> {props.children}</div>;
  } else {
    return <Redirect to="/login" />;
  }
};
