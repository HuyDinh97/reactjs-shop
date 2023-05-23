/* eslint-disable camelcase */
import React from 'react';
import { useGetSignUpData } from 'store/selectors/common';
import { useDispatch } from 'react-redux';
import { signUpDataReturn } from 'store/actions/common';
import { postData } from './LoginCheck';

const DoSignUp = async () => {
  const dataSignUp = useGetSignUpData();
  const { name, email, password, confirm_password, agree } = useGetSignUpData();
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (dataSignUp.length <= 0) return;

    const doSignUp = async () => {
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
      if (check?.name) {
        if (check?.name.required) {
          dispatch(signUpDataReturn(check?.name.required));
        } else {
          dispatch(signUpDataReturn(check.name.min));
        }
        return;
      }
      if (check?.email) {
        if (check?.email?.required) {
          dispatch(signUpDataReturn(check.email.required));
        } else {
          dispatch(signUpDataReturn(check.email.email));
        }
        return;
      }
      if (check?.password) {
        dispatch(signUpDataReturn(check.password.required));
        return;
      }
      if (check?.confirm_password) {
        if (check?.confirm_password.same) {
          dispatch(signUpDataReturn(check.confirm_password.same));
          return;
        }
        dispatch(signUpDataReturn(check.confirm_password.required));
        return;
      }
      if (check?.agree) {
        dispatch(signUpDataReturn('You must accept the terms and conditions'));
      }
    };
    doSignUp();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, password, name, confirm_password, agree]);
};

export default DoSignUp;
