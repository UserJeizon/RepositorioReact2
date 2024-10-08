import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <strong>Experience</strong>
          </li>
        </ul>
        <ul className='navbar-nav mx-auto'>
        <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Card">Presentación</Link>
          </li>
          <li>
            <Link to="/Informacion">Contactenos</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>

        </ul>
      </nav>
    </header>
  );
}

export default Navbar;