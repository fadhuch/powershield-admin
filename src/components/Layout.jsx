import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Layout.css';

function Layout({ children }) {
  const location = useLocation();

  return (
    <div className="layout">
      <header className="header">
        <nav className="nav">
          <div className="nav-brand">
            <Link to="/">Power Shield Services</Link>
          </div>
          <ul className="nav-menu">
            <li>
              <Link 
                to="/" 
                className={location.pathname === '/' ? 'active' : ''}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/gallery" 
                className={location.pathname === '/gallery' ? 'active' : ''}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={location.pathname === '/contact' ? 'active' : ''}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        {children}
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Power Shield Services. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
