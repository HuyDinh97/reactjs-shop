/* eslint-disable react/button-has-type */
import React from 'react';
import { Table } from 'react-bootstrap';
import { FaMinus, FaPlus, FaChevronLeft } from 'react-icons/fa';
import { HiRefresh } from 'react-icons/hi';

import classes from './CartTable.module.css';
import image from './image/product-img-3.jpg';

function CartTable() {
  return (
    <div>
      <Table className={classes.cartTable} striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Item</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="d-flex justify-content-center" colSpan={2}>
                <img src={image} alt="" />
              </div>
            </td>
            <td className="fs-5 fw-semibold">
              Calvin Klein womens Solid Sheath With Chiffon Bell Sleeves Dress
            </td>
            <td className={classes.price_sample}>$6</td>
            <td>
              <div className="d-flex justify-content-center align-items-center">
                <button className={classes.quantity_button}>
                  <FaMinus />
                </button>
                <div className={classes.quantity_in_cart}>2</div>
                <button className={classes.quantity_button}>
                  <FaPlus />
                </button>
              </div>
            </td>
            <td className={classes.price_sample}>$6</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@mdo</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={5}>
              <div className="d-flex justify-content-center align-item-center">
                <span>
                  <button href="/">
                    <a href="/">
                      <FaChevronLeft className={classes.margin_right_1rem} />
                      CONTINUE SHOPPING
                    </a>
                  </button>
                </span>
                <span>
                  <button className={classes.update_cart}>
                    <HiRefresh className={classes.margin_right_1rem} />
                    UPDATE CART
                  </button>
                </span>
              </div>
            </td>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
}

export default CartTable;