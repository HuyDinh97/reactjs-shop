import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { useGetHome } from 'store/selectors/common';
import quoteImg from './image/icons8-quote-left-48.png';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import classes from './CustomerComment.module.css';

function CustomerComment() {
  const homeData = useGetHome();
  const { testimonial: testimonials } = homeData ?? {};

  if (!testimonials) {
    return <p data-testid="testimotional-error">Loading...</p>;
  }

  const linkIMG = 'https://vnguyen.xyz/huy/day17/apis/';

  return (
    <div>
      <Swiper
        pagination={{
          clickable: true,
          bulletClass: `swiper-pagination-bullet swiper-pagination-testClass`,
        }}
        modules={[Pagination]}
        className={classes.mySwiper}
        data-testid="testimotional-element"
      >
        {testimonials &&
          testimonials.map((testi) => (
            <SwiperSlide className={classes.Box} key={testi._id.$oid}>
              <Row className="mt-4 py-5">
                <Col xl={3} xs={12} className={classes.Box_avatar}>
                  <img src={linkIMG + testi.avatar} alt="img" />
                </Col>
                <Col xl={9} xs={12} className="px-5">
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
                </Col>
              </Row>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default CustomerComment;
