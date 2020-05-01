import React from 'react';
import Header from './Header';
// import Footer from './Footer';

function Layout({ children, classProp, toggleTheme }) {
  return (
    <div className={classProp}>
      <div className="wrapper">
        <Header toggleTheme={toggleTheme} />
        {children}
      </div>
    </div>
  );
}

export default Layout;
