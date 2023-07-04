/* eslint-disable react/jsx-one-expression-per-line */
import SearchBar from 'components/SearchBar/SearchBar';
import SingleProduct from 'components/SingleProduct/SingleProduct';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useGetPopularProduct } from 'store/selectors/common';

function SearchResult() {
  const { keyword } = useParams();
  const products = useGetPopularProduct();
  const regexSearch = new RegExp(`${keyword}`, 'i');
  console.log(keyword);
  return (
    <div>
      <SearchBar />
      <div>
        <p className="fw-semibold fs-1 text-center">Search for: {keyword}</p>
      </div>
      <Container className="mt-4 border p-3">
        <Row>
          {products ? (
            products?.map((prod) => {
              if (prod.name.match(regexSearch)) {
                return (
                  <Col xl={3} xs={12} key={prod._id}>
                    <SingleProduct product={prod} />
                  </Col>
                );
              }
              if (!keyword) {
                return (
                  <Col xl={3} xs={12} key={prod._id}>
                    <SingleProduct product={prod} />
                  </Col>
                );
              }
              return false;
            })
          ) : (
            <p className="fw-bold text-center">There is no item match!</p>
          )}
        </Row>
      </Container>
    </div>
  );
}
export default SearchResult;
