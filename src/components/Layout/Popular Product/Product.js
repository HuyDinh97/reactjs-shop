import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GrNext, GrPrevious } from 'react-icons/gr';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Navigation } from 'swiper';
import Product1 from './Product/product-img-1.jpg';
import Product2 from './Product/product-img-2.jpg';
import Product3 from './Product/product-img-3.jpg';
import Product4 from './Product/product-img-4.jpg';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import classes from './Product.module.css';

function PopularProduct({ name }) {
  const swiperRef = useRef();
  return (
    <div className={classes.mg_4}>
      <Row className={classes.mg_bot}>
        <Col xs lg="2" />
        <Col className={classes.Product_title}>
          <div className={classes.Underline}>{name}</div>
        </Col>
        <Col className={classes.Product_button} xs lg="2">
          <button
            type="button"
            className={classes.prev_button}
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <GrPrevious />
          </button>
          <button
            type="button"
            className={classes.next_button}
            onClick={() => swiperRef.current?.slideNext()}
          >
            <GrNext />
          </button>
        </Col>
      </Row>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={1}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation]}
        className=""
      >
        <SwiperSlide>
          <img src={Product1} alt="product" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Product2} alt="product" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Product3} alt="product" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Product4} alt="product" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Product1} alt="product" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Product2} alt="product" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Product3} alt="product" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Product4} alt="product" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default PopularProduct;
