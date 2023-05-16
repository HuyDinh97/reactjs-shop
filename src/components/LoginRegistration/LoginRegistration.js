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
    const email = emailLogIn.current.value;
    const password = passwordLogIn.current.value;
    const remember = loginRemember.checked ? 5 : 1;

    const regEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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

    const login = await postData(
      'https://vnguyen.xyz/huy/day17/apis/index.php?type=login',
      {
        email,
        password,
      }
    );

    if (login.status === true) {
      setCookie('email', email, remember);
      window.location.href = '/';
      return;
    }
    const status = login?.message;
    setErrorLoginData(status);
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
    const data = signUp.errors;
    const error = data ? JSON.parse(data) : null;
    const check = error ? error.fields : [];
    if (check?.name) {
      setErrorSignUpData(check.name.required);
      return;
    }
    if (check?.email) {
      setErrorSignUpData(check.email.required);
      return;
    }
    if (check?.password) {
      setErrorSignUpData(check.password.required);
      return;
    }
    if (check?.confirm_password) {
      if (check?.confirm_password.same) {
        setErrorSignUpData(check.confirm_password.same);
        return;
      }
      setErrorSignUpData(check.confirm_password.required);
      return;
    }
    if (check?.agree) {
      setErrorSignUpData('You must accept the terms and conditions');
    }
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
