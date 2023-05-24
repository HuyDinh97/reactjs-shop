import { useGetLogInData } from 'store/selectors/common';
import React from 'react';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logInDataReturn, logInStatus } from 'store/actions/common';
import { postData } from './LoginCheck';

const DoLogIn = async () => {
  const dataLogin = useGetLogInData();
  const { emailTo, passwordTo, remember } = useGetLogInData();
  const emailCookie = Cookies.get('email');
  const passwordCookie = Cookies.get('password');
  const emailToPost = emailCookie || emailTo;
  const passwordToPost = passwordCookie || passwordTo;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (dataLogin.length <= 0 && !emailToPost && !passwordToPost) return;
    console.log(remember);
    const post = async () => {
      const login = await postData(
        'https://vnguyen.xyz/huy/day17/apis/index.php?type=login',
        {
          email: emailToPost,
          password: passwordToPost,
        }
      );
      const data = login.errors;
      const error = data ? JSON.parse(data) : null;
      const check = error ? error.fields : [];
      if (login?.status === true) {
        navigate('/');
        dispatch(logInStatus(login?.status));
        if (remember === 1) {
          Cookies.set('email', emailToPost, { expires: 1 });
          Cookies.set('password', passwordToPost, { expires: 1 });
        }
        return;
      }
      if (check?.email) {
        if (check?.email?.required) {
          dispatch(logInDataReturn(check?.email?.required));
        } else {
          dispatch(logInDataReturn(check?.email?.email));
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
  }, [emailTo, passwordTo, emailCookie, passwordCookie]);
};

export default DoLogIn;
