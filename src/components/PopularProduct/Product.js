/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { Navigation } from 'swiper';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useGetPopularProduct } from 'store/selectors/common';

import SingleProduct from 'components/SingleProduct/SingleProduct';
import TitleUnderline from './TitleUnderline';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import classes from './Product.module.css';

function PopularProduct({ name }) {
  const products = useGetPopularProduct();

  const swiperRef = useRef();

  if (!products) {
    return <p data-testid="popularProducts-error">Loading...</p>;
  }

  return (
    <div className="mt-5" data-testid="popularProducts-element">
      <Row className={classes.mg_bot}>
        <Col xs lg="2" />
        <TitleUnderline name={name} />
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
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          400: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          639: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          865: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1000: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1500: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1700: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation]}
        className={classes.swiperMain}
      >
        {products &&
          products.map((popularProduct) => (
            <SwiperSlide key={popularProduct._id}>
              <SingleProduct popularProduct={popularProduct} />
            </SwiperSlide>
          ))}
        <div className={classes.swiperButton}>
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
        </div>
      </Swiper>
    </div>
  );
}

export default PopularProduct;
