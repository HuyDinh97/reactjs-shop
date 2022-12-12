import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import useFetchBlog from 'Hooks/useFetchBlog';
import quoteImg from './image/icons8-quote-left-48.png';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import classes from './CustomerComment.module.css';

function CustomerComment() {
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
      </Swiper>
    </div>
  );
}

export default CustomerComment;
