import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
<<<<<<< HEAD
import useFetchBlog from 'Hooks/useFetchBlog';
=======
import useFetchTestimotional from 'Hooks/useFetchTestimotional';
>>>>>>> 6df556a645fdd993207090b36585764d536f464c
import quoteImg from './image/icons8-quote-left-48.png';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import classes from './CustomerComment.module.css';

function CustomerComment() {
<<<<<<< HEAD
  const { blogs, isSuccess } = useFetchBlog(); // Destructuring

  // Safe code: handle if API error in response
  if (isSuccess === false) {
    return <p>Error, cannot fetch API</p>;
  }

  if (blogs.length <= 0) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <Swiper pagination modules={[Pagination]} className="mySwiper">
        {blogs &&
          blogs.map((blog) => (
            <SwiperSlide className={classes.Box} key={blog._id}>
              <div>
                <div className={classes.Box_inside}>
                  <div>
                    <img src={blog.image} alt="img" />
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
                        {blog.content.substring(0, 320)}
                      </p>
                    </div>
                    <div>
                      <p className={classes.user_name}>{blog.author}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
=======
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
>>>>>>> 6df556a645fdd993207090b36585764d536f464c
      </Swiper>
    </div>
  );
}

export default CustomerComment;
