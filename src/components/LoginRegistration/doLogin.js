/* eslint-disable no-alert */
import { postData, setCookie } from './LoginCheck';

function DoLogin({ emailLogIn, passwordLogIn, loginRemember }) {
  const email = emailLogIn.current.value;
  const password = passwordLogIn.current.value;
  const remember = loginRemember.checked ? 5 : 1;

  const regEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regEmail.test(email)) {
    alert('You must provide an correct email address to perform login action!');
    return false;
  }

  if (!email) {
    alert('You must provide an email address to perform login action!');
    return false;
  }
  if (!password) {
    alert('You must provide an password to perform login action!');
    return false;
  }

  const login = postData(
    'https://vnguyen.xyz/huy/day17/apis/index.php?type=login',
    {
      email,
      password,
    }
  );

  if (login?.status) {
    setCookie('email', email, remember);
    window.location.href = '/';
    return false;
  }
  const status = login?.message;
  return status;
}

export default DoLogin;
