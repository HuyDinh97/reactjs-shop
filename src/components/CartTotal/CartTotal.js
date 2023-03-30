/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from './CartTotal.module.css';

function CartTotal({ total }) {
  return (
    <Row className={classes.cartTotal}>
      <Col>
        <Card className={classes.Card}>
          <Card.Title className={classes.Card_Title}>CART TOTAL</Card.Title>
          <Card.Body>
            <div className={classes.p_10}>
              <div className={classes.Subtotal}>
                <div>Subtotal</div>
                <div>${total || '0'}</div>
              </div>
              <div className={classes.Total}>
                <div>Total</div>
                <div>${total || '0'}</div>
              </div>
            </div>
          </Card.Body>
          <div className="border-top">
            <Button className={classes.Card_Button}>Proceed To Checkout</Button>
          </div>
        </Card>
      </Col>
    </Row>
  );
}

export default CartTotal;
