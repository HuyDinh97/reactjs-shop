import SingleProduct from 'components/SingleProduct/SingleProduct';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Pagination, PaginationItem } from '@mui/material';

import { Link, useParams } from 'react-router-dom';
import classes from './ShopListContent.module.css';

function GridListDisplay({
  productEachPage,
  totalPage,
  id,
  productDisplay,
  ...dispayConfig
}) {
  const muiSelected = {
    '&.Mui-selected': {
      backgroundColor: '#eb3d32!important',
    },
    '&.Mui-disabled': {
      opacity: '0',
    },
  };
  const { page } = useParams();

  const [pageActive, setPageActive] = React.useState(parseInt(page, 10));
  const handleChange = (event, value) => {
    setPageActive(value);
  };
  return (
    <Row className="mt-5">
      {productEachPage &&
        productEachPage.map((popularProduct) => (
          <Col xl={productDisplay} className="mt-4" key={popularProduct._id}>
            <SingleProduct popularProduct={popularProduct} {...dispayConfig} />
          </Col>
        ))}
      <Col xs={12}>
        <div
          className={`${classes.pagination} d-flex justify-content-center mt-5`}
        >
          <Pagination
            page={pageActive}
            count={totalPage || 1}
            onChange={handleChange}
            renderItem={(item) => (
              <PaginationItem
                sx={muiSelected}
                component={Link}
                to={`/shop-list/id=${id}&page=${
                  item.page === 1 ? '1' : `${item.page}`
                }`}
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
