import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header>
    <h2>Bookstore CMS</h2>
    <nav className="navBar">
      <li><NavLink to="/">BOOKS</NavLink></li>
      <li><NavLink to="/categories">CATEGORIES</NavLink></li>
    </nav>
  </header>
);

export default Header;
