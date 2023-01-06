/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import banner1 from './image/fashion-banner-1.jpg';
import banner2 from './image/fashion-banner-2.jpg';

import classes from './Banner.module.css';

function Banner() {
  return (
    <div className={classes.mg_4}>
      <Row>
        <Col className={classes.Col}>
          <img src={banner1} />
        </Col>
        <Col className={classes.Col}>
          <img src={banner2} />
        </Col>
      </Row>
    </div>
  );
}

export default Banner;
