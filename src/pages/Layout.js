// eslint-disable-next-line import/extensions
import React from 'react';

import Navigation from 'components/Navigation';
import Header from '../components/Header/Header';
import SearchBar from '../components/SearchBar/SearchBar';
import SummerSale from '../components/SummerSale/SummerSale';
import SubscribeEmail from '../components/Subscribe Email/SubscribeEmail';
import ServiceBanner from '../components/Service Banner/ServiceBanner';
import AboutUs from '../components/AboutUs/AboutUs';
import Copyright from '../components/Copyright/Copyright';

import classes from './Layout.module.css';

function Layout(props) {
  const { children } = props;
  return (
    <div>
      <Header />
      <div className={classes.main}>
        <SearchBar />
        <Navigation classes={classes} />
      </div>
      <SummerSale />
      <main className={classes.main}>{children}</main>
      <SubscribeEmail />
      <main className={classes.main}>
        <ServiceBanner />
      </main>
      <AboutUs />
      <Copyright />
    </div>
  );
}

export default Layout;
