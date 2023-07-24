import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import classes from './SingleProduct.module.css';
import AddToCartProductDetail from './AddToCartProductDetail';

function SingleProduct({
  products,
  imgProductCol,
  detailProductCol,
  rowDisplayCheck,
}) {
  const linkIMG = 'https://vnguyen.xyz/huy/day17/apis/';
  const priceCheck = 'd-none';

  const productDetailRowDisplay =
    rowDisplayCheck === true
      ? 'align-items-start mb-2'
      : 'justify-content-center my-2 text-center';
  return (
    <div>
      <Container>
        <Row
          className={`${classes.rowBox} ${
            rowDisplayCheck === true ? 'border-bottom pb-4' : 'none'
          }`}
        >
          <Col md={imgProductCol} xs={12} className={classes.apperance}>
            <div className="d-flex justify-content-center">
              <div
                className={classes.product_img}
                // eslint-disable-next-line react/forbid-dom-props
                style={{
                  background: `url(${linkIMG + products.thumb})`,
                }}
              >
                {rowDisplayCheck === false ? (
                  <div className={classes.hide}>
                    <AddToCartProductDetail product={products} />
                    <div className={classes.white_overlay} />
                  </div>
                ) : null}
              </div>
            </div>
          </Col>
          <Col
            md={detailProductCol}
            xs={12}
            className={`${productDetailRowDisplay} card-body d-flex mb-2 flex-column`}
          >
            <div className={classes.product_name}>
              <Link to={`/product-detail/${products._id}`}>
                {products.name}
              </Link>
            </div>
            <div className={classes.product_price}>
              <span className={products.sales === 0 ? priceCheck : null}>
                <s className={classes.gray_price}>
                  {' $ '}
                  {products.price}
                </s>
              </span>
              <span className="mx-2">
                {' $ '}
                {products.realPrice}
              </span>
            </div>
            {rowDisplayCheck === true ? (
              <Col>
                <div
                  className={`${classes.productDescripton} ${classes.gray_price}`}
                >
                  Nullam ullamcorper in leo vitae finibus. In mattis aliquam
                  diam ut lobortis. Aenean non ultrices purus, vel tempor orci.
                  Vestibulum ullamcorper dolor vel nulla gravida, ac
                  sollicitudin eros lacinia. Pellentesque vitae diam nec nulla
                  porttitor semper. Nullam tincidunt ante sit amet est bibendum
                  efficitur.
                </div>
                <AddToCartProductDetail product={products} display={false} />
              </Col>
            ) : null}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SingleProduct;
