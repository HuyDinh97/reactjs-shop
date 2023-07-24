import React, { useCallback } from 'react';
import { addProductToCart, addToWishList } from 'store/actions/common';
import { useDispatch } from 'react-redux';
import { HiHeart } from 'react-icons/hi';
import { BsFillEyeFill } from 'react-icons/bs';
import { TbRefresh } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { useGetWishList } from 'store/selectors/common';
import classes from './SingleProduct.module.css';

function AddToCartProductDetail({ product, display }) {
  const wishList = useGetWishList();
  const dispatch = useDispatch();
  const changeDisplay =
    display === false
      ? 'h-75'
      : 'flex-column justify-content-between position-absolute mb-3';

  const marginLeft = display === false ? 'ms-5' : '';
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
    <div className={`${classes.opacity_layer} ${changeDisplay} d-flex mt-3`}>
      <div
        className={`${classes.addProductButton} d-flex justify-content-center`}
      >
        <button
          className="border-0 search-btn-color fs-6 fw-semibold px-4 py-2 rounded-pill"
          type="button"
          onClick={addProduct(product)}
        >
          Add to cart
        </button>
      </div>
      <div className={`${classes.opacity_icon} ${marginLeft}`}>
        <button
          type="button"
          onClick={addWishList(product)}
          className={
            wishListExist ? `${classes.wishListAdded} border-0` : `border-0`
          }
        >
          <HiHeart />
        </button>
        <Link className="px-2" to={`/product-detail/${product._id}`}>
          <BsFillEyeFill />
        </Link>
        <button type="button" className="border-0">
          <TbRefresh className="px-2" />
        </button>
      </div>
    </div>
  );
}

export default AddToCartProductDetail;
