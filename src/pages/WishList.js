import PageTitle from 'components/Page Title/PageTitle';
import SearchBar from 'components/SearchBar/SearchBar';
import SingleProduct from 'components/SingleProduct/SingleProduct';
import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { useGetWishList } from 'store/selectors/common';

function WishList() {
  const wishList = useGetWishList();
  return (
    <div>
      <SearchBar />
      <PageTitle pageTitle="WishList" pageLink="WishList" />
      <Container className="mt-4 border p-3">
        <Row>
          {wishList.length > 0 ? (
            wishList.map((prod) => (
              <Col key={prod._id} xl={3} md={6} xs={12}>
                <SingleProduct product={prod} />
              </Col>
            ))
          ) : (
            <p className="fw-bold text-center">Your wishlist is empty!</p>
          )}
        </Row>
      </Container>
    </div>
  );
}
export default WishList;
