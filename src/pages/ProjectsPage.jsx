import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../../projects.json';

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('completed');
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Load projects from JSON and format them
    const formattedProjects = projectsData
      .filter(project => project.REFERNCE && project.PROJECT) // Filter out invalid entries
      .map((project, index) => {
        // Clean up the reference to match image filenames - remove ALL spaces
        let imageRef = project.REFERNCE.trim().replace(/\s+/g, '');
        
        return {
          id: index + 1,
          reference: project.REFERNCE,
          title: project.PROJECT,
          category: 'fire-safety',
          description: `Fire protection and safety system installation for ${project.OWNER}`,
          // Store both versions of reference for image matching
          imageRef: imageRef,
          imageRefWithSpace: project.REFERNCE.trim(),
          client: project.OWNER,
          consultant: project.CONSULTANT,
          contractor: project['CIVIL CONTRACTOR'],
          location: 'Umm Al Quwain, UAE',
          status: project.status || 'Completed'
        };
      });
    
    setProjects(formattedProjects);
  }, []);

  const categories = [
    { id: 'completed', label: 'Completed Projects' },
    { id: 'ongoing', label: 'Ongoing Projects' },
  ];

  const filteredProjects = projects.filter(project => project.status.toLowerCase() === activeFilter);

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

  // Component to handle image loading with fallback
  const ProjectImage = ({ project }) => {
    const [imageSrc, setImageSrc] = useState(null);
    const [imageError, setImageError] = useState(false);
    const [attemptedPaths, setAttemptedPaths] = useState([]);

    useEffect(() => {
      // Try different image path variations - prioritize web-friendly formats
      const imagePaths = [
        // Try JPG/PNG first (web-friendly formats)
        `/assets/images/projects/${project.imageRef}.jpg`,
        `/assets/images/projects/${project.imageRef}.png`,
        `/assets/images/projects/${project.imageRef}.jpeg`,
        `/assets/images/projects/${project.imageRefWithSpace}.jpg`,
        `/assets/images/projects/${project.imageRefWithSpace}.png`,
        `/assets/images/projects/${project.imageRefWithSpace}.jpeg`,
      ];
      
      setImageSrc(imagePaths[0]);
      setAttemptedPaths(imagePaths);
    }, [project]);

    const handleImageError = () => {
      const currentIndex = attemptedPaths.indexOf(imageSrc);
      const nextIndex = currentIndex + 1;
      
      if (nextIndex < attemptedPaths.length) {
        setImageSrc(attemptedPaths[nextIndex]);
      } else {
        setImageError(true);
      }
    };

    if (imageError) {
      return (
        <div style={{
          width: '100%',
          height: '300px',
          background: 'linear-gradient(135deg, #873034 0%, #a04044 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: '20px',
          textAlign: 'center'
        }}>
          {/* <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>
            {project.reference}
          </div> */}
          <div style={{ fontSize: '14px', opacity: 0.9, marginBottom: '5px' }}>
            {project.title}
          </div>
        </div>
      );
    }

    return (
      <img 
        src={imageSrc} 
        className="img-responsive" 
        alt={project.title}
        onError={handleImageError}
        style={{ width: '100%', height: '300px', objectFit: 'cover' }}
      />
    );
  };

  return (
    <>
      <style>{`
        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 16px rgba(0,0,0,0.2) !important;
        }
        .project-card:hover .project-overlay {
          opacity: 1 !important;
        }
        .projects-grid-row::after {
          content: "";
          display: table;
          clear: both;
        }
        .projects-grid-row > [class*="col-"] {
          display: flex;
        }
      `}</style>
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
          <div className="row projects-grid-row">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="col-md-6 col-lg-4 mb40 wow fadeInUp" data-wow-delay={`.${(index + 1) * 1}s`}>
                <div className="project-card" style={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  border: '1px solid #e0e0e0',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}>
                  <div className="project-image" style={{ position: 'relative', height: '250px', overflow: 'hidden' }}>
                    <ProjectImage project={project} />
                    <div className="project-overlay" style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'rgba(135, 48, 52, 0.9)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <div className="project-overlay-content">
                        <div style={{ color: 'white', textAlign: 'center', padding: '20px' }}>
                          {/* <h5 style={{ color: 'white', marginBottom: '10px' }}>{project.reference}</h5> */}
                          <p style={{ fontSize: '12px', margin: 0 }}>{project.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="project-info" style={{ 
                    padding: '20px', 
                    flex: 1, 
                    display: 'flex', 
                    flexDirection: 'column' 
                  }}>
                    <div className="project-category" style={{ marginBottom: '15px' }}>
                      {/* <span className="badge badge-primary" style={{ fontSize: '11px', padding: '5px 10px' }}>
                        {project.reference}
                      </span> */}
                      <span className={`badge badge-${getStatusColor(project.status)} float-right`} style={{ padding: '5px 10px' }}>
                        {project.status}
                      </span>
                    </div>
                    <h4 style={{ 
                      fontSize: '16px', 
                      marginBottom: '15px',
                      height: '48px',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}>
                      <Link to={`/projects/${project.id}`}>{project.title}</Link>
                    </h4>
                    <div className="project-meta" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div className="meta-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', minHeight: '20px' }}>
                        <i className="fa fa-user" style={{ marginTop: '2px', flexShrink: 0, width: '14px' }}></i>
                        <span style={{ 
                          fontSize: '12px', 
                          lineHeight: '1.4',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          display: '-webkit-box',
                          WebkitLineClamp: 1,
                          WebkitBoxOrient: 'vertical'
                        }}>{project.client}</span>
                      </div>
                      {project.consultant && (
                        <div className="meta-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', minHeight: '20px' }}>
                          <i className="fa fa-briefcase" style={{ marginTop: '2px', flexShrink: 0, width: '14px' }}></i>
                          <span style={{ 
                            fontSize: '12px', 
                            lineHeight: '1.4',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: 1,
                            WebkitBoxOrient: 'vertical'
                          }}>Consultant: {project.consultant}</span>
                        </div>
                      )}
                      {project.contractor && (
                        <div className="meta-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', minHeight: '20px' }}>
                          <i className="fa fa-building" style={{ marginTop: '2px', flexShrink: 0, width: '14px' }}></i>
                          <span style={{ 
                            fontSize: '12px', 
                            lineHeight: '1.4',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: 1,
                            WebkitBoxOrient: 'vertical'
                          }}>Contractor: {project.contractor}</span>
                        </div>
                      )}
                      <div className="meta-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', minHeight: '20px' }}>
                        <i className="fa fa-map-marker" style={{ marginTop: '2px', flexShrink: 0, width: '14px' }}></i>
                        <span style={{ 
                          fontSize: '12px', 
                          lineHeight: '1.4',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          display: '-webkit-box',
                          WebkitLineClamp: 1,
                          WebkitBoxOrient: 'vertical'
                        }}>{project.location}</span>
                      </div>
                      <div className="meta-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', minHeight: '20px' }}>
                        <i className="fa fa-check-circle" style={{ marginTop: '2px', flexShrink: 0, width: '14px' }}></i>
                        <span style={{ 
                          fontSize: '12px', 
                          lineHeight: '1.4',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          display: '-webkit-box',
                          WebkitLineClamp: 1,
                          WebkitBoxOrient: 'vertical',
                          fontWeight: '600',
                          color: project.status === 'Completed' ? '#28a745' : project.status === 'On Going' ? '#ffc107' : '#6c757d'
                        }}>Status: {project.status}</span>
                      </div>
                    </div>
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
      {/* <section className="bg-color text-light">
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center wow fadeInUp" data-wow-delay=".0s">
              <div className="de_count">
                <h3 className="timer" data-to={projects.length} data-speed="2500">{projects.length}</h3>
                <span>Total Projects</span>
              </div>
            </div>
            <div className="col-md-3 text-center wow fadeInUp" data-wow-delay=".2s">
              <div className="de_count">
                <h3 className="timer" data-to={projects.length} data-speed="2500">{projects.length}</h3>
                <span>Completed Projects</span>
              </div>
            </div>
            <div className="col-md-3 text-center wow fadeInUp" data-wow-delay=".4s">
              <div className="de_count">
                <h3 className="timer" data-to="100" data-speed="2500">100</h3>
                <span>Client Satisfaction %</span>
              </div>
            </div>
            <div className="col-md-3 text-center wow fadeInUp" data-wow-delay=".6s">
              <div className="de_count">
                <h3 className="timer" data-to="10" data-speed="2500">10</h3>
                <span>Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="call-to-action text-light" data-stellar-background-ratio=".2">
        <div className="container">
          <div className="row">
            <div className="col-md-8 wow fadeInLeft" data-wow-delay=".2s">
              <h2 style={{ color: '#873034' }}>Ready to Secure Your Property?</h2>
              <p style={{ color: '#666' }}>
                Contact us today to discuss your fire protection and safety needs. 
                Our Civil Defence approved team is ready to help secure your property.
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

export default ProjectsPage;
