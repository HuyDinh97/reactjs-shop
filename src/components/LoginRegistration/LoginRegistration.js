/* eslint-disable no-alert */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef } from 'react';
import { postData, setCookie, checkLogin } from './LoginCheck';
import classes from './LoginRegistration.module.css';

function LoginRegistration() {
  const emailLogIn = useRef();
  const passwordLogIn = useRef();
  const loginRemember = document.getElementById('loginRemember');

  const doLogin = async () => {
    const email = emailLogIn.current.value;
    const password = passwordLogIn.current.value;
    const remember = loginRemember.checked ? 5 : 1;

    console.log(document.cookie);

    const regEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regEmail.test(email)) {
      alert(
        'You must provide an correct email address to perform login action!'
      );
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

    const response = await postData(
      'https://vnguyen.xyz/huy/day15/apis/signin.php',
      {
        email,
        password,
      }
    );

    if (response?.status) {
      setCookie('email', email, remember);
      window.location.href = '/';
      return false;
    }
    alert(response.message);
  };

  checkLogin();

  return (
    <div className={classes.LoginRegistration}>
      <ul>
        <li>
          <h4 className="fw-bold">LOGIN</h4>
        </li>
        <li className={classes.subTitle}>
          <span className={classes.subTitle_color}>Error:</span>
          <span className={classes.grayText_color}>
            Wrong email or password
          </span>
        </li>
        <li>
          <input
            className={classes.inputText}
            placeholder="Enter Your Email"
            id="emailLogin"
            type="email"
            ref={emailLogIn}
          />
        </li>
        <li>
          <input
            className={classes.inputText}
            placeholder="Enter Your Password"
            id="passwordLogin"
            type="password"
            ref={passwordLogIn}
          />
        </li>
        <li className="d-flex justify-content-between">
          <span className="d-flex">
            <input type="checkbox" id="loginRemember" name="loginRemember" />
            <label className="mx-1" htmlFor="loginRemember">
              Remember Me
            </label>
          </span>
          <span>
            <a href="/">Forgot Password?</a>
          </span>
        </li>
        <li>
          <button
            className={classes.login_button}
            type="button"
            onClick={doLogin}
          >
            Login
          </button>
        </li>
        <div />
      </ul>

      <ul>
        <li>
          <h4 className="fw-bold">REGISTRATION</h4>
        </li>
        <li className={classes.subTitle}>
          <span className={classes.subTitle_color}>Error:</span>
          <span className={classes.grayText_color}>Email already existed</span>
        </li>
        <li>
          <input
            className={classes.inputText}
            placeholder="Enter Your Name"
            id="name"
          />
        </li>
        <li>
          <input
            className={classes.inputText}
            placeholder="Enter Your Email"
            id="emailSignUp"
          />
        </li>
        <li>
          <input
            className={classes.inputText}
            placeholder="Enter Your Password"
            id="passwordSignUp"
          />
        </li>
        <li className="d-flex justify-content-between">
          <span className="d-flex">
            <input type="checkbox" id="scales" name="scales" />
            <label className="mx-1" htmlFor="scales">
              Accept the terms and conditions
            </label>
          </span>
        </li>
        <li>
          <button className={classes.login_button} type="button">
            Sign Up
          </button>
        </li>
        <div />
      </ul>
    </div>
  );
}

export default LoginRegistration;
