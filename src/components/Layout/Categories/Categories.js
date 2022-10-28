import React from 'react';
import Nav from 'react-bootstrap/Nav';

import classes from './Categories.module.css';

function Categories() {
  return (
    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link className={classes.nav_categories} href="/home">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link className={classes.nav_categories} eventKey="link-1">
          Fashion Sneaker
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link className={classes.nav_categories} eventKey="link-2">
          Jackets
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Categories;
