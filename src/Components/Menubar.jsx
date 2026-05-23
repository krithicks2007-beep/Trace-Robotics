import React from 'react';

const Menubar = ({ activePage, setActivePage }) => {
  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'products', label: 'Products' },
    { id: 'support', label: 'Support' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <ul className="menubar">
      {menuItems.map((item) => (
        <li
          key={item.id}
          className={`menu-item ${activePage === item.id ? 'active' : ''}`}
          onClick={() => setActivePage(item.id)}
        >
          {item.label}
        </li>
      ))}
    </ul>
  );
};

export default Menubar;
