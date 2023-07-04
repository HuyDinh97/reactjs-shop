/* eslint-disable no-alert */
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { postData } from 'components/LoginRegistration/LoginCheck';
import classes from './SubscribeEmail.module.css';

function SubscribeEmail() {
  const emailSubcribe = React.useRef();
  const [subscribeStatus, setSubscribeStatus] = React.useState();
  const subcribe = async () => {
    const subscribeResponse = await postData(
      'https://vnguyen.xyz/huy/day17/apis/index.php?type=subscribes',
      {
        email: emailSubcribe.current.value,
      }
    );
    const { message, errors } = subscribeResponse;
    const errorFields = errors ? JSON.parse(errors)?.fields : message;
    const [_, firstError] = Object.entries(errorFields).find(
      ([_key, error]) => {
        if (error) {
          return error;
        }
        return [];
      }
    );
    const errorFormat = firstError ? Object.values(firstError)?.[0] : undefined;
    if (message) {
      setSubscribeStatus(true);
      alert(`${message}`);
      return;
    }
    alert(`${errorFormat}`);
  };

  return (
    <div
      className={`${classes.subscribe_email} ${
        subscribeStatus === true ? 'd-none' : ''
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
