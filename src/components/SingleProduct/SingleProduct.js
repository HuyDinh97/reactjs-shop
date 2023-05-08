import React, { useCallback } from 'react';
import { HiHeart } from 'react-icons/hi';
import { BsFillEyeFill } from 'react-icons/bs';
import { TbRefresh } from 'react-icons/tb';
import { addProductToCart, productDetail } from 'store/actions/common';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import classes from './SingleProduct.module.css';

function SingleProduct({ popularProduct }) {
  const linkIMG = 'https://vnguyen.xyz/huy/day17/apis/';
  const priceCheck = 'd-none';
  const dispatch = useDispatch();
  const { productId } = useParams();
  console.log(productId);

  const addProduct = useCallback(
    (productInCart) => () => {
      const data = {
        _id: productInCart._id,
        name: productInCart.name,
        price: productInCart.price,
        sales: productInCart.sales,
        thumb: productInCart.thumb,
        quantity: 1,
      };
      dispatch(addProductToCart(data));
    },
    [dispatch]
  );

  const uploadInfo = useCallback(
    (data) => () => {
      dispatch(productDetail(data));
    },
    [dispatch]
  );

  return (
    <div>
      <div className={classes.apperance}>
        <div>
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
                    <Link
                      to="/product-detail"
                      onClick={uploadInfo(popularProduct)}
                    >
                      <BsFillEyeFill />
                    </Link>
                  </span>
                  <span>
                    <TbRefresh />
                  </span>
                </div>
              </div>
              <div className={classes.white_overlay} />
            </div>
          </div>
        </div>
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
