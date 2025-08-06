import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { buildApiUrl } from '../config/api';

const CareersPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      // Use backend API URL - /api/careers/public
      const response = await fetch(buildApiUrl('/careers/public'));
      if (!response.ok) throw new Error('Failed to fetch jobs');
      const data = await response.json();
      
      // Handle the specific response format: { success: true, data: [...] }
      if (data.success && Array.isArray(data.data)) {
        setJobs(data.data);
      } else if (Array.isArray(data)) {
        // Fallback for direct array response
        setJobs(data);
      } else {
        console.error('Unexpected response format:', data);
        setJobs([]); // Set empty array as fallback
        setError('Invalid response format from server');
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setError(err.message);
      setJobs([]); // Set empty array as fallback
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div style={{ padding: '100px 20px', textAlign: 'center' }}>
        <div>Loading careers...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: '100px 20px', textAlign: 'center', color: '#dc3545' }}>
        <div>Error: {error}</div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section 
        style={{
          background: 'linear-gradient(rgba(135, 48, 52, 0.8), rgba(135, 48, 52, 0.8)), url(/assets/images/background/bg-2.jpg) center center',
          backgroundSize: 'cover',
          padding: '120px 20px 80px',
          color: 'white',
          textAlign: 'center'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3em', marginBottom: '20px', fontWeight: 'bold' }}>
            Join Our Team
          </h1>
          <p style={{ fontSize: '1.3em', marginBottom: '0', opacity: '0.9' }}>
            Build your career with Power Shield Technical Service LLC
          </p>
        </div>
      </section>

      {/* Jobs Listing Section */}
      <section style={{ padding: '80px 20px', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5em', color: '#873034', marginBottom: '20px' }}>
              Current Openings
            </h2>
            <p style={{ fontSize: '1.1em', color: '#666' }}>
              Explore exciting career opportunities with our growing team
            </p>
          </div>

          {!Array.isArray(jobs) || jobs.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px' }}>
              <h3 style={{ color: '#666', marginBottom: '20px' }}>No Current Openings</h3>
              <p style={{ color: '#888' }}>
                We're not actively hiring right now, but we're always interested in talented individuals.
                Feel free to send us your resume at careers@powershield.ae
              </p>
            </div>
          ) : (
            <div style={{ display: 'grid', gap: '30px' }}>
              {jobs.map((job) => (
                <div 
                  key={job.id}
                  style={{
                    background: 'white',
                    padding: '40px',
                    borderRadius: '10px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    border: '1px solid #eee'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                    <div>
                      <h3 style={{ color: '#873034', fontSize: '1.8em', marginBottom: '10px' }}>
                        {job.title}
                      </h3>
                      <div style={{ display: 'flex', gap: '20px', marginBottom: '15px' }}>
                        <span style={{ color: '#666', display: 'flex', alignItems: 'center' }}>
                          <i className="fa fa-map-marker" style={{ marginRight: '8px' }}></i>
                          {job.location}
                        </span>
                        <span style={{ color: '#666', display: 'flex', alignItems: 'center' }}>
                          <i className="fa fa-briefcase" style={{ marginRight: '8px' }}></i>
                          {job.type}
                        </span>
                        <span style={{ color: '#666', display: 'flex', alignItems: 'center' }}>
                          <i className="fa fa-clock-o" style={{ marginRight: '8px' }}></i>
                          {job.experience}
                        </span>
                      </div>
                    </div>
                    <span 
                      style={{
                        background: job.status === 'active' ? '#28a745' : '#6c757d',
                        color: 'white',
                        padding: '5px 15px',
                        borderRadius: '20px',
                        fontSize: '0.9em',
                        textTransform: 'capitalize'
                      }}
                    >
                      {job.status}
                    </span>
                  </div>

                  <div style={{ marginBottom: '25px' }}>
                    <h4 style={{ color: '#333', marginBottom: '10px' }}>Job Description:</h4>
                    <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '15px' }}>
                      {job.description}
                    </p>
                  </div>

                  {job.requirements && job.requirements.length > 0 && (
                    <div style={{ marginBottom: '25px' }}>
                      <h4 style={{ color: '#333', marginBottom: '10px' }}>Requirements:</h4>
                      <ul style={{ color: '#666', lineHeight: '1.6', paddingLeft: '20px' }}>
                        {job.requirements.map((req, index) => (
                          <li key={index} style={{ marginBottom: '5px' }}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {job.salary && (
                    <div style={{ marginBottom: '25px' }}>
                      <h4 style={{ color: '#333', marginBottom: '10px' }}>Salary:</h4>
                      <p style={{ color: '#873034', fontWeight: 'bold', fontSize: '1.1em' }}>
                        {job.salary}
                      </p>
                    </div>
                  )}

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: '#888', fontSize: '0.9em' }}>
                      Posted: {new Date(job.createdAt).toLocaleDateString()}
                    </span>
                    {job.status === 'active' && (
                      <Link
                        to={`/careers/apply/${job.id}`}
                        style={{
                          background: '#873034',
                          color: 'white',
                          padding: '12px 30px',
                          borderRadius: '5px',
                          textDecoration: 'none',
                          fontWeight: 'bold',
                          transition: 'background-color 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#6d2427'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#873034'}
                      >
                        Apply Now
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section style={{ padding: '80px 20px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5em', color: '#873034', marginBottom: '20px' }}>
              Why Work With Us?
            </h2>
            <p style={{ fontSize: '1.1em', color: '#666' }}>
              Join a team that values excellence, innovation, and professional growth
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3em', color: '#873034', marginBottom: '20px' }}>🏆</div>
              <h3 style={{ color: '#873034', marginBottom: '15px' }}>Industry Leader</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Work with one of the leading fire protection companies approved by Civil Defence
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3em', color: '#873034', marginBottom: '20px' }}>📈</div>
              <h3 style={{ color: '#873034', marginBottom: '15px' }}>Career Growth</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Advance your career with continuous learning and development opportunities
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3em', color: '#873034', marginBottom: '20px' }}>🤝</div>
              <h3 style={{ color: '#873034', marginBottom: '15px' }}>Team Culture</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Be part of a collaborative team that values innovation and excellence
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3em', color: '#873034', marginBottom: '20px' }}>💰</div>
              <h3 style={{ color: '#873034', marginBottom: '15px' }}>Competitive Benefits</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Enjoy competitive salary packages and comprehensive benefits
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareersPage;
