/* eslint-disable react/jsx-one-expression-per-line */
import SearchBar from 'components/SearchBar/SearchBar';
import ShopListContent from 'components/ShopListContent/ShopListContent';
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function SearchResult() {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('query') || 'all';
  const [dataApi, setDataApi] = useState();
  React.useEffect(() => {
    fetch(
      `https://vnguyen.xyz/huy/day17/apis/index.php?type=search&query=${keyword}`
    )
      .then((res) => res.json())
      .then((data) => setDataApi(data.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword]);

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
