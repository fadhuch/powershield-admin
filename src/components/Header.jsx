import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    {
      id: 'home',
      label: 'Home',
      href: '/',
    },
    {
      id: 'services',
      label: 'Services',
      href: '/services',
      children: [
        { id: 'fire-alarm', label: 'Fire Alarm Works', href: '/services/fire-alarm' },
        { id: 'fire-fighting', label: 'Fire Fighting Works', href: '/services/fire-fighting' },
        { id: 'smoke-extraction', label: 'Smoke Extraction System', href: '/services/smoke-extraction' },
        { id: 'emergency-exit', label: 'Emergency Exit Light Systems', href: '/services/emergency-exit' },
        { id: 'design-approvals', label: 'Design Drawings & Approvals', href: '/services/design-approvals' },
        { id: 'electrical', label: 'Electrical Works', href: '/services/electrical' },
        { id: 'plumbing', label: 'Plumbing Works', href: '/services/plumbing' },
        { id: 'maintenance', label: 'Annual Maintenance Contract', href: '/services/maintenance' },
      ],
    },
    {
      id: 'projects',
      label: 'Projects',
      href: '/projects',
      children: [
        { id: 'projects-fullwidth', label: 'Projects Fullwidth', href: '/projects' },
        { id: 'projects-grid', label: 'Projects Grid', href: '/projects/grid' },
        { id: 'gallery', label: 'Gallery', href: '/gallery' },
      ],
    },
    {
      id: 'about',
      label: 'About Us',
      href: '/about',
      children: [
        { id: 'company', label: 'Company', href: '/about' },
        { id: 'history', label: 'History', href: '/about/history' },
        { id: 'team', label: 'Team', href: '/about/team' },
      ],
    },
    {
      id: 'contact',
      label: 'Contact',
      href: '/contact',
    },
  ];

  const renderNavItem = (item) => (
    <li key={item.id}>
      <Link to={item.href}>{item.label}</Link>
      {item.children && (
        <ul>
          {item.children.map(child => (
            <li key={child.id}>
              <Link to={child.href}>{child.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );

  return (
    <header>
      <div className="info">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="col">
                <span className="id-color">
                  <i className="fa fa-map-marker"></i>
                </span>
                Al Raas, Umm Al Quwain, United Arab Emirates
              </div>
              <div className="col">
                <span className="id-color">
                  <i className="fa fa-clock-o"></i>
                </span>
                Monday - Friday 08:00-16:00
              </div>
              <div className="col">
                <span className="id-color">
                  <i className="fa fa-phone"></i>
                </span>
                +971 6 579 9806
              </div>
            </div>
            <div className="col-md-4 text-right">
              <div className="social-icons">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-linkedin"></i></a>
                <a href="#"><i className="fa fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="header-border">
              <div id="logo">
                <Link to="/">
                  <img
                    className="logo"
                    src="/assets/images/logo.png"
                    alt="Power Shield Technical Service LLC"
                    width={66}
                    
                  />
                  <img
                    className="logo-2"
                    src="/assets/images/logo-2.png"
                    alt="Power Shield Technical Service LLC"
                  />
                </Link>
              </div>

              <nav
                id="mainmenu"
                className={`mainmenu ${isMenuOpen ? 'menu-open' : ''}`}
              >
                <ul >
                  {navigationItems.map(renderNavItem)}
                </ul>
              </nav>

              <div
                className="menu-toggle"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
