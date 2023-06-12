/* eslint-disable camelcase */
import { postData } from './LoginCheck';

const userRegistration = async ({
  name,
  email,
  password,
  confirm_password,
  agree,
}) => {
  const signUp = await postData(
    'https://vnguyen.xyz/huy/day17/apis/index.php?type=register',
    {
      name,
      email,
      password,
      confirm_password,
      agree,
    }
  );
  const { errors, message } = signUp;
  const errorFields = errors ? JSON.parse(errors)?.fields : message;
  const [_, firstError] = Object.entries(errorFields).find(([_key, error]) => {
    if (error) {
      return error;
    }
    return [];
  });
  const errorFormat = firstError ? Object.values(firstError)?.[0] : undefined;

  if (message) {
    return message;
  }

  if (errorFormat === 'The Agree minimum is 1') {
    return 'You must accept the terms and conditions';
  }

  return errorFormat ?? '';
};
export default userRegistration;
