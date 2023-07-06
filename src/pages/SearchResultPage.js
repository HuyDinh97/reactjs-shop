/* eslint-disable react/jsx-one-expression-per-line */
import SearchBar from 'components/SearchBar/SearchBar';
import ShopListContent from 'components/ShopListContent/ShopListContent';
import SingleProduct from 'components/SingleProduct/SingleProduct';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function SearchResult() {
  const { keyword } = useParams();
  return (
    <div>
      <SearchBar />
      <div>
        <p className="fw-semibold fs-1 text-center">Search for: {keyword}</p>
      </div>
      <ShopListContent />
    </div>
  );
}
export default SearchResult;
