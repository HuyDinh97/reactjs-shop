import { useGetLogInData } from 'store/selectors/common';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logInDataReturn } from 'store/actions/common';
import { postData } from './LoginCheck';

const DoLogIn = async () => {
  const dataLogin = useGetLogInData();
  const { email, password } = useGetLogInData();
  const [errorLoginData, setErrorLoginData] = useState([]);
  console.log(errorLoginData);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (dataLogin.length <= 0) return;

    const post = async () => {
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
      if (login?.status === true) {
        navigate('/');
        dispatch(logInDataReturn({ status: true }));
        return;
      }
      if (check?.email) {
        if (check?.email?.required) {
          dispatch(logInDataReturn(check?.email?.required));
        } else {
          dispatch(logInDataReturn(check?.email.email));
        }
        return;
      }
      if (check?.password) {
        dispatch(logInDataReturn(check?.password.required));
        return;
      }
      if (login?.message) {
        dispatch(logInDataReturn(login?.message));
      }
    };
    post();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, password]);
};

export default DoLogIn;