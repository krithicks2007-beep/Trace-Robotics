import React, { useState, useEffect, useRef } from 'react';

const Menubar = ({ activePage, setActivePage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef(null);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'products', label: 'Products' },
    { id: 'support', label: 'Support' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleItemClick = (id) => {
    setActivePage(id);
    setIsOpen(false);
  };

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target.closest('.hamburger-btn')) return;
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    const header = document.querySelector('.header-wrapper');
    const headerHeight = header ? header.getBoundingClientRect().height : 0;

    document.body.style.overflow = isOpen ? 'hidden' : '';
    document.body.classList.toggle('mobile-menu-open', isOpen);

    if (isOpen && headerHeight) {
      document.body.style.setProperty('--mobile-header-height', `${headerHeight}px`);
    } else {
      document.body.style.removeProperty('--mobile-header-height');
    }

    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('mobile-menu-open');
      document.body.style.removeProperty('--mobile-header-height');
    };
  }, [isOpen]);

  return (
    <>
      {/* Desktop Nav */}
      <ul className="menubar desktop-nav">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={`menu-item ${activePage === item.id ? 'active' : ''}`}
            onClick={() => handleItemClick(item.id)}
          >
            {item.label}
          </li>
        ))}
      </ul>

      {/* Hamburger Button (mobile only) */}
      <button
        className={`hamburger-btn ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
        aria-expanded={isOpen}
      >
        <span className="ham-bar" />
        <span className="ham-bar" />
        <span className="ham-bar" />
      </button>

      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="mobile-nav-backdrop"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        ref={drawerRef}
        className={`mobile-drawer ${isOpen ? 'open' : ''}`}
      >
        <ul className="mobile-nav-list">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`mobile-nav-item ${activePage === item.id ? 'active' : ''}`}
              onClick={() => handleItemClick(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Menubar;
