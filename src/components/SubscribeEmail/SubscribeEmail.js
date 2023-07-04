import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { postData } from 'components/LoginRegistration/LoginCheck';
import classes from './SubscribeEmail.module.css';

function SubscribeEmail() {
  const emailSubcribe = React.useRef();
  const [subcribeStatus, setSubcribeStatus] = React.useState();
  const subcribe = async () => {
    const response = await postData(
      'https://vnguyen.xyz/huy/day17/apis/index.php?type=subscribes',
      {
        email: emailSubcribe.current.value,
      }
    );
    if (response.status === true) {
      // eslint-disable-next-line no-alert
      alert(`${response?.message}`);
      return;
    }
    if (response.message) {
      setSubcribeStatus(true);
    }
    const error = response.errors ? JSON.parse(response.errors) : '';
    // eslint-disable-next-line no-alert
    alert(
      `${
        error?.fields?.email?.required ||
        error?.fields?.email?.email ||
        response?.message
      }`
    );
  };

  return (
    <div
      className={`${classes.subscribe_email} ${
        subcribeStatus === true ? 'd-none' : ''
      }`}
    >
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
            ref={emailSubcribe}
            className="form-control rounded-pill fw-semibold py-2 fs-6 d-flex justify-content-end"
            placeholder="Enter Your Email"
            data-testid="email-input"
          />
          <button onClick={subcribe} type="button">
            Subscribe
          </button>
        </Col>
      </Row>
    </div>
  );
}

export default SubscribeEmail;
