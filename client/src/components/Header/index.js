import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

function Header(props) {
  const handleDrawer = () => {
    const sideNav = document.querySelector('.sideNav');
    sideNav.classList.add('is-active');
  };

  return (
    <header>
      <div className="logo">
        <img
          src={process.env.PUBLIC_URL + '/assets/images/logo.svg'}
          alt="promise card ng"
        />
      </div>
      <nav>
        <span className="mobile-nav" onClick={handleDrawer}></span>
        <ul className="web-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
