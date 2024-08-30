import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <strong>Experience</strong>
          </li>
        </ul>
        <ul>
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