import React from 'react';
import classes from './PageTitle.module.css';

function PageTitle() {
  return (
    <div className={classes.PageTitle}>
      <h1 className={classes.page_title}>MY CART</h1>
      <p>Home / Shop / Cart</p>
    </div>
  );
}

export default PageTitle;
