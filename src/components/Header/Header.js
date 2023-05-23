import React from 'react';
import { BsTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

import { useGetLogInDataReturn } from 'store/selectors/common';
import { useDispatch } from 'react-redux';
import classes from './Header.module.css';

function Header() {
  const logInData = useGetLogInDataReturn();
  const dispatch = useDispatch();

  const Logout = () => {
    document.cookie = 'email=; expires=Thu, 18 Dec 2013 12:00:00 UTC';
    dispatch(logInData(false));
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
              {logInData.status === true ? (
                <a href="/" onClick={Logout}>
                  Logout
                </a>
              ) : (
                <a href="/login">Login</a>
              )}
            </li>
            <li className={classes.header_border_end}>
              <a href="/">Wishlist</a>
            </li>
            <li>
              <a href="/">My Acount</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
