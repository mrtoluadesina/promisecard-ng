import React from 'react';
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
        <span className="mobile-nav" onClick={handleDrawer}>
          <i className="mdi mdi-sort-variant"></i>
        </span>
      </nav>
    </header>
  );
}

export default Header;
