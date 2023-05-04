/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { HiHeart } from 'react-icons/hi';
import { BsFillEyeFill } from 'react-icons/bs';
import { TbRefresh } from 'react-icons/tb';

import classes from './SingleProduct.module.css';

function SingleProduct({ popularProduct, addProduct }) {
  const linkIMG = 'https://vnguyen.xyz/huy/day17/apis/';
  const priceCheck = 'd-none';
  return (
    <div>
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
      <div className="card-body d-flex justify-content-center my-2 mb-2 flex-column text-center">
        <div className={classes.product_name}>
          <a href="/">{popularProduct.name}</a>
        </div>
        <div className={classes.product_price}>
          <span className={popularProduct.sales === 0 ? priceCheck : null}>
            <s className={classes.gray_price}>
              {' $ '}
              {popularProduct.price}
            </s>
          </span>
          <span className="mx-2">
            {' $ '}
            {popularProduct.realPrice}
          </span>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
