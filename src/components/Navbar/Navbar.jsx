import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">
            <img src="/logooriginale.png" alt="Logo" />
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          {isMenuOpen ? '✖' : '☰'}
        </div>

        <ul className={`navbar-links ${isMenuOpen ? 'responsive' : ''}`}>
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
          <li className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
            <button onClick={toggleDropdown} className="dropdown-btn">
              Our Approach <span className="arrow">ᐁ</span>
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
          {/* Qui non è più necessario il handleContactClick */}
          <li>
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Overlay for the mobile menu */}
      {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
};

export default Navbar;
