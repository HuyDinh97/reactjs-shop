/* eslint-disable react/jsx-one-expression-per-line */
import SearchBar from 'components/SearchBar/SearchBar';
import ShopListContent from 'components/ShopListContent/ShopListContent';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import {
  searchResultProducts,
  shoplistSortProduct,
} from 'store/actions/common';
import { useGetPopularProduct } from 'store/selectors/common';

function SearchResult() {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('query') || 'all';
  const defaultProducts = useGetPopularProduct();
  const [dataApi, setDataApi] = useState();
  const dispatch = useDispatch();

  React.useEffect(() => {
    fetch(
      `https://vnguyen.xyz/huy/day17/apis/index.php?type=search&query=${keyword}`
    )
      .then((res) => res.json())
      .then((data) => setDataApi(data.data));
  }, [keyword]);
  React.useEffect(() => {
    dispatch(searchResultProducts(dataApi));
    dispatch(
      shoplistSortProduct({
        id: '',
        products: keyword === 'all' ? defaultProducts : dataApi,
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataApi]);

  return (
    <div>
      <SearchBar />
      <div>
        <p className="fw-semibold fs-1 text-center">Search for: {keyword}</p>
      </div>
      <ShopListContent productTo={dataApi} />
    </div>
  );
}
export default SearchResult;
