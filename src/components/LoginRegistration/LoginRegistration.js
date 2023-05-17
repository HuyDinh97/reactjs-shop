/* eslint-disable no-alert */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useState } from 'react';
import { checkLogin, postData, setCookie } from './LoginCheck';
import classes from './LoginRegistration.module.css';

function LoginRegistration() {
  const emailLogIn = useRef();
  const passwordLogIn = useRef();
  const loginRemember = document.getElementById('loginRemember');

  const nameSignUpRef = useRef();
  const emailSignUpRef = useRef();
  const passwordSignUpRef = useRef();
  const passwordComfirmSignUpRef = useRef();
  const acceptSignUp = document.getElementById('acceptSignUp');

  const [errorLoginData, setErrorLoginData] = useState([]);
  const [errorSignUpData, setErrorSignUpData] = useState([]);

  const doLogin = async () => {
    const userEmail = emailLogIn.current.value;
    const userPassword = passwordLogIn.current.value;
    const remember = loginRemember.checked ? 5 : 1;

    const login = await postData(
      'https://vnguyen.xyz/huy/day17/apis/index.php?type=login',
      {
        email: userEmail,
        password: userPassword,
      }
    );
    if (login.status === true) {
      setCookie('email', userEmail, remember);
      window.location.href = '/';
    }
  };

  const doSignUp = async () => {
    const nameSignUp = nameSignUpRef.current.value;
    const emailSignUp = emailSignUpRef.current.value;
    const passwordSignUp = passwordSignUpRef.current.value;
    const passwordComfirmSignUp = passwordComfirmSignUpRef.current.value;
    const acceptSignUpCheck = acceptSignUp.checked ? 1 : 0;

    const signUp = await postData(
      'https://vnguyen.xyz/huy/day17/apis/index.php?type=register',
      {
        name: nameSignUp,
        email: emailSignUp,
        password: passwordSignUp,
        confirm_password: passwordComfirmSignUp,
        agree: acceptSignUpCheck,
      }
    );
  };

  checkLogin();
  const errorSignUp = errorSignUpData?.length <= 0 ? 'd-none' : 'd-block';
  const errorLogin = errorLoginData?.length <= 0 ? 'd-none' : 'd-block';

  return (
    <div className={classes.LoginRegistration}>
      <ul>
        <li>
          <h4 className="fw-bold">LOGIN</h4>
        </li>
        <li className={`${classes.subTitle} ${errorLogin}`}>
          <span className={classes.subTitle_color}>Error:</span>
          <span className={classes.grayText_color}>{errorLoginData}</span>
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
        <li className={`${classes.subTitle} ${errorSignUp}`}>
          <span className={classes.subTitle_color}>Error:</span>
          <span className={classes.grayText_color}>{errorSignUpData}</span>
        </li>
        <li>
          <input
            className={classes.inputText}
            placeholder="Enter Your Name"
            id="name"
            ref={nameSignUpRef}
          />
        </li>
        <li>
          <input
            className={classes.inputText}
            placeholder="Enter Your Email"
            id="emailSignUp"
            ref={emailSignUpRef}
          />
        </li>
        <li>
          <input
            type="password"
            className={classes.inputText}
            placeholder="Enter Your Password"
            id="passwordSignUp"
            ref={passwordSignUpRef}
          />
        </li>
        <li>
          <input
            type="password"
            className={classes.inputText}
            placeholder="Comfirm Your Password"
            id="passwordComfirmSignUp"
            ref={passwordComfirmSignUpRef}
          />
        </li>
        <li className="d-flex justify-content-between">
          <span className="d-flex">
            <input type="checkbox" id="acceptSignUp" name="acceptSignUp" />
            <label className="mx-1" htmlFor="scales">
              Accept the terms and conditions
            </label>
          </span>
        </li>
        <li>
          <button
            className={classes.login_button}
            type="button"
            onClick={doSignUp}
          >
            Sign Up
          </button>
        </li>
        <div />
      </ul>
    </div>
  );
}

export default LoginRegistration;
