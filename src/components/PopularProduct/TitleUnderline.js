import React from 'react';
import { Col } from 'react-bootstrap';

import classes from './TitleUnderline.module.css';

function TitleUnderline({ name, position }) {
  const positionA = classes.UnderlineA;
  const positionB = classes.UnderlineB;

  const checkTitle =
    position === 'left' ? 'flex-start' : 'justify-content-center';
  const checkPosition = position === 'left' ? positionB : positionA;

  return (
    <Col className={`${classes.Product_title} ${checkTitle}`}>
      <div className={checkPosition}>{name}</div>
    </Col>
  );
}

export default TitleUnderline;
