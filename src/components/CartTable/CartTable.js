/* eslint-disable react/button-has-type */
import CartTotal from 'components/CartTotal/CartTotal';
import PromotionCode from 'components/PromotionCode/PromotionCode';
import React from 'react';
import { Table } from 'react-bootstrap';
import { FaMinus, FaPlus, FaChevronLeft } from 'react-icons/fa';
import { HiRefresh } from 'react-icons/hi';
import { useGetMyCart } from 'store/selectors/common';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import classes from './CartTable.module.css';

function CartTable() {
  const mycart = useGetMyCart();

  const linkIMG = 'https://vnguyen.xyz/huy/day17/apis/';
  return (
    <div className={classes.cartTable}>
      <Container>
        <Row>
          <Col xs={1}>Item</Col>
          <Col xs={6}>Product Name</Col>
          <Col xs={1}>Price</Col>
          <Col xs={3}>Quantity</Col>
          <Col xs={1}>Subtotal</Col>
        </Row>
      </Container>
      <Table className={classes.cartTable} striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Item</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {mycart.length > 0 ? (
            mycart.map((item) => (
              <tr key={item._id}>
                <td>
                  <div className="d-flex justify-content-center" colSpan={2}>
                    <img src={linkIMG + item.thumb} alt="" />
                  </div>
                </td>
                <td className="fs-5 fw-semibold">{item.name}</td>
                <td className={classes.price_sample}>$6</td>
                <td>
                  <div className="d-flex justify-content-center align-items-center">
                    <button className={classes.quantity_button}>
                      <FaMinus />
                    </button>
                    <div className={classes.quantity_in_cart}>
                      <input type="tel" min={0} aria-label="couple-code" />
                    </div>
                    <button className={classes.quantity_button}>
                      <FaPlus />
                    </button>
                  </div>
                </td>
                <td className={classes.price_sample}>$6</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5}>No items in cart</td>
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={5}>
              <div className="d-flex justify-content-center align-item-center">
                <span>
                  <button href="/">
                    <a href="/">
                      <FaChevronLeft className={classes.margin_right_1rem} />
                      CONTINUE SHOPPING
                    </a>
                  </button>
                </span>
                <span>
                  <button className={classes.update_cart}>
                    <HiRefresh className={classes.margin_right_1rem} />
                    UPDATE CART
                  </button>
                </span>
              </div>
            </td>
          </tr>
        </tfoot>
      </Table>
      <div className="d-flex justify-content-between">
        <PromotionCode />
        <CartTotal />
      </div>
    </div>
  );
}

export default CartTable;
