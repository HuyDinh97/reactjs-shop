import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useGetCategories } from 'store/selectors/common';
import classes from './navigation.module.css';

function Navigation() {
  const categories = useGetCategories();

  if (categories.length <= 0) {
    return <p>Loading...</p>;
  }

  const navClass = `${classes.nav_categories} nav-link`;

  return (
    <div className={classes.main}>
      <Navbar expand="xxl" className={classes.navbar}>
        <Container className={classes.containerNavbar}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={classes.navbarNav}>
              <Nav.Link className={navClass} to="/">
                Home
              </Nav.Link>
              {categories &&
                categories.map((category) => (
                  <Nav.Item key={category._id} as="li">
                    <Nav.Link className={classes.nav_categories} href="/">
                      {category.name}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              <Nav.Link to="/about-us" className={navClass}>
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
