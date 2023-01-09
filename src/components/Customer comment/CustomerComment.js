import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { useGetTestimonial } from 'store/selectors/common';
import quoteImg from './image/icons8-quote-left-48.png';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import classes from './CustomerComment.module.css';

function CustomerComment() {
  const testimotional = useGetTestimonial();
  console.log(testimotional);

  if (!testimotional) {
    return <p>Loading...</p>;
  }

  const linkIMG = 'https://vnguyen.xyz/huy/day17/apis/';

  return (
    <div>
      <Swiper
        pagination
        modules={[Pagination]}
        className="mySwiper"
        data-testid="testimotional-element"
      >
        {testimotional &&
          testimotional.map((testi) => (
            <SwiperSlide className={classes.Box} key={testi._id.$oid}>
              <div>
                <div className={classes.Box_inside}>
                  <div className={classes.Box_avatar}>
                    <img src={linkIMG + testi.avatar} alt="img" />
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
                      <p className={classes.user_comment}>
                        {testi.feedback_text}
                      </p>
                    </div>
                    <div>
                      <p className={classes.user_name}>
                        {' - '}
                        {testi.customer_name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default CustomerComment;
