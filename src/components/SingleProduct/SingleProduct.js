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

  const productDetailRowDisplay =
    rowDisplay === true
      ? 'align-items-start mb-2'
      : 'justify-content-center my-2';
  console.log(rowDisplay);
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
                {rowDisplay === false ? (
                  <div className={classes.hide}>
                    <AddToCartProductDetail popularProduct={popularProduct} />
                    <div className={classes.white_overlay} />
                  </div>
                ) : null}
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
            {rowDisplay === true ? (
              <div>
                <div className="text-start">
                  Nullam ullamcorper in leo vitae finibus. In mattis aliquam
                  diam ut lobortis. Aenean non ultrices purus, vel tempor orci.
                  Vestibulum ullamcorper dolor vel nulla gravida, ac
                  sollicitudin eros lacinia. Pellentesque vitae diam nec nulla
                  porttitor semper. Nullam tincidunt ante sit amet est bibendum
                  efficitur.
                </div>
                <AddToCartProductDetail
                  popularProduct={popularProduct}
                  display={false}
                />
              </div>
            ) : null}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SingleProduct;
