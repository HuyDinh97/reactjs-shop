import useFetchCategory from 'Hooks/useFetchCategory';
import useFetchPopularProduct from 'Hooks/useFetchPopularProduct';
import useFetchBestSeller from 'Hooks/useFetchBestSellerProduct';
import AboutUs from 'pages/AboutUs';
import Home from 'pages/Home';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MyCart from 'pages/MyCart';
import Login from 'pages/LoginPage';
import useFetchHome from 'Hooks/useFetchHome';
import ProductDetailPage from 'pages/ProductDetailPage';
import CategoryPage from 'pages/CategoryPage';
import WishList from 'pages/WishList';
import SearchResult from 'pages/SearchResult';
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
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search/:keyword" element={<SearchResult />} />
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
