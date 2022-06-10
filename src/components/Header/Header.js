import React from 'react';
import { NavLink } from 'react-router-dom';
import user from './user.png';
import './Header.css';

const Header = () => (
  <header>
    <div className="left-nav">
      <h2>Bookstore CMS</h2>
      <nav className="navBar">
        <li><NavLink to="/">BOOKS</NavLink></li>
        <li><NavLink to="/categories">CATEGORIES</NavLink></li>
      </nav>
    </div>
    <div className="right-nav">
      <img src={user} alt="user" />
    </div>
  </header>
);

export default Header;
