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
                <li className="sep"></li>
                <li><Link to="/services">Services</Link></li>
                <li className="sep"></li>
                <li>Fire Alarm Works</li>
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
                  src="/assets/images/services/fire_alarm.jpg" 
                  className="img-responsive mb40" 
                  alt="Fire Alarm Systems"
                />

                <h2>Professional Fire Alarm Works</h2>
                <p className="lead">
                  Professional fire alarm system installation, maintenance, and monitoring services to protect your property and ensure compliance with UAE fire safety regulations.


                </p>

                <div className="col-md-12" style={{paddingLeft: '0px'}}>
                  <h3>Our Fire Alarm Services</h3>
                  <p>
                    At Power Shield Technical Service LLC, we specialize in comprehensive fire alarm 
                    system solutions designed to provide early detection and warning in case of fire 
                    emergencies. Our certified technicians ensure that your fire alarm systems meet 
                    all UAE Civil Defense requirements and international standards.
                  </p>

                  <h4>Key Features of Our Fire Alarm Systems:</h4>
                  <ul className="ul-style-2">
                    <li><strong>Conventional Fire Alarm Systems:</strong> Cost-effective solutions for smaller buildings and facilities</li>
                    <li><strong>Addressable Fire Alarm Systems:</strong> Advanced systems with precise location identification</li>
                    <li><strong>Wireless Fire Alarm Systems:</strong> Flexible installation options for heritage or complex buildings</li>
                    <li><strong>Integration Capabilities:</strong> Seamless integration with HVAC, lighting, and security systems</li>
                    <li><strong>Remote Monitoring:</strong> 24/7 monitoring and alert systems for enhanced safety</li>
                    <li><strong>Voice Evacuation Systems:</strong> Clear audio instructions during emergency situations</li>
                  </ul>

                  <h4 style={{marginTop: '40px'}}>Detection Technologies We Install:</h4>
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="ul-style-2">
                        <li>Smoke Detectors (Photoelectric & Ionization)</li>
                        <li>Heat Detectors (Fixed & Rate-of-Rise)</li>
                        <li>Flame Detectors (UV & IR)</li>
                        <li>Multi-Sensor Detectors</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="ul-style-2">
                        <li>Gas Detectors</li>
                        <li>Beam Detectors</li>
                        <li>Aspirating Smoke Detection (ASD)</li>
                        <li>Manual Call Points</li>
                      </ul>
                    </div>
                  </div>

                  
                </div>

                <div className="spacer-single"></div>


              {/* Why Choose Us */}
              <div className="row mt-4" style={{marginTop: '40px'}}>
                <div className="col-md-12">
                  <h3>Why Choose Power Shield for Fire Alarm Systems?</h3>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="feature-box">
                        <i className="icon-shield"></i>
                        <div className="text">
                          <h4>Certified Professionals</h4>
                          <p>Our technicians are certified and regularly trained on the latest fire alarm technologies and UAE regulations.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="feature-box">
                        <i className="icon-tools"></i>
                        <div className="text">
                          <h4>Quality Equipment</h4>
                          <p>We use only premium fire alarm equipment from leading international manufacturers with proven reliability.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="feature-box">
                        <i className="icon-phone"></i>
                        <div className="text">
                          <h4>24/7 Support</h4>
                          <p>Our emergency response team is available round-the-clock for urgent fire alarm system issues.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="feature-box">
                        <i className="icon-documents"></i>
                        <div className="text">
                          <h4>Compliance Assurance</h4>
                          <p>We ensure full compliance with UAE Civil Defense requirements and assist with all approval processes.</p>
                        </div>
                      </div>
                    </div>
                  </div>
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
                  <p>Need a fire alarm system quote? Contact us for professional consultation and installation.</p>
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
              <h2>Need a Fire Alarm System Quote?</h2>
              <p>
                Contact our experts today for a comprehensive fire alarm system assessment and customized solution for your property.
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

export default FireAlarmPage;
