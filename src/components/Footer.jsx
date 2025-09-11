import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="footer-logo">
              <Link to="/">
                <img
                  src="/assets/images/logo.png"
                  alt="Power Shield Technical Service LLC"
                  style={{ width: '150px' }}
                />
              </Link>
            </div>
            <p>
              Power Shield Technical Service LLC is one of the leading fire protection companies 
              approved by Civil Defence for supply, installation, and maintenance of various fire 
              and safety equipment including fire extinguishers, fire alarm systems, and sprinkler systems.
            </p>
          </div>

          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="footer-links" style={{ listStyleType: 'none', paddingLeft: 0 }}>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5>Services</h5>
            <ul className="footer-links" style={{ listStyleType: 'none', paddingLeft: 0 }}>
              <li><Link to="/services/fire-alarm">Fire Alarm Works</Link></li>
              <li><Link to="/services/fire-fighting">Fire Fighting Works</Link></li>
              <li><Link to="/services/smoke-extraction">Smoke Extraction</Link></li>
              <li><Link to="/services/emergency-exit">Emergency Exit Lights</Link></li>
              <li><Link to="/services/maintenance">Maintenance Contract</Link></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5>Contact Info</h5>
            <div className="footer-contact">
              <p>
                <i className="fa fa-map-marker"></i>
                Al Raas, Umm Al Quwain<br />
                United Arab Emirates
              </p>
              <p>
                <i className="fa fa-phone"></i>
                +971 6 579 9806
              </p>
              <p>
                <i className="fa fa-envelope"></i>
                powershieldtechnicalservice@gmail.com
              </p>
            </div>
            <div className="social-icons">
              {/* <a href="#"><i className="fa fa-facebook"></i></a> */}
              {/* <a href="#"><i className="fa fa-twitter"></i></a> */}
              <a href="https://www.linkedin.com/company/power-shield-technical-service-l-l-c/"><i className="fa fa-linkedin"></i></a>
              {/* <a href="#"><i className="fa fa-instagram"></i></a> */}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="footer-bottom">
              <div className="row">
                <div className="col-md-6">
                  <p>&copy; 2023 Power Shield Technical Service LLC. All rights reserved.</p>
                </div>
                <div className="col-md-6 text-right">
                  <ul className="footer-menu" style={{ listStyleType: 'none', paddingLeft: 0 }}>
                    <li><Link to="/privacy">Privacy Policy</Link></li>
                    <li><Link to="/terms">Terms of Service</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
