import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { postData } from 'components/LoginRegistration/LoginCheck';
import classes from './SubscribeEmail.module.css';

function SubscribeEmail() {
  const emailSubcribe = React.useRef();
  const [show, setShow] = React.useState(false);
  const [subscribeErrors, setSubscribeError] = React.useState();

  const subcribeEmailCheck = localStorage.getItem('subcribeEmailRemember');

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
    if (errorFormat !== 'T') {
      setSubscribeError(`${errorFormat}`);
      setShow(true);
      return;
    }
    setSubscribeError(`Thank you for Subcribing`);
    localStorage.setItem('subcribeEmailRemember', true);
    setShow(true);
  };
  const handleClose = () => setShow(false);

  return (
    <div
      className={`${classes.subscribe_email} ${
        subcribeEmailCheck === 'true' ? 'd-none' : ''
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
          <Button onClick={subcribe}>Subscribe</Button>
          <Modal show={show} onHide={handleClose} centered size="md">
            <Modal.Body className="d-flex justify-content-center fw-semibold py-4">
              {subscribeErrors}
            </Modal.Body>
            <Button
              className={`${classes.modelButton} border-0 py-2`}
              onClick={handleClose}
            >
              Close
            </Button>
          </Modal>
        </Col>
      </Row>
    </div>
  );
}

export default SubscribeEmail;
