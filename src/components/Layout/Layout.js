import React from 'react';
import Header from './Header/Header';
import classes from './Layout.module.css';
import SearchBar from './SearchBar/SearchBar';
import Categories from './Categories/Categories';
import SummerSale from './SummerSale/SummerSale';
import Product from './Popular Product/Product';
import Advertising from './Advertising/Advertising';
import Banner from './Banner/Banner';

function Layout(_props) {
  return (
    <div>
      <Header />
      <div className={classes.main}>
        <SearchBar />
        <Categories />
      </div>
      <SummerSale />
      <main className={classes.main}>
        <Advertising />
        <Product name="POPULAR PRODUCT" />
        <Banner />
        <Product name="BEST SELLER" />
      </main>
    </div>
  );
}

export default Layout;
