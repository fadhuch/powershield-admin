import React from 'react';
import { Link } from 'react-router-dom';

const SmokeExtractionPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="subheader">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Smoke Extraction System</h1>
              <ul className="crumb">
                <li><Link to="/">Home</Link></li>
                <li className="sep"></li>
                <li><Link to="/services">Services</Link></li>
                <li className="sep"></li>
                <li>Smoke Extraction System</li>
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
                  src="/assets/images/services/pic_1.jpg" 
                  className="img-responsive mb40" 
                  alt="Smoke Extraction Systems"
                />
                
                <h2>Advanced Smoke Extraction Systems</h2>
                <p className="lead">
                  An essential fire safety solution designed to remove smoke and harmful combustion 
                  gases from a building during a fire, comprising a network of fans and ducts that 
                  enhance safety by improving air quality and visibility.
                </p>
                
                <p>
                  Power Shield Technical Service LLC specializes in designing and installing smoke 
                  extraction systems that enhance fire safety by improving air quality and visibility, 
                  making it easier for occupants to evacuate and for firefighters to control the blaze.
                </p>

                <div className="spacer-single"></div>

                <h3>Our Smoke Extraction Services</h3>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="list-style-1">
                      <li>Natural Smoke Ventilation</li>
                      <li>Mechanical Smoke Extraction</li>
                      <li>Smoke Control Systems</li>
                      <li>Pressurization Systems</li>
                      <li>Fire Dampers & Curtains</li>
                      <li>Emergency Ventilation Systems</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="list-style-1">
                      <li>Smoke Detection Integration</li>
                      <li>Automatic Activation Systems</li>
                      <li>Manual Override Controls</li>
                      <li>Smoke Shaft Design</li>
                      <li>Roof Ventilators</li>
                      <li>System Testing & Commissioning</li>
                    </ul>
                  </div>
                </div>

                <div className="spacer-single"></div>

                <h3>System Components</h3>
                <div className="row">
                  <div className="col-md-4 mb30">
                    <div className="feature-box">
                      <div className="icon">
                        <i className="fa fa-wind id-color"></i>
                      </div>
                      <div className="text">
                        <h4>Extraction Fans</h4>
                        <p>High-capacity fans designed to remove smoke and hot gases efficiently.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 mb30">
                    <div className="feature-box">
                      <div className="icon">
                        <i className="fa fa-arrows id-color"></i>
                      </div>
                      <div className="text">
                        <h4>Ductwork Systems</h4>
                        <p>Fire-rated ductwork designed to maintain integrity during fire conditions.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 mb30">
                    <div className="feature-box">
                      <div className="icon">
                        <i className="fa fa-cog id-color"></i>
                      </div>
                      <div className="text">
                        <h4>Control Systems</h4>
                        <p>Intelligent control systems for automatic and manual smoke extraction activation.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="spacer-single"></div>

                <h3>Benefits of Smoke Extraction</h3>
                <div className="row">
                  <div className="col-md-6">
                    <h4>Life Safety</h4>
                    <p>
                      Removes dangerous smoke and toxic gases, providing clear evacuation routes 
                      and improving visibility for safe exit.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <h4>Property Protection</h4>
                    <p>
                      Reduces smoke damage to building contents and structure, minimizing 
                      property loss and cleanup costs.
                    </p>
                  </div>
                </div>

                <div className="spacer-single"></div>

                <div className="row">
                  <div className="col-md-6">
                    <h4>Fire Service Access</h4>
                    <p>
                      Improves conditions for firefighters, allowing better access and 
                      more effective fire suppression operations.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <h4>Code Compliance</h4>
                    <p>
                      Meets UAE Civil Defence requirements and international fire safety 
                      standards for building compliance.
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
                    <li><Link to="/services/fire-fighting">Fire Fighting Works</Link></li>
                    <li><Link to="/services/smoke-extraction" className="active">Smoke Extraction System</Link></li>
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
                  <p>Need smoke extraction systems? Contact us for professional design and installation.</p>
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
              <h2>Enhance Fire Safety with Smoke Extraction</h2>
              <p>
                Improve evacuation safety and reduce property damage with our professional 
                smoke extraction systems. Contact us for expert consultation.
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

export default SmokeExtractionPage;
