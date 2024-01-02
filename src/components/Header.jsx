import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <header className="header " id="myHeader">
        <div className="header-container text-focus-in">
          <nav id="nav-menu-container row">
            <div className="logo col-lg-6 col-sm-12">
              <h1 className="bounce-in-top brand-title">vivek.io</h1>
            </div>
            <ul className="nav-menu col-lg-6 col-sm-12">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/project">Project</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
