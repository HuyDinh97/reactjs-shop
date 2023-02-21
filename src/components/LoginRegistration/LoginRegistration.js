/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import classes from './LoginRegistration.module.css';

function LoginRegistration() {
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
            id="email"
          />
        </li>
        <li>
          <input
            className={classes.inputText}
            placeholder="Enter Your Password"
            id="password"
          />
        </li>
        <li className="d-flex justify-content-between">
          <span>
            <input type="checkbox" id="scales" name="scales" />
            <label className="mx-1" htmlFor="scales">
              Remember Me
            </label>
          </span>
          <span>
            <a href="/">Forgot Password?</a>
          </span>
        </li>
        <li>
          <button className={classes.login_button} type="button">
            Login
          </button>
        </li>
        <div />
      </ul>

      <ul>
        <li>
          <h4 className="fw-bold">LOGIN</h4>
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
            id="email"
          />
        </li>
        <li>
          <input
            className={classes.inputText}
            placeholder="Enter Your Password"
            id="password"
          />
        </li>
        <li className="d-flex justify-content-between">
          <span>
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
