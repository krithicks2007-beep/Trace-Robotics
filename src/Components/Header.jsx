import React from 'react';
import Menubar from './Menubar';

const Header = ({ activePage, setActivePage }) => {
  return (
    <header className="header-wrapper">
      <div className="header-container">
        {/* Brand Logo Section */}
        <div className="logo-section" onClick={() => setActivePage('home')}>
          <span className="logo-text">Trace Robotics</span>
        </div>

        {/* Navigation Menubar (includes hamburger on mobile) */}
        <Menubar activePage={activePage} setActivePage={setActivePage} />

        {/* CTA Button — hidden on mobile (available inside drawer) */}
        <div className="nav-actions desktop-cta">
          <button
            className="btn-primary"
            onClick={() => setActivePage('contact')}
          >
            Get in Touch
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
