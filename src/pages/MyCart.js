import CartTable from 'components/CartTable/CartTable';
import Navigation from 'components/Navigation';
import PageTitle from 'components/Page Title/PageTitle';
import SearchBar from 'components/SearchBar/SearchBar';
import React from 'react';
import classes from './Layout.module.css';

function MyCart() {
  return (
    <div>
      <SearchBar />
      <div className={classes.main}>
        <PageTitle />
        <CartTable />
      </div>
    </div>
  );
}
export default MyCart;
