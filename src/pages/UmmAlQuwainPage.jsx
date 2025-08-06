import React from 'react';
import { Link } from 'react-router-dom';
import ServiceIcons from '../components/ServiceIcons';

const UmmAlQuwainPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="subheader">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Fire and Safety Services in Umm Al Quwain</h1>
              <ul className="crumb">
                <li><Link to="/">Home</Link></li>
                <li className="sep"></li>
                <li>Umm Al Quwain</li>
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
              <h2>Leading Fire and Safety Company in Umm Al Quwain, UAE</h2>
              <p className="lead">
                Power Shield Technical Services LLC is the premier fire and safety company serving 
                Umm Al Quwain and the surrounding areas. We provide comprehensive fire protection 
                and safety solutions for residential, commercial, and industrial properties 
                throughout Umm Al Quwain Emirate.
              </p>
              
              <h3>Why Choose Power Shield for Fire Safety in Umm Al Quwain?</h3>
              <ul className="list-style-1">
                <li>Civil Defence approved fire safety company</li>
                <li>Licensed engineers and certified technicians</li>
                <li>Local presence in Umm Al Quwain with fast response times</li>
                <li>Comprehensive fire protection services</li>
                <li>24/7 emergency support in Umm Al Quwain</li>
                <li>Competitive pricing for all fire safety solutions</li>
              </ul>

              <h3>Our Fire and Safety Services in Umm Al Quwain</h3>
              <div className="row">
                <div className="col-md-6">
                  <div className="feature-box-small-icon">
                    <div className="icon">
                      <ServiceIcons.FireAlarm />
                    </div>
                    <div className="text">
                      <h4>Fire Alarm Systems</h4>
                      <p>Advanced fire detection and alarm systems for properties in Umm Al Quwain</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="feature-box-small-icon">
                    <div className="icon">
                      <ServiceIcons.FireFighting />
                    </div>
                    <div className="text">
                      <h4>Fire Fighting Equipment</h4>
                      <p>Professional fire suppression systems and equipment in Umm Al Quwain</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="feature-box-small-icon">
                    <div className="icon">
                      <ServiceIcons.SmokeExtraction />
                    </div>
                    <div className="text">
                      <h4>Smoke Extraction Systems</h4>
                      <p>Smoke extraction and ventilation systems for buildings in Umm Al Quwain</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="feature-box-small-icon">
                    <div className="icon">
                      <ServiceIcons.EmergencyExit />
                    </div>
                    <div className="text">
                      <h4>Emergency Exit Lights</h4>
                      <p>Emergency lighting systems for safe evacuation in Umm Al Quwain</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3>Fire Safety Compliance in Umm Al Quwain</h3>
              <p>
                All our fire and safety installations in Umm Al Quwain are fully compliant with 
                UAE Civil Defence regulations and international fire safety standards. We handle 
                all necessary approvals and certifications for your property in Umm Al Quwain.
              </p>

              <h3>Emergency Fire Safety Services in Umm Al Quwain</h3>
              <p>
                Our emergency response team is available 24/7 for urgent fire safety issues in 
                Umm Al Quwain. We provide rapid response maintenance, repairs, and emergency 
                installations to ensure your property remains protected at all times.
              </p>

              <div className="call-to-action-box" style={{ padding: '30px', background: '#f8f9fa', marginTop: '40px' }}>
                <h4 style={{ color: '#873034' }}>Need Fire and Safety Services in Umm Al Quwain?</h4>
                <p>
                  Contact Power Shield Technical Services LLC today for professional fire protection 
                  and safety solutions in Umm Al Quwain. Our certified team is ready to help 
                  secure your property with the best fire safety systems.
                </p>
                <Link to="/contact" className="btn-line">
                  Get Free Consultation
                </Link>
              </div>
            </div>

            <div className="col-md-4">
              <div className="sidebar">
                <div className="widget">
                  <h4>Service Areas in Umm Al Quwain</h4>
                  <ul className="list-style-1">
                    <li>Umm Al Quwain City</li>
                    <li>Al Rashidiya</li>
                    <li>Al Salamah</li>
                    <li>Falaj Al Mualla</li>
                    <li>Al Humrah</li>
                  </ul>
                </div>

                <div className="widget">
                  <h4>Emergency Contact</h4>
                  <p><strong>24/7 Emergency Service</strong></p>
                  <p>Phone: <a href="tel:+971-XX-XXXXXXX">+971-XX-XXXXXXX</a></p>
                  <p>Email: <a href="mailto:info@powershieldllc.com">info@powershieldllc.com</a></p>
                </div>

                <div className="widget">
                  <h4>Certifications</h4>
                  <ul className="list-style-1">
                    <li>Civil Defence Approved</li>
                    <li>Licensed Engineering Firm</li>
                    <li>ISO Certified Quality Systems</li>
                    <li>Certified Fire Safety Professionals</li>
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
              <h2>Protect Your Umm Al Quwain Property Today</h2>
              <p>
                Don't compromise on fire safety. Contact the leading fire and safety company 
                in Umm Al Quwain for professional fire protection solutions that meet all 
                Civil Defence requirements.
              </p>
            </div>
            <div className="col-md-4 text-right wow fadeInRight" data-wow-delay=".4s">
              <Link to="/contact" className="btn-line">
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UmmAlQuwainPage;
