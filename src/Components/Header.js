// components/Header.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';  
import '../index.css';
import myimage from '../Images/image.png';

const Header = () => {
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  return (
    <header className={`header ${isHomePage ? '' : 'black-bg'}`}>
      <Link to="/" className="logo">
        <img src={myimage} alt="" />
      </Link>
      <div className="fas fa-bars"></div>
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/team">Team</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
