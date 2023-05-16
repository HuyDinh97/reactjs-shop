/* eslint-disable no-unused-expressions */
import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import classes from './QuantityButton.module.css';

function QuantityButton({
  productId,
  productQuantity,
  flexDirectionType,
  changeProductQuantity,
}) {
  const handleChange = () => {
    console.log('input change');
  };

  const flexDirection = flexDirectionType || 'column';

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
          value={productQuantity}
          onChange={handleChange}
          aria-label="couple-code"
        />
      </div>
      <button
        type="button"
        className={`${classes.quantity_button} w-100 d-flex justify-content-center`}
        onClick={changeProductQuantity(productId, false)}
      >
        <FaPlus />
      </button>
    </div>
  );
}

export default QuantityButton;
