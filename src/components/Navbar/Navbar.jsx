import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ scrollToFooter }) => {
  const handleContactClick = (e) => {
    e.preventDefault();
    scrollToFooter();
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/horizontal_original.png" alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/Services" activeClassName="active">
            Our Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/Foundations" activeClassName="active">
            Our Foundations
          </NavLink>
        </li>
        <li>
          <a
            href="#"
            onClick={handleContactClick}
            className="contact-link"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
