import useFetchSearchedkeyword from 'Hooks/useFetchSearchedKeyword';
import PageTitle from 'components/Page Title/PageTitle';
import SearchBar from 'components/SearchBar/SearchBar';
import ShopListContent from 'components/ShopListContent/ShopListContent';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useGetSearchProducts } from 'store/selectors/common';

function SearchResult() {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('query');
  useFetchSearchedkeyword(keyword);
  const responsedProducts = useGetSearchProducts();

  return (
    <div>
      <SearchBar />
      <PageTitle pageTitle={`Search for: ${keyword}`} />
      <ShopListContent productTo={responsedProducts} />
    </div>
  );
}
export default SearchResult;
