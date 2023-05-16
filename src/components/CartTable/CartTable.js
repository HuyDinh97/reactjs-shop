/* eslint-disable prettier/prettier */
/* eslint-disable react/button-has-type */
import CartTotal from 'components/CartTotal/CartTotal';
import PromotionCode from 'components/PromotionCode/PromotionCode';
import React, { useCallback } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch } from 'react-redux';
import { decreaseProductInCart, deleteProductInCart, increaseProductInCart } from 'store/actions/common';
import { FaChevronLeft } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import { useGetMyCart } from 'store/selectors/common';
import QuantityButton from 'components/QuantityButton/QuantityButton';
import classes from './CartTable.module.css';

function CartTable() {
  const { products: productInCart, totalCost } = useGetMyCart();
  const dispatch = useDispatch();

  const deleteProduct = useCallback(
    (id) => () => {
      dispatch(deleteProductInCart(id));
    },
    [dispatch]
  );

  const changeProductQuantity = useCallback(
    (productId, isDecrease = false) =>
      () => {
        if (isDecrease) {
          dispatch(decreaseProductInCart(productId))
        } else {
          dispatch(increaseProductInCart(productId))
        }
      },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <div className={classes.mt_5}>
      <div id="cartTable">
        <Container className={classes.webVersion}>
          <Row className={classes.cartDetailHeader}>
            <Col lg={2}>Item</Col>
            <Col lg={5}>Product Name</Col>
            <Col lg={1}>Price</Col>
            <Col lg={2}>Quantity</Col>
            <Col lg={1}>Subtotal</Col>
            <Col lg={1}> </Col>
          </Row>
          {productInCart.length > 0 ?
          productInCart?.map((product) => (
            <Row className={classes.cartDetail} key={product._id}>
              <Col lg={2} className="d-md-none d-lg-block">
                <div className="d-flex justify-content-center border-0">
                  <img src={`https://vnguyen.xyz/huy/day17/apis/${product.thumb}`} alt="" />
                </div>
              </Col>
              <Col className={classes.productName} lg={5}>
                {product.name}
              </Col>
              <Col className={classes.price_sample} lg={1}>
                $
                {product.afterSalesPerOnePrice}
              </Col>
              <Col lg={2}>
                <QuantityButton productId={product._id} productQuantity={product.quantity} changeProductQuantity={changeProductQuantity} />
              </Col>
              <Col className={classes.price_sample} lg={1}>
                $
                {product.afterSalesPrice}
              </Col>
              <Col lg={1}>
                <button type="button" className={classes.deleteButton} onClick={deleteProduct(product._id)}>X</button>
              </Col>
            </Row>
          )) : (
            <div>
              <Row className={classes.cartDetailHeader}>
                <Col>There is no item in cart!</Col>
              </Row>
            </div>
            )}
          <Row className={classes.cartDetail}>
            <Col>
              <div className="d-flex justify-content-center align-item-center border-0 p-0">
                <span className={classes.buttonUnderCartBorder}>
                  <Link to="/" className={classes.buttonUnderCart}>
                    <FaChevronLeft className="mx-2" />
                    <div className="border-0">CONTINUE SHOPPING</div>
                  </Link>
                </span>
              </div>
            </Col>
          </Row>
        </Container>

        {/* MOBILE */}
        <Container className={classes.mobileVersion}>
          {productInCart.length > 0 ?
          productInCart?.map((product) => (
            <Row className="d-flex flex-column" key={product._id}>
              <Col className={classes.mobileImage}><img src={`https://vnguyen.xyz/huy/day17/apis/${product.thumb}`} alt="" /></Col>
              <Col className="d-flex justify-content-between p-3">
                <Col md={2} xs={3} className={classes.semibold}>Product:</Col>
                <Col md={10} xs={7} className="fw-bold">{product.name}</Col>
              </Col>
              <Col className="d-flex justify-content-between p-3">
                <div className={classes.semibold}>Price:</div>
                <div className={classes.price_sample}>
                  $
                  {product.afterSalesPerOnePrice}
                </div>
              </Col>
              <Col className="d-flex justify-content-between p-3">
                <div className={classes.semibold}>Quantity:</div>
                <div>
                  <QuantityButton flexDirectionType="flex-column" productId={product._id} productQuantity={product.quantity} changeProductQuantity={changeProductQuantity} />
                </div>
              </Col>
              <Col className="d-flex justify-content-between p-3">
                <div className={classes.semibold}>Subprice:</div>
                <div className={classes.price_sample}>
                  $
                  {product.afterSalesPrice}
                </div>
              </Col>
              <Col className="d-flex justify-content-center pb-2 border-bottom">
                <button type="button" className={classes.deleteButtonMobile} onClick={deleteProduct(product._id)}>X</button>
              </Col>
            </Row>
          )): (
            <div>
              <Row className={classes.cartDetailHeader}>
                <Col>There is no item in cart!</Col>
              </Row>
            </div>
            )}
          <Row className={classes.underCartButton}>
            <Col>
              <div className="d-flex justify-content-center align-item-center border-0 p-0">
                <span className={classes.buttonUnderCartBorder}>
                  <Link to="/" className={classes.buttonUnderCart}>
                    <FaChevronLeft className={classes.iconButton} />
                    <div className="border-0">CONTINUE SHOPPING</div>
                  </Link>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row>
          <Col xl={6} xs={12} className={classes.promotionCode}>
            <PromotionCode />
          </Col>
          <Col xl={6} xs={12} className={classes.subtotal}>
            <CartTotal key={totalCost} total={totalCost} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CartTable;
