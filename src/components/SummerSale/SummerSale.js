/* eslint-disable react/forbid-component-props */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { Link } from 'react-router-dom';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import { useGetHome } from 'store/selectors/common';
import classes from './SummerSale.module.css';

function SummerSale() {
  const homeData = useGetHome();
  console.log(homeData);
  const { slider: sliders } = homeData ?? {};
  if (!homeData) {
    return <p data-testid="summersale-error">...</p>;
  }
  return (
    <div>
      <Swiper
        pagination
        modules={[Pagination]}
        className={classes.swiper_height}
        data-testid="summersale-element"
      >
        {sliders &&
          sliders.map((banner) => (
            <SwiperSlide
              key={banner._id}
              style={{
                background: `url('https://vnguyen.xyz/huy/day17/apis/${banner.image}') center center / cover no-repeat`,
              }}
            >
              <div className={`${classes.slideBanner} container`}>
                <h1 className="text-uppercase">{banner.headline}</h1>
                <p>{banner.sort}</p>
                <Link to={`/${banner.interact}`}>
                  <button type="button" className={classes.button}>
                    Shop Now
                  </button>
                </Link>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default SummerSale;
