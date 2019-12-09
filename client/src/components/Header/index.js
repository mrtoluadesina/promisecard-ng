import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

function Header(props) {
  return (
    <header>
      <div className="logo">
        <img
          src={process.env.PUBLIC_URL + '/assets/images/logo.svg'}
          alt="promise card ng"
        />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
