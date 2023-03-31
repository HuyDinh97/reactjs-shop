import React from 'react';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaGooglePlusG,
} from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import classes from './Copyright.module.css';

function Copyright() {
  return (
    <div className={classes.copyright}>
      <div className={classes.copyrightBox}>
        <Row>
          <Col xl={6} xs={12} className={classes.copyrightText}>
            Copyright © 2018, Inc. All rights reserved.
          </Col>
          <Col xl={6} xs={12} className={classes.copyrightIcon}>
            <span>
              <FaFacebookF />
            </span>
            <span>
              <AiOutlineTwitter />
            </span>
            <span>
              <FaLinkedinIn />
            </span>
            <span>
              <FaPinterestP />
            </span>
            <span>
              <FaGooglePlusG />
            </span>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Copyright;
