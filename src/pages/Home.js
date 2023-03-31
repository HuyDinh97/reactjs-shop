import React from 'react';
import BestSeller from 'components/BestSeller/BestSeller';
import SearchBar from 'components/SearchBar/SearchBar';
import SubscribeEmail from 'components/SubscribeEmail/SubscribeEmail';
import ServiceBanner from 'components/ServiceBanner/ServiceBanner';
import SummerSale from 'components/SummerSale/SummerSale';
import Product from '../components/PopularProduct/Product';
import Advertising from '../components/Advertising/Advertising';
import Banner from '../components/Banner/Banner';
import CustomerComment from '../components/Customercomment/CustomerComment';
import LastestNews from '../components/Lastest News/LastestNews';

function Home() {
  return (
    <div>
      <div>
        <SearchBar />
        <SummerSale />
      </div>
      <div className="container">
        <Advertising />
        <Product name="POPULAR PRODUCT" />
        <Banner />
        <BestSeller name="BEST SELLER" />
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
