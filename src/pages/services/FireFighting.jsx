import React from 'react';
import { Link } from 'react-router-dom';

const FireFightingPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="subheader">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Fire Fighting Works</h1>
              <ul className="crumb">
                <li><Link to="/">Home</Link></li>
                <li className="sep"></li>
                <li><Link to="/services">Services</Link></li>
                <li className="sep"></li>
                <li>Fire Fighting Works</li>
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
                  src="/assets/images/services/pic_5.jpg" 
                  className="img-responsive mb40" 
                  alt="Fire Fighting Systems"
                />
                
                <h2>Professional Fire Fighting Systems</h2>
                <p className="lead">
                  Comprehensive fire fighting systems including sprinklers, fire hose reels, and suppression 
                  systems for complete fire protection. Our systems are designed to detect, control, and 
                  extinguish fires effectively.
                </p>
                
                <p>
                  Power Shield Technical Service LLC provides complete fire fighting solutions that meet 
                  UAE Civil Defence standards. From design to installation and maintenance, we ensure 
                  your property is equipped with reliable fire suppression systems.
                </p>

                <div className="spacer-single"></div>

                <h3>Our Fire Fighting Services</h3>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="list-style-1">
                      <li>Fire Sprinkler Systems</li>
                      <li>Fire Hose Reels</li>
                      <li>Fire Extinguisher Supply & Installation</li>
                      <li>Fire Suppression Systems</li>
                      <li>Water Mist Systems</li>
                      <li>Foam Systems</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="list-style-1">
                      <li>Deluge Systems</li>
                      <li>Pre-action Systems</li>
                      <li>Dry Pipe Systems</li>
                      <li>Wet Pipe Systems</li>
                      <li>Fire Pumps & Boosters</li>
                      <li>Fire Fighting Water Tanks</li>
                    </ul>
                  </div>
                </div>

                <div className="spacer-single"></div>

                <h3>System Types</h3>
                <div className="row">
                  <div className="col-md-4 mb30">
                    <div className="feature-box">
                      <div className="icon">
                        <i className="fa fa-tint id-color"></i>
                      </div>
                      <div className="text">
                        <h4>Sprinkler Systems</h4>
                        <p>Automatic sprinkler systems for immediate fire suppression response.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 mb30">
                    <div className="feature-box">
                      <div className="icon">
                        <i className="fa fa-fire-extinguisher id-color"></i>
                      </div>
                      <div className="text">
                        <h4>Fire Extinguishers</h4>
                        <p>Portable fire extinguishers for different fire classes and applications.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 mb30">
                    <div className="feature-box">
                      <div className="icon">
                        <i className="fa fa-gear id-color"></i>
                      </div>
                      <div className="text">
                        <h4>Hose Reels</h4>
                        <p>Fire hose reels for manual fire fighting and emergency response.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="spacer-single"></div>

                <h3>Our Expertise</h3>
                <div className="row">
                  <div className="col-md-6">
                    <h4>Design & Engineering</h4>
                    <p>
                      Our expert engineers design fire fighting systems tailored to your building's 
                      specific requirements and Civil Defence regulations.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <h4>Installation & Testing</h4>
                    <p>
                      Professional installation and comprehensive testing ensure your fire fighting 
                      systems operate reliably when needed most.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="sidebar">
                <div className="widget">
                  <h3>Our Services</h3>
                  <ul className="service-list">
                    <li><Link to="/services/fire-alarm">Fire Alarm Works</Link></li>
                    <li><Link to="/services/fire-fighting" className="active">Fire Fighting Works</Link></li>
                    <li><Link to="/services/smoke-extraction">Smoke Extraction System</Link></li>
                    <li><Link to="/services/emergency-exit">Emergency Exit Lights</Link></li>
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
                  <p>Need fire fighting systems for your property? Contact us for professional consultation.</p>
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
              <h2>Protect Your Property with Fire Fighting Systems</h2>
              <p>
                Ensure maximum fire protection with our professionally designed and installed 
                fire fighting systems. Contact us for expert consultation.
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

export default FireFightingPage;
