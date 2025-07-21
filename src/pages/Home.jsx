import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Power Shield Services</h1>
          <p>Your trusted partner for comprehensive protection and security solutions.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Our Services</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Security Solutions</h3>
              <p>Comprehensive security systems and monitoring services for your peace of mind.</p>
            </div>
            <div className="feature-card">
              <h3>Protection Services</h3>
              <p>Professional protection services tailored to your specific needs and requirements.</p>
            </div>
            <div className="feature-card">
              <h3>24/7 Support</h3>
              <p>Round-the-clock support and emergency response for all your security concerns.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
