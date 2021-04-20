import React from 'react';
import { Link } from 'react-router-dom';
import '../style/NavBar.css';

function NavBar() {
  return (
    <div className="nav">
      <nav>
        <div className="title">
          <h1>
            <Link to="/">
              Math Magicians
            </Link>
          </h1>
        </div>
        <div className="navLink">
          <div>
            <Link to="/">
              Home
            </Link>
          </div>
          <div>
            <Link to="/calculator">
              Calculator
            </Link>
          </div>
          <div>
            <Link to="/quote">
              Quote
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
