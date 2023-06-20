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
  const { errors, status, message } = login;
  const errorFields = errors ? JSON.parse(errors)?.fields : message;
  const [_, firstError] = Object.entries(errorFields).find(([_key, error]) => {
    if (error) {
      return error;
    }
    return [];
  });
  const errorFormat = firstError ? Object.values(firstError)?.[0] : undefined;

  if (status === true) {
    Cookies.set('isUserLogin', true, { expires: remember ? 7 : 1 });
    return status;
  }

  if (message) {
    return message;
  }
  return errorFormat ?? '';
};
export default userLogin;
