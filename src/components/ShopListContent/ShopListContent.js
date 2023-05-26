/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Slider } from '@mui/material';
import classes from './ShopListContent.module.css';

function ShopListContent() {
  const [value, setValue] = React.useState([20, 37]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="my-5">
      <Container>
        <Row>
          <Col xl={3} className={classes.shopListCategory}>
            <div>
              <ul className="list-unstyled">
                <li className="py-3">
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
                <li className="py-3">
                  <span className="fw-bold fs-5">FILTERS </span>
                </li>
                <li>
                  <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                  />
                </li>
                <li>
                  <span>
                    Price: ${value[0]} - ${value[1]}
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <ul className="list-unstyled">
                <li className="py-3">
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
                <li className="py-3">
                  <span className="fw-bold fs-5">RECENT PRODUCT </span>
                </li>
                <li>a</li>
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
