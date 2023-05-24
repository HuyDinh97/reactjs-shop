import { useGetLogInData } from 'store/selectors/common';
import React from 'react';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logInDataReturn, logInStatus } from 'store/actions/common';
import { postData } from './LoginCheck';

const DoLogIn = async () => {
  const dataLogin = useGetLogInData();
  const { email, password } = useGetLogInData();
  const emailCookie = Cookies.get('email');
  const passwordCookie = Cookies.get('password');
  const emailToPost = emailCookie || email;
  const passwordToPost = passwordCookie || password;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (dataLogin.length <= 0 && !emailToPost && !passwordToPost) return;
    console.log(passwordToPost);
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
      console.log(login);
      if (login?.status === true) {
        navigate('/');
        dispatch(logInStatus(login?.status));
        Cookies.set('email', emailToPost, { expires: 1 });
        Cookies.set('password', passwordToPost, { expires: 1 });
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
  }, [email, password, emailCookie, passwordCookie]);
};

export default DoLogIn;
