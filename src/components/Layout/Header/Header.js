import { BsTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

import classes from './Header.module.css';

function Header() {
  return (
  <header className={classes.header_color}>
    <div className={classes.header}>
      <div>
        <ul>
          <li className={classes.header_border_end}> <BsTelephoneFill/> + 00 123 456 789</li>
          <li> <MdEmail />info@gmail.com</li>
        </ul>
      </div>
      <div className={classes.header_user}>
        <ul>
          <li className={classes.header_border_end}>Login</li>
          <li className={classes.header_border_end}>Wishlist</li>
          <li>My Acount</li>
        </ul>
      </div>
    </div>
  </header>
)}

export default Header;