import React from 'react';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  const services = [
    {
      id: 'fire-alarm',
      title: 'Fire Alarm Works',
      description: 'A fire alarm system is a crucial safety mechanism designed to detect and alert building occupants and emergency responders to the presence of smoke, fire, carbon monoxide, or other fire-related hazards.',
      icon: 'fa-bell',
      image: '/assets/images/services/pic_1.jpg',
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
      title: 'Fire Fighting Works',
      description: 'Comprehensive fire fighting systems including sprinklers, fire hose reels, and suppression systems for complete fire protection.',
      icon: 'fa-fire-extinguisher',
      image: '/assets/images/services/pic_2.jpg',
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
      title: 'Smoke Extraction System',
      description: 'An essential fire safety solution designed to remove smoke and harmful combustion gases from a building during a fire, comprising a network of fans and ducts.',
      icon: 'fa-wind',
      image: '/assets/images/services/pic_3.jpg',
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
      title: 'Emergency Exit Light Systems',
      description: 'Power Shield emergency exit lighting systems ensure clear visibility and guidance during emergencies, particularly in cases of fire or power failure.',
      icon: 'fa-sign-out',
      image: '/assets/images/services/pic_4.jpg',
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
      title: 'Design Drawings & Approvals',
      description: 'We create detailed, high-quality fire protection system plans tailored to your project\'s specific needs and handle the entire approval process with Civil Defence.',
      icon: 'fa-pencil-ruler',
      image: '/assets/images/services/pic_5.jpg',
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
      id: 'electrical',
      title: 'Electrical Works',
      description: 'Electrical systems form the backbone of modern infrastructure, ensuring a continuous, safe, and reliable power supply for all aspects of a building.',
      icon: 'fa-bolt',
      image: '/assets/images/services/pic_6.jpg',
      features: [
        'Power Distribution Systems',
        'Lighting Design & Installation',
        'Emergency Power Systems',
        'Fire Alarm Electrical Works',
        'Security System Wiring',
        'Building Automation Systems'
      ]
    },
    {
      id: 'plumbing',
      title: 'Plumbing Works',
      description: 'Plumbing systems are essential for maintaining a healthy and functional building environment, providing dependable supply of clean water and effective wastewater removal.',
      icon: 'fa-wrench',
      image: '/assets/images/services/pic_6.jpg',
      features: [
        'Water Supply Systems',
        'Drainage & Sewage Systems',
        'Fire Fighting Water Supply',
        'Sanitary Installations',
        'Hot Water Systems',
        'Plumbing Maintenance'
      ]
    },
    {
      id: 'maintenance',
      title: 'Annual Maintenance Contract',
      description: 'Our AMC services are backed by highly trained and technically skilled professionals, ensuring that your MEP systems, fire alarms, and firefighting equipment remain in top condition.',
      icon: 'fa-tools',
      image: '/assets/images/services/pic_6.jpg',
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
                <li className="sep">/</li>
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
              <h1>Our Services</h1>
              <div className="separator">
                <span><i className="fa fa-circle"></i></span>
              </div>
              <p className="lead">
                We Offer a Range of Services to Meet Your Needs
              </p>
              <p>
                Power Shield Technical Service LLC is one of the leading fire protection companies and is approved by the Civil Defence for supply, installation, and maintenance of various fire and safety equipment. Some of the equipment includes fire extinguishers, fire alarm systems, fire hose reels, sprinkler systems, emergency exit lights.
              </p>
              <div className="spacer-single"></div>
            </div>
          </div>

          <div className="row">
            {services.map((service, index) => (
              <div key={service.id} className="col-md-4 mb40 wow fadeInUp" data-wow-delay={`.${(index + 1) * 2}s`}>
                <div className="feature-box-small-icon">
                  <div className="icon">
                    <i className={`id-color fa ${service.icon}`}></i>
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
