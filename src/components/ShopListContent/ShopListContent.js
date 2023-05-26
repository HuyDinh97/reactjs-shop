/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Slider } from '@mui/material';
import { FaComments } from 'react-icons/fa';
import img from '../PopularProduct/Product/product-img-1.jpg';

import classes from './ShopListContent.module.css';

function ShopListContent() {
  const [value, setValue] = React.useState([20, 37]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const CustomSliderStyles = {
    '& .MuiSlider-thumb': {
      color: 'white',
      border: '3px solid black',
    },
    '& .MuiSlider-track': {
      color: 'black',
    },
    '& .MuiSlider-rail  ': {
      color: '#c3bbbb',
    },
  };

  return (
    <div className="my-5">
      <Container>
        <Row>
          <Col xl={3} className={classes.shopListCategory}>
            <div>
              <ul className="list-unstyled">
                <li className="py-2">
                  <span className="fw-bold fs-5">CATEGORIES</span>
                </li>
                <li className="d-flex justify-content-between py-2 fw-semibold fs-5 pt-3">
                  <span>Women</span>
                  <span>(1)</span>
                </li>
                <li className="d-flex justify-content-between fw-semibold py-2 fs-5">
                  <span>Men</span>
                  <span>(1)</span>
                </li>
                <li className="d-flex justify-content-between fw-semibold py-2 fs-5">
                  <span>Footwear</span>
                  <span>(1)</span>
                </li>
                <li className="d-flex justify-content-between fw-semibold py-2 fs-5">
                  <span>Bag And Backpacks</span>
                  <span>(1)</span>
                </li>
                <li className="d-flex justify-content-between fw-semibold py-2 fs-5">
                  <span>Accessories</span>
                  <span>(1)</span>
                </li>
              </ul>
            </div>
            <div>
              <ul className="list-unstyled">
                <li className="py-2">
                  <span className="fw-bold fs-5">FILTERS </span>
                </li>
                <li className="border-0 pt-4 pb-2 d-flex justify-content-center">
                  <Slider
                    sx={CustomSliderStyles}
                    className={classes.filterSlider}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    max={1000}
                  />
                </li>
                <li className="border-0">
                  <div className="fw-semibold fs-5">
                    <span className={classes.filterPrice}>PRICE </span>
                    <span className="text-black">
                      ${value[0]} - ${value[1]}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <ul className="list-unstyled">
                <li className="py-2">
                  <span className="fw-bold fs-5">COLOR</span>
                </li>
                <li className="d-flex justify-content-between py-2 fw-semibold fs-5 pt-3">
                  <span>Black</span>
                  <span>(1)</span>
                </li>
                <li className="d-flex justify-content-between fw-semibold py-2 fs-5">
                  <span>Blue</span>
                  <span>(1)</span>
                </li>
                <li className="d-flex justify-content-between fw-semibold py-2 fs-5">
                  <span>Red</span>
                  <span>(1)</span>
                </li>
                <li className="d-flex justify-content-between fw-semibold py-2 fs-5">
                  <span>White</span>
                  <span>(1)</span>
                </li>
                <li className="d-flex justify-content-between fw-semibold py-2 fs-5">
                  <span>Gray</span>
                  <span>(1)</span>
                </li>
              </ul>
            </div>
            <div>
              <ul className="list-unstyled">
                <li className="py-2">
                  <span className="fw-bold fs-5">RECENT PRODUCT </span>
                </li>
                <li className="py-3">
                  <Container>
                    <Row>
                      <Col xs={3} className="ps-0">
                        <div
                          className={classes.recentImg}
                          // eslint-disable-next-line react/forbid-dom-props
                          style={{
                            background: `url(${img})`,
                          }}
                        />
                      </Col>
                      <Col xs={9} className="ps-4">
                        <div className="text-black fw-semibold">
                          Product name
                        </div>
                        <div>
                          <span>
                            <FaComments className={classes.commentColor} />
                          </span>
                          <span className="ps-1 fw-semibold">5 Comments</span>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </li>
                <li className="py-3">
                  <Container>
                    <Row>
                      <Col xs={3} className="ps-0">
                        <div
                          className={classes.recentImg}
                          // eslint-disable-next-line react/forbid-dom-props
                          style={{
                            background: `url(${img})`,
                          }}
                        />
                      </Col>
                      <Col xs={9} className="ps-4">
                        <div className="text-black fw-semibold">
                          Product name
                        </div>
                        <div>
                          <span>
                            <FaComments className={classes.commentColor} />
                          </span>
                          <span className="ps-1 fw-semibold">5 Comments</span>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </li>
                <li className="py-3">
                  <Container>
                    <Row>
                      <Col xs={3} className="ps-0">
                        <div
                          className={classes.recentImg}
                          // eslint-disable-next-line react/forbid-dom-props
                          style={{
                            background: `url(${img})`,
                          }}
                        />
                      </Col>
                      <Col xs={9} className="ps-4">
                        <div className="text-black fw-semibold">
                          Product name
                        </div>
                        <div>
                          <span>
                            <FaComments className={classes.commentColor} />
                          </span>
                          <span className="ps-1 fw-semibold">5 Comments</span>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </li>
              </ul>
            </div>
          </Col>
          <Col xl={9}>right</Col>
        </Row>
      </Container>
    </div>
  );
}

export default ShopListContent;
