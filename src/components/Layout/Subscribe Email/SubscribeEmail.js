import React from 'react';
import TitleUnderline from '../Popular Product/TitleUnderline';

import classes from './SubscribeEmail.module.css';

function SubscribeEmail() {
  return (
    <div className={classes.subscribe_email}>
      <div className={classes.container}>
        <TitleUnderline
          name="FOLLOW YOUR UPDATE!"
          className={classes.TitleUnderline}
        />
        <p className="text-white fs-4 d-flex justify-content-center my-4 col-10">
          If you want to get an email from us every time we have a new special
          offer, then sign up here!
        </p>
        <div className="d-flex justify-content-center my-4 col-6">
          <input
            type="email"
            className="form-control rounded-pill fw-semibold py-2 fs-6 d-flex justify-content-end"
            placeholder="Enter Your Email"
          />
          <button
            type="button"
            className="rounded-pill py-2 px-5 fs-6 fw-semibold border-0 mx-4"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default SubscribeEmail;
