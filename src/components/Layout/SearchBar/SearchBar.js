import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Dropdown from 'react-bootstrap/Dropdown';
import logo from './logo/logo.png';
import cartIcon from './logo/cart-icon.png';

import classes from './SearchBar.module.css';

function SearchBar() {
  return (
    <div className={classes.searchBar}>
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <div>
        <span>
          <input className={classes.search_Box} data-testid="search-input" />
        </span>
        <span>
          <button type="button" className={classes.search_Btn}>
            Search
          </button>
        </span>
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
              9
            </Badge>
            <span>$0</span>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <div>No items in this cart!</div>
            <div className={classes.space_between}>
              <span>Total</span>
              <span className={classes.cart_total_price}>$0</span>
            </div>
            <div className={classes.center}>
              <button type="button" className={classes.cart_view_cart}>
                View Cart
              </button>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default SearchBar;
