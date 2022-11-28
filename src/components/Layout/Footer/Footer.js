import React from 'react';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaGooglePlusG,
} from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';

import classes from './Footer.module.css';

function Copyright() {
  return (
    <div className={classes.copyright_color}>
      <div className={classes.copyright_box}>
        <div>Copyright © 2018, Inc. All rights reserved.</div>
        <div>
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
        </div>
      </div>
    </div>
  );
}

export default Copyright;
