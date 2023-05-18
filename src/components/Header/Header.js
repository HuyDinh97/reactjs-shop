import React from 'react';
import { BsTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useGetLoginCookie } from 'store/selectors/common';
import { loginCookie } from 'store/actions/common';
import { useDispatch } from 'react-redux';
import classes from './Header.module.css';

function Header() {
  const cookieCheck = useGetLoginCookie();
  const dispatch = useDispatch();
  console.log(cookieCheck);
  const Logout = () => {
    dispatch(loginCookie(false));
  };

  return (
    <header className={classes.header_color}>
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
              {cookieCheck === false ? (
                <Link to="/login">Log in</Link>
              ) : (
                <Link to="/" onClick={Logout}>
                  Log out
                </Link>
              )}
            </li>
            <li className={classes.header_border_end}>
              <a href="/">Wishlist</a>
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
