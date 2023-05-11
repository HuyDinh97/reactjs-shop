/* eslint-disable no-alert */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useCallback } from 'react';
import { postData, checkLogin } from './LoginCheck';
import classes from './LoginRegistration.module.css';
import doLogin from './doLogin';

function LoginRegistration() {
  const emailLogIn = useRef();
  const passwordLogIn = useRef();
  const loginRemember = document.getElementById('loginRemember');

  const nameSignUpRef = useRef();
  const emailSignUpRef = useRef();
  const passwordSignUpRef = useRef();
  const passwordComfirmSignUpRef = useRef();
  const acceptSignUp = document.getElementById('acceptSignUp');

  const logIn = useCallback(() => {
    doLogin({ emailLogIn, passwordLogIn, loginRemember });
  }, [loginRemember]);

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
        password: passwordComfirmSignUp,
        confirm_password: passwordComfirmSignUp,
        agree: acceptSignUpCheck,
      }
    );
    if (signUp?.status) {
      return false;
    }
    if (passwordSignUp !== passwordComfirmSignUp) {
      alert('password confirm is uncorrect');
    }
    if (acceptSignUpCheck === 0) {
      alert('You must accept the terms and conditions');
    }
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
            onClick={logIn}
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
