/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useGetPopularProduct } from 'store/selectors/common';
import { useDispatch } from 'react-redux';
import { shoplistSortProduct } from 'store/actions/common';
import { idCount } from './SimpleCount';
import classes from './ShopListContent.module.css';

function SelectionBlock({ title, selection }) {
  const products = useGetPopularProduct();
  const getNameCount = idCount(products, selection);
  const dispatch = useDispatch();
  const getSelectedProduct = React.useCallback(
    (id) => () => {
      dispatch(shoplistSortProduct(id));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <div>
      <ul className="list-unstyled">
        <li className="py-2">
          <span className="fw-bold fs-5">{title}</span>
        </li>
        {getNameCount &&
          getNameCount?.map((name, index) => (
            <li
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              className="d-flex justify-content-between py-2 fs-5 pt-3"
            >
              <button
                className={`${classes.selectionBlockButton} border-0`}
                type="button"
                onClick={getSelectedProduct(name.id)}
              >
                {name.name}
              </button>
              <span>({name.num})</span>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default SelectionBlock;
