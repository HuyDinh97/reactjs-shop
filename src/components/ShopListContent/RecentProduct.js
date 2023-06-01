/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { FaComments } from 'react-icons/fa';
import { Col, Container, Row } from 'react-bootstrap';

import classes from './ShopListContent.module.css';

function RecentProduct(recentProductData) {
  const { recentProduct } = recentProductData;
  // const recentProductLimit = [
  //   recentProduct[recentProduct.length - 1],
  //   recentProduct[recentProduct.length - 2],
  //   recentProduct[recentProduct.length - 3],
  // ];
  const linkIMG = 'https://vnguyen.xyz/huy/day17/apis/';

  return (
    <div>
      <ul className="list-unstyled">
        <li className="py-2">
          <span className="fw-bold fs-5">RECENT PRODUCT </span>
        </li>
        {recentProduct?.length > 0 &&
          recentProduct?.map((prod) => (
            <li key={prod._id} className="py-3">
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
                    <div className="text-black fw-semibold">{prod.name}</div>
                    <div>
                      <span>
                        <FaComments className={classes.commentColor} />
                      </span>
                      <span className="ps-1 fw-semibold">
                        {prod?.comment.length} Comments
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
