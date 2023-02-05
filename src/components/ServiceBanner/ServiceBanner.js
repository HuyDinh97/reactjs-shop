import React from 'react';

import { ImTruck, ImTrophy } from 'react-icons/im';
import { FaHeadphones, FaCcMastercard } from 'react-icons/fa';

import classes from './ServiceBanner.module.css';

function ServiceBanner() {
  return (
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

      <div className="border-end d-flex align-items-center flex-row px-5">
        <div className="d-flex mx-3 flip-img fs-1">
          <FaHeadphones />
        </div>
        <div className={classes.w_max_content}>
          <h5 className="fw-bold mt-2">24/7 SUPPORT</h5>
          <div className={classes.icon_subtitle}>CUSTOMER SUPPORT</div>
        </div>
      </div>
      <div className="border-end d-flex align-items-center flex-row px-5">
        <div className="d-flex mx-3 flip-img fs-1">
          <FaCcMastercard />
        </div>
        <div className={classes.w_max_content}>
          <h5 className="fw-bold mt-2">PAYMENT</h5>
          <div className={classes.icon_subtitle}>SERCURE SYSTEM</div>
        </div>
      </div>

      <div className="border-0 d-flex align-items-center flex-row px-5">
        <div className="d-flex mx-3 flip-img fs-1">
          <ImTrophy />
        </div>
        <div className={classes.w_max_content}>
          <h5 className="fw-bold mt-2">TRUSTED</h5>
          <div className={classes.icon_subtitle}>ENUINE PRODUCT</div>
        </div>
      </div>
    </div>
  );
}

export default ServiceBanner;
