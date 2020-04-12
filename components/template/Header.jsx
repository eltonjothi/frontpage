import React from 'react';
import Link from 'next/link';

function Header() {
  return (
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item active">
              <Link href="/">
                <a class="nav-link">/home</a>
              </Link>
            </li>
            <li class="nav-item active">
              <Link href="/resume">
                <a class="nav-link">/resume</a>
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                /blog
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link disabled"
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
    </div>
  );
}

export default Header;
