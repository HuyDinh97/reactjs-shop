import SingleProduct from 'components/SingleProduct/SingleProduct';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Link, useSearchParams } from 'react-router-dom';
import classes from './ShopListContent.module.css';

function GridListDisplay({
  productEachPage,
  totalPage,
  id,
  productDisplay,
  ...dispayConfig
}) {
  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page'), 10) || 1;
  const pageNumbers = Array.from({ length: totalPage }, (_, i) => i + 1);
  return (
    <Row className="mt-5">
      {productEachPage &&
        productEachPage.map((popularProduct) => (
          <Col xl={productDisplay} className="mt-4" key={popularProduct._id}>
            <SingleProduct popularProduct={popularProduct} {...dispayConfig} />
          </Col>
        ))}
      <Col xs={12}>
        <div
          className={`${classes.pagination} d-flex justify-content-center mt-5`}
        >
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className={`${page === 1 ? 'd-none' : ''}`}>
                <Link
                  className={`${classes.nextPrevButton} page-link`}
                  to={`/shop-list/${id}?page=${page - 1}`}
                >
                  <FiChevronLeft />
                </Link>
              </li>
              {pageNumbers.map((number) => (
                <li className="page-item" key={number}>
                  <Link
                    className={`${
                      page !== number ? '' : classes.active
                    } page-link`}
                    to={`/shop-list/${id}?page=${number}`}
                  >
                    {number}
                  </Link>
                </li>
              ))}
              <li
                className={`${
                  page === totalPage ||
                  !productEachPage ||
                  productEachPage.length <= 0
                    ? 'd-none'
                    : ''
                }`}
              >
                <Link
                  className={`${classes.nextPrevButton} page-link`}
                  to={`/shop-list/${id}?page=${Math.round(page) + 1}`}
                >
                  <FiChevronRight />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Col>
    </Row>
  );
}

export default GridListDisplay;
