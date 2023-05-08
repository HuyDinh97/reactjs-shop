/* eslint-disable no-unused-expressions */
import React, { useCallback, useEffect, useRef, useState } from 'react';
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
  const [value, setValue] = useState(1);
  const quantiyDetail = useRef(1);

  useEffect(() => {
    setValue(1);
  }, []);

  useEffect(() => {
    quantiyDetail.current = value;
  });

  const flexDirection = flexDirectionType || 'column';

  const dispatch = useDispatch();

  const changeProductQuantity = useCallback(
    (id, isDecrease = false) =>
      () => {
        if (isDecrease) {
          if (value < 2) {
            setValue(value);
          }
          if (value >= 2) {
            setValue(value - 1);
          }
          dispatch(decreaseProductInCart(id));
          return;
        }
        dispatch(increaseProductInCart(id));
        setValue(value + 1);
      },
    [dispatch, value]
  );
  return (
    <div className={`${classes.cartDetailQuantity} ${flexDirection} border-0`}>
      <button
        type="button"
        className={`${classes.quantity_button} w-100 d-flex justify-content-center`}
        onClick={changeProductQuantity(productId, true)}
      >
        <FaMinus />
      </button>
      <div className={classes.quantity_in_cart}>
        <input
          id={productId}
          type="tel"
          min={0}
          ref={quantiyDetail}
          value={
            productQuantity && productQuantity > 1 ? productQuantity : value
          }
          onChange={handleChange}
          aria-label="couple-code"
        />
      </div>
      <button
        type="button"
        className={`${classes.quantity_button} w-100 d-flex justify-content-center`}
        onClick={changeProductQuantity(productId)}
      >
        <FaPlus />
      </button>
    </div>
  );
}

export default QuantityButton;
