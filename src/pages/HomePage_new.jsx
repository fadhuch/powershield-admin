import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Hero Section - Simplified */}
      <section style={{ 
        background: 'linear-gradient(135deg, #873034, #A03840)', 
        color: 'white', 
        padding: '100px 20px',
        textAlign: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div>
          <h1 style={{ fontSize: '3em', marginBottom: '20px' }}>Your Safety is Our Priority</h1>
          <p style={{ fontSize: '1.2em', marginBottom: '30px' }}>
            Professional Fire Safety & Engineering Solutions
          </p>
          <div style={{ marginTop: '40px' }}>
            <Link 
              to="/services" 
              style={{
                backgroundColor: 'white',
                color: '#873034',
                padding: '15px 30px',
                textDecoration: 'none',
                borderRadius: '5px',
                fontWeight: 'bold',
                marginRight: '20px',
                display: 'inline-block'
              }}
            >
              Our Services
            </Link>
            <Link 
              to="/contact"
              style={{
                backgroundColor: 'transparent',
                color: 'white',
                padding: '15px 30px',
                textDecoration: 'none',
                border: '2px solid white',
                borderRadius: '5px',
                fontWeight: 'bold',
                display: 'inline-block'
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section style={{ padding: '80px 20px', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5em', color: '#873034', marginBottom: '20px' }}>
              About Power Shield
            </h2>
            <p style={{ fontSize: '1.1em', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              Leading fire protection company approved by Civil Defence for comprehensive fire safety solutions
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            <div>
              <h3 style={{ color: '#873034', marginBottom: '15px' }}>Our Mission</h3>
              <p style={{ lineHeight: '1.6', color: '#555' }}>
                We specialize in providing innovative fire protection and safety solutions, 
                offering services ranging from fire alarm systems to complete fire fighting 
                installations with full Civil Defence approval and compliance.
              </p>
            </div>
            <div>
              <h3 style={{ color: '#873034', marginBottom: '15px' }}>Our Experience</h3>
              <p style={{ lineHeight: '1.6', color: '#555' }}>
                With years of experience in the industry, we ensure quality and excellence 
                in every project we undertake, serving both commercial and residential clients 
                across the region.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Preview */}
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
              <div style={{ fontSize: '3em', color: '#873034', marginBottom: '20px' }}>🔥</div>
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
              <div style={{ fontSize: '3em', color: '#873034', marginBottom: '20px' }}>🧯</div>
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
              <div style={{ fontSize: '3em', color: '#873034', marginBottom: '20px' }}>💨</div>
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
              <div style={{ fontSize: '3em', color: '#873034', marginBottom: '20px' }}>🚪</div>
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
              <div style={{ fontSize: '3em', color: '#873034', marginBottom: '20px' }}>📋</div>
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
              <div style={{ fontSize: '3em', color: '#873034', marginBottom: '20px' }}>🔧</div>
              <h3 style={{ color: '#873034', marginBottom: '15px' }}>Maintenance Services</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Annual maintenance contracts to keep your fire protection systems optimal
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section style={{ 
        padding: '80px 20px', 
        backgroundColor: '#873034', 
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5em', marginBottom: '20px' }}>Ready to Protect Your Property?</h2>
          <p style={{ fontSize: '1.1em', marginBottom: '40px' }}>
            Contact us today for a free consultation and quote on our fire safety solutions
          </p>
          <Link 
            to="/contact" 
            style={{
              backgroundColor: 'white',
              color: '#873034',
              padding: '15px 40px',
              textDecoration: 'none',
              borderRadius: '5px',
              fontWeight: 'bold',
              fontSize: '1.1em'
            }}
          >
            Get Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
