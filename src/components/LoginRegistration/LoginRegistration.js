/* eslint-disable no-alert */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback, useRef, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { logInData, signUpData } from 'store/actions/common';
import { useGetLogInDataReturn } from 'store/selectors/common';
import classes from './LoginRegistration.module.css';
import DoSignUp from './doSignUp';
import DoLogIn from './doLogin';

function LoginRegistration() {
  const emailLogIn = useRef();
  const passwordLogIn = useRef();
  const loginRemember = document.getElementById('loginRemember');

  const nameSignUpRef = useRef();
  const emailSignUpRef = useRef();
  const passwordSignUpRef = useRef();
  const passwordComfirmSignUpRef = useRef();
  const acceptSignUp = document.getElementById('acceptSignUp');

  const dispatch = useDispatch();

  const [errorLoginData, setErrorLoginData] = useState([]);
  const [errorSignUpData, setErrorSignUpData] = useState([]);

  const logInCheck = useGetLogInDataReturn();
  console.log(logInCheck);

  // const doLogin = async () => {
  //   const userEmail = emailLogIn.current.value;
  //   const userPassword = passwordLogIn.current.value;
  //   const remember = loginRemember.checked ? 5 : 1;

  //   const login = await postData(
  //     'https://vnguyen.xyz/huy/day17/apis/index.php?type=login',
  //     {
  //       email: userEmail,
  //       password: userPassword,
  //     }
  //   );
  //   const data = login.errors;
  //   const error = data ? JSON.parse(data) : null;
  //   const check = error ? error.fields : [];

  //   if (login.status === true) {
  //     setCookie('email', userEmail, remember);
  //     window.location.href = '/';
  //     return;
  //   }
  //   if (check?.email) {
  //     if (check?.email?.required) {
  //       setErrorLoginData(check?.email?.required);
  //     } else {
  //       setErrorLoginData(check?.email.email);
  //     }
  //     return;
  //   }
  //   if (check?.password) {
  //     setErrorLoginData(check?.password.required);
  //     console.log(check?.email.required);
  //     return;
  //   }
  //   if (login?.message) {
  //     setErrorLoginData(login?.message);
  //   }
  // };
  const doLogIn = useCallback(
    () => {
      const remember = loginRemember?.checked ? 1 : 0;
      const data = {
        email: emailLogIn.current.value,
        password: passwordLogIn.current.value,
        remember,
      };
      dispatch(logInData(data));
      // if (logInCheck === true) {
      //   window.location.to = '/';
      // }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  const doSignUp = useCallback(
    () => {
      const acceptSignUpCheck = acceptSignUp?.checked ? 1 : 0;
      const data = {
        name: nameSignUpRef.current.value,
        email: emailSignUpRef.current.value,
        password: passwordSignUpRef.current.value,
        confirm_password: passwordComfirmSignUpRef.current.value,
        agree: acceptSignUpCheck,
      };
      dispatch(signUpData(data));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  DoLogIn();
  DoSignUp();
  const errorSignUp = errorSignUpData?.length <= 0 ? 'd-none' : 'd-block';
  const errorLogin = errorLoginData?.length <= 0 ? 'd-none' : 'd-block';

  return (
    <div className="container">
      <Row className={classes.LoginRegistration}>
        <Col
          xl={6}
          xs={12}
          className={`${classes.loginBlock} d-flex align-items-center mb-5`}
        >
          <div className="w-75">
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
                <input
                  type="checkbox"
                  id="loginRemember"
                  name="loginRemember"
                />
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
                onClick={doLogIn}
              >
                Login
              </button>
            </li>
            <div />
          </div>
        </Col>

        <Col
          xl={6}
          xs={12}
          className={`${classes.loginBlock} d-flex align-items-center border-0`}
        >
          <div className="w-75">
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
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default LoginRegistration;
