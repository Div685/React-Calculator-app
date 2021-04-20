import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="nav">
      <nav>
        <div>
          <h1>Math Magicians</h1>
        </div>
        <div>
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
