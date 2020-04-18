import React from 'react';
import Link from 'next/link';

function Header() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark">
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
              <a className="nav-link" href="#">
                /blog
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                /contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="mobile-navbar">
        <div className="mobile-navbar-container">
          <div className="mobile-navbar-item">
          <Link href="/"><a>/home</a></Link>
          </div>
          <div className="mobile-navbar-item">
          <Link href="/resume"><a>/resume</a></Link>
          </div>
          <div className="mobile-navbar-item">
          <Link href="/"><a>/contact</a></Link>
          </div>
          <div className="mobile-navbar-item">
          <Link href="/"><a>/blog</a></Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
