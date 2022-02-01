import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = () => (
  <div className="header">
    <Link className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option">
        SHOP
      </Link>
      <Link className="option">
        CONTACT
      </Link>
    </div>
  </div>
)

export default Header;