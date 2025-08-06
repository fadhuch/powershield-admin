import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Modern Office Complex',
      category: 'commercial',
      description: 'A state-of-the-art office building with sustainable design features and modern amenities.',
      image: '/assets/images/portfolio/1.jpg',
      client: 'Tech Corp Solutions',
      duration: '18 months',
      location: 'Islamabad, Pakistan',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Luxury Residential Tower',
      category: 'residential',
      description: 'A 25-story residential tower featuring luxury apartments with panoramic city views.',
      image: '/assets/images/portfolio/2.jpg',
      client: 'Prime Developers',
      duration: '24 months',
      location: 'Karachi, Pakistan',
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Industrial Manufacturing Plant',
      category: 'industrial',
      description: 'A modern manufacturing facility with advanced automation and safety systems.',
      image: '/assets/images/portfolio/3.jpg',
      client: 'Manufacturing Industries Ltd',
      duration: '30 months',
      location: 'Lahore, Pakistan',
      status: 'In Progress'
    },
    {
      id: 4,
      title: 'Highway Bridge Construction',
      category: 'infrastructure',
      description: 'A major bridge project connecting two cities with advanced engineering solutions.',
      image: '/assets/images/portfolio/4.jpg',
      client: 'National Highway Authority',
      duration: '36 months',
      location: 'Peshawar, Pakistan',
      status: 'Completed'
    },
    {
      id: 5,
      title: 'Shopping Mall Complex',
      category: 'commercial',
      description: 'A large shopping and entertainment complex with modern architectural design.',
      image: '/assets/images/portfolio/5.jpg',
      client: 'Retail Group International',
      duration: '20 months',
      location: 'Islamabad, Pakistan',
      status: 'Planning'
    },
    {
      id: 6,
      title: 'Housing Society Development',
      category: 'residential',
      description: 'A comprehensive housing society with all modern amenities and infrastructure.',
      image: '/assets/images/portfolio/6.jpg',
      client: 'Dream Homes Society',
      duration: '48 months',
      location: 'Rawalpindi, Pakistan',
      status: 'In Progress'
    },
    {
      id: 7,
      title: 'Water Treatment Plant',
      category: 'infrastructure',
      description: 'A modern water treatment facility serving the metropolitan area.',
      image: '/assets/images/portfolio/7.jpg',
      client: 'Water & Sanitation Agency',
      duration: '15 months',
      location: 'Faisalabad, Pakistan',
      status: 'Completed'
    },
    {
      id: 8,
      title: 'Educational Institute',
      category: 'institutional',
      description: 'A modern educational campus with state-of-the-art facilities and sustainable design.',
      image: '/assets/images/portfolio/8.jpg',
      client: 'Educational Foundation',
      duration: '22 months',
      location: 'Multan, Pakistan',
      status: 'Completed'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'residential', label: 'Residential' },
    { id: 'industrial', label: 'Industrial' },
    { id: 'infrastructure', label: 'Infrastructure' },
    { id: 'institutional', label: 'Institutional' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'success';
      case 'In Progress':
        return 'warning';
      case 'Planning':
        return 'info';
      default:
        return 'secondary';
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="subheader">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Our Projects</h1>
              <ul className="crumb">
                <li><Link to="/">Home</Link></li>
                <li className="sep"></li>
                <li>Projects</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Content */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 text-center wow fadeInUp">
              <h1>Portfolio of Excellence</h1>
              <div className="separator">
                <span><i className="fa fa-circle"></i></span>
              </div>
              <p className="lead">
                Explore our diverse portfolio of completed and ongoing projects 
                across various engineering disciplines and sectors.
              </p>
              <div className="spacer-single"></div>
            </div>
          </div>

          {/* Filter Navigation */}
          <div className="row">
            <div className="col-md-12">
              <div className="project-filter text-center mb40">
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                    onClick={() => setActiveFilter(category.id)}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="row">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="col-md-6 col-lg-4 mb40 wow fadeInUp" data-wow-delay={`.${(index + 1) * 1}s`}>
                <div className="project-card">
                  <div className="project-image">
                    <img src={project.image} className="img-responsive" alt={project.title} />
                    <div className="project-overlay">
                      <div className="project-overlay-content">
                        <Link to={`/projects/${project.id}`} className="project-link">
                          <i className="fa fa-plus"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="project-info">
                    <div className="project-category">
                      <span className="badge badge-primary">
                        {categories.find(cat => cat.id === project.category)?.label}
                      </span>
                      <span className={`badge badge-${getStatusColor(project.status)} float-right`}>
                        {project.status}
                      </span>
                    </div>
                    <h4>
                      <Link to={`/projects/${project.id}`}>{project.title}</Link>
                    </h4>
                    <p>{project.description}</p>
                    <div className="project-meta">
                      <div className="meta-item">
                        <i className="fa fa-user"></i>
                        <span>{project.client}</span>
                      </div>
                      <div className="meta-item">
                        <i className="fa fa-map-marker"></i>
                        <span>{project.location}</span>
                      </div>
                      <div className="meta-item">
                        <i className="fa fa-clock-o"></i>
                        <span>{project.duration}</span>
                      </div>
                    </div>
                    <Link to={`/projects/${project.id}`} className="btn-line">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="row">
              <div className="col-md-12 text-center">
                <p>No projects found in this category.</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-color text-light">
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center wow fadeInUp" data-wow-delay=".0s">
              <div className="de_count">
                <h3 className="timer" data-to="150" data-speed="2500">150</h3>
                <span>Total Projects</span>
              </div>
            </div>
            <div className="col-md-3 text-center wow fadeInUp" data-wow-delay=".2s">
              <div className="de_count">
                <h3 className="timer" data-to="120" data-speed="2500">120</h3>
                <span>Completed Projects</span>
              </div>
            </div>
            <div className="col-md-3 text-center wow fadeInUp" data-wow-delay=".4s">
              <div className="de_count">
                <h3 className="timer" data-to="25" data-speed="2500">25</h3>
                <span>Ongoing Projects</span>
              </div>
            </div>
            <div className="col-md-3 text-center wow fadeInUp" data-wow-delay=".6s">
              <div className="de_count">
                <h3 className="timer" data-to="98" data-speed="2500">98</h3>
                <span>Client Satisfaction %</span>
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
              <h2>Have a Project in Mind?</h2>
              <p>
                Let's work together to bring your vision to life. Contact us today 
                to discuss your project requirements and get a customized solution.
              </p>
            </div>
            <div className="col-md-4 text-right wow fadeInRight" data-wow-delay=".4s">
              <Link to="/contact" className="btn-line">
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
