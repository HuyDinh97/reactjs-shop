
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import customerImg from './image/client-img-1.png';
import quoteImg from './image/icons8-quote-left-48.png';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import classes from './CustomerComment.module.css';

function CustomerComment() {
  return (
    <div>
      <Swiper pagination modules={[Pagination]} className="mySwiper">
        <SwiperSlide className={classes.Box}>
          <div>
            <div className={classes.Box_inside}>
              <div>
                <img src={customerImg} alt="img" />
              </div>
              <div>
                <div>
                  <img
                    className={classes.quote_w}
                    src={quoteImg}
                    alt="quoteImg"
                  />
                </div>
                <div>
                  <p className={classes.user_comment}>asdasdasdasdasd</p>
                </div>
                <div>
                  <p className={classes.user_name}>- William Genske</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={classes.Box}>Slide 2</SwiperSlide>
        <SwiperSlide className={classes.Box}>Slide 3</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CustomerComment;
