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
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
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
              9
            </Badge>
            <span>$0</span>
          </Dropdown.Toggle>

          <Dropdown.Menu className={classes.dropdown_menu}>
            <div>
              No items in this cart!
              {/* <div className={classes.cart_Item}>
                <img src={cartItem1} alt="cartItem" />
                <p>product name</p>
                <div>X</div>
              </div>
              <div className={classes.cart_Item}>
                <img src={cartItem2} alt="cartItem" />
                <p>product name</p>
                <div>X</div>
              </div> */}
            </div>
            <div className={classes.space_between}>
              <span>Total</span>
              <span className={classes.cart_total_price}>$0</span>
            </div>
            <div className={classes.center}>
              <button type="button" className={classes.cart_view_cart}>
                <a href="/my-cart">View Cart</a>
              </button>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default SearchBar;
