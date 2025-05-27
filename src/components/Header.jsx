import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="f1-header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img src="/assets/img/logo.png" alt="Formula 1" />
        </Link>
        <nav className="main-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/drivers">Drivers</Link></li>
            <li><Link to="/teams">Teams</Link></li>
            <li><Link to="/calendar">Calendar</Link></li>
            <li><Link to="/news">News</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;