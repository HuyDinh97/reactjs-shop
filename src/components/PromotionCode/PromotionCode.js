import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import classes from './PromotionCode.module.css';

function PromotionCode() {
  return (
    <Row className={classes.promotionCode}>
      <Col>
        <Card className={classes.Card}>
          <Card.Title className={classes.Card_Title}>PROMOTION CODE</Card.Title>
          <Card.Body>
            <Card.Text className={classes.Card_Text}>
              Enter Your Coupon Code If you have one
              <input
                type="text"
                aria-label="couple-code"
                className="form-control my-4 fs-6 py-2 rounded-0"
                placeholder=" Couple Code"
              />
            </Card.Text>
            <Button className={classes.Card_Button}>Apply Coupon Code</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default PromotionCode;
