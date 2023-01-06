import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import useFetchTestimotional from 'Hooks/useFetchTestimotional';
import quoteImg from './image/icons8-quote-left-48.png';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import classes from './CustomerComment.module.css';

function CustomerComment() {
  const { testimotional, isSuccess } = useFetchTestimotional();

  if (isSuccess === false) {
    return <p data-testid="error-fetch-blog">Error, cannot fetch API</p>;
  }

  if (testimotional?.length <= 0) {
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
          testimotional.map((testi) => {
            return (
              <SwiperSlide
                className={classes.Box}
                key={testi._id.$oid.toString()}
              >
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
            );
          })}
      </Swiper>
    </div>
  );
}

export default CustomerComment;
