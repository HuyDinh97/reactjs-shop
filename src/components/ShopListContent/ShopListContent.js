/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useCallback } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { VscThreeBars } from 'react-icons/vsc';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

import Form from 'react-bootstrap/Form';

import {
  useGetPopularProduct,
  useGetRecentProduct,
  useGetShopListSortProduct,
} from 'store/selectors/common';
import SingleProduct from 'components/SingleProduct/SingleProduct';
import SelectionBlock from './SelectionBlock';
import PriceFilter from './PriceFilter';
import RecentProduct from './RecentProduct';

import classes from './ShopListContent.module.css';
import { categoryChange, colorChange } from './SimpleCount';

function ShopListContent() {
  const popularProducts = useGetPopularProduct();
  const shoplistSortProduct = useGetShopListSortProduct();
  const sortedProduct = shoplistSortProduct || popularProducts;
  const recentProduct = useGetRecentProduct();

  const [productDisplay, setproductDisplay] = useState(4);
  const [imgProductCol, setImgProduct] = useState(12);
  const [detailProductCol, setDetailProduct] = useState(12);
  const [rowDisplayCheck, setRowDisplayCheck] = useState(false);

  const gridDisplay = useCallback(() => {
    setproductDisplay(4);
    setImgProduct(12);
    setDetailProduct(12);
    setRowDisplayCheck(false);
  }, []);

  const rowDisplay = useCallback(() => {
    setproductDisplay(12);
    setImgProduct(4);
    setDetailProduct(8);
    setRowDisplayCheck(true);
  }, []);
  const categoriesSelection = categoryChange;
  const colorSelection = colorChange;

  return (
    <div className="my-5">
      <Container>
        <Row>
          <Col xl={3} className={classes.shopListCategory}>
            <SelectionBlock title="CATEGORY" selection={categoriesSelection} />
            <PriceFilter />
            <SelectionBlock title="COLOR" selection={colorSelection} />
            <RecentProduct recentProduct={recentProduct} />
          </Col>
          <Col xl={9}>
            <Row>
              <Col xl={7}>
                <div className={`${classes.formSelect} w-50`}>
                  <Form.Select
                    className={`${classes.textGreyColor} form-select`}
                    aria-label="Default select example"
                  >
                    <option>Default sorting</option>
                    <option defaultValue="1">Best seller</option>
                    <option defaultValue="2">Popular</option>
                    <option defaultValue="3">Latest</option>
                    <option defaultValue="4">Price: Low -{`>`} High</option>
                    <option defaultValue="5">Price: High -{`>`} Low</option>
                  </Form.Select>
                </div>
              </Col>
              <Col
                xl={3}
                className="d-flex align-items-center justify-content-end px-0"
              >
                <div className={`${classes.textGreyColor} pe-3`}>
                  Showing 1-9 of 15 results
                </div>
              </Col>
              <Col xl={2}>
                <div className={`${classes.sortButton} d-flex`}>
                  <button
                    type="button"
                    className={`${classes.sortIcon} fs-3 p-1 me-1 d-flex align-items-center`}
                    onClick={gridDisplay}
                  >
                    <VscThreeBars />
                  </button>
                  <button
                    type="button"
                    className={`${classes.sortIcon} fs-5 p-1 px-2 me-1 d-flex align-items-center`}
                    onClick={rowDisplay}
                  >
                    <BsFillGrid3X3GapFill />
                  </button>
                </div>
              </Col>
              <Col xl={12}>
                <Row className="mt-5">
                  {sortedProduct &&
                    sortedProduct.map((popularProduct) => (
                      <Col
                        xl={productDisplay}
                        className="mt-4"
                        key={popularProduct._id}
                      >
                        <SingleProduct
                          popularProduct={popularProduct}
                          imgProductCol={imgProductCol}
                          detailProductCol={detailProductCol}
                          rowDisplay={rowDisplayCheck}
                        />
                      </Col>
                    ))}
                  <Col xs={12}>
                    <div
                      className={`${classes.pagination} d-flex justify-content-center`}
                    >
                      <nav aria-label="Page navigation example">
                        <ul className="pagination">
                          <li className="page-item">
                            <a
                              className="page-link rounded-0 me-1 px-2"
                              href="#"
                            >
                              <span aria-hidden="true">
                                <GrFormPrevious className="fs-5" />
                              </span>
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link me-1" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link me-1" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link me-1" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link rounded-0 px-2" href="#">
                              <span aria-hidden="true">
                                <GrFormNext className="fs-5" />
                              </span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ShopListContent;
