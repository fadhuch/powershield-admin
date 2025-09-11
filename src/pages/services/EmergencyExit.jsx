import React from 'react';
import { Link } from 'react-router-dom';

const EmergencyExitPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="subheader">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Emergency Exit Light Systems</h1>
              <ul className="crumb">
                <li><Link to="/">Home</Link></li>
                <li className="sep"></li>
                <li><Link to="/services">Services</Link></li>
                <li className="sep"></li>
                <li>Emergency Exit Light Systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="service-detail">
                <img 
                  src="/assets/images/services/exitLight.jpg" 
                  className="img-responsive mb40" 
                  alt="Emergency Exit Light Systems"
                />
                
                <h2>Professional Emergency Exit Lighting</h2>
                <p className="lead">
                  Power Shield emergency exit lighting systems ensure clear visibility and guidance 
                  during emergencies, particularly in cases of fire or power failure. These lights 
                  remain operational even when the main power supply is disrupted.
                </p>
                
                <p>
                  Our emergency exit lighting systems provide a well-lit path for safe evacuation, 
                  meeting UAE Civil Defence requirements and international safety standards. We 
                  design, install, and maintain systems that ensure occupant safety during emergencies.
                </p>

                <div className="spacer-single"></div>

                <h3>Our Emergency Lighting Services</h3>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="list-style-1">
                      <li>LED Emergency Exit Signs</li>
                      <li>Emergency Lighting Systems</li>
                      <li>Battery Backup Systems</li>
                      <li>Self-Testing Exit Lights</li>
                      <li>Photoluminescent Signs</li>
                      <li>Emergency Path Marking</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="list-style-1">
                      <li>Central Battery Systems</li>
                      <li>Maintained Lighting</li>
                      <li>Non-Maintained Lighting</li>
                      <li>Combined Emergency Lighting</li>
                      <li>Escape Route Lighting</li>
                      <li>Area Lighting Systems</li>
                    </ul>
                  </div>
                </div>

                <div className="spacer-single"></div>

                <h3>System Features</h3>
                <div className="row">
                  <div className="col-md-4 mb30">
                    <div className="feature-box">
                      <div className="icon">
                        <i className="fa fa-sign-out id-color"></i>
                      </div>
                      <div className="text">
                        <h4>Exit Signs</h4>
                        <p>Illuminated exit signs with directional arrows and multilingual text options.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 mb30">
                    <div className="feature-box">
                      <div className="icon">
                        <i className="fa fa-battery-full id-color"></i>
                      </div>
                      <div className="text">
                        <h4>Battery Backup</h4>
                        <p>Reliable battery backup systems ensuring continuous operation during power outages.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 mb30">
                    <div className="feature-box">
                      <div className="icon">
                        <i className="fa fa-lightbulb-o id-color"></i>
                      </div>
                      <div className="text">
                        <h4>LED Technology</h4>
                        <p>Energy-efficient LED lights with long life and low maintenance requirements.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="spacer-single"></div>

                <h3>Types of Emergency Lighting</h3>
                <div className="row">
                  <div className="col-md-6">
                    <h4>Escape Route Lighting</h4>
                    <p>
                      Provides illumination along designated escape routes to enable safe 
                      movement of occupants towards emergency exits.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <h4>Open Area Lighting</h4>
                    <p>
                      Anti-panic lighting in large areas to prevent panic and allow 
                      occupants to reach familiar areas with escape route lighting.
                    </p>
                  </div>
                </div>

                <div className="spacer-single"></div>

                <div className="row">
                  <div className="col-md-6">
                    <h4>High Risk Task Area</h4>
                    <p>
                      Specialized lighting for areas where potentially dangerous processes 
                      need to be safely shut down in an emergency.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <h4>Standby Lighting</h4>
                    <p>
                      Enables normal activities to continue or restart safely during 
                      mains power supply interruption.
                    </p>
                  </div>
                </div>

                <div className="spacer-single"></div>

                <h3>Compliance & Standards</h3>
                <p>
                  All our emergency lighting systems comply with UAE Civil Defence regulations, 
                  IBC (International Building Code), NFPA 101 (Life Safety Code), and EN standards. 
                  We ensure proper luminance levels, duration of operation, and regular testing protocols.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="sidebar">
                <div className="widget">
                  <h3>Our Services</h3>
                  <ul className="service-list">
                    <li><Link to="/services/fire-alarm">Fire Alarm Works</Link></li>
                    <li><Link to="/services/fire-fighting">Fire Fighting Works</Link></li>
                    <li><Link to="/services/smoke-extraction">Smoke Extraction System</Link></li>
                    <li><Link to="/services/emergency-exit" className="active">Emergency Exit Lights</Link></li>
                    <li><Link to="/services/design-approvals">Design & Approvals</Link></li>
                    <li><Link to="/services/electrical">Electrical Works</Link></li>
                    <li><Link to="/services/plumbing">Plumbing Works</Link></li>
                    <li><Link to="/services/maintenance">Maintenance Contract</Link></li>
                  </ul>
                </div>

                <div className="widget">
                  <h3>Contact Information</h3>
                  <div className="contact-widget">
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
                </div>

                <div className="widget">
                  <h3>Get A Quote</h3>
                  <p>Need emergency lighting systems? Contact us for professional consultation and installation.</p>
                  <Link to="/contact" className="btn btn-primary">
                    Request Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="call-to-action text-light" data-stellar-background-ratio=".2">
        <div className="container">
          <div className="row">
            <div className="col-md-8 wow fadeInLeft" data-wow-delay=".2s">
              <h2>Ensure Safe Evacuation with Emergency Lighting</h2>
              <p>
                Protect your occupants with reliable emergency exit lighting systems. 
                Contact us for Civil Defence approved solutions.
              </p>
            </div>
            <div className="col-md-4 text-right wow fadeInRight" data-wow-delay=".4s">
              <Link to="/contact" className="btn-line">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EmergencyExitPage;
