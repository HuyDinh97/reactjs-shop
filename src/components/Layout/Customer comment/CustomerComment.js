import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import customerImg from './image/client-img-1.png';
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
              <div>s</div>
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
