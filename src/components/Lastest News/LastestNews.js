import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TitleUnderline from '../PopularProduct/TitleUnderline';
import cardImg1 from './image/news-img-1.jpg';
import cardImg2 from './image/news-img-2.jpg';
import cardImg3 from './image/news-img-3.jpg';

import classes from './LastestNews.module.css';

function LastestNews() {
  return (
    <div className={classes.mg_4}>
      <TitleUnderline name="LASTEST NEWS" />
      <div className={classes.lastestNews}>
        <Row>
          <Col xl={4} xs={12} className="d-flex justify-content-center py-2">
            <Card className={classes.block_news}>
              <Card.Img variant="top" src={cardImg1} />
              <Card.Body>
                <Card.Title className={classes.cardTitle}>
                  SIMPLY TIPS FOR BEAUTY
                </Card.Title>
                <Card.Subtitle className={classes.subtitle}>
                  Posted by
                  <span className={classes.comment_count}>
                    {' '}
                    admin - 2 Comments
                  </span>
                </Card.Subtitle>
                <Card.Text className={classes.text_overflow}>
                  Bootstrap includes a few general use CSS transitions that can
                  be applied to a number of components.
                </Card.Text>
                <a className={classes.LastestNewsBtn} href="/">
                  READ MORE
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={4} xs={12} className="d-flex justify-content-center py-2">
            <Card className={classes.block_news}>
              <Card.Img variant="top" src={cardImg2} />
              <Card.Body>
                <Card.Title className={classes.cardTitle}>
                  SIMPLY TIPS FOR BEAUTY
                </Card.Title>
                <Card.Subtitle className={classes.subtitle}>
                  Posted by
                  <span className={classes.comment_count}>
                    {' '}
                    admin - 2 Comments
                  </span>
                </Card.Subtitle>
                <Card.Text className={classes.text_overflow}>
                  Bootstrap includes a few general use CSS transitions that can
                  be applied to a number of components.
                </Card.Text>
                <a className={classes.LastestNewsBtn} href="/">
                  READ MORE
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={4} xs={12} className="d-flex justify-content-center py-2">
            <Card className={classes.block_news}>
              <Card.Img variant="top" src={cardImg3} />
              <Card.Body>
                <Card.Title className={classes.cardTitle}>
                  SIMPLY TIPS FOR BEAUTY
                </Card.Title>
                <Card.Subtitle className={classes.subtitle}>
                  Posted by
                  <span className={classes.comment_count}>
                    {' '}
                    admin - 2 Comments
                  </span>
                </Card.Subtitle>
                <Card.Text className={classes.text_overflow}>
                  Bootstrap includes a few general use CSS transitions that can
                  be applied to a number of components.
                </Card.Text>
                <a className={classes.LastestNewsBtn} href="/">
                  READ MORE
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default LastestNews;
