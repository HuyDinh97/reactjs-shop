/* eslint-disable no-alert */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback, useRef, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { logInStatus } from 'store/actions/common';
import userLogin from './login';
import classes from './LoginRegistration.module.css';
import userRegistration from './resgistration';

function LoginRegistration() {
  const emailLogIn = useRef();
  const passwordLogIn = useRef();

  const formRef = useRef(null);
  const nameSignUpRef = useRef();
  const emailSignUpRef = useRef();
  const passwordSignUpRef = useRef();
  const passwordComfirmSignUpRef = useRef();
  const [loginError, setLoginError] = useState();
  const [resgistrationError, setRegistrationError] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const doLogIn = useCallback(
    async () => {
      const loginRemember = document.getElementById('loginRemember');
      const remember = loginRemember?.checked === true ? 1 : 0;
      const data = await userLogin({
        email: emailLogIn?.current.value,
        password: passwordLogIn?.current.value,
        remember,
      });
      setLoginError(data);
      if (data === true) {
        Cookies.set('isUserLogin', data);
        dispatch(logInStatus('true'));
        navigate('/');
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  const doSignUp = useCallback(async () => {
    const acceptSignUp = document.getElementById('acceptSignUp');
    const agree = acceptSignUp?.checked === true ? 1 : 0;
    const data = await userRegistration({
      name: nameSignUpRef?.current.value,
      email: emailSignUpRef?.current.value,
      password: passwordSignUpRef?.current.value,
      confirm_password: passwordComfirmSignUpRef?.current.value,
      agree,
    });
    setRegistrationError(data);
    if (data.status === true) {
      setRegistrationError();
      formRef.current.reset();
      alert(data.message);
    }
  }, []);

  return (
    <div className="container">
      <Row className={classes.LoginRegistration}>
        <Col
          xl={6}
          xs={12}
          className={`${classes.loginBlock} d-flex align-items-center mb-5`}
        >
          <form className="w-75">
            <li>
              <h4 className="fw-bold">LOGIN</h4>
            </li>
            {loginError ? (
              <li className={`${classes.subTitle}`}>
                <span className={classes.subTitle_color}>Error:</span>
                <span className={classes.grayText_color}>{loginError}</span>
              </li>
            ) : null}

            <li>
              <input
                className={classes.inputText}
                placeholder="Enter Your Email"
                id="emailLogin"
                type="email"
                autoComplete="current-email"
                ref={emailLogIn}
              />
            </li>
            <li>
              <input
                className={classes.inputText}
                placeholder="Enter Your Password"
                id="passwordLogin"
                type="password"
                autoComplete="current-password"
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
          </form>
        </Col>

        <Col
          xl={6}
          xs={12}
          className={`${classes.loginBlock} d-flex align-items-center border-0`}
        >
          <form ref={formRef} className="w-75">
            <li>
              <h4 className="fw-bold">REGISTRATION</h4>
            </li>
            {resgistrationError ? (
              <li className={`${classes.subTitle}`}>
                <span className={classes.subTitle_color}>Error:</span>
                <span className={classes.grayText_color}>
                  {resgistrationError}
                </span>
              </li>
            ) : null}
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
                autoComplete="current-email"
                ref={emailSignUpRef}
              />
            </li>
            <li>
              <input
                type="password"
                className={classes.inputText}
                placeholder="Enter Your Password"
                id="passwordSignUp"
                autoComplete="current-password"
                ref={passwordSignUpRef}
              />
            </li>
            <li>
              <input
                type="password"
                className={classes.inputText}
                placeholder="Comfirm Your Password"
                id="passwordComfirmSignUp"
                autoComplete="current-password"
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
          </form>
        </Col>
      </Row>
    </div>
  );
}

export default LoginRegistration;
