import React from 'react';
import Link from 'next/link';

function Header() {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item active">
                <Link href="/">
                  <a className="nav-link">/home</a>
                </Link>
              </li>
              <li className="nav-item active">
                <Link href="/resume">
                  <a className="nav-link">/resume</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact">
                  <a className="nav-link">/contact</a>
                </Link>
              </li>
            </ul>
          </div>
          {/* <button className="btn btn-outline-success my-2 my-sm-0">dark</button> */}
        </div>
      </nav>
      <nav className="mobile-navbar">
        <div className="mobile-navbar-container">
          <div className="mobile-navbar-item">
            <Link href="/">
              <a>/home</a>
            </Link>
          </div>
          <div className="mobile-navbar-item">
            <Link href="/resume">
              <a>/resume</a>
            </Link>
          </div>
          <div className="mobile-navbar-item">
            <Link href="/contact">
              <a>/contact</a>
            </Link>
          </div>
          {/* <div className="mobile-navbar-item">
            <Link href="/">
              <a>/blog</a>
            </Link>
          </div> */}
        </div>
      </nav>
    </>
  );
}

export default Header;
