/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Slider } from '@mui/material';
import { useDispatch } from 'react-redux';
import { shoplistPriceFilter } from 'store/actions/common';
import { useParams } from 'react-router-dom';
import {
  useGetFilterPrice,
  useGetSearchProducts,
} from 'store/selectors/common';
import classes from './ShopListContent.module.css';

function PriceFilter() {
  const { id } = useParams();
  const [value, setValue] = React.useState([0, 1000]);
  const dispatch = useDispatch();
  const searchProduct = useGetSearchProducts();
  const filterPrice = useGetFilterPrice();
  console.log(filterPrice);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    dispatch(
      shoplistPriceFilter({
        price: newValue,
        id,
        products: searchProduct,
      })
    );
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
        <li className="py-2 fs-5">
          <span className="fw-bold">FILTERS </span>
        </li>
        <li className="border-0 pt-4 pb-2 d-flex justify-content-center">
          <Slider
            sx={CustomSliderStyles}
            className={classes.filterSlider}
            value={filterPrice || value}
            // onClick={sortByFilterPrice}
            onChange={handleChange}
            valueLabelDisplay="auto"
            max={1000}
          />
        </li>
        <li className="border-0">
          <div className="fw-semibold fs-5">
            <span className={classes.filterPrice}>PRICE </span>
            <span className="text-black">
              ${filterPrice[0] || value[0]} - ${filterPrice[1] || value[1]}
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default PriceFilter;
