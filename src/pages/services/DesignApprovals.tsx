import React from 'react';
import { Link } from 'react-router-dom';

const DesignApprovalsPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="subheader">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Design Drawings & Approvals</h1>
              <ul className="crumb">
                <li><Link to="/">Home</Link></li>
                <li className="sep">/</li>
                <li><Link to="/services">Services</Link></li>
                <li className="sep">/</li>
                <li>Design Drawings & Approvals</li>
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
                  alt="Design Drawings & Approvals"
                />
                
                <h2>Professional Design & Civil Defence Approvals</h2>
                <p className="lead">
                  We create detailed, high-quality fire protection system plans tailored to your 
                  project's specific needs and technical requirements, ensuring compliance with 
                  all safety regulations.
                </p>
                
                <p>
                  Power Shield Technical Service LLC handles the entire approval process with Civil Defence, 
                  ensuring that all drawings meet the necessary standards and receive official authorization 
                  efficiently. Our expertise in fire protection systems guarantees a smooth and hassle-free 
                  approval process.
                </p>

                <div className="spacer-single"></div>

                <h3>Our Design & Approval Services</h3>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="list-style-1">
                      <li>Fire Protection System Drawings</li>
                      <li>Civil Defence Approvals</li>
                      <li>Technical Specifications</li>
                      <li>Compliance Documentation</li>
                      <li>As-Built Drawings</li>
                      <li>System Commissioning Reports</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="list-style-1">
                      <li>Shop Drawings</li>
                      <li>Installation Drawings</li>
                      <li>System Layouts</li>
                      <li>Equipment Schedules</li>
                      <li>Hydraulic Calculations</li>
                      <li>Permit Applications</li>
                    </ul>
                  </div>
                </div>

                <div className="spacer-single"></div>

                <h3>Design Process</h3>
                <div className="row">
                  <div className="col-md-3 text-center mb30">
                    <div className="step-box">
                      <div className="step-number">01</div>
                      <h4>Site Assessment</h4>
                      <p>Comprehensive evaluation of building requirements and fire safety needs.</p>
                    </div>
                  </div>

                  <div className="col-md-3 text-center mb30">
                    <div className="step-box">
                      <div className="step-number">02</div>
                      <h4>System Design</h4>
                      <p>Creation of detailed fire protection system drawings and specifications.</p>
                    </div>
                  </div>

                  <div className="col-md-3 text-center mb30">
                    <div className="step-box">
                      <div className="step-number">03</div>
                      <h4>Civil Defence Submission</h4>
                      <p>Professional submission and follow-up with Civil Defence authorities.</p>
                    </div>
                  </div>

                  <div className="col-md-3 text-center mb30">
                    <div className="step-box">
                      <div className="step-number">04</div>
                      <h4>Approval & Documentation</h4>
                      <p>Obtaining official approvals and providing complete documentation package.</p>
                    </div>
                  </div>
                </div>

                <div className="spacer-single"></div>

                <h3>Drawing Types</h3>
                <div className="row">
                  <div className="col-md-6">
                    <h4>Fire Alarm System Drawings</h4>
                    <p>
                      Detailed layouts showing detector placement, control panel locations, 
                      notification devices, and wiring diagrams for fire alarm systems.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <h4>Sprinkler System Drawings</h4>
                    <p>
                      Comprehensive sprinkler layouts with hydraulic calculations, pipe sizing, 
                      coverage areas, and water supply requirements.
                    </p>
                  </div>
                </div>

                <div className="spacer-single"></div>

                <div className="row">
                  <div className="col-md-6">
                    <h4>Smoke Extraction Drawings</h4>
                    <p>
                      Technical drawings for smoke control systems including fan locations, 
                      ductwork layouts, and control sequences.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <h4>Emergency Lighting Plans</h4>
                    <p>
                      Exit lighting layouts showing coverage areas, battery backup locations, 
                      and emergency evacuation route illumination.
                    </p>
                  </div>
                </div>

                <div className="spacer-single"></div>

                <h3>Compliance Standards</h3>
                <p>
                  All our designs comply with UAE Civil Defence regulations, NFPA standards, 
                  British Standards (BS), and local building codes. We ensure that every drawing 
                  meets the required safety standards and passes regulatory inspections on the first submission.
                </p>

                <div className="row">
                  <div className="col-md-6">
                    <h4>Benefits of Our Service</h4>
                    <ul className="list-style-1">
                      <li>Faster approval times</li>
                      <li>Reduced revision cycles</li>
                      <li>Expert regulatory knowledge</li>
                      <li>Complete documentation package</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h4>What We Deliver</h4>
                    <ul className="list-style-1">
                      <li>CAD drawings in multiple formats</li>
                      <li>Detailed specifications</li>
                      <li>Calculation reports</li>
                      <li>Approved permits and certificates</li>
                    </ul>
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
                    <li><Link to="/services/smoke-extraction">Smoke Extraction System</Link></li>
                    <li><Link to="/services/emergency-exit">Emergency Exit Lights</Link></li>
                    <li><Link to="/services/design-approvals" className="active">Design & Approvals</Link></li>
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
                  <p>Need design drawings and Civil Defence approvals? Contact us for professional service.</p>
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
              <h2>Get Your Fire Protection Drawings Approved</h2>
              <p>
                Streamline your approval process with our expert design and Civil Defence 
                approval services. Contact us for professional assistance.
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

export default DesignApprovalsPage;
