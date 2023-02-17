import useFetchCategory from 'Hooks/useFetchCategory';
import useFetchPopularProduct from 'Hooks/useFetchPopularProduct';
import useFetchTestimonial from 'Hooks/useFetchTestimotional';
import useFetchBestSeller from 'Hooks/useFetchBestSellerProduct';
import AboutUs from 'pages/AboutUs';
import Home from 'pages/Home';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MyCart from 'pages/MyCart';
import useFetchMyCart from 'Hooks/useFetchMyCart';
import Layout from './pages/Layout';

function App() {
  useFetchCategory();
  useFetchPopularProduct();
  useFetchTestimonial();
  useFetchBestSeller();
  useFetchMyCart();
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/my-cart" element={<MyCart />} />
      </Routes>
    </Layout>
  );
}

export default App;
