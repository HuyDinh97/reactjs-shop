import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { useGetCategories } from 'store/selectors/common';

function Navigation(props) {
  const categories = useGetCategories();

  if (categories.length <= 0) {
    return <p>Loading...</p>;
  }

  const { classes } = props;
  const navClass = `${classes.nav_categories} nav-link`;

  return (
    <Nav defaultActiveKey="/home" as="ul" data-testid="category-element">
      <Nav.Item>
        <Link to="/" className={navClass}>
          Home
        </Link>
      </Nav.Item>
      {categories &&
        categories.map((category) => (
          <Nav.Item key={category._id} as="li">
            <Nav.Link className={classes.nav_categories} href="/">
              {category.name}
            </Nav.Link>
          </Nav.Item>
        ))}
      <Link to="/about-us" className={navClass}>
        About
      </Link>
    </Nav>
  );
}

export default Navigation;
