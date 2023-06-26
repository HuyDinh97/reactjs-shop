import React from 'react';
import { BsTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useGetLogInStatus } from 'store/selectors/common';
import { useDispatch } from 'react-redux';
import { logInStatus } from 'store/actions/common';
import classes from './Header.module.css';

function Header() {
  const logInStatusRedux = useGetLogInStatus();
  const dispatch = useDispatch();
  const statusCheck = logInStatusRedux || Cookies.get('isUserLogin');
  const Logout = () => {
    Cookies.remove('isUserLogin');
    dispatch(logInStatus('false'));
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
              {statusCheck === 'true' ? (
                <Link to="/" onClick={Logout}>
                  Logout
                </Link>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </li>
            <li className={classes.header_border_end}>
              <Link to="/wishlist">Wishlist</Link>
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
