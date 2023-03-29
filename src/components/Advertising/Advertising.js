/* eslint-disable react/forbid-component-props */
/* eslint-disable react/forbid-dom-props */
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Ads1 from './picture/offer-banner-1.jpg';

import Ads2 from './picture/offer-banner-2.jpg';
import Ads3 from './picture/offer-banner-3.jpg';

import classes from './Advertising.module.css';

function Advertising() {
  return (
    <Row className={classes.advertising}>
      <Col
        md={4}
        xs={12}
        style={{
          height: '260px',
          background: `url(${Ads1}) no-repeat center`,
          backgroundSize: 'contain',
        }}
      />
      <Col
        md={4}
        xs={12}
        style={{
          height: '260px',
          background: `url(${Ads2}) no-repeat center`,
          backgroundSize: 'contain',
        }}
      />
      <Col
        md={4}
        xs={12}
        style={{
          height: '260px',
          background: `url(${Ads3}) no-repeat center`,
          backgroundSize: 'contain',
        }}
      />
    </Row>
  );
}

export default Advertising;
