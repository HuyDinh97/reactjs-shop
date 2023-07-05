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
import CategoryPage from 'pages/CategoryPage';
import ShopList from 'pages/ShopList';
import MyAccount from 'pages/MyAccount';
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
        <Route path="/shop-list/:id" element={<ShopList />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route
          path="/product-detail/:productId"
          element={<ProductDetailPage />}
        />
        <Route path="/categorypage/:category" element={<CategoryPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
