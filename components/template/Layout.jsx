import React from 'react';
import Header from './Header';
// import Footer from './Footer';

function Layout({ children, classProp }) {
  return (
    <div className={classProp}>
      <div className="wrapper">
        <Header />
        {children}
      </div>
    </div>
  );
}

export default Layout;
