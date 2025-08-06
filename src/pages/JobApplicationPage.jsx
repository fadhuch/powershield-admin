import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { buildApiUrl } from '../config/api';

const JobApplicationPage = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    position: '',
    linkedinUrl: '',
    coverLetter: ''
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetchJobDetails();
  }, [jobId]);

  const fetchJobDetails = async () => {
    try {
      // Use backend API URL - /api/careers/public/:id
      const response = await fetch(buildApiUrl(`/careers/public/${jobId}`));
      if (!response.ok) throw new Error('Job not found');
      const data = await response.json();
      
      // Handle the response format: { success: true, data: {...} }
      const jobData = data.success ? data.data : data;
      setJob(jobData);
      setFormData(prev => ({ ...prev, position: jobData.title }));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.coverLetter.trim()) newErrors.coverLetter = 'Cover letter is required';

    // Optional LinkedIn URL validation
    if (formData.linkedinUrl && !formData.linkedinUrl.includes('linkedin.com')) {
      newErrors.linkedinUrl = 'Please enter a valid LinkedIn URL';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setSubmitting(true);
    
    try {
      // Prepare the application data with all required fields
      const applicationData = {
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        address: formData.address.trim(),
        position: formData.position.trim(),
        linkedinUrl: formData.linkedinUrl.trim() || null, // Send null if empty
        coverLetter: formData.coverLetter.trim(),
        jobId: jobId
      };

      // Use backend API URL and send JSON data
      const response = await fetch(buildApiUrl('/job-applications'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(applicationData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit application');
      }

      const result = await response.json();

      setSuccess(true);
      setTimeout(() => {
        navigate('/careers');
      }, 3000);

    } catch (err) {
      console.error('Application submission error:', err);
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div style={{ padding: '100px 20px', textAlign: 'center' }}>
        <div>Loading job details...</div>
      </div>
    );
  }

  if (error && !job) {
    return (
      <div style={{ padding: '100px 20px', textAlign: 'center', color: '#dc3545' }}>
        <div>Error: {error}</div>
        <button 
          onClick={() => navigate('/careers')} 
          style={{ marginTop: '20px', padding: '10px 20px' }}
        >
          Back to Careers
        </button>
      </div>
    );
  }

  if (success) {
    return (
      <div style={{ padding: '100px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ fontSize: '4em', color: '#28a745', marginBottom: '20px' }}>✓</div>
          <h2 style={{ color: '#28a745', marginBottom: '20px' }}>Application Submitted Successfully!</h2>
          <p style={{ color: '#666', marginBottom: '30px' }}>
            Thank you for your interest in the {job?.title} position. We'll review your application and get back to you soon.
          </p>
          <p style={{ color: '#888' }}>
            Redirecting to careers page in a few seconds...
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Header Section */}
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
            Apply for Position
          </h1>
          {job && (
            <p style={{ fontSize: '1.3em', marginBottom: '0', opacity: '0.9' }}>
              {job.title} - {job.location}
            </p>
          )}
        </div>
      </section>

      {/* Application Form Section */}
      <section style={{ padding: '80px 20px', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {/* Job Summary */}
          {job && (
            <div 
              style={{
                background: 'white',
                padding: '30px',
                borderRadius: '10px',
                marginBottom: '40px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
              }}
            >
              <h3 style={{ color: '#873034', marginBottom: '15px' }}>{job.title}</h3>
              <div style={{ display: 'flex', gap: '20px', marginBottom: '15px', flexWrap: 'wrap' }}>
                <span style={{ color: '#666' }}>
                  <i className="fa fa-map-marker" style={{ marginRight: '8px' }}></i>
                  {job.location}
                </span>
                <span style={{ color: '#666' }}>
                  <i className="fa fa-briefcase" style={{ marginRight: '8px' }}></i>
                  {job.type}
                </span>
                <span style={{ color: '#666' }}>
                  <i className="fa fa-clock-o" style={{ marginRight: '8px' }}></i>
                  {job.experience} years experience
                </span>
                {job.salary && (
                  <span style={{ color: '#873034', fontWeight: 'bold' }}>
                    <i className="fa fa-money" style={{ marginRight: '8px' }}></i>
                    AED {job.salary}
                  </span>
                )}
              </div>
              
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ color: '#333', marginBottom: '10px' }}>Job Description:</h4>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  {job.description}
                </p>
              </div>

              {job.requirements && job.requirements.length > 0 && (
                <div style={{ marginBottom: '15px' }}>
                  <h4 style={{ color: '#333', marginBottom: '10px' }}>Requirements:</h4>
                  <ul style={{ color: '#666', lineHeight: '1.6', paddingLeft: '20px', margin: 0 }}>
                    {job.requirements.map((req, index) => (
                      <li key={index} style={{ marginBottom: '5px' }}>{req}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div style={{ fontSize: '0.9em', color: '#888', borderTop: '1px solid #eee', paddingTop: '15px' }}>
                Posted: {new Date(job.createdAt).toLocaleDateString()} | 
                Status: <span style={{ 
                  color: job.status === 'active' ? '#28a745' : '#6c757d',
                  fontWeight: 'bold',
                  textTransform: 'capitalize'
                }}>{job.status}</span>
              </div>
            </div>
          )}

          {/* Application Form */}
          <div 
            style={{
              background: 'white',
              padding: '40px',
              borderRadius: '10px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }}
          >
            <h2 style={{ color: '#873034', marginBottom: '30px', textAlign: 'center' }}>
              Application Form
            </h2>

            {error && (
              <div style={{ 
                background: '#f8d7da', 
                color: '#721c24', 
                padding: '15px', 
                borderRadius: '5px', 
                marginBottom: '20px',
                border: '1px solid #f5c6cb'
              }}>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Personal Information */}
              <div style={{ marginBottom: '30px' }}>
                <h4 style={{ color: '#333', marginBottom: '20px', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>
                  Personal Information
                </h4>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: errors.firstName ? '1px solid #dc3545' : '1px solid #ddd',
                        borderRadius: '5px',
                        fontSize: '16px'
                      }}
                      placeholder="Enter your first name"
                    />
                    {errors.firstName && (
                      <span style={{ color: '#dc3545', fontSize: '14px', marginTop: '5px', display: 'block' }}>
                        {errors.firstName}
                      </span>
                    )}
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: errors.lastName ? '1px solid #dc3545' : '1px solid #ddd',
                        borderRadius: '5px',
                        fontSize: '16px'
                      }}
                      placeholder="Enter your last name"
                    />
                    {errors.lastName && (
                      <span style={{ color: '#dc3545', fontSize: '14px', marginTop: '5px', display: 'block' }}>
                        {errors.lastName}
                      </span>
                    )}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: errors.email ? '1px solid #dc3545' : '1px solid #ddd',
                        borderRadius: '5px',
                        fontSize: '16px'
                      }}
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <span style={{ color: '#dc3545', fontSize: '14px', marginTop: '5px', display: 'block' }}>
                        {errors.email}
                      </span>
                    )}
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: errors.phone ? '1px solid #dc3545' : '1px solid #ddd',
                        borderRadius: '5px',
                        fontSize: '16px'
                      }}
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && (
                      <span style={{ color: '#dc3545', fontSize: '14px', marginTop: '5px', display: 'block' }}>
                        {errors.phone}
                      </span>
                    )}
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
                    Address *
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows="3"
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: errors.address ? '1px solid #dc3545' : '1px solid #ddd',
                      borderRadius: '5px',
                      fontSize: '16px',
                      resize: 'vertical'
                    }}
                    placeholder="Enter your full address"
                  />
                  {errors.address && (
                    <span style={{ color: '#dc3545', fontSize: '14px', marginTop: '5px', display: 'block' }}>
                      {errors.address}
                    </span>
                  )}
                </div>
              </div>

              {/* Job Information */}
              <div style={{ marginBottom: '30px' }}>
                <h4 style={{ color: '#333', marginBottom: '20px', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>
                  Job Information
                </h4>
                
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
                    Position *
                  </label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #ddd',
                      borderRadius: '5px',
                      fontSize: '16px',
                      backgroundColor: '#f8f9fa'
                    }}
                    readOnly
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
                    LinkedIn URL (Optional)
                  </label>
                  <input
                    type="url"
                    name="linkedinUrl"
                    value={formData.linkedinUrl}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: errors.linkedinUrl ? '1px solid #dc3545' : '1px solid #ddd',
                      borderRadius: '5px',
                      fontSize: '16px'
                    }}
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                  {errors.linkedinUrl && (
                    <span style={{ color: '#dc3545', fontSize: '14px', marginTop: '5px', display: 'block' }}>
                      {errors.linkedinUrl}
                    </span>
                  )}
                </div>
              </div>

              {/* Application Details */}
              <div style={{ marginBottom: '30px' }}>
                <h4 style={{ color: '#333', marginBottom: '20px', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>
                  Application Details
                </h4>
                
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
                    Cover Letter *
                  </label>
                  <textarea
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    rows="6"
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: errors.coverLetter ? '1px solid #dc3545' : '1px solid #ddd',
                      borderRadius: '5px',
                      fontSize: '16px',
                      resize: 'vertical'
                    }}
                    placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                  />
                  {errors.coverLetter && (
                    <span style={{ color: '#dc3545', fontSize: '14px', marginTop: '5px', display: 'block' }}>
                      {errors.coverLetter}
                    </span>
                  )}
                </div>

                
              </div>

              {/* Submit Button */}
              <div style={{ textAlign: 'center' }}>
                <button
                  type="submit"
                  disabled={submitting}
                  style={{
                    background: submitting ? '#6c757d' : '#873034',
                    color: 'white',
                    padding: '15px 40px',
                    border: 'none',
                    borderRadius: '5px',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    cursor: submitting ? 'not-allowed' : 'pointer',
                    transition: 'background-color 0.3s ease'
                  }}
                  onMouseEnter={(e) => !submitting && (e.target.style.backgroundColor = '#6d2427')}
                  onMouseLeave={(e) => !submitting && (e.target.style.backgroundColor = '#873034')}
                >
                  {submitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobApplicationPage;
