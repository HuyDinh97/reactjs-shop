import PageTitle from 'components/Page Title/PageTitle';
import SearchBar from 'components/SearchBar/SearchBar';
import ShopListContent from 'components/ShopListContent/ShopListContent';
import React from 'react';

function ShopList() {
  return (
    <div>
      <SearchBar />
      <PageTitle pageTitle="Shop list" pageLink="Shop List" />
      <ShopListContent />
    </div>
  );
}

export default ShopList;
