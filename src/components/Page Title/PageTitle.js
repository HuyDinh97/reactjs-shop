import React from 'react';
import classes from './PageTitle.module.css';

function PageTitle() {
  return (
    <div className="d-flex flex-column align-items-md-center gray-background mb">
      <h1 className={classes.page_title}>MY CART</h1>
      <p>Home / Shop / Cart</p>
    </div>
  );
}

export default PageTitle;
