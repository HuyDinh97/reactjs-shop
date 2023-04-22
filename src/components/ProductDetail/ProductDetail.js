/* eslint-disable react/forbid-dom-props */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import QuantityButton from 'components/QuantityButton/QuantityButton';
import { IoHeartCircleSharp } from 'react-icons/io5';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaGooglePlusG,
} from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import cart from './img/cart-icon-1.png';
import classes from './ProductDetail.module.css';

function ProductDetail() {
  const linkIMG =
    'http://c3kienthuyhp.edu.vn/wp-content/uploads/2022/12/1672384705_929_999-Anh-Gai-Xinh-Viet-Nam-Hot-Girl-Cute-De.jpg';
  return (
    <div className="my-5">
      <Container>
        <Row>
          <Col lg={5}>
            <div
              className={classes.productDetailIMG}
              style={{
                background: `url(${linkIMG}) no-repeat center`,
              }}
            />
            <div className="d-flex mt-3">
              <div
                className={classes.productDetailSmall}
                style={{
                  background: `url(${linkIMG}) no-repeat top`,
                }}
              />
              <div
                className={`${classes.productDetailSmall} ms-3`}
                style={{
                  background: `url(${linkIMG}) no-repeat bottom `,
                }}
              />
            </div>
          </Col>
          <Col className="ps-4" lg={7}>
            <h2>Product</h2>
            <div>
              <span className="fs-6 fw-semibold opacity-50">
                <s>$ 95.00</s>
              </span>
              <span
                className={`${classes.afterSalePriceColor} fs-4 ms-3 fw-semibold`}
              >
                $ 81.00
              </span>
            </div>
            <div className="border-bottom py-4 fw-semibold opacity-50 fs-5">
              asdasdasdasdasdasdasdasd
            </div>
            <div className="border-bottom py-5">
              <div>
                <span className="fw-semibold opacity-50 fs-5">
                  Availability:
                </span>
                <span
                  className={`${classes.afterSalePriceColor} fw-semibold fs-5 ms-1`}
                >
                  In Stock
                </span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex">
                  <div className="fs-5 fw-semibold opacity-50">Quantity:</div>
                  <div className="mx-2">
                    <QuantityButton className="d-flex" />
                  </div>
                </div>
                <div>
                  <button
                    className={`${classes.addToCartButton} d-flex rounded-pill p-2 px-4 border-0`}
                    type="button"
                  >
                    <img src={cart} alt="cart" />
                    <div className="d-flex align-items-center mx-2 fw-semibold text-white fs-6">
                      Add to Cart
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <Row className={`${classes.socialNetworkIcon} fs-6 my-4`}>
              <Col className="fs-1">
                <IoHeartCircleSharp className={classes.leftIcon} />
              </Col>
              <Col className="d-flex justify-content-end">
                <span>
                  <FaFacebookF />
                </span>
                <span>
                  <AiOutlineTwitter />
                </span>
                <span>
                  <FaLinkedinIn />
                </span>
                <span>
                  <FaPinterestP />
                </span>
                <span>
                  <FaGooglePlusG />
                </span>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProductDetail;
