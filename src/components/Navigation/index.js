import React, { useCallback } from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useGetCategories } from 'store/selectors/common';
import { VscThreeBars } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  searchResultProducts,
  shoplistSortProduct,
} from 'store/actions/common';
import classes from './navigation.module.css';

function Navigation() {
  const categories = useGetCategories();
  const dispatch = useDispatch();

  const handleCategory = useCallback(
    (id) => () => {
      dispatch(shoplistSortProduct({ id }));
      dispatch(searchResultProducts());
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  if (categories.length <= 0) {
    return <p>Loading...</p>;
  }

  const navClass = `${classes.nav_categories} nav-link`;

  return (
    <div className={classes.main}>
      <Navbar expand="xxl" className={classes.navbar}>
        <Container className={`${classes.containerNavbar} ps-1`}>
          <Navbar.Toggle
            className={classes.navbarToggle}
            aria-controls="offcanvasNavbar-expand-xs"
          >
            <VscThreeBars />
          </Navbar.Toggle>
          <Navbar.Offcanvas
            className={classes.offCanvas}
            id="basic-navbar-nav"
            placement="top"
          >
            <Nav className={classes.navbarNav}>
              <Link className={`${navClass}`} to="/">
                Home
              </Link>
              {categories &&
                categories.map((category) => (
                  <Nav.Item key={category._id}>
                    <Link
                      className={navClass}
                      to={`/category/${category.name}`}
                      onClick={handleCategory(category._id)}
                    >
                      {category.name}
                    </Link>
                  </Nav.Item>
                ))}
              <Link
                to="/category/all"
                className={navClass}
                onClick={handleCategory('all')}
              >
                ShopList
              </Link>
              <Link to="/about-us" className={navClass}>
                About
              </Link>
            </Nav>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
