import React from 'react';
import { BsTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

import { Link } from 'react-router-dom';
import classes from './Header.module.css';

function Header() {
  const checkLoginLogout = document.cookie
    .split(';')
    .map((item) => item.includes('email'));
  const check = checkLoginLogout.find((chec) => chec === true);

  const Logout = () => {
    document.cookie = 'email=; expires=Thu, 18 Dec 2013 12:00:00 UTC';
  };

  return (
    <header className={`${classes.header_color} py-3`}>
      <div className={`${classes.header} container`}>
        <div>
          <ul>
            <li className={classes.header_border_end}>
              <BsTelephoneFill />
              +00 123 456 789
            </li>
            <li>
              {' '}
              <MdEmail />
              info@gmail.com
            </li>
          </ul>
        </div>
        <div className={classes.header_user}>
          <ul>
            <li className={classes.header_border_end}>
              {!check ? (
                <Link to="/login">Login</Link>
              ) : (
                <Link to="/" onClick={Logout}>
                  Logout
                </Link>
              )}
            </li>
            <li className={classes.header_border_end}>
              <Link to="/">Wishlist</Link>
            </li>
            <li>
              <Link to="/">My Acount</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
