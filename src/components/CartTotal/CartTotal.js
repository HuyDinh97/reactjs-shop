import React from 'react';
import { Card, Button } from 'react-bootstrap';
import classes from './CartTotal.module.css';

function CartTotal() {
  return (
    <div className={classes.cartTotal}>
      <Card className={classes.Card}>
        <Card.Title className={classes.Card_Title}>CART TOTAL</Card.Title>
        <Card.Body>
          <div>
            <div className={classes.Subtotal}>
              <div>Subtotal</div>
              <div>$6</div>
            </div>
            <div className={classes.Total}>
              <div>Total</div>
              <div>$6</div>
            </div>
          </div>
        </Card.Body>
        <div className="border-top">
          <Button className={classes.Card_Button}>Proceed To Checkout</Button>
        </div>
      </Card>
    </div>
  );
}

export default CartTotal;
