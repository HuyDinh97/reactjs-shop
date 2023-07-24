import React from 'react';
import { useDispatch } from 'react-redux';
import {
  searchResultProducts,
  shoplistSortProduct,
} from 'store/actions/common';

const useFetchSearchedkeyword = (keyword) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const dataFetch = async () => {
      try {
        const response = await fetch(
          `https://vnguyen.xyz/huy/day17/apis/index.php?type=search&query=${keyword}`
        );
        if (!response) {
          throw new Error(`${response.status}`);
        }
        const dataReturn = await response.json();
        dispatch(searchResultProducts(dataReturn.data));
        dispatch(
          shoplistSortProduct({
            id: '',
            products: dataReturn.data,
          })
        );
      } catch (err) {
        console.log(err.message);
      }
    };
    dataFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword]);
};

export default useFetchSearchedkeyword;
