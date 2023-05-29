import React, { useCallback } from 'react';
import { addProductToCart } from 'store/actions/common';
import { useDispatch } from 'react-redux';
import { HiHeart } from 'react-icons/hi';
import { BsFillEyeFill } from 'react-icons/bs';
import { TbRefresh } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import classes from './SingleProduct.module.css';

function AddToCartProductDetail({ popularProduct, display }) {
  const dispatch = useDispatch();
  const changeDisplay =
    display === false
      ? 'd-flex flex-column align-items-center justify-content-between'
      : 'd-flex flex-column align-items-start justify-content-between';

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
  return (
    <div className={`${classes.opacity_layer} ${changeDisplay}`}>
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
          <Link to={`/product-detail/${popularProduct._id}`}>
            <BsFillEyeFill />
          </Link>
        </span>
        <span>
          <TbRefresh />
        </span>
      </div>
    </div>
  );
}

export default AddToCartProductDetail;
