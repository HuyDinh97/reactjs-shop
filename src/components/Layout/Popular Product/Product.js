import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { GrNext, GrPrevious } from 'react-icons/gr';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Product_1 from "./Product/product-img-1.jpg";
import Product_2 from "./Product/product-img-2.jpg";
import Product_3 from "./Product/product-img-3.jpg";
import Product_4 from "./Product/product-img-4.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import classes from './Product.module.css';


// import required modules
import { Navigation } from "swiper";

function PopularProduct({name}) {
  const swiperRef = useRef()
  return (
    <div className={classes.mg_top}>
      <Row className={classes.mg_bot}>
          <Col xs lg ="2"></Col>
          <Col className={classes.Product_title}><div className={classes.Underline}>{name}</div></Col>
          <Col className={classes.Product_button} xs lg ="2">
            <button className={classes.prev_button} onClick={() => swiperRef.current?.slidePrev()}><GrPrevious /></button>
            <button className={classes.next_button} onClick={() => swiperRef.current?.slideNext()}><GrNext /></button>
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
        
        <SwiperSlide><img src={Product_1} alt="product" /></SwiperSlide>
        <SwiperSlide><img src={Product_2} alt="product" /></SwiperSlide>
        <SwiperSlide><img src={Product_3} alt="product" /></SwiperSlide>
        <SwiperSlide><img src={Product_4} alt="product" /></SwiperSlide>
        <SwiperSlide><img src={Product_1} alt="product" /></SwiperSlide>
        <SwiperSlide><img src={Product_2} alt="product" /></SwiperSlide>
        <SwiperSlide><img src={Product_3} alt="product" /></SwiperSlide>
        <SwiperSlide><img src={Product_4} alt="product" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default PopularProduct;