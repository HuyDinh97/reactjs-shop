import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import classes from './SingleProduct.module.css';
import AddToCartProductDetail from './AddToCartProductDetail';

function SingleProduct({
  popularProduct,
  imgProductCol,
  detailProductCol,
  rowDisplay,
}) {
  const linkIMG = 'https://vnguyen.xyz/huy/day17/apis/';
  const priceCheck = 'd-none';

  const display = rowDisplay;

  const productDetailRowDisplay =
    display === true ? 'align-items-start mb-2' : 'justify-content-center my-2';

  return (
    <div>
      <Container>
        <Row>
          <Col xs={imgProductCol} className={classes.apperance}>
            <div>
              <div
                className={classes.product_img}
                // eslint-disable-next-line react/forbid-dom-props
                style={{
                  background: `url(${linkIMG + popularProduct.thumb})`,
                }}
              >
                <div className={classes.hide}>
                  <AddToCartProductDetail popularProduct={popularProduct} />
                  <div className={classes.white_overlay} />
                </div>
              </div>
            </div>
          </Col>
          <Col
            xs={detailProductCol}
            className={`${productDetailRowDisplay} card-body d-flex mb-2 flex-column text-center`}
          >
            <div className={classes.product_name}>
              <Link to={`/product-detail/${popularProduct._id}`}>
                {popularProduct.name}
              </Link>
            </div>
            <div className={classes.product_price}>
              <span className={popularProduct.sales === 0 ? priceCheck : null}>
                <s className={classes.gray_price}>
                  {' $ '}
                  {popularProduct.price}
                </s>
              </span>
              <span className="mx-2">
                {' $ '}
                {popularProduct.realPrice}
              </span>
            </div>
            <AddToCartProductDetail
              popularProduct={popularProduct}
              display={display}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SingleProduct;
