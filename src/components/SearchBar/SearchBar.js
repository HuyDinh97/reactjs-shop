/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useCallback, useRef, useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GrFormClose } from 'react-icons/gr';
import { AiOutlineSearch } from 'react-icons/ai';
import { useGetMyCart } from 'store/selectors/common';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteProductInCart } from 'store/actions/common';
import Navigation from 'components/Navigation';
import logo from './logo/logo.png';
import cartIcon from './logo/cart-icon.png';
import classes from './SearchBar.module.css';

function SearchBar() {
  const { products: productInCart, totalCost } = useGetMyCart();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteProduct = useCallback(
    (id) => () => {
      dispatch(deleteProductInCart(id));
    },
    [dispatch]
  );
  const searchInput = useRef();
  const [keyword, setKeyword] = useState('');
  // const keyword = `/search/${searchInput?.current?.value}`;

  const searchEnterKey = (event) => {
    if (event.key === "Enter") {
      navigate(`search/${event.target.value}`);
    }
  };

  const handleSearch = (e) => {
    searchInput.current = e.target.value;
    setKeyword(searchInput.current);
  }

  const linkIMG = 'https://vnguyen.xyz/huy/day17/apis/';
  return (
    <div>
      <div className={`${classes.searchBar} container py-3`} data-testid="dropdownItem-element">
        <Container>
          <Row xxl={3} xl={3} xs={2} className="d-flex align-items-center">
            <Col xl={12} sm={12} xs={12} className={classes.logo}>
              <Link to="/">
                <img src={logo} alt="Logo" />
              </Link>
            </Col>
            <Col xl={6} className={classes.searchSection}>
              <div className="d-flex">
                <input
                  className={classes.search_Box}
                  data-testid="search-input"
                  placeholder="Search Product..."
                  ref={searchInput}
                  onKeyDown={searchEnterKey}
                  onChange={handleSearch}
                />
                <Link to={`search/${keyword}`} className={`${classes.search_Btn} d-flex justify-content-center align-items-center text-decoration-none`}>
                  Search
                </Link>
              </div>
            </Col>
            <Col xl={10} xs={8} className={classes.cartDropdown}>
              <div>
                <Dropdown className={classes.cart_button}>
                  <Dropdown.Toggle
                    className={classes.cart_toggle}
                    variant=""
                    id="dropdown-basic"
                  >
                    <img src={cartIcon} alt="icon" />
                    <Badge className={classes.badge} bg="">
                      {productInCart?.length > 0 ? productInCart.length : 0}
                    </Badge>
                    <span className={classes.cart_total_price}>${totalCost}</span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className={classes.dropdown_menu}>
                    <div>
                      {productInCart?.length > 0 ? (
                        productInCart.map((product) => (
                          <div key={product._id}>
                            <ul className={classes.dropdown_menu_product}>
                              <li className="d-flex">
                                <span>
                                  <img src={linkIMG + product.thumb} alt="1" />
                                </span>
                                <span>
                                  <Link className={`${classes.productName} fw-semibold text-decoration-none`} to={`/product-detail/${product._id}`}>
                                    {product.name}
                                  </Link>
                                  <div>Quantiy: {product.quantity}</div>
                                  <div className={classes.price_color}>
                                    $
                                    {product.afterSalesPrice.toFixed(2)}
                                  </div>
                                </span>
                                <span className={classes.close_button}>
                                  <button type="button" onClick={deleteProduct(product._id)}>
                                    <GrFormClose />
                                  </button>
                                </span>
                              </li>
                            </ul>
                          </div>
                        ))
                      ) : (
                        <div>
                          <ul className={classes.dropdown_menu_product}>
                            <li className="d-flex">No items in cart!</li>
                          </ul>
                        </div>
                      )}
                      <div className={classes.space_between}>
                        <span>Total</span>
                        <span className={classes.cart_total_price}>${totalCost}</span>
                      </div>
                    </div>
                    <div className={classes.center}>
                      <button type="button" className={classes.view_cart_button}>
                        <Link to="/my-cart">View Cart</Link>
                      </button>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Col>
            <Col xl={1} xs={2} className={`${classes.mobileSearch} p-0`}>
              <Navbar className="d-flex flex-nowrap" expand="xs">
                <Container className="flex-row-reverse p-0">
                  <Navbar.Toggle
                    className={classes.navbarToggle}
                    aria-controls="search"
                  >
                    <AiOutlineSearch />
                  </Navbar.Toggle>
                  <Navbar.Collapse>
                    <div className="d-flex flex-column">
                      <input
                        className={classes.search_Box}
                        placeholder="Search Product..."
                      />
                    </div>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </Col>
            <Col xl={1} xs={2} className={`${classes.navigation} p-0`}>
              <Navigation />
            </Col>
          </Row>
        </Container>
      </div>
      <div className={classes.secondNavigation}>
        <Navigation />
      </div>
    </div>
  );
}

export default SearchBar;
