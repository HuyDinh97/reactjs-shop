import React from 'react';
import Header from './Header/Header';
import SearchBar from './SearchBar/SearchBar';
import Categories from './Categories/Categories';
import SummerSale from './SummerSale/SummerSale';
import Product from './Popular Product/Product';
import Advertising from './Advertising/Advertising';
import Banner from './Banner/Banner';
import CustomerComment from './Customer comment/CustomerComment';
import LastestNews from './Lastest News/LastestNews';

import classes from './Layout.module.css';

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
        <CustomerComment />
        <LastestNews />
      </main>
    </div>
  );
}

export default Layout;
