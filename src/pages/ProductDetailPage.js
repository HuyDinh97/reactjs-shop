import PageTitle from 'components/Page Title/PageTitle';
import ProductDetail from 'components/ProductDetail/ProductDetail';
import SearchBar from 'components/SearchBar/SearchBar';
import React from 'react';

function ProductDetailPage() {
  return (
    <div>
      <SearchBar />
      <PageTitle pageTitle="product detail" pageLink="Product Detail" />
      <div className="container">
        <ProductDetail />
      </div>
    </div>
  );
}
export default ProductDetailPage;
