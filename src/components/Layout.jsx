import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div id="wrapper">
      <Header />
      <div id="content" className="no-bottom no-top">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
