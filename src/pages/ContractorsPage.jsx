import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../../projects.json';

const ContractorsPage = () => {
  const [contractors, setContractors] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    // Extract unique contractors from projects.json
    const contractorMap = new Map();
    
    projectsData.forEach(project => {
      const contractorName = project['CIVIL CONTRACTOR'];
      if (contractorName && contractorName.trim()) {
        const projectStatus = project.status || project.STATUS || 'Completed';
        const isCompleted = projectStatus.toLowerCase() === 'completed';
        const isOngoing = projectStatus.toLowerCase() === 'ongoing' || projectStatus.toLowerCase() === 'ongoing';
        
        if (contractorMap.has(contractorName)) {
          // Increment project count
          const existing = contractorMap.get(contractorName);
          existing.totalProjects += 1;
          if (isCompleted) existing.completedProjects += 1;
          if (isOngoing) existing.ongoingProjects += 1;
        } else {
          // Add new contractor
          contractorMap.set(contractorName, {
            name: contractorName,
            totalProjects: 1,
            completedProjects: isCompleted ? 1 : 0,
            ongoingProjects: isOngoing ? 1 : 0,
            location: 'Umm Al Quwain, UAE',
            status: 'Active',
            type: 'contractor'
          });
        }
      }
    });

    // Extract unique consultants from projects.json
    const consultantMap = new Map();
    
    projectsData.forEach(project => {
      const consultantName = project['CONSULTANT'];
      if (consultantName && consultantName.trim()) {
        const projectStatus = project.status || project.STATUS || 'Completed';
        const isCompleted = projectStatus.toLowerCase() === 'completed';
        const isOngoing = projectStatus.toLowerCase() === 'ongoing' || projectStatus.toLowerCase() === 'ongoing';
        
        if (consultantMap.has(consultantName)) {
          // Increment project count
          const existing = consultantMap.get(consultantName);
          existing.totalProjects += 1;
          if (isCompleted) existing.completedProjects += 1;
          if (isOngoing) existing.ongoingProjects += 1;
        } else {
          // Add new consultant
          consultantMap.set(consultantName, {
            name: consultantName,
            totalProjects: 1,
            completedProjects: isCompleted ? 1 : 0,
            ongoingProjects: isOngoing ? 1 : 0,
            location: 'Umm Al Quwain, UAE',
            status: 'Active',
            type: 'consultant'
          });
        }
      }
    });

    // Combine contractors and consultants, then sort by name
    const allPartnersArray = [
      ...Array.from(contractorMap.values()),
      ...Array.from(consultantMap.values())
    ]
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((partner, index) => ({
        id: index + 1,
        ...partner
      }));

    setContractors(allPartnersArray);
  }, []);

  const getInitials = (name) => {
    const words = name.split(' ');
    if (words.length >= 2) {
      return words[0][0] + words[1][0];
    }
    return words[0][0] + (words[0][1] || '');
  };

  return (
    <>
      {/* Hero Section */}
      <section className="subheader">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Our Contractors</h1>
              <ul className="crumb">
                <li><Link to="/">Home</Link></li>
                <li className="sep"></li>
                <li>Contractors</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contractors Content */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center wow fadeInUp">
              <h1>Trusted Partners</h1>
              <div className="separator">
                <span><i className="fa fa-circle"></i></span>
              </div>
              <p className="lead">
                Working with the best civil contractors and engineering consultants in Umm Al Quwain and UAE 
                to deliver exceptional fire safety projects and building construction excellence.
              </p>
              <div className="spacer-single"></div>
            </div>
          </div>

          {/* Filter Navigation */}
          <div className="row">
            <div className="col-md-12">
              <div className="project-filter text-center mb40">
                <button
                  className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                  onClick={() => setActiveFilter('all')}
                  style={{
                    padding: '10px 25px',
                    margin: '0 10px 10px',
                    border: '2px solid #873034',
                    background: activeFilter === 'all' ? '#873034' : 'transparent',
                    color: activeFilter === 'all' ? 'white' : '#873034',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: '600',
                    transition: 'all 0.3s ease'
                  }}
                >
                  All Partners
                </button>
                <button
                  className={`filter-btn ${activeFilter === 'contractor' ? 'active' : ''}`}
                  onClick={() => setActiveFilter('contractor')}
                  style={{
                    padding: '10px 25px',
                    margin: '0 10px 10px',
                    border: '2px solid #873034',
                    background: activeFilter === 'contractor' ? '#873034' : 'transparent',
                    color: activeFilter === 'contractor' ? 'white' : '#873034',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: '600',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Contractors
                </button>
                <button
                  className={`filter-btn ${activeFilter === 'consultant' ? 'active' : ''}`}
                  onClick={() => setActiveFilter('consultant')}
                  style={{
                    padding: '10px 25px',
                    margin: '0 10px 10px',
                    border: '2px solid #007bff',
                    background: activeFilter === 'consultant' ? '#007bff' : 'transparent',
                    color: activeFilter === 'consultant' ? 'white' : '#007bff',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: '600',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Consultants
                </button>
              </div>
            </div>
          </div>

          {/* Contractors Grid */}
          <div className="row">
            {contractors
              .filter(contractor => activeFilter === 'all' || contractor.type === activeFilter)
              .map((contractor, index) => (
              <div key={contractor.id} className="col-md-6 col-lg-4 mb40 wow fadeInUp" data-wow-delay={`.${(index + 1) * 1}s`}>
                <div style={{
                  background: 'white',
                  border: '1px solid #e0e0e0',
                  borderRadius: '10px',
                  padding: '30px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                }}
                >
                  {/* Avatar/Logo Placeholder */}
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #873034 0%, #a04044 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    color: 'white',
                    fontSize: '28px',
                    fontWeight: 'bold'
                  }}>
                    {getInitials(contractor.name)}
                  </div>

                  {/* Contractor/Consultant Name */}
                  <h4 style={{
                    color: '#873034',
                    fontSize: '18px',
                    fontWeight: '700',
                    marginBottom: '10px',
                    textAlign: 'center',
                    minHeight: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {contractor.name}
                  </h4>

                  {/* Type Badge */}
                  <div style={{ textAlign: 'center', marginBottom: '15px' }}>
                    <span style={{
                      background: contractor.type === 'consultant' ? '#007bff' : '#873034',
                      color: 'white',
                      padding: '5px 15px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: '600',
                      textTransform: 'capitalize'
                    }}>
                      {contractor.type}
                    </span>
                  </div>

                  {/* Partner Details */}
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <i className="fa fa-map-marker" style={{ color: '#873034', marginTop: '3px', width: '16px' }}></i>
                      <span style={{ fontSize: '14px', color: '#666', lineHeight: '1.4' }}>
                        {contractor.location}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <i className="fa fa-check-circle" style={{ color: '#28a745', marginTop: '3px', width: '16px' }}></i>
                      <span style={{ fontSize: '14px', color: '#666', lineHeight: '1.4' }}>
                        <strong style={{ color: '#28a745' }}>{contractor.completedProjects}</strong> Completed
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <i className="fa fa-clock-o" style={{ color: '#ffc107', marginTop: '3px', width: '16px' }}></i>
                      <span style={{ fontSize: '14px', color: '#666', lineHeight: '1.4' }}>
                        <strong style={{ color: '#ffc107' }}>{contractor.ongoingProjects}</strong> Ongoing
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <i className="fa fa-briefcase" style={{ color: '#873034', marginTop: '3px', width: '16px' }}></i>
                      <span style={{ fontSize: '14px', color: '#666', lineHeight: '1.4' }}>
                        <strong style={{ color: '#873034' }}>{contractor.totalProjects}</strong> Total {contractor.totalProjects === 1 ? 'Project' : 'Projects'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {contractors.length === 0 && (
            <div className="row">
              <div className="col-md-12 text-center">
                <p>No contractors found.</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Statistics Section */}
      
    </>
  );
};

export default ContractorsPage;
