import React from 'react';
import { BsTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

import { useGetLogInData } from 'store/selectors/common';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logInData, logInDataReturn } from 'store/actions/common';
import classes from './Header.module.css';

function Header() {
  const logInDataRedux = useGetLogInData();
  const dispatch = useDispatch();

  const Logout = () => {
    document.cookie = 'email=; expires=Thu, 18 Dec 2013 12:00:00 UTC';
    dispatch(logInDataReturn([]));
    dispatch(logInData([]));
  };
  console.log(logInDataRedux);

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
              {logInDataRedux.length !== 0 ? (
                <Link to="/" onClick={Logout}>
                  Logout
                </Link>
              ) : (
                <Link to="/login">Login</Link>
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
