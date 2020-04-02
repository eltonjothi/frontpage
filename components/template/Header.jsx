import React from 'react';

function Header() {
  return (
    <div class="container">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Blog
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Resume
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  );
}

export default Header;
