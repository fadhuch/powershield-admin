import React from 'react';
import { Link } from 'react-router-dom';

const PlumbingPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="subheader">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Plumbing Works</h1>
              <ul className="crumb">
                <li><Link to="/">Home</Link></li>
                <li className="sep">/</li>
                <li><Link to="/services">Services</Link></li>
                <li className="sep">/</li>
                <li>Plumbing Works</li>
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
                  alt="Plumbing Works"
                />
                
                <h2>Professional Plumbing Systems</h2>
                <p className="lead">
                  Plumbing systems are essential for maintaining a healthy and functional building 
                  environment. They provide a dependable supply of clean water for drinking, cooking, 
                  and sanitation, while ensuring effective removal of wastewater.
                </p>
                
                <p>
                  Power Shield Technical Service LLC provides comprehensive plumbing solutions with 
                  special expertise in fire fighting water supply systems. Our experienced plumbers 
                  ensure all installations meet UAE plumbing codes and support both routine usage 
                  and emergency fire protection scenarios.
                </p>

                <div className="spacer-single"></div>

                <h3>Our Plumbing Services</h3>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="list-style-1">
                      <li>Water Supply Systems</li>
                      <li>Drainage & Sewage Systems</li>
                      <li>Fire Fighting Water Supply</li>
                      <li>Sanitary Installations</li>
                      <li>Hot Water Systems</li>
                      <li>Plumbing Maintenance</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="list-style-1">
                      <li>Water Tank Installation</li>
                      <li>Pump Systems</li>
                      <li>Pipe Installation & Repair</li>
                      <li>Fixture Installation</li>
                      <li>Leak Detection & Repair</li>
                      <li>Emergency Plumbing Services</li>
                    </ul>
                  </div>
                </div>

                <div className="spacer-single"></div>

                <h3>Plumbing Systems</h3>
                <div className="row">
                  <div className="col-md-4 mb30">
                    <div className="feature-box">
                      <div className="icon">
                        <i className="fa fa-tint id-color"></i>
                      </div>
                      <div className="text">
                        <h4>Water Supply</h4>
                        <p>Fresh water supply systems including tanks, pumps, and distribution networks.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 mb30">
                    <div className="feature-box">
                      <div className="icon">
                        <i className="fa fa-fire-extinguisher id-color"></i>
                      </div>
                      <div className="text">
                        <h4>Fire Water Systems</h4>
                        <p>Specialized water supply systems for fire fighting and sprinkler systems.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 mb30">
                    <div className="feature-box">
                      <div className="icon">
                        <i className="fa fa-wrench id-color"></i>
                      </div>
                      <div className="text">
                        <h4>Drainage Systems</h4>
                        <p>Wastewater and storm water drainage systems with proper ventilation.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="spacer-single"></div>

                <h3>Fire Fighting Water Supply</h3>
                <p>
                  Our expertise includes specialized plumbing for fire protection systems. We design 
                  and install dedicated water supply systems for sprinklers, fire hose reels, and 
                  fire fighting equipment, ensuring adequate water pressure and flow rates for 
                  effective fire suppression.
                </p>

                <div className="row">
                  <div className="col-md-6">
                    <h4>Fire Water Tanks</h4>
                    <p>
                      Installation of dedicated fire water storage tanks with proper capacity 
                      calculations and Civil Defence compliance.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <h4>Fire Pump Systems</h4>
                    <p>
                      Fire pump installation and testing to ensure adequate water pressure 
                      for sprinkler and hose reel systems.
                    </p>
                  </div>
                </div>

                <div className="spacer-single"></div>

                <div className="row">
                  <div className="col-md-6">
                    <h4>Sprinkler Supply Lines</h4>
                    <p>
                      Underground and above-ground piping systems designed specifically 
                      for automatic sprinkler system supply.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <h4>Hose Reel Connections</h4>
                    <p>
                      Dedicated water supply lines for fire hose reels with proper 
                      pressure and flow rate specifications.
                    </p>
                  </div>
                </div>

                <div className="spacer-single"></div>

                <h3>Quality Materials & Installation</h3>
                <p>
                  We use high-quality pipes, fittings, and fixtures from reputable manufacturers. 
                  All installations comply with UAE plumbing codes, ADWEA standards, and Civil Defence 
                  requirements for fire protection water systems.
                </p>

                <div className="row">
                  <div className="col-md-6">
                    <h4>Licensed Plumbers</h4>
                    <p>
                      Our team consists of licensed and experienced plumbers specializing 
                      in commercial and fire protection plumbing systems.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <h4>System Testing</h4>
                    <p>
                      Comprehensive pressure testing and flow testing to ensure all 
                      plumbing systems operate efficiently and safely.
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
                    <li><Link to="/services/electrical">Electrical Works</Link></li>
                    <li><Link to="/services/plumbing" className="active">Plumbing Works</Link></li>
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
                  <p>Need plumbing services or fire water systems? Contact us for professional consultation.</p>
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
              <h2>Need Professional Plumbing Services?</h2>
              <p>
                Get reliable plumbing installations and fire water supply systems from 
                experienced professionals. Contact us for expert service.
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

export default PlumbingPage;
