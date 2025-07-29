import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        id="section-hero-2"
        className="full-height text-light relative"
        data-stellar-background-ratio="0.5"
        style={{
          background: `url(${process.env.PUBLIC_URL}/assets/images/background/bg-2.jpg) center center`,
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
                  Power Shield Technical Service LLC is one of the leading fire protection companies 
                  approved by the Civil Defence for supply, installation, and maintenance of various 
                  fire and safety equipment including fire extinguishers, fire alarm systems, 
                  fire hose reels, sprinkler systems, and emergency exit lights.
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
                Power Shield Technical Service LLC is a leading fire protection company 
                approved by Civil Defence for comprehensive fire safety solutions.
              </p>
              <p>
                We specialize in providing innovative fire protection and safety solutions, 
                offering services ranging from fire alarm systems to complete fire fighting 
                installations. Our team of experts ensures quality and excellence in every 
                project we undertake, with full Civil Defence approval and compliance.
              </p>

              <div className="row">
                <div className="col-md-6">
                  <div className="de_count">
                    <h3 className="timer" data-to="100" data-speed="2500">0</h3>
                    <span>Projects Completed</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="de_count">
                    <h3 className="timer" data-to="50" data-speed="2500">0</h3>
                    <span>Happy Clients</span>
                  </div>
                </div>
              </div>

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
      <section id="section-services" className="text-light" data-stellar-background-ratio=".2">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 text-center wow fadeInUp">
              <h1>Our Services</h1>
              <div className="separator"><span><i className="fa fa-circle"></i></span></div>
              <div className="spacer-single"></div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 mb30 wow fadeInUp" data-wow-delay=".2s">
              <div className="feature-box-small-icon">
                <div className="icon">
                  <i className=" id-color fa fa-bell" ></i>
                </div>
                <div className="text">
                  <h4>Fire Alarm Works</h4>
                  <p>
                    Fire alarm systems designed to detect and alert building occupants 
                    to smoke, fire, and other fire-related hazards.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb30 wow fadeInUp" data-wow-delay=".4s">
              <div className="feature-box-small-icon">
                <div className="icon">
                  <i className=" id-color fa fa-fire-extinguisher"></i>
                </div>
                <div className="text">
                  <h4>Fire Fighting Works</h4>
                  <p>
                    Comprehensive fire fighting systems including sprinklers, 
                    fire hose reels, and suppression systems.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb30 wow fadeInUp" data-wow-delay=".6s">
              <div className="feature-box-small-icon">
                <div className="icon">
                  <i className=" id-color fa fa-free-code-camp"></i>
                </div>
                <div className="text">
                  <h4>Smoke Extraction System</h4>
                  <p>
                    Essential fire safety solution to remove smoke and harmful 
                    combustion gases during fire emergencies.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb30 wow fadeInUp" data-wow-delay=".8s">
              <div className="feature-box-small-icon">
                <div className="icon">
                  <i className=" id-color fa fa-sign-out"></i>
                </div>
                <div className="text">
                  <h4>Emergency Exit Lights</h4>
                  <p>
                    Emergency exit lighting systems ensuring clear visibility 
                    and guidance during power failures and emergencies.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb30 wow fadeInUp" data-wow-delay="1s">
              <div className="feature-box-small-icon">
                <div className="icon">
                  <i className=" id-color fa fa-paint-brush"></i>
                </div>
                <div className="text">
                  <h4>Design & Approvals</h4>
                  <p>
                    Fire protection system drawings and Civil Defence 
                    approvals for complete regulatory compliance.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb30 wow fadeInUp" data-wow-delay="1.2s">
              <div className="feature-box-small-icon">
                <div className="icon">
                  <i className=" id-color fa fa-pencil"></i>
                </div>
                <div className="text">
                  <h4>Maintenance Contract</h4>
                  <p>
                    Annual maintenance contracts ensuring your fire protection 
                    systems remain in optimal condition year-round.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="section-portfolio">
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
                  <img src="/assets/images/portfolio/pf (1).jpg" alt="Project 1" />
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
                  <img src="/assets/images/portfolio/pf (4).jpg" alt="Project 2" />
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
                  <img src="/assets/images/portfolio/pf (3).jpg" alt="Project 3" />
                  <div className="portfolio-overlay">
                    <div className="portfolio-content">
                      <h4>Emergency Exit Lighting</h4>
                      <p>Emergency Safety Systems</p>
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
              <h2>Ready to Secure Your Property?</h2>
              <p>
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
