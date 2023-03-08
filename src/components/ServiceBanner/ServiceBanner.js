import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { ImTruck, ImTrophy } from 'react-icons/im';
import { FaHeadphones, FaCcMastercard } from 'react-icons/fa';

import classes from './ServiceBanner.module.css';

function ServiceBanner() {
  return (
    <div>
      <Container className={classes.ServiceBanner_box}>
        <Row>
          <Col>
            <div className={classes.ServiceBanner_box}>
              <div className="border-end d-flex align-items-center flex-row px-5">
                <div className="d-flex mx-3 flip-img fs-1">
                  <span className={classes.ServiceBanner_truck_icon}>
                    <ImTruck />
                  </span>
                </div>
                <div className={classes.w_max_content}>
                  <h5 className="fw-bold mt-2">FREE DELIVERY</h5>
                  <div className={classes.icon_subtitle}>WORLDWIDE</div>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className={classes.ServiceBanner_box}>
              <div className="border-end d-flex align-items-center flex-row px-5">
                <div className="d-flex mx-3 flip-img fs-1">
                  <span className={classes.ServiceBanner_truck_icon}>
                    <FaHeadphones />
                  </span>
                </div>
                <div className={classes.w_max_content}>
                  <h5 className="fw-bold mt-2">24/7 SUPPORT</h5>
                  <div className={classes.icon_subtitle}>CUSTOMER SUPPORT</div>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className={classes.ServiceBanner_box}>
              <div className="border-end d-flex align-items-center flex-row px-5">
                <div className="d-flex mx-3 flip-img fs-1">
                  <span className={classes.ServiceBanner_truck_icon}>
                    <ImTrophy />
                  </span>
                </div>
                <div className={classes.w_max_content}>
                  <h5 className="fw-bold mt-2">PAYMENT</h5>
                  <div className={classes.icon_subtitle}>SECURE SYSTEM</div>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className={classes.ServiceBanner_box}>
              <div className="border-end d-flex align-items-center flex-row px-5">
                <div className="d-flex mx-3 flip-img fs-1">
                  <span className={classes.ServiceBanner_truck_icon}>
                    <FaCcMastercard />
                  </span>
                </div>
                <div className={classes.w_max_content}>
                  <h5 className="fw-bold mt-2">TRUSTED</h5>
                  <div className={classes.icon_subtitle}>ENUINE PRODUCTS</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ServiceBanner;
