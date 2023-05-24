import React from 'react';
import { BsTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

import { useGetLogInStatus } from 'store/selectors/common';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logInData, logInDataReturn, logInStatus } from 'store/actions/common';
import DoLogIn from 'components/LoginRegistration/doLogin';
import classes from './Header.module.css';

function Header() {
  const logInStatusData = useGetLogInStatus();
  const dispatch = useDispatch();

  // const checkLogIn = () => {
  //   const email = Cookies.get('email');
  //   const password = Cookies.get('password');
  //   console.log(password);
  // };

  const Logout = () => {
    document.cookie = 'email=; expires=Thu, 18 Dec 2013 12:00:00 UTC';
    document.cookie = 'password=; expires=Thu, 18 Dec 2013 12:00:00 UTC';
    dispatch(logInDataReturn([]));
    dispatch(logInData([]));
    dispatch(logInStatus(undefined));
  };
  DoLogIn();

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
              {logInStatusData ? (
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
