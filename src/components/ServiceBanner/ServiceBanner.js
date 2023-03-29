import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { ImTruck, ImTrophy } from 'react-icons/im';
import { FaHeadphones, FaCcMastercard } from 'react-icons/fa';

import classes from './ServiceBanner.module.css';

function ServiceBanner() {
  return (
    <div className={classes.serviceBanner}>
      <Container className={classes.ServiceBannerBox}>
        <Row>
          <Col xl={3} xs={6} className={classes.blockBoderEnd}>
            <div className={classes.ServiceBannerBox}>
              <div className={classes.ServiceBannerBlock}>
                <div className="d-flex mx-3 flip-img fs-1">
                  <span className={classes.ServiceBannerIcon}>
                    <ImTruck />
                  </span>
                </div>
                <div className={classes.w_max_content}>
                  <h5 className="fw-bold mt-2">FREE DELIVERY</h5>
                  <div className={classes.iconSubtitle}>WORLDWIDE</div>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={3} xs={6} className={classes.blockBoderEndDesktop}>
            <div className={classes.ServiceBannerBox}>
              <div className={classes.ServiceBannerBlock}>
                <div className="d-flex mx-3 flip-img fs-1">
                  <span className={classes.ServiceBannerIcon}>
                    <FaHeadphones />
                  </span>
                </div>
                <div className={classes.w_max_content}>
                  <h5 className="fw-bold mt-2">24/7 SUPPORT</h5>
                  <div className={classes.iconSubtitle}>CUSTOMER SUPPORT</div>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={3} xs={6} className={classes.blockBoderEnd}>
            <div className={classes.ServiceBannerBox}>
              <div className={classes.ServiceBannerBlock}>
                <div className="d-flex mx-3 flip-img fs-1">
                  <span className={classes.ServiceBannerIcon}>
                    <FaCcMastercard />
                  </span>
                </div>
                <div className={classes.w_max_content}>
                  <h5 className="fw-bold mt-2">PAYMENT</h5>
                  <div className={classes.iconSubtitle}>SECURE SYSTEM</div>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={3} xs={6} className={classes.underBlockRight}>
            <div className={classes.ServiceBannerBox}>
              <div className={classes.ServiceBannerBlock}>
                <div className="d-flex mx-3 flip-img fs-1">
                  <span className={classes.ServiceBannerIcon}>
                    <ImTrophy />
                  </span>
                </div>
                <div className={classes.w_max_content}>
                  <h5 className="fw-bold mt-2">TRUSTED</h5>
                  <div className={classes.iconSubtitle}>ENUINE PRODUCTS</div>
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
