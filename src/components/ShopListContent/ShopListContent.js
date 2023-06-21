/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useCallback } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { VscThreeBars } from 'react-icons/vsc';

import Form from 'react-bootstrap/Form';

import {
  useGetPopularProduct,
  useGetRecentProduct,
  useGetShopListSortProduct,
} from 'store/selectors/common';
import { useParams } from 'react-router-dom';
import SelectionBlock from './SelectionBlock';
import PriceFilter from './PriceFilter';
import RecentProduct from './RecentProduct';

import classes from './ShopListContent.module.css';
import { categoryChange, colorChange, optionSelected } from './SimpleCount';
import GridListDisplay from './GridListDisplay';

function ShopListContent() {
  const { id: idCategory, page } = useParams();
  const popularProducts = useGetPopularProduct();
  const shoplistSortProduct = useGetShopListSortProduct();
  const productFilterDefault =
    idCategory === 'all'
      ? popularProducts
      : popularProducts?.filter(
          (prod) => prod.category.toString() === idCategory
        );
  const sortedProduct = shoplistSortProduct || productFilterDefault;
  const recentProduct = useGetRecentProduct();
  console.log('productFilterDefault', productFilterDefault);

  const [option, setOption] = useState();

  const productsDisplayGrid = {
    productDisplay: 4,
    imgProductCol: 12,
    detailProductCol: 12,
    pageSize: 9,
    rowDisplayCheck: false,
    displayActive: 'grid',
  };

  const [dispayConfig, setDisplayConfig] = useState(productsDisplayGrid);

  const gridDisplay = useCallback(() => {
    setDisplayConfig(productsDisplayGrid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const rowDisplay = useCallback(() => {
    setDisplayConfig({
      productDisplay: 12,
      imgProductCol: 4,
      detailProductCol: 8,
      pageSize: 6,
      rowDisplayCheck: true,
      displayActive: 'row',
    });
  }, []);
  const categoriesSelection = categoryChange;
  const colorSelection = colorChange;
  const OptionSelectedData = optionSelected(option, sortedProduct);
  const dataSelected = OptionSelectedData || popularProducts;

  const itemStart = (page - 1) * dispayConfig.pageSize;
  const itemEnd = page * dispayConfig.pageSize;
  const productEachPage = dataSelected?.slice(itemStart, itemEnd);
  const itemEndCheck =
    itemEnd < dataSelected?.length ? itemEnd : dataSelected?.length;
  // eslint-disable-next-line no-unsafe-optional-chaining
  const totalPage = Math.ceil(dataSelected?.length / dispayConfig.pageSize);

  return (
    <div className="my-5">
      <Container>
        <Row>
          <Col md={3} className={classes.shopListCategory}>
            <SelectionBlock title="CATEGORY" selection={categoriesSelection} />
            <PriceFilter />
            <SelectionBlock title="COLOR" selection={colorSelection} />
            <RecentProduct recentProduct={recentProduct} />
          </Col>
          <Col md={9} xs={12}>
            <Row className="d-flex align-items-center">
              <Col className={classes.centerDisplay} xl={7} xs={12}>
                <div className={`${classes.formSelect} w-50`}>
                  <Form.Select
                    onChange={(e) => setOption(e.target.value)}
                    className={`${classes.textGreyColor} form-select`}
                    aria-label="Default select example"
                  >
                    <option>Default sorting</option>
                    <option value="Bestseller">Best seller</option>
                    <option value="Popular">Popular</option>
                    <option value="Latest">Latest</option>
                    <option value="PriceLow">Price: Low -{`>`} High</option>
                    <option value="PriceHigh">Price: High -{`>`} Low</option>
                  </Form.Select>
                </div>
              </Col>
              <Col
                xl={4}
                md={6}
                xs={12}
                className={`${classes.showingResult} d-flex align-items-center py-2 px-0`}
              >
                <div className={`${classes.textGreyColor}`}>
                  Showing {itemStart + 1}-{itemEndCheck} of{' '}
                  {dataSelected?.length} results
                </div>
              </Col>
              <Col xl={1} md={6} xs={12}>
                <div
                  className={`${classes.sortButton} ${classes.showingResult}  d-flex`}
                >
                  <button
                    type="button"
                    className={`${classes.sortIcon} ${
                      dispayConfig.displayActive === 'row' ? classes.active : ''
                    } fs-3 p-1 me-1 d-flex align-items-center border-0`}
                    onClick={rowDisplay}
                  >
                    <VscThreeBars />
                  </button>
                  <button
                    type="button"
                    className={`${classes.sortIcon} ${
                      dispayConfig.displayActive === 'grid'
                        ? classes.active
                        : ''
                    } fs-5 p-1 px-2 me-1 d-flex align-items-center border-0`}
                    onClick={gridDisplay}
                  >
                    <BsFillGrid3X3GapFill />
                  </button>
                </div>
              </Col>
              <Col sm={12}>
                <GridListDisplay
                  productEachPage={productEachPage}
                  totalPage={totalPage}
                  id={idCategory}
                  {...dispayConfig}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ShopListContent;
