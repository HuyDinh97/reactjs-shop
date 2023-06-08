/* eslint-disable react/jsx-one-expression-per-line */
import React, { useCallback, useEffect } from 'react';
import { Slider } from '@mui/material';
import { useDispatch } from 'react-redux';
import { shoplistPriceFilter } from 'store/actions/common';
import { useParams } from 'react-router-dom';
import classes from './ShopListContent.module.css';

function PriceFilter() {
  const { id } = useParams();
  const [value, setValue] = React.useState([0, 1000]);
  const dispatch = useDispatch();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const sortByFilterPrice = useCallback(() => {
    dispatch(shoplistPriceFilter({ price: value, id }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, id]);
  const CustomSliderStyles = {
    '& .MuiSlider-thumb': {
      color: 'white',
      border: '3px solid black',
    },
    '& .MuiSlider-track': {
      color: 'black',
    },
    '& .MuiSlider-rail': {
      color: '#c3bbbb',
    },
  };
  return (
    <div>
      <ul className="list-unstyled">
        <li className="py-2">
          <span className="fw-bold fs-5">FILTERS </span>
        </li>
        <li className="border-0 pt-4 pb-2 d-flex justify-content-center">
          <Slider
            sx={CustomSliderStyles}
            className={classes.filterSlider}
            value={value}
            onClick={sortByFilterPrice}
            onChange={handleChange}
            valueLabelDisplay="auto"
            max={1000}
          />
        </li>
        <li className="border-0">
          <div className="fw-semibold fs-5">
            <span className={classes.filterPrice}>PRICE </span>
            <span className="text-black">
              ${value[0]} - ${value[1]}
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default PriceFilter;
