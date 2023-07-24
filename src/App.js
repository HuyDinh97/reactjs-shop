import AboutUs from 'pages/AboutUs';
import Home from 'pages/Home';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MyCart from 'pages/MyCart';
import Login from 'pages/LoginPage';
import useFetchHome from 'Hooks/useFetchHome';
import useFetchCategory from 'Hooks/useFetchCategory';
import useFetchPopularProduct from 'Hooks/useFetchPopularProduct';
import useFetchBestSeller from 'Hooks/useFetchBestSellerProduct';
import ProductDetailPage from 'pages/ProductDetailPage';
import ShopList from 'pages/ShopList';
import MyAccount from 'pages/MyAccount';
import SearchResult from 'pages/SearchResultPage';
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
        <Route path="/category/:id" element={<ShopList />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="search" element={<SearchResult />} />
        <Route
          path="/product-detail/:productId"
          element={<ProductDetailPage />}
        />
      </Routes>
    </Layout>
  );
}

export default App;
