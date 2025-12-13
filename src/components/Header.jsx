import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Close menu and submenu when window resizes to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
        setOpenSubmenu(null);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSubmenuToggle = (itemId) => {
    setOpenSubmenu(openSubmenu === itemId ? null : itemId);
  };

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
        // { id: 'electrical', label: 'Electrical Works', href: '/services/electrical' },
        // { id: 'plumbing', label: 'Plumbing Works', href: '/services/plumbing' },
        { id: 'maintenance', label: 'Annual Maintenance Contract', href: '/services/maintenance' },
      ],
    },
    {
      id: 'projects',
      label: 'Projects',
      href: '/projects',
    
    },
    {
      id: 'about',
      label: 'About Us',
      href: '/about',
      // children: [
      //   { id: 'company', label: 'Company', href: '/about' },
      //   { id: 'history', label: 'History', href: '/about/history' },
      //   { id: 'team', label: 'Team', href: '/about/team' },
      // ],
    },
    {
      id: 'careers',
      label: 'Careers',
      href: '/careers',
    },
    {
      id: 'contact',
      label: 'Contact',
      href: '/contact',
    },
  ];

  const renderNavItem = (item) => (
    <li key={item.id} className={item.children ? 'has-submenu' : ''}>
      {item.children ? (
        <>
          <div className="nav-item-with-submenu">
            <Link 
              to={item.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
            <button 
              className={`submenu-toggle ${openSubmenu === item.id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleSubmenuToggle(item.id);
              }}
              aria-label={`Toggle ${item.label} submenu`}
            >
              <span></span>
            </button>
          </div>
          <ul className={`submenu ${openSubmenu === item.id ? 'open' : ''}`}>
            {item.children.map(child => (
              <li key={child.id}>
                <Link 
                  to={child.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <Link 
          to={item.href}
          onClick={() => setIsMenuOpen(false)}
        >
          {item.label}
        </Link>
      )}
    </li>
  );

  return (
    <>
      {/* Mobile menu overlay */}
      <div 
        className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMenuOpen(false)}
      />
      
      <header ref={menuRef}>
        <div className="container" style={{ minHeight: '100%' }}>
        <div className="row" style={{ minWidth: '100%' }}>
          <div className="" style={{ marginBottom: '0px !important' }}>
            <div className="header-border">
              <div id="logo" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <Link to="/">
                  <img
                    className="logo"
                    src="/assets/images/logonobackground.png"
                    alt="Power Shield Technical Service LLC"
                  />
                  <img
                    className="logo-2"
                    src="/assets/images/logo-2.png"
                    alt="Power Shield Technical Service LLC"
                  />
                </Link>
                <div 
                  className="logo-text"
                  style={{ 
                    fontFamily: '"Frank Ruhl Libre", serif',
                    fontWeight: 700,
                    fontStyle: 'normal',
                    color: '#fff',
                    lineHeight: '1.2'
                  }}
                >
                  <div style={{fontSize: '24px'}}>POWER SHIELD</div>
                  <div style={{fontSize: '14px'}}>TECHNICAL SERVICE</div>
                </div>
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
                className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
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
    </>
  );
};

export default Header;
