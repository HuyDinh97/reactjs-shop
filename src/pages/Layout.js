// eslint-disable-next-line import/extensions
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import AboutUs from '../components/AboutUs/AboutUs';
import Copyright from '../components/Copyright/Copyright';

function Layout(props) {
  const { children } = props;
  return (
    <div>
      <Header />
      <div>{children}</div>
      <AboutUs />
      <Copyright />
    </div>
  );
}

export default Layout;
