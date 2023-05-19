/* eslint-disable camelcase */

import { useGetSignUpData } from 'store/selectors/common';
import { useDispatch } from 'react-redux';
import { signUpDataReturn } from 'store/actions/common';
import { postData } from './LoginCheck';

const DoSignUp = async () => {
  const dataSignUp = useGetSignUpData();
  const { name, email, password, confirm_password, agree } = useGetSignUpData();
  const dispatch = useDispatch();
  if (dataSignUp.length <= 0) return;

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
  dispatch(signUpDataReturn(check));
};

export default DoSignUp;
