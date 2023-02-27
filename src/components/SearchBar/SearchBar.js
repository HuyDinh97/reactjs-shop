/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Badge from 'react-bootstrap/Badge';
import Dropdown from 'react-bootstrap/Dropdown';
import { GrFormClose } from 'react-icons/gr';
import { useGetMyCart } from 'store/selectors/common';
import { Link } from 'react-router-dom';
import { deleteProductInCart } from 'store/actions/common';
import logo from './logo/logo.png';
import cartIcon from './logo/cart-icon.png';
import classes from './SearchBar.module.css';

function SearchBar() {
  const mycart = useGetMyCart();
  const TotalCost = (total, price) => total + price;
  const dispatch = useDispatch();

  const total =
    mycart.length > 0
      ? mycart
          .map((item) => item.quantity * (item.price * (1 - item.sales / 100)))
          .reduce(TotalCost)
          .toFixed(2)
      : 0;

      const DeteleItem = useCallback(
        (id) => () => {
          dispatch(deleteProductInCart(id));
        },
        [dispatch]
      );

  const linkIMG = 'https://vnguyen.xyz/huy/day17/apis/';
  return (
    <div className={classes.searchBar} data-testid="dropdownItem-element">
      <div>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className={classes.searchSection}>
        <input
          className={classes.search_Box}
          data-testid="search-input"
          placeholder="Search Product..."
        />
        <button type="button" className={classes.search_Btn}>
          Search
        </button>
      </div>
      <div>
        <Dropdown className={classes.cart_button}>
          <Dropdown.Toggle
            className={classes.cart_toggle}
            variant=""
            id="dropdown-basic"
          >
            <img src={cartIcon} alt="icon" />
            <Badge className={classes.badge} bg="">
              {mycart.length > 0 ? mycart.length : 0}
            </Badge>
            <span className={classes.cart_total_price}>${total}</span>
          </Dropdown.Toggle>

          <Dropdown.Menu className={classes.dropdown_menu}>
            <div>
              {mycart.length > 0 ? (
                mycart.map((item) => (
                  <div key={item._id}>
                    <ul className={classes.dropdown_menu_product}>
                      <li className="d-flex">
                        <span>
                          <img src={linkIMG + item.thumb} alt="1" />
                        </span>
                        <span>
                          <div className="fw-semibold">{item.name}</div>
                          <div>Quantiy: {item.quantity}</div>
                          <div className={classes.price_color}>
                            $
                            {(item.quantity *
                              (item.price * (1 - item.sales / 100))).toFixed(2)}
                          </div>
                        </span>
                        <span className={classes.close_button}>
                          <button type="button" onClick={DeteleItem(item._id)}>
                            <GrFormClose />
                          </button>
                        </span>
                      </li>
                    </ul>
                  </div>
                ))
              ) : (
                <div>
                  <ul className={classes.dropdown_menu_product}>
                    <li className="d-flex">No items in cart!</li>
                  </ul>
                </div>
              )}
              <div className={classes.space_between}>
                <span>Total</span>
                <span className={classes.cart_total_price}>${total}</span>
              </div>
            </div>
            <div className={classes.center}>
              <button type="button" className={classes.view_cart_button}>
                <Link to="/my-cart">View Cart</Link>
              </button>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default SearchBar;
