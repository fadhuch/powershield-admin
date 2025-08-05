import React from 'react';
import { Link } from 'react-router-dom';

const MaintenancePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="subheader">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Annual Maintenance Contract</h1>
              <ul className="crumb">
                <li><Link to="/">Home</Link></li>
                <li className="sep">/</li>
                <li><Link to="/services">Services</Link></li>
                <li className="sep">/</li>
                <li>Annual Maintenance Contract</li>
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
                  src="/assets/images/services/pic_6.jpg" 
                  className="img-responsive mb40" 
                  alt="Annual Maintenance Contract"
                />
                
                <h2>Comprehensive Maintenance Services</h2>
                <p className="lead">
                  Our AMC services are backed by a team of highly trained and technically skilled 
                  professionals, ensuring that your MEP systems, fire alarms, and firefighting 
                  equipment remain in top condition year-round.
                </p>
                
                <p>
                  Power Shield Technical Service LLC provides complete annual maintenance contracts 
                  that ensure your building's essential fire protection and safety systems are 
                  safeguarded and fully operational at all times. With our expert maintenance 
                  support, you can trust that your systems will perform when needed most.
                </p>

                <div className="spacer-single"></div>

                <h3>Our Maintenance Services</h3>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="list-style-1">
                      <li>Preventive Maintenance</li>
                      <li>Emergency Repair Services</li>
                      <li>System Testing & Inspection</li>
                      <li>Equipment Replacement</li>
                      <li>Performance Monitoring</li>
                      <li>24/7 Technical Support</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="list-style-1">
                      <li>Fire Alarm System Maintenance</li>
                      <li>Sprinkler System Service</li>
                      <li>Emergency Light Testing</li>
                      <li>Smoke Extraction Service</li>
                      <li>Electrical System Maintenance</li>
                      <li>Plumbing System Service</li>
                    </ul>
                  </div>
                </div>

                <div className="spacer-single"></div>

                <h3>Maintenance Programs</h3>
                <div className="row">
                  <div className="col-md-4 mb30">
                    <div className="feature-box">
                      <div className="icon">
                        <i className="fa fa-calendar id-color"></i>
                      </div>
                      <div className="text">
                        <h4>Scheduled Maintenance</h4>
                        <p>Regular maintenance visits according to manufacturer and Civil Defence requirements.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 mb30">
                    <div className="feature-box">
                      <div className="icon">
                        <i className="fa fa-phone id-color"></i>
                      </div>
                      <div className="text">
                        <h4>Emergency Response</h4>
                        <p>24/7 emergency repair services with rapid response times for critical systems.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 mb30">
                    <div className="feature-box">
                      <div className="icon">
                        <i className="fa fa-chart-line id-color"></i>
                      </div>
                      <div className="text">
                        <h4>Performance Reports</h4>
                        <p>Detailed maintenance reports and system performance analysis with recommendations.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="spacer-single"></div>

                <h3>Fire Protection System Maintenance</h3>
                <p>
                  Our specialized maintenance programs for fire protection systems ensure compliance 
                  with UAE Civil Defence regulations and optimal system performance. We maintain all 
                  types of fire safety equipment according to manufacturer specifications and regulatory requirements.
                </p>

                <div className="row">
                  <div className="col-md-6">
                    <h4>Fire Alarm Maintenance</h4>
                    <ul className="list-style-2">
                      <li>Detector cleaning and calibration</li>
                      <li>Control panel testing</li>
                      <li>Battery replacement</li>
                      <li>Notification device testing</li>
                      <li>System documentation updates</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h4>Sprinkler System Service</h4>
                    <ul className="list-style-2">
                      <li>Valve and sprinkler head inspection</li>
                      <li>Water flow testing</li>
                      <li>Pump testing and maintenance</li>
                      <li>Pipe pressure testing</li>
                      <li>Tank level monitoring</li>
                    </ul>
                  </div>
                </div>

                <div className="spacer-single"></div>

                <h3>AMC Benefits</h3>
                <div className="row">
                  <div className="col-md-6">
                    <h4>Cost Savings</h4>
                    <p>
                      Preventive maintenance reduces costly breakdowns and extends equipment 
                      life, providing significant long-term cost savings.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <h4>Compliance Assurance</h4>
                    <p>
                      Regular maintenance ensures continuous compliance with Civil Defence 
                      regulations and safety standards.
                    </p>
                  </div>
                </div>

                <div className="spacer-single"></div>

                <div className="row">
                  <div className="col-md-6">
                    <h4>System Reliability</h4>
                    <p>
                      Regular maintenance and testing ensure your fire protection systems 
                      will operate reliably when needed most.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <h4>Priority Service</h4>
                    <p>
                      AMC customers receive priority scheduling for both routine maintenance 
                      and emergency repair services.
                    </p>
                  </div>
                </div>

                <div className="spacer-single"></div>

                <h3>Maintenance Documentation</h3>
                <p>
                  We provide comprehensive maintenance documentation including service reports, 
                  test certificates, compliance documentation, and maintenance schedules. All 
                  documentation is maintained according to Civil Defence and insurance requirements.
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
                    <li><Link to="/services/emergency-exit">Emergency Exit Lights</Link></li>
                    <li><Link to="/services/design-approvals">Design & Approvals</Link></li>
                    <li><Link to="/services/electrical">Electrical Works</Link></li>
                    <li><Link to="/services/plumbing">Plumbing Works</Link></li>
                    <li><Link to="/services/maintenance" className="active">Maintenance Contract</Link></li>
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
                  <p>Need annual maintenance services? Contact us for a customized maintenance contract.</p>
                  <Link to="/contact" className="btn btn-primary">
                    Request Quote
                  </Link>
                </div>

                <div className="widget">
                  <h3>AMC Features</h3>
                  <ul className="list-style-1">
                    <li>Scheduled Maintenance Visits</li>
                    <li>Emergency Repair Services</li>
                    <li>Priority Customer Support</li>
                    <li>Detailed Service Reports</li>
                    <li>Compliance Documentation</li>
                    <li>Equipment Performance Monitoring</li>
                  </ul>
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
              <h2>Protect Your Investment with Regular Maintenance</h2>
              <p>
                Ensure your fire protection systems remain reliable and compliant with our 
                comprehensive annual maintenance contracts. Contact us today.
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

export default MaintenancePage;
