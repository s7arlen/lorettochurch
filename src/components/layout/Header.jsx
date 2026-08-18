import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="site-header" role="banner">
      <div className="site-header__texture" aria-hidden="true" />
      <div className="container">
        <div className="site-header__inner">
          <div className="site-header__identity">
            <h1 className="site-header__name">
              <span className="site-header__title-text">Our Lady of Loretto Church</span>
            </h1>

            <div className="site-header__location">
              <span className="site-header__location-item">Loretto</span>
              <span className="site-header__dot">✦</span>
              <span className="site-header__location-item">Mangalore</span>
              <span className="site-header__dot">✦</span>
              <span className="site-header__location-item">Karnataka, India</span>
            </div>
          </div>
        </div>
      </div>
      <div className="site-header__gold-line" aria-hidden="true">
        <div className="site-header__gold-line-inner" />
        <span className="site-header__gold-line-diamond">✦</span>
      </div>
    </header>
  );
};

export default Header;
