import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from './SubscribeEmail.module.css';

function SubscribeEmail() {
  return (
    <div className={classes.subscribe_email}>
      <Row className={classes.container}>
        <Col className={classes.Product_title}>
          <div className={classes.Underline}>FOLLOW YOUR UPDATE!</div>
        </Col>
        <Col className={classes.emailDescribe}>
          If you want to get an email from us every time we have a new special
          offer, then sign up here!
        </Col>
        <Col className={classes.emailSubcribeSubmit}>
          <input
            type="email"
            className="form-control rounded-pill fw-semibold py-2 fs-6 d-flex justify-content-end"
            placeholder="Enter Your Email"
            data-testid="email-input"
          />
          <button type="button">Subscribe</button>
        </Col>
      </Row>
    </div>
  );
}

export default SubscribeEmail;
