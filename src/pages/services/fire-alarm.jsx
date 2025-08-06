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

              {/* Service Image */}
              <div className="row mb-4">
                <div className="col-md-12">
                  <img 
                    src="/assets/images/services/pic_4.jpg" 
                    alt="Fire Alarm Systems" 
                    className="img-responsive"
                  />
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
                    <li><strong>Conventional Fire Alarm Systems:</strong> Cost-effective solutions for smaller buildings and facilities</li>
                    <li><strong>Addressable Fire Alarm Systems:</strong> Advanced systems with precise location identification</li>
                    <li><strong>Wireless Fire Alarm Systems:</strong> Flexible installation options for heritage or complex buildings</li>
                    <li><strong>Integration Capabilities:</strong> Seamless integration with HVAC, lighting, and security systems</li>
                    <li><strong>Remote Monitoring:</strong> 24/7 monitoring and alert systems for enhanced safety</li>
                    <li><strong>Voice Evacuation Systems:</strong> Clear audio instructions during emergency situations</li>
                  </ul>

                  <h4>Detection Technologies We Install:</h4>
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

                  <h4>Industries We Serve:</h4>
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="ul-style-2">
                        <li>Commercial Buildings</li>
                        <li>Residential Complexes</li>
                        <li>Industrial Facilities</li>
                        <li>Healthcare Facilities</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="ul-style-2">
                        <li>Educational Institutions</li>
                        <li>Hotels & Hospitality</li>
                        <li>Shopping Malls</li>
                        <li>Warehouses & Storage</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Process Section */}
              <div className="row mt-4">
                <div className="col-md-12">
                  <h3>Our Installation Process</h3>
                  <div className="de_tab">
                    <ul className="de_nav">
                      <li className="active"><span>1. Site Assessment</span></li>
                      <li><span>2. System Design</span></li>
                      <li><span>3. Installation</span></li>
                      <li><span>4. Testing & Commissioning</span></li>
                      <li><span>5. Maintenance</span></li>
                    </ul>

                    <div className="de_tab_content">
                      <div id="tab1" className="tab_content_element">
                        <p>
                          Our certified engineers conduct thorough site assessments to understand your 
                          specific fire safety requirements, building layout, occupancy types, and 
                          potential fire hazards. We evaluate existing infrastructure and determine 
                          the most effective fire alarm system configuration.
                        </p>
                      </div>

                      <div id="tab2" className="tab_content_element">
                        <p>
                          Based on the site assessment, we create detailed system designs that comply 
                          with UAE Civil Defense regulations, NFPA standards, and BS EN standards. 
                          Our designs include device placement, zone configurations, control panel 
                          specifications, and integration requirements.
                        </p>
                      </div>

                      <div id="tab3" className="tab_content_element">
                        <p>
                          Our experienced technicians install all fire alarm components using high-quality 
                          materials and following manufacturer specifications. We ensure minimal disruption 
                          to your operations while maintaining the highest safety standards throughout 
                          the installation process.
                        </p>
                      </div>

                      <div id="tab4" className="tab_content_element">
                        <p>
                          After installation, we conduct comprehensive testing of all system components, 
                          including detectors, control panels, notification devices, and communication 
                          links. We provide complete commissioning documentation and obtain necessary 
                          approvals from local authorities.
                        </p>
                      </div>

                      <div id="tab5" className="tab_content_element">
                        <p>
                          We offer comprehensive maintenance packages to ensure your fire alarm system 
                          operates reliably 24/7. Our maintenance services include regular inspections, 
                          testing, cleaning, battery replacement, and immediate response to system faults.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="row mt-4">
                <div className="col-md-12">
                  <h3>Why Choose Power Shield for Fire Alarm Systems?</h3>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="feature-box">
                        <i className="icon-badge"></i>
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

              {/* CTA Section */}
              <div className="row mt-4">
                <div className="col-md-12">
                  <div className="call-to-action bg-color text-center">
                    <h3>Need a Fire Alarm System Quote?</h3>
                    <p>Contact our experts today for a comprehensive fire alarm system assessment and customized solution for your property.</p>
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
                  <div className="contact-info">
                    <i className="icon-location"></i>
                    <span>Umm Al Quwain, UAE</span>
                  </div>
                </div>
              </div>

              <div className="widget">
                <h4>Download Brochure</h4>
                <p>Download our comprehensive fire alarm systems brochure for detailed information.</p>
                <a href="#" className="btn-main btn-fullwidth">Download PDF</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FireAlarmPage;
