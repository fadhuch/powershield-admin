import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
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
