  import React from 'react';
  import { Link } from 'react-router-dom';
  import './Navbar.css'; // Importa il file CSS per lo stile
import Foundations from './../Foundations/Foundations';

  const Navbar = () => {
    return (
      <nav className="navbar">
        <ul>
          <li>
          <div><img src="/horizontal_original.png" alt="" /></div>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/Foundations">Foundations</Link>
          </li>
          <li>
            <Link to="/Services">Our services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    );
  };

  export default Navbar;
