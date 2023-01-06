import React from 'react';
import Card from 'react-bootstrap/Card';
import TitleUnderline from '../Popular Product/TitleUnderline';
import cardImg1 from './image/news-img-1.jpg';
import cardImg2 from './image/news-img-2.jpg';
import cardImg3 from './image/news-img-3.jpg';

import classes from './LastestNews.module.css';

function LastestNews() {
  return (
    <div className={classes.mg_4}>
      <TitleUnderline name="LASTEST NEWS" />
      <div className="d-flex justify-content-between mt-3">
        <Card className={classes.block_news}>
          <Card.Img variant="top" src={cardImg1} />
          <Card.Body>
            <Card.Title className="fw-bolder h5 mb-3">
              SIMPLY TIPS FOR BEAUTY
            </Card.Title>
            <Card.Subtitle className="mb-3 text-muted h5">
              Posted by
              <span className={classes.comment_count}> admin - 2 Comments</span>
            </Card.Subtitle>
            <Card.Text className={classes.text_overflow}>
              Bootstrap includes a few general use CSS transitions that can be
              applied to a number of components.
            </Card.Text>
            <a className={classes.LastestNewsBtn} href="/">
              READ MORE
            </a>
          </Card.Body>
        </Card>
        <Card className={classes.block_news}>
          <Card.Img variant="top" src={cardImg2} />
          <Card.Body>
            <Card.Title className="fw-bolder h5 mb-3">
              SIMPLY TIPS FOR BEAUTY
            </Card.Title>
            <Card.Subtitle className="mb-3 text-muted h5">
              Posted by
              <span className={classes.comment_count}> admin - 2 Comments</span>
            </Card.Subtitle>
            <Card.Text className={classes.text_overflow}>
              Bootstrap includes a few general use CSS transitions that can be
              applied to a number of components.
            </Card.Text>
            <a className={classes.LastestNewsBtn} href="/">
              READ MORE
            </a>
          </Card.Body>
        </Card>
        <Card className={classes.block_news}>
          <Card.Img variant="top" src={cardImg3} />
          <Card.Body>
            <Card.Title className="fw-bolder h5 mb-3">
              SIMPLY TIPS FOR BEAUTY
            </Card.Title>
            <Card.Subtitle className="mb-3 text-muted h5">
              Posted by
              <span className={classes.comment_count}> admin - 2 Comments</span>
            </Card.Subtitle>
            <Card.Text className={classes.text_overflow}>
              Bootstrap includes a few general use CSS transitions that can be
              applied to a number of components.
            </Card.Text>
            <a className={classes.LastestNewsBtn} href="/">
              READ MORE
            </a>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default LastestNews;
