import PageTitle from 'components/Page Title/PageTitle';
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
  const keyword = searchParams.get('query');
  const defaultProducts = useGetPopularProduct();
  const [responsedProducts, setResponsedProducts] = useState();
  const dispatch = useDispatch();

  const productResults = !responsedProducts
    ? defaultProducts
    : responsedProducts;

  React.useEffect(() => {
    fetch(
      `https://vnguyen.xyz/huy/day17/apis/index.php?type=search&query=${keyword}`
    )
      .then((res) => res.json())
      .then((data) => setResponsedProducts(data.data));
  }, [keyword]);
  React.useEffect(() => {
    dispatch(searchResultProducts(productResults));
    dispatch(
      shoplistSortProduct({
        id: '',
        products: productResults,
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [responsedProducts]);

  return (
    <div>
      <SearchBar />
      <PageTitle pageTitle={`Search for: ${keyword}`} />
      <ShopListContent productTo={productResults} />
    </div>
  );
}
export default SearchResult;
