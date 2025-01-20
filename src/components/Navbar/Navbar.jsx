import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';  // Usa Link per il logo
import './Navbar.css';

const Navbar = ({ scrollToFooter }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleContactClick = (e) => {
    e.preventDefault();
    scrollToFooter();
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src="/horizontal_original.png" alt="Logo" />
        </Link>
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
        <li className="dropdown">
          <button onClick={toggleDropdown} className="dropdown-btn">
            Our Approach 🢓
          </button>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
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
                <NavLink to="/working-process" activeClassName="active">
                  Working Process
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        <li>
          <a href="#" onClick={handleContactClick} className="contact-link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
