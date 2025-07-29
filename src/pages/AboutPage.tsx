import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="subheader">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>About Us</h1>
              <ul className="crumb">
                <li><Link to="/">Home</Link></li>
                <li className="sep">/</li>
                <li>About Us</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6 wow fadeInLeft">
              <h2>Our <span className="id-color">Story</span></h2>
              <p className="lead">
                Power Shield Technical Service LLC has been at the forefront of 
                fire protection and safety excellence, serving clients across the region.
              </p>
              <p>
                Founded with a vision to enhance fire safety standards, we have grown 
                from a specialized team to a comprehensive fire protection service provider 
                approved by Civil Defence. Our commitment to quality, safety, and client 
                satisfaction has made us a trusted partner for fire protection projects 
                of all scales.
              </p>
              <p>
                We believe in combining proven fire safety principles with modern 
                technology to deliver solutions that are not only effective but also 
                compliant with the highest safety standards. Our specialized approach 
                ensures that every aspect of your fire protection needs is handled with 
                expertise and regulatory compliance.
              </p>
            </div>
            <div className="col-md-6 wow fadeInRight">
              <img 
                src="/assets/images/shop/1.jpg" 
                className="img-responsive" 
                alt="Our Story" 
              />
            </div>
          </div>

          <div className="spacer-double"></div>

          <div className="row">
            <div className="col-md-6 wow fadeInLeft">
              <img 
                src="/assets/images/shop/2.jpg" 
                className="img-responsive" 
                alt="Our Mission" 
              />
            </div>
            <div className="col-md-6 wow fadeInRight">
              <h2>Our <span className="id-color">Mission</span></h2>
              <p className="lead">
                To provide innovative engineering solutions that build a better tomorrow.
              </p>
              <p>
                Our mission is to deliver exceptional engineering services that exceed 
                client expectations while contributing to sustainable development. We 
                strive to be the preferred partner for construction and engineering 
                projects by maintaining the highest standards of quality, safety, 
                and environmental responsibility.
              </p>
              
              <h3>Our Values</h3>
              <ul className="list-style-1">
                <li>Excellence in every project we undertake</li>
                <li>Innovation through technology and creative solutions</li>
                <li>Integrity in all our business relationships</li>
                <li>Sustainability for future generations</li>
                <li>Safety as our top priority</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="text-light">
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center wow fadeInUp" data-wow-delay=".0s">
              <div className="de_count">
                <h3 className="timer" data-to="150" data-speed="2500">0</h3>
                <span>Projects Completed</span>
              </div>
            </div>
            <div className="col-md-3 text-center wow fadeInUp" data-wow-delay=".2s">
              <div className="de_count">
                <h3 className="timer" data-to="80" data-speed="2500">0</h3>
                <span>Happy Clients</span>
              </div>
            </div>
            <div className="col-md-3 text-center wow fadeInUp" data-wow-delay=".4s">
              <div className="de_count">
                <h3 className="timer" data-to="25" data-speed="2500">0</h3>
                <span>Expert Engineers</span>
              </div>
            </div>
            <div className="col-md-3 text-center wow fadeInUp" data-wow-delay=".6s">
              <div className="de_count">
                <h3 className="timer" data-to="10" data-speed="2500">0</h3>
                <span>Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 text-center wow fadeInUp">
              <h1>Why Choose Us</h1>
              <div className="separator">
                <span><i className="fa fa-circle"></i></span>
              </div>
              <div className="spacer-single"></div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 mb30 wow fadeInUp" data-wow-delay=".2s">
              <div className="feature-box-small-icon">
                <div className="icon">
                  <i className="id-color fa fa-trophy"></i>
                </div>
                <div className="text">
                  <h4>Quality Excellence</h4>
                  <p>
                    We maintain the highest standards of quality in all our projects, 
                    ensuring superior results that stand the test of time.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb30 wow fadeInUp" data-wow-delay=".4s">
              <div className="feature-box-small-icon">
                <div className="icon">
                  <i className="id-color fa fa-users"></i>
                </div>
                <div className="text">
                  <h4>Expert Team</h4>
                  <p>
                    Our team consists of highly qualified engineers and specialists 
                    with extensive experience in their respective fields.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb30 wow fadeInUp" data-wow-delay=".6s">
              <div className="feature-box-small-icon">
                <div className="icon">
                  <i className="id-color fa fa-clock-o"></i>
                </div>
                <div className="text">
                  <h4>Timely Delivery</h4>
                  <p>
                    We understand the importance of deadlines and are committed 
                    to delivering projects on time without compromising quality.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb30 wow fadeInUp" data-wow-delay=".8s">
              <div className="feature-box-small-icon">
                <div className="icon">
                  <i className="id-color fa fa-lightbulb-o"></i>
                </div>
                <div className="text">
                  <h4>Innovation</h4>
                  <p>
                    We embrace cutting-edge technology and innovative approaches 
                    to provide the most efficient solutions for your projects.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb30 wow fadeInUp" data-wow-delay="1s">
              <div className="feature-box-small-icon">
                <div className="icon">
                  <i className="id-color fa fa-dollar"></i>
                </div>
                <div className="text">
                  <h4>Cost Effective</h4>
                  <p>
                    Our efficient project management and resource optimization 
                    ensure competitive pricing without compromising on quality.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb30 wow fadeInUp" data-wow-delay="1.2s">
              <div className="feature-box-small-icon">
                <div className="icon">
                  <i className="id-color fa fa-shield"></i>
                </div>
                <div className="text">
                  <h4>Safety First</h4>
                  <p>
                    Safety is our top priority. We implement comprehensive safety 
                    measures and follow industry best practices in all our operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
