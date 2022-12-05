/* eslint-disable array-callback-return */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';

import classes from './Categories.module.css';

function Categories() {
  const [categories, setCategories] = useState([]);
  // eslint-disable-next-line no-undef
  useEffect(() => {
    axios
      .get('https://vnguyen.xyz/huy/day17/apis/index.php?type=categories')
      .then((res) => {
        console.log(res);
        // eslint-disable-next-line no-unused-expressions
        setCategories(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // eslint-disable-next-line array-callback-return
  return (
    <Nav defaultActiveKey="/home" as="ul">
      {categories.map((category) => (
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
