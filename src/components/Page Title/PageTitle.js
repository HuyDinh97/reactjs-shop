/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import classes from './PageTitle.module.css';

function PageTitle({ pageTitle, pageLink }) {
  return (
    <div className={`${classes.pageTitle} py-5`}>
      <h1 className={`${classes.pageTitleColor} text-uppercase`}>
        {pageTitle}
      </h1>
      <p className="fw-semibold">Home / Shop / {pageLink}</p>
    </div>
  );
}

export default PageTitle;
