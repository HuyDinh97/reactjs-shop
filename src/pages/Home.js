import React from 'react';
import Product from '../components/Popular Product/Product';
import Advertising from '../components/Advertising/Advertising';
import Banner from '../components/Banner/Banner';
import CustomerComment from '../components/Customer comment/CustomerComment';
import LastestNews from '../components/Lastest News/LastestNews';
import Layout from './Layout';

function Home() {
  return (
    <Layout>
      <Advertising />
      <Product name="POPULAR PRODUCT" />
      <Banner />
      <Product name="BEST SELLER" />
      <CustomerComment />
      <LastestNews />
    </Layout>
  );
}

export default Home;
