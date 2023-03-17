/* eslint-disable react/button-has-type */
import CartTotal from 'components/CartTotal/CartTotal';
import PromotionCode from 'components/PromotionCode/PromotionCode';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaMinus, FaPlus, FaChevronLeft } from 'react-icons/fa';
import { HiRefresh } from 'react-icons/hi';

import { Link } from 'react-router-dom';
import classes from './CartTable.module.css';
import image from './image/product-img-3.jpg';

function CartTable() {
  return (
    <div className={classes.mt_5}>
      <Container className={classes.webVersion}>
        <Row className={classes.cartDetailHeader}>
          <Col lg={2}>Item</Col>
          <Col lg={5}>Product Name</Col>
          <Col lg={1}>Price</Col>
          <Col lg={2}>Quantity</Col>
          <Col lg={1}>Subtotal</Col>
          <Col lg={1}> </Col>
        </Row>
        <Row className={classes.cartDetail}>
          <Col lg={2}>
            <div className="d-flex justify-content-center border-0">
              <img src={image} alt="" />
            </div>
          </Col>
          <Col className={classes.productName} lg={5}>
            Calvin Klein womens Solid Sheath With Chiffon Bell Sleeves Dress
          </Col>
          <Col className={classes.price_sample} lg={1}>
            $6
          </Col>
          <Col lg={2}>
            <div className={classes.cartDetailQuantity}>
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
          </Col>
          <Col className={classes.price_sample} lg={1}>
            $6
          </Col>
          <Col lg={1}>
            <button className={classes.deleteButton}>X</button>
          </Col>
        </Row>
        <Row className={classes.cartDetail}>
          <Col>
            <div className="d-flex justify-content-center align-item-center border-0 p-0">
              <span className={classes.buttonUnderCartBorder}>
                <Link to="/" className={classes.buttonUnderCart}>
                  <FaChevronLeft className={classes.margin_right_1rem} />
                  CONTINUE SHOPPING
                </Link>
              </span>
              <span className={classes.buttonUpdateCartBorder}>
                <button className={classes.buttonUpdateCart}>
                  <HiRefresh className={classes.margin_right_1rem} />
                  UPDATE CART
                </button>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className={classes.mobileVersion}>
        <Row className="d-flex flex-column">
          <Col className="d-flex justify-content-between p-3">
            <div className={classes.semibold}>Product:</div>
            <div className="fw-bold">Product 01</div>
          </Col>
          <Col className="d-flex justify-content-between p-3">
            <div className={classes.semibold}>Price:</div>
            <div className={classes.price_sample}>$ 78</div>
          </Col>
          <Col className="d-flex justify-content-between p-3">
            <div className={classes.semibold}>Quantity:</div>
            <div>
              <div className={classes.cartDetailQuantity}>
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
            </div>
          </Col>
          <Col className="d-flex justify-content-between p-3">
            <div className={classes.semibold}>Subprice:</div>
            <div className={classes.price_sample}>$ 78</div>
          </Col>
        </Row>
        <Row className={classes.underCartButton}>
          <Col>
            <div className="d-flex justify-content-center align-item-center border-0 p-0">
              <span className={classes.buttonUnderCartBorder}>
                <Link to="/" className={classes.buttonUnderCart}>
                  <FaChevronLeft className={classes.iconButton} />
                  CONTINUE SHOPPING
                </Link>
              </span>
              <span className={classes.buttonUpdateCartBorder}>
                <button className={classes.buttonUpdateCart}>
                  <HiRefresh className={classes.iconButton} />
                  UPDATE CART
                </button>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className={classes.promotionCode}>
            <PromotionCode />
          </Col>
          <Col className={classes.subtotal}>
            <CartTotal />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CartTable;
