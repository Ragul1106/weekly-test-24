import React from 'react';
import './assets/navBar.css'

const Navbar = ({ currentTab, setCurrentTab }) => {
  const tabs = [
    'Grocery List',
    'Login Toggle',
    'Age Increaser',
    'Char Counter',
    'Fruit Selector'
  ];

  return (
    <nav className="navbar">
      <div className="brand">WeeklyTest</div>
      <ul className="nav-tabs">
        {tabs.map((tab, idx) => (
          <li
            key={idx}
            className={currentTab === idx ? 'active' : ''}
            onClick={() => setCurrentTab(idx)}
          >
            {tab}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
