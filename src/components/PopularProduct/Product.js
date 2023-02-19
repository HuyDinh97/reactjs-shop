/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { Navigation } from 'swiper';
import { useDispatch } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { HiHeart } from 'react-icons/hi';
import { BsFillEyeFill } from 'react-icons/bs';
import { TbRefresh } from 'react-icons/tb';
import { useGetPopularProduct } from 'store/selectors/common';
import { addProductToCart } from 'store/actions/common';

import TitleUnderline from './TitleUnderline';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import classes from './Product.module.css';

function PopularProduct({ name }) {
  const products = useGetPopularProduct();

  const swiperRef = useRef();
  const linkIMG = 'https://vnguyen.xyz/huy/day17/apis/';
  const priceCheck = 'd-none';
  const dispatch = useDispatch();

  const addProduct = useCallback(
    (productInCart) => () => {
      dispatch(addProductToCart(productInCart));
    },
    []
  );

  if (!products) {
    return <p data-testid="popularProducts-error">Loading...</p>;
  }

  return (
    <div className={classes.mg_4} data-testid="popularProducts-element">
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
        {products &&
          products.map((popularProduct) => (
            <SwiperSlide key={popularProduct._id}>
              <div className={classes.apperance}>
                <a>
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
                            onClick={addProduct(popularProduct)}
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
                  <span className="mx-2 fs-6 fw-semibold">
                    {' $ '}
                    {popularProduct.price - popularProduct.sales}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default PopularProduct;
