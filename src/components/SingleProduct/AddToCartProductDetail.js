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
      ? 'align-items-center'
      : 'flex-column align-items-start justify-content-between position-absolute mb-3';

  const marginLeft = display === false ? 'ms-5' : '';

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
    <div className={`${classes.opacity_layer} ${changeDisplay} d-flex`}>
      <div>
        <button
          className="border-0 search-btn-color fs-6 fw-semibold px-4 py-2 rounded-pill"
          type="button"
          onClick={addProduct(popularProduct)}
        >
          Add to cart
        </button>
      </div>
      <div className={`${classes.opacity_icon} ${marginLeft}`}>
        <HiHeart className="px-2" />
        <Link className="px-2" to={`/product-detail/${popularProduct._id}`}>
          <BsFillEyeFill />
        </Link>
        <TbRefresh className="px-2" />
      </div>
    </div>
  );
}

export default AddToCartProductDetail;
