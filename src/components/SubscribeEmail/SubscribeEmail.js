import React from 'react';
import { Col } from 'react-bootstrap';

import classes from './SubscribeEmail.module.css';

function SubscribeEmail() {
  return (
    <div className={classes.subscribe_email}>
      <div className={classes.container}>
        <Col col className={classes.Product_title}>
          <div className={classes.Underline}>FOLLOW YOUR UPDATE!</div>
        </Col>
        <p className={classes.emailDescribe}>
          If you want to get an email from us every time we have a new special
          offer, then sign up here!
        </p>
        <div className={classes.emailSubcribeSubmit}>
          <input
            type="email"
            className="form-control rounded-pill fw-semibold py-2 fs-6 d-flex justify-content-end"
            placeholder="Enter Your Email"
            data-testid="email-input"
          />
          <button type="button">Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default SubscribeEmail;
