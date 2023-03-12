import { React, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { Navigation } from 'swiper';
import { useGetBestSeller } from 'store/selectors/common';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { HiHeart } from 'react-icons/hi';
import { BsFillEyeFill } from 'react-icons/bs';
import { TbRefresh } from 'react-icons/tb';
import TitleUnderline from 'components/PopularProduct/TitleUnderline';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import classes from './BestSeller.module.css';

function BestSeller({ name }) {
  const products = useGetBestSeller();

  const swiperRef = useRef();
  const linkIMG = 'https://vnguyen.xyz/huy/day17/apis/';
  const priceCheck = 'd-none';

  if (!products) {
    return <p>Loading...</p>;
  }

  return (
    <div className={classes.bestSeller}>
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
          // when window width is >= 640px
          300: {
            width: 300,
            slidesPerView: 2,
            spaceBetween: 2,
            slidesPerGroup: 1,
          },
          1200: {
            width: 1128,
            slidesPerView: 4,
            spaceBetween: 30,
            slidesPerGroup: 1,
          },
        }}
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={1}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation]}
        className={classes.swiperMain}
      >
        {products &&
          products.map((popularProduct) => (
            <SwiperSlide key={popularProduct._id}>
              <div className={classes.apperance}>
                <a href="/">
                  <div
                    className={classes.product_img}
                    // eslint-disable-next-line react/forbid-dom-props
                    style={{
                      background: `url(${linkIMG + popularProduct.thumb})`,
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
                  <a href="/">{popularProduct.name}</a>
                </div>
                <div className={classes.product_price}>
                  <span
                    className={popularProduct.sales === 0 ? priceCheck : null}
                  >
                    <s className={classes.gray_price}>
                      {' $ '}
                      {popularProduct.price}
                    </s>
                  </span>
                  <span>
                    {' $ '}
                    {popularProduct.price - popularProduct.sales}
                  </span>
                </div>
              </div>
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

export default BestSeller;
