import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ServiceIcons from '../components/ServiceIcons';
import { buildApiUrl } from '../config/api';

const HomePage = () => {
  const [constants, setConstants] = useState({
    projectCount: '80',
    clientsCount: '50',
    companyName: 'Power Shield Technical Service LLC',
    contactEmail: 'info@powershield.ae',
    yearsExperience: 10,
    officeLocation: 'Umm Al Quwain, UAE'
  });
  const [constantsLoaded, setConstantsLoaded] = useState(false);

  useEffect(() => {
    fetchConstants();
  }, []);

  const fetchConstants = async () => {
    try {
      setConstantsLoaded(false);
      const response = await fetch(buildApiUrl('/constants'));
      const data = await response.json();
      if (data) {
        setConstants(prevConstants => ({
          ...prevConstants,
          ...data
        }));
        setConstantsLoaded(true);
      }
    } catch (error) {
      console.error('Error fetching constants:', error);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section
        id="section-hero-2"
        className="full-height text-light relative"
        data-stellar-background-ratio="0.5"
        style={{
          background: `url(/assets/images/background/bg-2.jpg) center center`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          minHeight: '100vh',
          position: 'relative'
        }}
      >
        <div className="center-y fadeScroll text-center relative" data-scroll-speed="1">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <div className="spacer-double"></div>

                <h1 className="big wow fadeInUp" data-wow-delay=".5s">
                  Your Safety is Our Priority
                </h1>
                <br />
                <div className="h2_title wow fadeInUp" data-wow-delay=".8s">
                  <div className="text-slider id-color">
                    <span className="text-item">We Are Protecting</span>
                    <span className="text-item">We Are Installing</span>
                    <span className="text-item">We Are Maintaining</span>
                  </div>
                </div>
                <p className="wow fadeInUp" data-wow-delay="1.1s">
                  Power Shield Technical Service LLC is the leading fire and safety company in Umm Al Quwain, UAE. 
                  We are approved by the Civil Defence for supply, installation, and maintenance of various 
                  fire and safety equipment including fire extinguishers, fire alarm systems, 
                  fire hose reels, sprinkler systems, and emergency exit lights throughout Umm Al Quwain and the UAE.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Link to="#section-about" className="scroll-to">
          <span className="mouse fadeScroll relative" data-scroll-speed="2">
            <span className="scroll"></span>
          </span>
        </Link>
      </section>

      {/* About Section */}
      <section id="section-about" className="no-top">
        <div className="container">
          <div className="row">
            <div className="col-md-6 wow fadeInLeft" data-wow-delay=".25s">
              <div className="spacer-single"></div>
              <div style={{ fontSize: '2em', fontWeight: 'bold', marginBottom: '20px' }}>
                About <span className="id-color">Power Shield</span>
              </div>
              <p className="lead">
                Power Shield Technical Service LLC is the leading fire and safety company in Umm Al Quwain, 
                approved by Civil Defence for comprehensive fire protection and safety solutions.
              </p>
              <p>
                We specialize in providing innovative fire protection and safety solutions in Umm Al Quwain and throughout the UAE, 
                offering services ranging from fire alarm systems to complete fire fighting 
                installations. Our team of experts ensures quality and excellence in every 
                project we undertake, with full Civil Defence approval and compliance.
              </p>
              {
                constantsLoaded &&
                  <div className="row">
                    <div className="col-md-6">
                      <div className="de_count">
                        <h3 className="timer" data-to={Number(constants.projectCount) || 22} data-speed="2500">0</h3>
                      <span>Projects Completed</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="de_count">
                      <h3 className="timer" data-to={Number(constants.clientsCount) || 5} data-speed="2500">0</h3>
                      <span>Happy Clients</span>
                    </div>
                  </div>
                </div>
              }

              <Link to="/about" className="btn-line">
                Learn More
              </Link>
            </div>

            <div className="col-md-6 wow fadeInRight" data-wow-delay=".5s">
              <img
                src="/assets/images/misc/pic_1.jpg"
                className="img-responsive"
                alt="About Power Shield"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
       <section style={{ padding: '80px 20px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5em', color: '#873034', marginBottom: '20px' }}>Our Services</h2>
            <p style={{ fontSize: '1.1em', color: '#666' }}>Comprehensive fire safety solutions for your protection</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            <div style={{ 
              padding: '30px', 
              textAlign: 'center', 
              border: '1px solid #eee', 
              borderRadius: '10px',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}>
              <div style={{ marginBottom: '20px' }}>
                <ServiceIcons.FireAlarm />
              </div>
              <h3 style={{ color: '#873034', marginBottom: '15px' }}>Fire Alarm Systems</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                State-of-the-art fire detection and alarm systems designed to protect lives and property
              </p>
            </div>
            
            <div style={{ 
              padding: '30px', 
              textAlign: 'center', 
              border: '1px solid #eee', 
              borderRadius: '10px',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}>
              <div style={{ marginBottom: '20px' }}>
                <ServiceIcons.FireFighting />
              </div>
              <h3 style={{ color: '#873034', marginBottom: '15px' }}>Fire Fighting Equipment</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Professional fire suppression systems including sprinklers and fire hose reels
              </p>
            </div>
            
            <div style={{ 
              padding: '30px', 
              textAlign: 'center', 
              border: '1px solid #eee', 
              borderRadius: '10px',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}>
              <div style={{ marginBottom: '20px' }}>
                <ServiceIcons.SmokeExtraction />
              </div>
              <h3 style={{ color: '#873034', marginBottom: '15px' }}>Smoke Extraction</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Advanced smoke extraction and ventilation systems for emergency situations
              </p>
            </div>
            
            <div style={{ 
              padding: '30px', 
              textAlign: 'center', 
              border: '1px solid #eee', 
              borderRadius: '10px',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}>
              <div style={{ marginBottom: '20px' }}>
                <ServiceIcons.EmergencyExit />
              </div>
              <h3 style={{ color: '#873034', marginBottom: '15px' }}>Emergency Exit Lights</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Emergency lighting systems ensuring safe evacuation during power failures
              </p>
            </div>
            
            <div style={{ 
              padding: '30px', 
              textAlign: 'center', 
              border: '1px solid #eee', 
              borderRadius: '10px',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}>
              <div style={{ marginBottom: '20px' }}>
                <ServiceIcons.DesignApprovals />
              </div>
              <h3 style={{ color: '#873034', marginBottom: '15px' }}>Design & Approvals</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Fire protection system drawings and Civil Defence approvals for compliance
              </p>
            </div>
            
            <div style={{ 
              padding: '30px', 
              textAlign: 'center', 
              border: '1px solid #eee', 
              borderRadius: '10px',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}>
              <div style={{ marginBottom: '20px' }}>
                <ServiceIcons.Maintenance />
              </div>
              <h3 style={{ color: '#873034', marginBottom: '15px' }}>Maintenance Services</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Annual maintenance contracts to keep your fire protection systems optimal
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="section-portfolio" style={{display: ' none'}}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 text-center wow fadeInUp">
              <h1>Recent Projects</h1>
              <div className="separator"><span><i className="fa fa-circle"></i></span></div>
              <div className="spacer-single"></div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 wow fadeInUp" data-wow-delay=".2s">
              <div className="portfolio-item">
                <div className="portfolio-image">
                  <img src="/assets/images/services/fire_alarm.jpg" alt="Project 1" style={{maxWidth: '100%', height: 'auto'}}/>
                  <div className="portfolio-overlay">
                    <div className="portfolio-content">
                      <h4>Commercial Fire Alarm System</h4>
                      <p>Fire Alarm & Detection</p>
                      <Link to="/projects/1" className="btn-line">View Project</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 wow fadeInUp" data-wow-delay=".4s">
              <div className="portfolio-item">
                <div className="portfolio-image">
                  <img src="/assets/images/services/sprinkler.jpg" alt="Project 2" style={{maxWidth: '100%', height: 'auto'}}/>
                  <div className="portfolio-overlay">
                    <div className="portfolio-content">
                      <h4>Sprinkler System Installation</h4>
                      <p>Fire Fighting Systems</p>
                      <Link to="/projects/2" className="btn-line">View Project</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 wow fadeInUp" data-wow-delay=".6s">
              <div className="portfolio-item">
                <div className="portfolio-image">
                  <img src="/assets/images/services/smoke_extraction.png" alt="Project 3" style={{maxWidth: '100%', height: 'auto'}}/>
                  <div className="portfolio-overlay">
                    <div className="portfolio-content">
                      <h4>Smoke Extraction Systems</h4>
                      <p>Smoke extraction and ventilation systems in Umm Al Quwain</p>
                      <Link to="/projects/3" className="btn-line">View Project</Link>
                    </div>
                  </div>
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
              <p style={{color:'#873034', fontWeight: 'bold', fontSize: '28px'}}>Ready to Secure Your Property?</p>
              <p style={{color:'#873034', fontSize: '14px'}}>
                Contact us today to discuss your fire protection and safety needs. 
                Our Civil Defence approved team is ready to help secure your property with the best fire protection solutions.
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

export default HomePage;
