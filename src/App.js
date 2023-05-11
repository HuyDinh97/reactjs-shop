import useFetchCategory from 'Hooks/useFetchCategory';
import useFetchPopularProduct from 'Hooks/useFetchPopularProduct';
import useFetchBestSeller from 'Hooks/useFetchBestSellerProduct';
import AboutUs from 'pages/AboutUs';
import Home from 'pages/Home';
import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import MyCart from 'pages/MyCart';
import Login from 'pages/LoginPage';
import useFetchHome from 'Hooks/useFetchHome';
import ProductDetailPage from 'pages/ProductDetailPage';
import Layout from './pages/Layout';

function App() {
  useFetchCategory();
  useFetchPopularProduct();
  useFetchBestSeller();
  useFetchHome();
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/my-cart" element={<MyCart />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/product-detail/:productId"
          element={<ProductDetailPage />}
        />
      </Routes>
    </Layout>
  );
}

export default App;
