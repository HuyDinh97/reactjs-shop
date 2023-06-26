/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useCallback } from 'react';
import { HiHeart } from 'react-icons/hi';
import { BsFillEyeFill } from 'react-icons/bs';
import { TbRefresh } from 'react-icons/tb';
import { addProductToCart, addToWishList } from 'store/actions/common';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { useGetWishList } from 'store/selectors/common';
import classes from './SingleProduct.module.css';

function SingleProduct({ product }) {
  const wishList = useGetWishList();
  const linkIMG = 'https://vnguyen.xyz/huy/day17/apis/';
  const priceCheck = 'd-none';
  const dispatch = useDispatch();
  const wishListExist = wishList?.find((prod) => prod._id === product._id);

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

  const addWishList = useCallback(
    (productInCart) => () => {
      dispatch(addToWishList(productInCart));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <div>
      <div className={classes.apperance}>
        <div>
          <div
            className={classes.product_img}
            // eslint-disable-next-line react/forbid-dom-props
            style={{
              background: `url(${linkIMG + product.thumb})`,
            }}
          >
            <div className={classes.hide}>
              <div className={classes.opacity_layer}>
                <div>
                  <button
                    className="border-0 search-btn-color fs-6 fw-semibold px-4 py-2 rounded-pill"
                    type="button"
                    onClick={addProduct(product)}
                  >
                    Add to cart
                  </button>
                </div>
                <div className={classes.opacity_icon}>
                  <a to="#" onClick={addWishList(product)}>
                    <span
                      className={
                        wishListExist ? `${classes.wishListAdded}` : ``
                      }
                    >
                      <HiHeart />
                    </span>
                  </a>
                  <span>
                    <Link to={`/product-detail/${product._id}`}>
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
          <Link to={`/product-detail/${product._id}`}>{product.name}</Link>
        </div>
        <div className={classes.product_price}>
          <span className={product.sales === 0 ? priceCheck : null}>
            <s className={classes.gray_price}>
              {' $ '}
              {product.price}
            </s>
          </span>
          <span className="mx-2">
            {' $ '}
            {product.realPrice
              ? product.realPrice
              : product.afterSalesPriceDetail}
          </span>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
