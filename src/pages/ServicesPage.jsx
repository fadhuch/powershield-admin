import React from 'react';
import { Link } from 'react-router-dom';
import ServiceIcons from '../components/ServiceIcons';

const ServicesPage = () => {
  const services = [
    {
      id: 'fire-alarm',
      title: 'Fire Alarm Systems',
      description: 'State-of-the-art fire detection and alarm systems designed to protect lives and property with comprehensive smoke, heat, and fire detection capabilities.',
      iconComponent: ServiceIcons.FireAlarm,
      image: '/assets/images/services/fire_alarm.jpg',
      features: [
        'Smoke Detection Systems',
        'Heat Detection Systems',
        'Manual Call Points',
        'Fire Alarm Control Panels',
        'Notification Devices',
        'Emergency Communication Systems'
      ]
    },
    {
      id: 'fire-fighting',
      title: 'Fire Fighting Equipment',
      description: 'Professional fire suppression systems including sprinklers and fire hose reels for complete fire protection and rapid response.',
      iconComponent: ServiceIcons.FireFighting,
      image: '/assets/images/services/fire_fighting.avif',
      features: [
        'Fire Sprinkler Systems',
        'Fire Hose Reels',
        'Fire Extinguisher Supply & Installation',
        'Fire Suppression Systems',
        'Water Mist Systems',
        'Foam Systems'
      ]
    },
    {
      id: 'smoke-extraction',
      title: 'Smoke Extraction',
      description: 'Advanced smoke extraction and ventilation systems for emergency situations, removing harmful combustion gases during fire events.',
      iconComponent: ServiceIcons.SmokeExtraction,
      image: '/assets/images/services/smoke_extraction.png',
      features: [
        'Natural Smoke Ventilation',
        'Mechanical Smoke Extraction',
        'Smoke Control Systems',
        'Pressurization Systems',
        'Fire Dampers & Curtains',
        'Emergency Ventilation Systems'
      ]
    },
    {
      id: 'emergency-exit',
      title: 'Emergency Exit Lights',
      description: 'Emergency lighting systems ensuring safe evacuation during power failures with clear visibility and guidance pathways.',
      iconComponent: ServiceIcons.EmergencyExit,
      image: '/assets/images/services/exitLight.jpg',
      features: [
        'LED Emergency Exit Signs',
        'Emergency Lighting Systems',
        'Battery Backup Systems',
        'Self-Testing Exit Lights',
        'Photoluminescent Signs',
        'Emergency Path Marking'
      ]
    },
    {
      id: 'design-approvals',
      title: 'Design & Approvals',
      description: 'Fire protection system drawings and Civil Defence approvals for compliance with comprehensive design and documentation services.',
      iconComponent: ServiceIcons.DesignApprovals,
      image: '/assets/images/services/designandapproval.jpg',
      features: [
        'Fire Protection System Drawings',
        'Civil Defence Approvals',
        'Technical Specifications',
        'Compliance Documentation',
        'As-Built Drawings',
        'System Commissioning Reports'
      ]
    },
    {
      id: 'maintenance',
      title: 'Maintenance Services',
      description: 'Annual maintenance contracts to keep your fire protection systems optimal with professional inspection and repair services.',
      iconComponent: ServiceIcons.Maintenance,
      image: '/assets/images/services/inspection-services.jpg',
      features: [
        'Preventive Maintenance',
        'Emergency Repair Services',
        'System Testing & Inspection',
        'Equipment Replacement',
        'Performance Monitoring',
        '24/7 Technical Support'
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="subheader">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Our Services</h1>
              <ul className="crumb">
                <li><Link to="/">Home</Link></li>
                <li className="sep"></li>
                <li>Services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 text-center wow fadeInUp">
              <h1>Fire and Safety Services in Umm Al Quwain</h1>
              <div className="separator">
                <span><i className="fa fa-circle"></i></span>
              </div>
              <p className="lead">
                Professional Fire Protection and Safety Solutions in Umm Al Quwain, UAE
              </p>
              <p>
                Power Shield Technical Service LLC is the leading fire and safety company in Umm Al Quwain, approved by the Civil Defence for supply, installation, and maintenance of various fire and safety equipment. We provide comprehensive fire protection services throughout Umm Al Quwain including fire extinguishers, fire alarm systems, fire hose reels, sprinkler systems, and emergency exit lights.
              </p>
              <div className="spacer-single"></div>
            </div>
          </div>

          <div className="row">
            {services.map((service, index) => (
              <div key={service.id} className="col-md-4 mb40 wow fadeInUp" data-wow-delay={`.${(index + 1) * 2}s`}>
                <div className="feature-box-small-icon">
                  <div className="icon">
                    <service.iconComponent />
                  </div>
                  <div className="text">
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                    <Link to={`/services/${service.id}`} className="btn-line">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="bg-color-2">
        <div className="container">
          {services.map((service, index) => (
            <div key={service.id} className={`row ${index > 0 ? 'mt80' : ''}`}>
              <div className={`col-md-6 ${index % 2 === 0 ? 'wow fadeInLeft' : 'wow fadeInRight order-md-2'}`}>
                <img 
                  src={service.image} 
                  className="img-responsive" 
                  alt={service.title}
                />
              </div>
              <div className={`col-md-6 ${index % 2 === 0 ? 'wow fadeInRight' : 'wow fadeInLeft order-md-1'}`}>
                <div className="spacer-single"></div>
                <h2>{service.title}</h2>
                <p className="lead">{service.description}</p>
                
                <h4>Key Services Include:</h4>
                <ul className="list-style-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
                
                <Link to={`/services/${service.id}`} className="btn-line">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 text-center wow fadeInUp">
              <h1>Our Process</h1>
              <div className="separator">
                <span><i className="fa fa-circle"></i></span>
              </div>
              <p className="lead">
                We follow a systematic approach to ensure project success and client satisfaction.
              </p>
              <div className="spacer-single"></div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3 text-center wow fadeInUp" data-wow-delay=".2s">
              <div className="step-box">
                <div className="step-number">01</div>
                <h4>Consultation</h4>
                <p>We begin with understanding your requirements and project goals.</p>
              </div>
            </div>

            <div className="col-md-3 text-center wow fadeInUp" data-wow-delay=".4s">
              <div className="step-box">
                <div className="step-number">02</div>
                <h4>Planning</h4>
                <p>Detailed project planning and design development phase.</p>
              </div>
            </div>

            <div className="col-md-3 text-center wow fadeInUp" data-wow-delay=".6s">
              <div className="step-box">
                <div className="step-number">03</div>
                <h4>Implementation</h4>
                <p>Professional execution with quality control and monitoring.</p>
              </div>
            </div>

            <div className="col-md-3 text-center wow fadeInUp" data-wow-delay=".8s">
              <div className="step-box">
                <div className="step-number">04</div>
                <h4>Delivery</h4>
                <p>Project completion and handover with ongoing support.</p>
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
              <h2>Need Professional Fire Protection Services?</h2>
              <p>
                Contact us today to discuss your fire safety requirements. Our team of 
                experts is ready to provide you with the best fire protection and safety solutions.
              </p>
            </div>
            <div className="col-md-4 text-right wow fadeInRight" data-wow-delay=".4s">
              <Link to="/contact" className="btn-line">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
