import React, { useCallback } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import {
  decreaseProductInCart,
  increaseProductInCart,
} from 'store/actions/common';
import { useDispatch } from 'react-redux';
import classes from './QuantityButton.module.css';

function QuantityButton({ productId, productQuantity }) {
  console.log(productId);
  const handleChange = () => {
    console.log('input change');
  };

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
    <div className={`${classes.cartDetailQuantity} border-0`}>
      <button
        type="button"
        className={classes.quantity_button}
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
        className={classes.quantity_button}
        onClick={changeProductQuanity(productId)}
      >
        <FaPlus />
      </button>
    </div>
  );
}

export default QuantityButton;
