/* eslint-disable react/forbid-component-props */
/* eslint-disable react/forbid-dom-props */
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import QuantityButton from 'components/QuantityButton/QuantityButton';
import {
  FaHeart,
  FaSyncAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaGooglePlusG,
  FaUserCircle,
} from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';

import SingleProduct from 'components/SingleProduct/SingleProduct';
import { useGetBestSeller } from 'store/selectors/common';
import cart from './img/cart-icon-1.png';
import classes from './ProductDetail.module.css';
import TitleUnderline from 'components/PopularProduct/TitleUnderline';

function ProductDetail() {
  const testRelatedProduct = useGetBestSeller();
  const linkIMG =
    'http://c3kienthuyhp.edu.vn/wp-content/uploads/2022/12/1672384705_929_999-Anh-Gai-Xinh-Viet-Nam-Hot-Girl-Cute-De.jpg';

  const changeIMG = () => {
    console.log('sss');
  };

  const [key, setKey] = useState('description');
  const ActiveStyle = {
    background: '#eb3d32',
  };
  const inActiveStyle = {
    background: '#363f4e',
  };

  return (
    <div className="my-5">
      <Container>
        <Row>
          <Col lg={5}>
            <div
              className={classes.productDetailIMG}
              style={{
                background: `url(${linkIMG}) no-repeat center`,
              }}
            />
            <div className="d-flex mt-3">
              <button
                type="button"
                className="border-0 p-0"
                onClick={changeIMG}
              >
                <div
                  className={`${classes.productDetailSmall}`}
                  style={{
                    background: `url(${linkIMG}) no-repeat top `,
                  }}
                />
              </button>
              <button
                type="button"
                className="border-0 p-0 ms-2"
                onClick={changeIMG}
              >
                <div
                  className={`${classes.productDetailSmall} ms-3`}
                  style={{
                    background: `url(${linkIMG}) no-repeat bottom `,
                  }}
                />
              </button>
            </div>
          </Col>
          <Col className="ps-4" lg={7}>
            <h2>Product</h2>
            <div>
              <span className="fs-6 fw-semibold opacity-50">
                <s>$ 95.00</s>
              </span>
              <span
                className={`${classes.afterSalePriceColor} fs-4 ms-3 fw-semibold`}
              >
                $ 81.00
              </span>
            </div>
            <div className="border-bottom py-4 fw-semibold opacity-50 fs-5">
              asdasdasdasdasdasdasdasd
            </div>
            <div className="border-bottom py-5">
              <div>
                <span className="fw-semibold opacity-50 fs-5">
                  Availability:
                </span>
                <span
                  className={`${classes.afterSalePriceColor} fw-semibold fs-5 ms-1`}
                >
                  In Stock
                </span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <div className="fs-5 fw-semibold opacity-50">Quantity:</div>
                  <div className="mx-2">
                    <QuantityButton className="d-flex flex-row" />
                  </div>
                </div>
                <div>
                  <button
                    className={`${classes.addToCartButton} d-flex align-items-center rounded-pill p-2 px-4 border-0`}
                    type="button"
                  >
                    <img src={cart} alt="cart" />
                    <div className="d-flex align-items-center mx-2 fw-semibold text-white fs-6">
                      Add to Cart
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <Row className={`${classes.socialNetworkIcon} fs-6 my-4`}>
              <Col className="fs-1 d-flex">
                <FaHeart
                  className={`${classes.leftIcon} fs-1 p-2 rounded-pill`}
                />
                <FaSyncAlt
                  className={`${classes.leftIcon} fs-1 p-2 rounded-pill`}
                />
              </Col>
              <Col className="d-flex justify-content-end align-items-center">
                <span>
                  <FaFacebookF />
                </span>
                <span>
                  <AiOutlineTwitter />
                </span>
                <span>
                  <FaLinkedinIn />
                </span>
                <span>
                  <FaPinterestP />
                </span>
                <span>
                  <FaGooglePlusG />
                </span>
              </Col>
            </Row>
          </Col>
        </Row>
        <Tab.Container
          defaultActiveKey="description"
          activeKey={key}
          // eslint-disable-next-line @typescript-eslint/no-shadow
          onSelect={(key) => setKey(key)}
        >
          <Row className="mt-5">
            <Col lg={1} xs={12}>
              <Nav
                variant="pills"
                className={`${classes.descriptionActive} flex-row`}
              >
                <Nav.Item className={`${classes.description} m-2 ms-0`}>
                  <Nav.Link
                    eventKey="description"
                    className="fw-semibold py-3"
                    style={key === 'description' ? ActiveStyle : inActiveStyle}
                  >
                    DESCRIPTION
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col lg={2} xs={12} className="ms-4">
              <Nav variant="pills" className="flex-row">
                <Nav.Item
                  className={`${classes.description} text-decoration-none m-2`}
                >
                  <Nav.Link
                    eventKey="review"
                    style={key === 'review' ? ActiveStyle : inActiveStyle}
                    className="fw-semibold px-3 py-3"
                  >
                    REVIEWS
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
          <div className="border p-4">
            <Tab.Content>
              <Tab.Pane eventKey="description">
                <p>description</p>
              </Tab.Pane>
              <Tab.Pane eventKey="review">
                <Row>
                  <Col xs={12}>
                    <div className="fw-semibold mb-2 fs-5">
                      CUSTOMER REVIEWS
                    </div>
                    <div className="d-flex opacity-75 py-3 border-bottom">
                      <div>
                        <FaUserCircle fill="gray" className="fs-1" />
                      </div>
                      <div className="ms-4  ">
                        <div className="fw-semibold fs-5">admin</div>
                        <div className={`${classes.reviewTime} fw-semibold`}>
                          Sep 17th
                        </div>
                        <div className="fw-semibold fs-5">helpdesk 24/7</div>
                      </div>
                    </div>
                  </Col>
                  <Col className="my-2">
                    <div className="fw-semibold fs-5">ADD A REVIEW</div>
                    <Row className="my-3">
                      <Col lg={6}>
                        <input
                          type="text"
                          className="w-100 p-2 px-3 border fw-semibold"
                          placeholder="Enter Your Name"
                        />
                      </Col>
                      <Col lg={6}>
                        <input
                          type="text"
                          className="w-100 p-2 px-3 border fw-semibold"
                          placeholder="Enter Your Email"
                        />
                      </Col>
                      <Col className="mt-4" xs={12}>
                        <textarea
                          type="text"
                          className={`${classes.reviewContent} w-100 border fw-semibold`}
                          placeholder="Enter Your Review"
                        />
                      </Col>
                      <Col className="mt-4">
                        <button
                          className={`${classes.submitButton} rounded-pill border-0 p-3 fw-semibold px-4 fs-5`}
                          type="button"
                        >
                          Submit
                        </button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Tab.Pane>
            </Tab.Content>
          </div>
        </Tab.Container>
        <div className={classes.relatedProduct}>
          <div className="fw-bold fs-2 mb-5">
            <TitleUnderline name="RELATED PRODUCTS" position="left" />
          </div>
          <Row>
            {testRelatedProduct &&
              testRelatedProduct.map((popularProduct) => (
                <Col lg={3} xs={12} key={popularProduct._id}>
                  <SingleProduct popularProduct={popularProduct} />
                </Col>
              ))}
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default ProductDetail;
