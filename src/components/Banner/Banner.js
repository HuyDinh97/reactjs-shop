/* eslint-disable react/forbid-component-props */
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useGetHome } from 'store/selectors/common';

import classes from './Banner.module.css';

function Banner() {
  const banner = useGetHome();
  const { advertise: advertises } = banner ?? {};
  if (!banner) {
    return <p data-testid="banner-error">...</p>;
  }
  return (
    <div className={classes.banner}>
      <Row>
        {advertises &&
          advertises.map((advertise) => (
            <Col
              xxl={6}
              xl={12}
              key={advertise._id.$oid}
              style={{
                height: '260px',
                background: `url('https://vnguyen.xyz/huy/day17/apis/images/${advertise.banner}') center no-repeat`,
                backgroundSize: 'cover',
              }}
            />
          ))}
      </Row>
    </div>
  );
}

export default Banner;
