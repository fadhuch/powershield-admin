import React from 'react';
import { Link } from 'react-router-dom';

const FireAlarmPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="subheader">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Fire Alarm Works</h1>
              <ul className="crumb">
                <li><Link to="/">Home</Link></li>
                <li className="sep">/</li>
                <li><Link to="/services">Services</Link></li>
                <li className="sep">/</li>
                <li>Fire Alarm Works</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div id="content">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              {/* Service Overview */}
              <div className="row">
                <div className="col-md-12">
                  <h2>Fire Alarm Systems</h2>
                  <p className="lead">
                    Professional fire alarm system installation, maintenance, and monitoring services 
                    to protect your property and ensure compliance with UAE fire safety regulations.
                  </p>
                </div>
              </div>

              {/* Service Description */}
              <div className="row">
                <div className="col-md-12">
                  <h3>Our Fire Alarm Services</h3>
                  <p>
                    At Power Shield Technical Service LLC, we specialize in comprehensive fire alarm 
                    system solutions designed to provide early detection and warning in case of fire 
                    emergencies. Our certified technicians ensure that your fire alarm systems meet 
                    all UAE Civil Defense requirements and international standards.
                  </p>

                  <h4>Key Features of Our Fire Alarm Systems:</h4>
                  <ul className="ul-style-2">
                    <li><strong>Conventional Fire Alarm Systems:</strong> Cost-effective solutions for smaller buildings</li>
                    <li><strong>Addressable Fire Alarm Systems:</strong> Advanced systems with precise location identification</li>
                    <li><strong>Wireless Fire Alarm Systems:</strong> Flexible installation options</li>
                    <li><strong>Integration Capabilities:</strong> Seamless integration with other building systems</li>
                    <li><strong>Remote Monitoring:</strong> 24/7 monitoring and alert systems</li>
                    <li><strong>Voice Evacuation Systems:</strong> Clear audio instructions during emergencies</li>
                  </ul>

                  <h4>Detection Technologies We Install:</h4>
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="ul-style-2">
                        <li>Smoke Detectors</li>
                        <li>Heat Detectors</li>
                        <li>Flame Detectors</li>
                        <li>Multi-Sensor Detectors</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="ul-style-2">
                        <li>Gas Detectors</li>
                        <li>Beam Detectors</li>
                        <li>Aspirating Smoke Detection</li>
                        <li>Manual Call Points</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="row mt-4">
                <div className="col-md-12">
                  <div className="call-to-action bg-color text-center">
                    <h3>Need a Fire Alarm System Quote?</h3>
                    <p>Contact our experts today for a comprehensive assessment.</p>
                    <Link to="/contact" className="btn-main">Get Free Quote</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div id="sidebar" className="col-md-3">
              <div className="widget">
                <h4>Our Services</h4>
                <ul className="ul-style-1">
                  <li><Link to="/services/fire-alarm" className="active">Fire Alarm Works</Link></li>
                  <li><Link to="/services/fire-fighting">Fire Fighting Works</Link></li>
                  <li><Link to="/services/smoke-extraction">Smoke Extraction System</Link></li>
                  <li><Link to="/services/emergency-exit">Emergency Exit Light Systems</Link></li>
                  <li><Link to="/services/design-approvals">Design Drawings & Approvals</Link></li>
                  <li><Link to="/services/electrical">Electrical Works</Link></li>
                  <li><Link to="/services/plumbing">Plumbing Works</Link></li>
                  <li><Link to="/services/maintenance">Annual Maintenance Contract</Link></li>
                </ul>
              </div>

              <div className="widget">
                <h4>Emergency Contact</h4>
                <div className="widget-contact">
                  <div className="contact-info">
                    <i className="icon-phone"></i>
                    <span>+971 6 579 9806</span>
                  </div>
                  <div className="contact-info">
                    <i className="icon-envelope"></i>
                    <span>powershieldtechnicalservice@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FireAlarmPage;
