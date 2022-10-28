import slide_1 from "./sales/slider-img-1.jpg";
import slide_2 from "./sales/slider-img-2.jpg";
import slide_3 from "./sales/slider-img-3.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import classes from "./SummerSale.module.css";

// import required modules
import { Pagination } from "swiper";

function SummerSale() {
  return (
    <Swiper pagination={true} modules={[Pagination]} className={classes.swiper_height}>
      <SwiperSlide><img src={slide_1} alt={'slide'}/>
        <div className={classes.slide_1}>
          <h2>SUMMER SALE</h2>
          <p>Get up to 50% off your shopping items tomorrow!</p>
          <button className={classes.button}>Shop Now</button>
        </div>
      </SwiperSlide>
      <SwiperSlide><img src={slide_2} alt={'slide'}/>
        <div className={classes.slide_1}>
          <h2>SUMMER SALE</h2>
          <p>Get up to 50% off your shopping items tomorrow!</p>
          <button className={classes.button}>Shop Now</button>
        </div></SwiperSlide>
      <SwiperSlide><img src={slide_3} alt={'slide'} />
        <div className={classes.slide_1}>
          <h2>SUMMER SALE</h2>
          <p>Get up to 50% off your shopping items tomorrow!</p>
          <button className={classes.button}>Shop Now</button>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default SummerSale;