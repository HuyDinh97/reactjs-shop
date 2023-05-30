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
  const data = signUp.errors;
  const error = data ? JSON.parse(data) : null;
  const check = error ? error.fields : [];
  if (signUp.status === true) {
    return signUp;
  }
  if (check?.name) {
    if (check?.name.required) {
      return check?.name.required;
    }
    return check?.name.min;
  }
  if (check?.email) {
    if (check?.email?.required) {
      return check.email.required;
    }
    return check.email.email;
  }
  if (check?.password) {
    return check.password.required;
  }
  if (check?.confirm_password) {
    if (check?.confirm_password.same) {
      return check.confirm_password.same;
    }
    return check.confirm_password.required;
  }
  if (check?.agree) {
    return 'You must accept the terms and conditions';
  }
  return signUp?.message;
};
export default userRegistration;
