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
  const CustomSliderStyles = {
    '& .MuiSlider-thumb': {
      color: 'white',
      border: '3px solid black',
    },
    '& .MuiSlider-track': {
      color: 'black',
    },
    '& .MuiSlider-root ': {
      width: '94%!important',
    },
    '& .MuiSlider-rail  ': {
      color: 'black',
    },
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
