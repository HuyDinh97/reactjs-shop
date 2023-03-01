/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useCallback } from 'react';
import Badge from 'react-bootstrap/Badge';
import Dropdown from 'react-bootstrap/Dropdown';
import { GrFormClose } from 'react-icons/gr';
import { useGetMyCart } from 'store/selectors/common';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteProductInCart } from 'store/actions/common';
import logo from './logo/logo.png';
import cartIcon from './logo/cart-icon.png';
import classes from './SearchBar.module.css';

function SearchBar() {
  const { products: productInCart, totalCost } = useGetMyCart();
  const dispatch = useDispatch();

  const deleteProduct = useCallback(
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
              {productInCart?.length > 0 ? productInCart.length : 0}
            </Badge>
            <span className={classes.cart_total_price}>${totalCost}</span>
          </Dropdown.Toggle>

          <Dropdown.Menu className={classes.dropdown_menu}>
            <div>
              {productInCart?.length > 0 ? (
                productInCart.map((product) => (
                  <div key={product._id}>
                    <ul className={classes.dropdown_menu_product}>
                      <li className="d-flex">
                        <span>
                          <img src={linkIMG + product.thumb} alt="1" />
                        </span>
                        <span>
                          <div className="fw-semibold">{product.name}</div>
                          <div>Quantiy: {product.quantity}</div>
                          <div className={classes.price_color}>
                            $
                            {product.afterSalesPrice}
                          </div>
                        </span>
                        <span className={classes.close_button}>
                          <button type="button" onClick={deleteProduct(product._id)}>
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
                <span className={classes.cart_total_price}>${totalCost}</span>
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
