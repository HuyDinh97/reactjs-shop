import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { Navigation } from 'swiper';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { HiHeart } from 'react-icons/hi';
import { BsFillEyeFill } from 'react-icons/bs';
import { TbRefresh } from 'react-icons/tb';

import TitleUnderline from './TitleUnderline';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import product1 from './Product/product-img-1.jpg';

import classes from './Product.module.css';

function PopularProduct({ name }) {
  const swiperRef = useRef();
  return (
    <div className={classes.mg_4}>
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
          <div className={classes.apperance}>
            <a href="/">
              <div
                className={classes.product_img}
                // eslint-disable-next-line react/forbid-dom-props
                style={{
                  background: `url(${product1})`,
                }}
              >
                <div className={classes.hide}>
                  <div className={classes.opacity_layer}>
                    <div>
                      <button
                        className="border-0 search-btn-color fs-6 fw-semibold px-4 py-2 rounded-pill"
                        type="button"
                      >
                        Add to cart
                      </button>
                    </div>
                    <div className={classes.opacity_icon}>
                      <span>
                        <HiHeart />
                      </span>
                      <span>
                        <BsFillEyeFill />
                      </span>
                      <span>
                        <TbRefresh />
                      </span>
                    </div>
                  </div>
                  <div className={classes.white_overlay} />
                </div>
              </div>
            </a>
          </div>
          <div className="card-body d-flex justify-content-center my-2 mb-2 flex-column">
            <div className={classes.product_name}>
              <a href="/">Variable product1</a>
            </div>
            <div className={classes.product_price}>
              <span className="mx-2 fs-6 fw-semibold">
                <s className={classes.gray_price}>$ 90.00</s>
              </span>
              <span className="mx-2 fs-6 fw-semibold">$ 78.00</span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default PopularProduct;
