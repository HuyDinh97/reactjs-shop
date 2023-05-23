import { useGetLogInData } from 'store/selectors/common';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logInDataReturn } from 'store/actions/common';
import { postData } from './LoginCheck';

const DoLogIn = async () => {
  const dataLogin = useGetLogInData();
  const { email, password } = useGetLogInData();
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
      if (login?.status === true) {
        navigate('/');
        // eslint-disable-next-line no-alert
        window.alert(login?.message);
      }
      dispatch(logInDataReturn(login));
    };
    post();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, password]);
};

export default DoLogIn;
