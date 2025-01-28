import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ scrollToFooter }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleContactClick = (e) => {
    e.preventDefault();
    scrollToFooter();
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Gestione del click fuori dal menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false); // Chiudi il menu se il click è fuori dal menu
      }
    };

    document.addEventListener('mousedown', handleClickOutside);  // Aggiungi l'evento al document
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);  // Rimuovi l'evento al momento della dismount
    };
  }, []);

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
          &#9776;
        </div>

        <ul className={`navbar-links ${isMenuOpen ? 'responsive' : ''}`} ref={menuRef}>
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
              Our Approach
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
            <NavLink to="/contact" activeClassName="active" onClick={handleContactClick}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Overlay per il menu laterale */}
      {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
};

export default Navbar;
