/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { FaComments } from 'react-icons/fa';
import { Col, Container, Row } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import classes from './ShopListContent.module.css';

function RecentProduct(recentProductData) {
  const { recentProduct } = recentProductData;
  const recentProductLimit =
    recentProduct.length <= 3
      ? recentProduct
      : recentProduct.slice(Math.max(recentProduct.length - 3, 1)).reverse();

  const linkIMG = 'https://vnguyen.xyz/huy/day17/apis/';

  return (
    <div>
      <ul className="list-unstyled">
        <li className="py-2">
          <span className="fw-bold fs-5">RECENT PRODUCT </span>
        </li>
        {recentProductLimit?.length > 0 &&
          recentProductLimit?.map((prod, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={index} className="py-3">
              <Container>
                <Row>
                  <Col xs={3} className="ps-0">
                    <div
                      className={classes.recentImg}
                      // eslint-disable-next-line react/forbid-dom-props
                      style={{
                        background: `url(${linkIMG + prod.thumb})`,
                      }}
                    />
                  </Col>
                  <Col xs={9} className="ps-4">
                    <div
                      className={`${classes.product_name} text-black fw-semibold `}
                    >
                      <Link to={`/product-detail/${prod._id}`}>
                        {prod.name}
                      </Link>
                    </div>
                    <div>
                      <span>
                        <FaComments className={classes.commentColor} />
                      </span>
                      <span className="ps-1 fw-semibold">
                        {prod?.comment?.length} Comments
                      </span>
                    </div>
                  </Col>
                </Row>
              </Container>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default RecentProduct;
