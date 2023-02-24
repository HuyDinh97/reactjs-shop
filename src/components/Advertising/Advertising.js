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
      <Col>
        <img src={Ads1} alt="ADS" />
      </Col>
      <Col>
        <img src={Ads2} alt="ADS" />
      </Col>
      <Col>
        <img src={Ads3} alt="ADS" />
      </Col>
    </Row>
  );
}

export default Advertising;
