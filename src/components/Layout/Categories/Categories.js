import React from 'react';
import Nav from 'react-bootstrap/Nav';
import useFetchCategory from 'Hooks/useFetchCategory';

import classes from './Categories.module.css';

function Categories() {
  const { categories, isSuccess } = useFetchCategory(); // Destructuring

  // Safe code: handle if API error in response
  if (isSuccess === false) {
    return <p data-testid="error-fetch">Error, cannot fetch API</p>;
  }

  if (!categories) {
    return <p>Loading...</p>;
  }

  return (
    <Nav defaultActiveKey="/home" as="ul" data-testid="category-element">
      {categories &&
        categories.map((category) => (
          <Nav.Item key={category._id} as="li">
            <Nav.Link className={classes.nav_categories} href="/">
              {category.name}
            </Nav.Link>
          </Nav.Item>
        ))}
    </Nav>
  );
}

export default Categories;
