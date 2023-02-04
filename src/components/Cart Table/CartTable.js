/* eslint-disable react/button-has-type */
import React from 'react';

function CartTable() {
  return (
    <div>
      <table
        className="table table-bordered fw-semibold my-6"
        id="my-cart-table"
      >
        <thead className="gray-text">
          <tr className="fw-normal">
            <th className="col-2 fw-normal" scope="col">
              Item
            </th>
            <th className="col-4" scope="col">
              Product Name
            </th>
            <th className="col-1" scope="col">
              Price
            </th>
            <th className="col-3" scope="col">
              Quantity
            </th>
            <th className="col-2" scope="col">
              Subtotal
            </th>
          </tr>
        </thead>
        <tbody id="my-cart">
          <tr>
            <th>
              <div>1</div>
            </th>
            <td>Variable product 001</td>
            <td>
              <div>$ 78</div>
            </td>

            <td className="align-middle">
              <div className="d-flex justify-content-center">
                <button className="px-3 quantity-btn-color border-0 fs-2">
                  -
                </button>
                <div className="px-4 border d-flex align-items-center gray-text">
                  2
                </div>
                <button className="px-3 quantity-btn-color border-0 fs-2">
                  +
                </button>
              </div>
            </td>

            <td className="align-middle title-color fs-5">$ 156</td>
            <td className="align-middle">
              <button className="border-0 bg-white">X</button>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="6">
              <div className="d-flex justify-content-center my-3 row">
                <button className="quantity-btn-color rounded-pill border-0 py-2 mx-2 continue-shopping col-md-3 col-sm-4">
                  <a
                    className="d-flex align-items-center justify-content-center"
                    href="/index.html"
                  >
                    <i className="fa-solid fa-angle-left fw-bold fs-4 mx-2" />
                    <div className="mx-2 fs-6">CONTINUE SHOPPING</div>
                  </a>
                </button>
                <button
                  className="search-btn-color rounded-pill border-0 d-flex align-items-center justify-content-center mx-2 col-md-2 col-sm-4"
                  onClick="updateCart();"
                >
                  <i className="fa-solid fa-rotate fw-bold fs-4 mx-2" />
                  <div className="mx-2 fs-6" id="update-cart-text">
                    UPDATE CART
                  </div>
                </button>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default CartTable;
