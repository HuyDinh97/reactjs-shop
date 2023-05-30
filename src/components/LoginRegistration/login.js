import Cookies from 'js-cookie';
import { postData } from './LoginCheck';

const userLogin = async ({ email, password, remember }) => {
  const login = await postData(
    'https://vnguyen.xyz/huy/day17/apis/index.php?type=login',
    {
      email,
      password,
    }
  );
  const data = login.errors;
  const error = data ? JSON.parse(data) : null;
  const check = error ? error.fields : [];
  console.log(remember);
  if (login?.status === true) {
    if (remember === 1) {
      Cookies.set('isUserLogin', true, { expires: 7 });
      return login?.status;
    }
    Cookies.set('isUserLogin', true, { expires: 1 });
    return login?.status;
  }
  if (check?.email) {
    if (check?.email?.required) {
      return check?.email?.required;
    }
    return check?.email?.email;
  }
  if (check?.password) {
    return check?.password.required;
  }
  return login?.message;
};
export default userLogin;
