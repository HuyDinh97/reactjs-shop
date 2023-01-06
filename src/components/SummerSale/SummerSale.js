import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import slide1 from './sales/slider-img-1.jpg';
import slide2 from './sales/slider-img-2.jpg';
import slide3 from './sales/slider-img-3.jpg';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import classes from './SummerSale.module.css';

function SummerSale() {
  return (
    <Swiper pagination modules={[Pagination]} className={classes.swiper_height}>
      <SwiperSlide>
        <img src={slide1} alt="slide" />
        <div className={classes.slide_1}>
          <h1>SUMMER SALE</h1>
          <p>Get up to 50% off your shopping items tomorrow!</p>
          <button type="button" className={classes.button}>
            Shop Now
          </button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt="slide" />
        <div className={classes.slide_2}>
          <h1>SUMMER SALE</h1>
          <p>Get up to 50% off your shopping items tomorrow!</p>
          <button type="button" className={classes.button}>
            Shop Now
          </button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} alt="slide" />
        <div className={classes.slide_3}>
          <h1>SUMMER SALE</h1>
          <p>Get up to 50% off your shopping items tomorrow!</p>
          <button type="button" className={classes.button}>
            Shop Now
          </button>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default SummerSale;
