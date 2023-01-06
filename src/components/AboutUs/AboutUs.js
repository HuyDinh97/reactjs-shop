/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useGetCategories } from 'store/selectors/common';

import { TfiLocationPin } from 'react-icons/tfi';
import { BsTelephone } from 'react-icons/bs';
import { GoMail } from 'react-icons/go';

import classes from './AboutUs.module.css';

function AboutUs() {
  const categories = useGetCategories();

  if (categories.length <= 0) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <footer>
        <div className={classes.footer_box}>
          <Row>
            <Col xs={4} className="mb-3 px-2">
              <h5>ABOUT US</h5>
              <p>
                <span>
                  There are many variations of passages of Lorem Ipsum but the
                  majority have suffered alteration in some form, by injected
                  humour, or randomised words which do not look even slightly
                  believable.
                </span>
              </p>
            </Col>

            <Col xs={2} className="mb-3 px-2">
              <h5>CATEGORIES</h5>
              <ul className="nav flex-column" id="category-footer">
                {categories &&
                  categories.map((category) => (
                    <li className="nav-item mb-2" key={category._id}>
                      <a href="#" className="nav-link p-0 text-muted">
                        <span>{category.name}</span>
                      </a>
                    </li>
                  ))}
              </ul>
            </Col>

            <Col xs={2} className="mb-3 px-2">
              <h5>MY ACCOUNT</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    <span>Order</span>
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    <span>Order</span>
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    <span>Order</span>
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    <span>Order</span>
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    <span>Order</span>
                  </a>
                </li>
              </ul>
            </Col>

            <Col xs={4} className="mb-3 px-2">
              <h5>CONTACT INFO</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    <span className={classes.about_us_icon}>
                      <TfiLocationPin />
                    </span>
                    <span className="mx-2">
                      c/o Giunti International Division Via G.B.Pỉelli, 30 20124
                      Milan
                    </span>
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted pop">
                    <span className={classes.about_us_icon}>
                      <BsTelephone />
                    </span>
                    <span className="mx-2">+025 2155 3255</span>
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    <span className={classes.about_us_icon}>
                      <GoMail />
                    </span>
                    <span className="mx-2">info@gmail.com</span>
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </footer>
    </div>
  );
}

export default AboutUs;
