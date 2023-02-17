import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Dropdown from 'react-bootstrap/Dropdown';
import { GrFormClose } from 'react-icons/gr';
import logo from './logo/logo.png';
import cartIcon from './logo/cart-icon.png';
import productImg from './image/product-img-3.jpg';
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
              59
            </Badge>
            <span>$0</span>
          </Dropdown.Toggle>

          <Dropdown.Menu className={classes.dropdown_menu}>
            <div>
              <div>
                <ul className={classes.dropdown_menu_product}>
                  <span>
                    <img src={productImg} alt="1" />
                  </span>
                  <span>
                    <div className="fw-semibold">
                      Calvin Klein womens Solid Sheahh
                    </div>
                    <div>Quantiy: 1</div>
                    <div className={classes.price_color}>$24</div>
                  </span>
                  <span className={classes.close_button}>
                    <GrFormClose />
                  </span>
                </ul>
              </div>
              <div className={classes.space_between}>
                <span>Total</span>
                <span className={classes.cart_total_price}>$0</span>
              </div>
            </div>
            <div className={classes.center}>
              <button type="button" className={classes.view_cart_button}>
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
