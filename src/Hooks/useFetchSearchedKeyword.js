import React from 'react';
import { useDispatch } from 'react-redux';
import {
  searchResultProducts,
  shoplistSortProduct,
} from 'store/actions/common';
import { useGetSearchProducts } from 'store/selectors/common';

const useFetchSearchedkeyword = (keyword) => {
  const dispatch = useDispatch();
  const searchProductRedux = useGetSearchProducts();

  React.useEffect(() => {
    fetch(
      `https://vnguyen.xyz/huy/day17/apis/index.php?type=search&query=${keyword}`
    )
      .then((res) => res.json())
      .then((data) => dispatch(searchResultProducts(data.data)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword]);
  React.useEffect(() => {
    dispatch(
      shoplistSortProduct({
        id: '',
        products: searchProductRedux,
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchProductRedux, dispatch]);
};

export default useFetchSearchedkeyword;
