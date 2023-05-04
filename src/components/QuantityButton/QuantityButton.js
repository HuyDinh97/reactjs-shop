import React, { useCallback } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import {
  decreaseProductInCart,
  increaseProductInCart,
} from 'store/actions/common';
import { useDispatch } from 'react-redux';
import classes from './QuantityButton.module.css';

function QuantityButton({ productId, productQuantity, flexDirectionType }) {
  const handleChange = () => {
    console.log('input change');
  };

  const flexDirection = flexDirectionType || 'column';

  const dispatch = useDispatch();

  const changeProductQuanity = useCallback(
    (id, isDecrease = false) =>
      () => {
        if (isDecrease) {
          dispatch(decreaseProductInCart(id));
          return;
        }
        dispatch(increaseProductInCart(id));
      },
    [dispatch]
  );
  return (
    <div className={`${classes.cartDetailQuantity} ${flexDirection} border-0`}>
      <button
        type="button"
        className={`${classes.quantity_button} w-100 d-flex justify-content-center`}
        onClick={changeProductQuanity(productId, true)}
      >
        <FaMinus />
      </button>
      <div className={classes.quantity_in_cart}>
        <input
          id={productId}
          type="tel"
          min={0}
          value={productQuantity}
          onChange={handleChange}
          aria-label="couple-code"
        />
      </div>
      <button
        type="button"
        className={`${classes.quantity_button} w-100 d-flex justify-content-center`}
        onClick={changeProductQuanity(productId)}
      >
        <FaPlus />
      </button>
    </div>
  );
}

export default QuantityButton;
