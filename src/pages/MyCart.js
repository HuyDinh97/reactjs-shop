import CartTable from 'components/CartTable/CartTable';
import PageTitle from 'components/Page Title/PageTitle';
import SearchBar from 'components/SearchBar/SearchBar';
import React from 'react';
import classes from './Layout.module.css';

function MyCart() {
  return (
    <div>
      <SearchBar />
      <PageTitle />
      <div className={classes.main}>
        <CartTable />
      </div>
    </div>
  );
}
export default MyCart;
