import CartTable from 'components/CartTable/CartTable';
import PageTitle from 'components/Page Title/PageTitle';
import SearchBar from 'components/SearchBar/SearchBar';
import React from 'react';

function MyCart() {
  return (
    <div>
      <SearchBar />
      <PageTitle pageTitle="my cart" pageLink="Cart" />
      <div className="container">
        <CartTable />
      </div>
    </div>
  );
}
export default MyCart;
