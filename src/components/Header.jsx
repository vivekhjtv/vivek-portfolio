import React from 'react';

function Header() {
  return (
    <div>
      <header className="header " id="myHeader">
        <div className="header-container">
          <nav id="nav-menu-container row">
            <div className="logo col-lg-6 col-sm-12">
              <h1 className="bounce-in-top brand-title">vivek.io</h1>
            </div>
            <ul className="nav-menu col-lg-6 col-sm-12">
              <li className="menu-active">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Project</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
