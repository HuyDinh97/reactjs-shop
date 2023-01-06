import React from 'react';
import { Col } from 'react-bootstrap';

import classes from './TitleUnderline.module.css';

function TitleUnderline({ name }) {
  return (
    <Col className={classes.Product_title}>
      <div className={classes.Underline}>{name}</div>
    </Col>
  );
}

export default TitleUnderline;
