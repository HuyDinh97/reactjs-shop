/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/forbid-component-props */
/* eslint-disable react/forbid-dom-props */
import React, { useState, useCallback, useRef } from 'react';
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
import {
  useGetComments,
  useGetPopularProduct,
  useGetProductDetail,
  useGetUpdateQuantity,
} from 'store/selectors/common';
import TitleUnderline from 'components/PopularProduct/TitleUnderline';
import { useDispatch } from 'react-redux';
import { addComment, addProductToCart } from 'store/actions/common';
import { useParams } from 'react-router-dom';
import postComment from 'Hooks/postComment';

import cart from './img/cart-icon-1.png';

import classes from './ProductDetail.module.css';

function ProductDetail() {
  const quantityUpdate = useGetUpdateQuantity();
  const linkIMG = 'https://vnguyen.xyz/huy/day17/apis/';
  const priceCheck = 'd-none';
  const dispatch = useDispatch();

  const [img, setImg] = useState('no-repeat center');
  const changeIMGtop = () => {
    setImg('no-repeat top');
  };
  const changeIMGbot = () => {
    setImg('no-repeat bottom');
  };

  const param = useParams();
  const name = useRef('');
  const email = useRef('');
  const review = useRef('');

  const [key, setKey] = useState('description');
  const getComments = useGetComments();
  const getCommentsDetail = getComments.filter(
    (comment) => comment.product_id !== param.productId
  );
  // console.log(getCommentsDetail);

  const ActiveStyle = {
    background: '#eb3d32',
  };
  const inActiveStyle = {
    background: '#363f4e',
  };
  const productDetailData = useGetProductDetail();
  const relatedProduct = productDetailData.map((product) => product.category);
  const popularProductData = useGetPopularProduct();
  const relatedProductData = popularProductData.filter((product) =>
    product.category === relatedProduct[0] &&
    !param.productId.match(product._id)
      ? product
      : null
  );
  console.log(relatedProductData);

  const addProduct = useCallback(
    (productInCart) => () => {
      const data = {
        _id: productInCart._id,
        name: productInCart.name,
        price: productInCart.price,
        sales: productInCart.sales,
        thumb: productInCart.thumb,
        quantity: quantityUpdate[0],
      };
      dispatch(addProductToCart(data));
    },
    [dispatch, quantityUpdate]
  );

  const submitData = useCallback(() => {
    const commentData = {
      product_id: `${param.productId}`,
      comment: `${review.current.value}`,
      author: `${name.current.value}`,
      email: email.current.value,
      created_at: new Date().getTime() / 1000,
    };
    postComment(commentData);
    dispatch(addComment([commentData]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="my-5">
      <Container>
        {productDetailData &&
          productDetailData.map((product) => (
            <Row key={product._id}>
              <Col lg={5}>
                <div
                  className={classes.productDetailIMG}
                  style={{
                    background: `url(${linkIMG + product.thumb}) ${img}`,
                  }}
                />
                <div className="d-flex mt-3">
                  <button
                    type="button"
                    className="border-0 p-0"
                    onClick={changeIMGtop}
                  >
                    <div
                      className={`${classes.productDetailSmall}`}
                      style={{
                        background: `url(${
                          linkIMG + product.thumb
                        }) no-repeat top `,
                      }}
                    />
                  </button>
                  <button
                    type="button"
                    className="border-0 p-0 ms-2"
                    onClick={changeIMGbot}
                  >
                    <div
                      className={`${classes.productDetailSmall}`}
                      style={{
                        background: `url(${
                          linkIMG + product.thumb
                        }) no-repeat bottom `,
                      }}
                    />
                  </button>
                </div>
              </Col>
              <Col className="ps-4" lg={7}>
                <h2>{product.name}</h2>
                <div>
                  <span
                    className={`${
                      product.sales === 0 ? priceCheck : null
                    } fs-6 fw-semibold opacity-50 me-3`}
                  >
                    <s>$ {product.price}</s>
                  </span>
                  <span
                    className={`${classes.afterSalePriceColor} fs-4 fw-semibold`}
                  >
                    $ {product.afterSalesPriceDetail}
                  </span>
                </div>
                <div className="border-bottom py-4 fw-semibold opacity-50 fs-5">
                  asdasdasdasdasdasdasdasd
                </div>
                <div className="border-bottom py-5">
                  <div className="mb-2">
                    <span className="fw-semibold opacity-50 fs-5">
                      Availability:
                    </span>
                    <span
                      className={`${classes.afterSalePriceColor} fw-semibold fs-5 ms-1`}
                    >
                      {product.available}
                    </span>
                  </div>
                  <Row className="d-flex justify-content-between align-items-center">
                    <Col className="d-flex align-items-center">
                      <div className="fs-5 fw-semibold opacity-50 mb-2">
                        Quantity:
                      </div>
                      <div className="mx-2">
                        <QuantityButton
                          className="d-flex flex-row"
                          productId={product._id}
                          productQuantity={1}
                        />
                      </div>
                    </Col>
                    <Col className={`${classes.cartButtonCol} d-flex mt-2`}>
                      <button
                        className={`${classes.addToCartButton} d-flex align-items-center rounded-pill p-2 px-4 border-0`}
                        type="button"
                        onClick={addProduct(product)}
                      >
                        <img src={cart} alt="cart" />
                        <div className="d-flex align-items-center mx-2 fw-semibold text-white fs-6">
                          Add to Cart
                        </div>
                      </button>
                    </Col>
                  </Row>
                </div>
                <Row className={`${classes.socialNetworkIcon} fs-6 my-4`}>
                  <Col lg={4} xs={12} className="fs-2 d-flex pb-2">
                    <FaHeart
                      className={`${classes.leftIcon} fs-2 p-2 rounded-pill w-auto h-auto`}
                    />
                    <FaSyncAlt
                      className={`${classes.leftIcon} ${classes.hiddenIcon} fs-2 p-2 rounded-pill w-auto h-auto`}
                    />
                  </Col>
                  <Col
                    lg={8}
                    xs={12}
                    className={`${classes.rightIcon} d-flex align-items-center`}
                  >
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
          ))}
        <Tab.Container
          defaultActiveKey="description"
          activeKey={key}
          // eslint-disable-next-line @typescript-eslint/no-shadow
          onSelect={(key) => setKey(key)}
        >
          <Row className="mt-5 mb-1">
            <Col lg={2} xs={12}>
              <Nav
                variant="pills"
                className={`${classes.descriptionActive} flex-row`}
              >
                <Nav.Item
                  className={`${classes.description} ms-0 w-100 text-center`}
                >
                  <Nav.Link
                    eventKey="description"
                    className="fw-semibold py-3 rounded-0 mb-1"
                    style={key === 'description' ? ActiveStyle : inActiveStyle}
                  >
                    DESCRIPTION
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col lg={0} xs={12} className={classes.additionalInfo}>
              <Nav
                variant="pills"
                className={`${classes.descriptionActive} flex-row`}
              >
                <Nav.Item
                  className={`${classes.description} ms-0 w-100 text-center`}
                >
                  <Nav.Link
                    eventKey="additionalInfo"
                    className="fw-semibold py-3 rounded-0 mb-1"
                    style={
                      key === 'additionalInfo' ? ActiveStyle : inActiveStyle
                    }
                  >
                    ADDITIONAL INFORMATION
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col lg={2} xs={12}>
              <Nav variant="pills" className="flex-row">
                <Nav.Item
                  className={`${classes.description} text-decoration-none w-100 text-center`}
                >
                  <Nav.Link
                    eventKey="review"
                    style={key === 'review' ? ActiveStyle : inActiveStyle}
                    className="fw-semibold px-3 py-3 rounded-0"
                  >
                    REVIEWS ({getCommentsDetail.length})
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
          <div className="border p-4 px-5">
            <Tab.Content>
              <Tab.Pane eventKey="description">
                <div className="fw-semibold mb-2 fs-5">DESCRIPTION</div>
              </Tab.Pane>
              <Tab.Pane eventKey="review">
                <Row>
                  <Col xs={12}>
                    <div className="fw-semibold mb-2 fs-5">
                      CUSTOMER REVIEWS
                    </div>
                    {getCommentsDetail &&
                      getCommentsDetail.map((comment, index) => (
                        <div
                          key={comment.comment + index}
                          className="d-flex opacity-75 py-3 border-bottom"
                        >
                          <div>
                            <FaUserCircle fill="gray" className="fs-1" />
                          </div>
                          <div className="ms-4  ">
                            <div className="fw-semibold fs-5">
                              {comment.author}
                            </div>
                            <div
                              className={`${classes.reviewTime} fw-semibold`}
                            >
                              {comment.created_at}
                            </div>
                            <div className="fw-semibold fs-5">
                              {comment.comment}
                            </div>
                          </div>
                        </div>
                      ))}
                  </Col>
                  <Col className="my-2">
                    <div className="fw-semibold fs-5">ADD A REVIEW</div>
                    <form id="review">
                      <Row className="my-3">
                        <Col lg={6}>
                          <input
                            type="text"
                            className="w-100 p-2 px-3 mb-2 border fw-semibold"
                            name="name"
                            placeholder="Enter Your Name"
                            ref={name}
                          />
                        </Col>
                        <Col lg={6}>
                          <input
                            type="email"
                            className="w-100 p-2 px-3 border fw-semibold"
                            name="email"
                            placeholder="Enter Your Email"
                            ref={email}
                          />
                        </Col>
                        <Col className="mt-4" xs={12}>
                          <textarea
                            type="text"
                            className={`${classes.reviewContent} w-100 border fw-semibold`}
                            name="review"
                            placeholder="Enter Your Review"
                            ref={review}
                          />
                        </Col>
                        <Col className="mt-4">
                          <input
                            className={`${classes.submitButton} rounded-pill border-0 p-3 fw-semibold px-4 fs-5`}
                            type="button"
                            form="review"
                            onClick={submitData}
                            value="Submit"
                          />
                        </Col>
                      </Row>
                    </form>
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
            {relatedProductData &&
              relatedProductData.map((popularProduct) => (
                <Col lg={3} xs={6} key={popularProduct._id}>
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
