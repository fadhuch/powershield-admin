import React from 'react';
import { Link } from 'react-router-dom';

const ElectricalPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="subheader">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Electrical Works</h1>
              <ul className="crumb">
                <li><Link to="/">Home</Link></li>
                <li className="sep"></li>
                <li><Link to="/services">Services</Link></li>
                <li className="sep"></li>
                <li>Electrical Works</li>
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
                  src="/assets/images/services/pic_2.jpg" 
                  className="img-responsive mb40" 
                  alt="Electrical Works"
                />
                
                <h2>Professional Electrical Systems</h2>
                <p className="lead">
                  Electrical systems form the backbone of modern infrastructure, ensuring a continuous, 
                  safe, and reliable power supply for all aspects of a building. They energize lighting, 
                  appliances, and equipment while supporting critical fire protection systems.
                </p>
                
                <p>
                  Power Shield Technical Service LLC provides comprehensive electrical installation and 
                  maintenance services, with special expertise in fire alarm and emergency systems electrical 
                  works. Our certified electricians ensure all installations meet UAE electrical codes and 
                  Civil Defence requirements.
                </p>

                <div className="spacer-single"></div>

                <h3>Our Electrical Services</h3>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="list-style-1">
                      <li>Power Distribution Systems</li>
                      <li>Lighting Design & Installation</li>
                      <li>Emergency Power Systems</li>
                      <li>Fire Alarm Electrical Works</li>
                      <li>Security System Wiring</li>
                      <li>Building Automation Systems</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="list-style-1">
                      <li>UPS & Generator Systems</li>
                      <li>Cable Tray & Conduit Installation</li>
                      <li>Panel Board Installation</li>
                      <li>Motor Control Centers</li>
                      <li>Electrical Testing & Commissioning</li>
                      <li>Maintenance & Troubleshooting</li>
                    </ul>
                  </div>
                </div>

                <div className="spacer-single"></div>

                <h3>Electrical Systems</h3>
                <div className="row">
                  <div className="col-md-4 mb30">
                    <div className="feature-box">
                      <div className="icon">
                        <i className="fa fa-bolt id-color"></i>
                      </div>
                      <div className="text">
                        <h4>Power Distribution</h4>
                        <p>Main electrical panels, sub-panels, and distribution systems for reliable power supply.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 mb30">
                    <div className="feature-box">
                      <div className="icon">
                        <i className="fa fa-lightbulb-o id-color"></i>
                      </div>
                      <div className="text">
                        <h4>Lighting Systems</h4>
                        <p>Interior and exterior lighting including emergency and exit lighting systems.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 mb30">
                    <div className="feature-box">
                      <div className="icon">
                        <i className="fa fa-shield id-color"></i>
                      </div>
                      <div className="text">
                        <h4>Safety Systems</h4>
                        <p>Fire alarm wiring, emergency power, and safety system electrical installations.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="spacer-single"></div>

                <h3>Fire Protection Electrical</h3>
                <p>
                  Our specialty lies in electrical works for fire protection systems. We provide 
                  dedicated electrical installations for fire alarm panels, notification devices, 
                  emergency lighting, and smoke extraction systems, ensuring reliable operation 
                  during emergencies.
                </p>

                <div className="row">
                  <div className="col-md-6">
                    <h4>Fire Alarm Wiring</h4>
                    <p>
                      Specialized wiring for fire alarm systems including addressable and 
                      conventional systems with proper cable specifications and routing.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <h4>Emergency Power</h4>
                    <p>
                      Battery backup systems, UPS installations, and generator connections 
                      for continuous power to critical fire safety systems.
                    </p>
                  </div>
                </div>

                <div className="spacer-single"></div>

                <h3>Quality & Compliance</h3>
                <p>
                  All electrical installations comply with UAE Electrical Code, ADWEA regulations, 
                  IEC standards, and Civil Defence requirements. We ensure proper grounding, circuit 
                  protection, and safety measures for all electrical systems.
                </p>

                <div className="row">
                  <div className="col-md-6">
                    <h4>Certified Electricians</h4>
                    <p>
                      Our team consists of licensed electricians with expertise in commercial 
                      and industrial electrical installations.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <h4>Testing & Commissioning</h4>
                    <p>
                      Comprehensive testing and commissioning of all electrical systems to 
                      ensure proper operation and safety compliance.
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
                    <li><Link to="/services/smoke-extraction">Smoke Extraction System</Link></li>
                    <li><Link to="/services/emergency-exit">Emergency Exit Lights</Link></li>
                    <li><Link to="/services/design-approvals">Design & Approvals</Link></li>
                    <li><Link to="/services/electrical" className="active">Electrical Works</Link></li>
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
                  <p>Need electrical installation services? Contact us for professional consultation.</p>
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
              <h2>Need Professional Electrical Services?</h2>
              <p>
                Get reliable electrical installations and fire safety system wiring from 
                certified electricians. Contact us for expert service.
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

export default ElectricalPage;
