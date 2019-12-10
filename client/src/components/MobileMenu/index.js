import React from 'react';
import './mobile.scss';

export default function MobileMenu() {
  const closeDrawer = () => {
    const sideNav = document.querySelector('.sideNav');
    sideNav.classList.remove('is-active');
  };

  return (
    <div className="sideNav">
      <div className="header">
        <div className="logo">
          {/* <img
            src={process.env.PUBLIC_URL + `assets/images/logo.svg`}
            alt="brand-icon"
          /> */}
        </div>
        <div className="close" onClick={closeDrawer}></div>
      </div>
    </div>
  );
}
