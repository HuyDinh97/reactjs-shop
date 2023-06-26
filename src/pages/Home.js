import React from 'react';
import SearchBar from 'components/SearchBar/SearchBar';
import SubscribeEmail from 'components/SubscribeEmail/SubscribeEmail';
import ServiceBanner from 'components/ServiceBanner/ServiceBanner';
import SummerSale from 'components/SummerSale/SummerSale';
import { useGetBestSeller, useGetPopularProduct } from 'store/selectors/common';
import Product from '../components/PopularProduct/Product';
import Advertising from '../components/Advertising/Advertising';
import Banner from '../components/Banner/Banner';
import CustomerComment from '../components/Customercomment/CustomerComment';
import LastestNews from '../components/Lastest News/LastestNews';

function Home() {
  const popularProducts = useGetPopularProduct();
  const bestSellers = useGetBestSeller();
  return (
    <div>
      <div>
        <SearchBar />
        <SummerSale />
      </div>
      <div className="container">
        <Advertising />
        <Product name="POPULAR PRODUCT" product={popularProducts} />
        <Banner />
        <Product name="BEST SELLER" product={bestSellers} />
        <CustomerComment />
        <LastestNews />
      </div>
      <div>
        <SubscribeEmail />
        <ServiceBanner />
      </div>
    </div>
  );
}

export default Home;
