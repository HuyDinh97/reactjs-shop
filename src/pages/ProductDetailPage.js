import useFetchComment from 'Hooks/useFetchComment';
import PageTitle from 'components/Page Title/PageTitle';
import ProductDetail from 'components/ProductDetail/ProductDetail';
import SearchBar from 'components/SearchBar/SearchBar';
import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetailPage() {
  const { productId } = useParams();
  useFetchComment(productId);

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
