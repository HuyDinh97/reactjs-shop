/* eslint-disable react/jsx-one-expression-per-line */
import React, { useCallback } from 'react';
import { useGetPopularProduct } from 'store/selectors/common';
import { useDispatch } from 'react-redux';
import { shoplistSortProduct } from 'store/actions/common';
import { Link, useParams } from 'react-router-dom';
import { idCount } from 'shared/ulti';
import classes from './ShopListContent.module.css';

function SelectionBlock({ title, selection }) {
  const { id: selectedId } = useParams();
  const products = useGetPopularProduct();
  const getNameCount = idCount(products, selection);
  const dispatch = useDispatch();

  const sortById = useCallback(
    (id) => () => {
      dispatch(shoplistSortProduct(id));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedId]
  );
  return (
    <div>
      <ul className="list-unstyled">
        <li className="py-2 fs-5">
          <span className="fw-bold">{title}</span>
        </li>
        {getNameCount &&
          getNameCount?.map((name, index) => (
            <li
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              className="d-flex justify-content-between py-2 fs-5 pt-3"
            >
              <Link
                to={`/shop-list/id=${name.id}&page=1`}
                className={`${classes.selectionBlockLink} border-0 text-decoration-none`}
                onClick={sortById(name.id)}
              >
                {name.name}
              </Link>
              <span>({name.num})</span>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default SelectionBlock;
