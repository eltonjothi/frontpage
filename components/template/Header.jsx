import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';

function Header({ router }) {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li
                className={
                  router.pathname === '/' ? 'nav-item active' : 'nav-item'
                }
              >
                <Link href="/">
                  <a className="nav-link">Home</a>
                </Link>
              </li>
              <li
                className={
                  router.pathname === '/about' ? 'nav-item active' : 'nav-item'
                }
              >
                <Link href="/about">
                  <a className="nav-link">About</a>
                </Link>
              </li>
              <li
                className={
                  router.pathname === '/music' ? 'nav-item active' : 'nav-item'
                }
              >
                <Link href="/music">
                  <a className="nav-link">Music</a>
                </Link>
              </li>
              <li
                className={
                  router.pathname === '/contact'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link href="/contact">
                  <a className="nav-link">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
          {/* <button className="btn btn-outline-success my-2 my-sm-0">dark</button> */}
        </div>
      </nav>
      <nav className="mobile-navbar">
        <div className="mobile-navbar-container">
          <Link href="/">
            <a
              className={
                router.pathname === '/'
                  ? 'mobile-navbar-item active'
                  : 'mobile-navbar-item'
              }
            >
              Home
            </a>
          </Link>
          <Link href="/about">
            <a
              className={
                router.pathname === '/about'
                  ? 'mobile-navbar-item active'
                  : 'mobile-navbar-item'
              }
            >
              About
            </a>
          </Link>
          <Link href="/music">
            <a
              className={
                router.pathname === '/music'
                  ? 'mobile-navbar-item active'
                  : 'mobile-navbar-item'
              }
            >
              Music
            </a>
          </Link>
          <Link href="/contact">
            <a
              className={
                router.pathname === '/contact'
                  ? 'mobile-navbar-item active'
                  : 'mobile-navbar-item'
              }
            >
              Contact
            </a>
          </Link>

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

export default withRouter(Header);
