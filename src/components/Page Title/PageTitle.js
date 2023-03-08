import React from 'react';
import classes from './PageTitle.module.css';

function PageTitle() {
  return (
    <div className={classes.pageTitle}>
      <h1 className={classes.pageTitleColor}>MY CART</h1>
      <p>Home / Shop / Cart</p>
    </div>
  );
}

export default PageTitle;
