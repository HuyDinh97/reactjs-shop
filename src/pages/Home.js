import React from 'react';
import BestSeller from 'components/BestSeller/BestSeller';
import Product from '../components/PopularProduct/Product';
import Advertising from '../components/Advertising/Advertising';
import Banner from '../components/Banner/Banner';
import CustomerComment from '../components/Customercomment/CustomerComment';
import LastestNews from '../components/Lastest News/LastestNews';

function Home() {
  return (
    <>
      <Advertising />
      <Product name="POPULAR PRODUCT" />
      <Banner />
      <BestSeller name="BEST SELLER" />
      <CustomerComment />
      <LastestNews />
    </>
  );
}

export default Home;
