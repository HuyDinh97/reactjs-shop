import React from 'react';
import Header from './Header/Header';
import classes from './Layout.module.css';
import SearchBar from './SearchBar/SearchBar';
import Categories from './Categories/Categories';
import SummerSale from './SummerSale/SummerSale';
import Product from './Popular Product/Product';
import Advertising from './Advertising/Advertising';

function Layout(_props) {
  return (
    <div>
      <Header />
      <main className={classes.main}>
        <SearchBar />
        <Categories />
        <SummerSale />
        <Advertising />
        <Product name="POPULAR PRODUCT" />
        <Product name="BEST SELLER" />
      </main>
    </div>
  );
}

export default Layout;
