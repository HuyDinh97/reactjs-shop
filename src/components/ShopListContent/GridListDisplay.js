import SingleProduct from 'components/SingleProduct/SingleProduct';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Pagination, PaginationItem } from '@mui/material';

import { Link, useParams } from 'react-router-dom';
import classes from './ShopListContent.module.css';

function GridListDisplay({
  productEachPage,
  productDisplay,
  imgProductCol,
  detailProductCol,
  rowDisplayCheck,
  totalPage,
  id,
}) {
  const { page } = useParams();
  const muiSelected = {
    '&.Mui-selected': {
      backgroundColor: '#eb3d32!important',
    },
    '&.Mui-disabled': {
      opacity: '0',
    },
  };

  return (
    <Row className="mt-5">
      {productEachPage &&
        productEachPage.map((popularProduct) => (
          <Col xl={productDisplay} className="mt-4" key={popularProduct._id}>
            <SingleProduct
              popularProduct={popularProduct}
              imgProductCol={imgProductCol}
              detailProductCol={detailProductCol}
              rowDisplay={rowDisplayCheck}
            />
          </Col>
        ))}
      <Col xs={12}>
        <div
          className={`${classes.pagination} d-flex justify-content-center mt-5`}
        >
          <Pagination
            count={totalPage || 1}
            renderItem={(item) => (
              <PaginationItem
                component={Link}
                selected
                to={`/shop-list/id=${id}&page=${
                  item.page === 1 ? '1' : `${item.page}`
                }`}
                sx={muiSelected}
                {...item}
              />
            )}
          />
        </div>
      </Col>
    </Row>
  );
}

export default GridListDisplay;
