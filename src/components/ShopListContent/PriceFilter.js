/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Slider } from '@mui/material';
import classes from './ShopListContent.module.css';

function PriceFilter() {
  const [value, setValue] = React.useState([20, 37]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
