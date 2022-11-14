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
      <Card className={classes.block_news}>
        <Card.Img variant="top" src={cardImg1} />
        <Card.Body>
          <Card.Title className="fw-bolder h6">
            SIMPLY TIPS FOR BEAUTY
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Posted by
            <span className={classes.comment_count}> admin - 2 Comments</span>
          </Card.Subtitle>
          <Card.Text>aaaa</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default LastestNews;
