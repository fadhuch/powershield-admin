import React, { useState, useEffect } from 'react';
import { buildApiUrl } from '../config/api';

// Helper function for status colors
const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case 'pending':
      return '#6c757d'; // Gray
    case 'reviewing':
      return '#007bff'; // Blue
    case 'shortlisted':
      return '#17a2b8'; // Cyan
    case 'interviewed':
      return '#fd7e14'; // Orange
    case 'hired':
      return '#28a745'; // Green
    case 'rejected':
      return '#dc3545'; // Red
    default:
      return '#6c757d'; // Gray
  }
};

const AdminCareersPage = () => {
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [groupedApplications, setGroupedApplications] = useState({});
  const [activeTab, setActiveTab] = useState('jobs');
  const [showJobForm, setShowJobForm] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState('');

  const [jobForm, setJobForm] = useState({
    title: '',
    description: '',
    location: '',
    type: '',
    experience: '',
    requirements: [''],
    salary: '',
    status: 'active'
  });

  useEffect(() => {
    fetchJobs();
    fetchApplications();
    fetchGroupedApplications();
  }, []);

  // Authentication helpers
  const getAuthToken = () => {
    return localStorage.getItem('adminToken');
  };

  const setAuthToken = (token) => {
    localStorage.setItem('adminToken', token);
  };

  const removeAuthToken = () => {
    localStorage.removeItem('adminToken');
  };

  const makeAuthenticatedRequest = async (url, options = {}) => {
    const token = getAuthToken();
    const headers = {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` }),
      ...options.headers
    };

    const response = await fetch(url, {
      ...options,
      headers
    });

    if (response.status === 401) {
      setShowLoginPopup(true);
      throw new Error('Authentication required');
    }

    return response;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError('');

    try {
      const response = await fetch(buildApiUrl('/admin/login'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginForm)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Handle the token from the response structure: data.data.token
        const token = data.data?.token || data.token;
        if (token) {
          setAuthToken(token);
          setShowLoginPopup(false);
          setLoginForm({ username: '', password: '' });
          setLoginError('');
          // Retry fetching data after successful login
          fetchJobs();
          fetchApplications();
          fetchGroupedApplications();
        } else {
          setLoginError('Authentication token not found in response.');
        }
      } else {
        setLoginError(data.message || 'Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setLoginError('An error occurred during login. Please try again.');
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLoginFormChange = (e) => {
    const { name, value } = e.target;
    setLoginForm(prev => ({ ...prev, [name]: value }));
  };

  const fetchJobs = async () => {
    try {
      const response = await makeAuthenticatedRequest(buildApiUrl('/admin/careers'));
      const data = await response.json();
      
      // Handle the { success: true, data: [...] } format
      if (data && data.success && Array.isArray(data.data)) {
        setJobs(data.data);
      } else if (Array.isArray(data)) {
        setJobs(data);
      } else {
        console.warn('Unexpected jobs response format:', data);
        setJobs([]);
      }
    } catch (error) {
      if (error.message !== 'Authentication required') {
        console.error('Error fetching jobs:', error);
        setJobs([]);
      }
    }
  };

  const fetchApplications = async () => {
    try {
      const response = await makeAuthenticatedRequest(buildApiUrl('/admin/job-applications'));
      const data = await response.json();
      
      // Handle the { success: true, data: [...] } format
      if (data && data.success && Array.isArray(data.data)) {
        setApplications(data.data);
      } else if (Array.isArray(data)) {
        setApplications(data);
      } else {
        console.warn('Unexpected applications response format:', data);
        setApplications([]);
      }
    } catch (error) {
      if (error.message !== 'Authentication required') {
        console.error('Error fetching applications:', error);
        setApplications([]);
      }
    }
  };

  const fetchGroupedApplications = async () => {
    try {
      const response = await makeAuthenticatedRequest(buildApiUrl('/job-applications/grouped-by-job'));
      const data = await response.json();
      
      console.log('Grouped applications response:', data);
      
      // Handle the { success: true, data: [...] } format where data is an array
      let groupedData = {};
      
      if (data && data.success && Array.isArray(data.data)) {
        // Convert array to object with jobId as key
        data.data.forEach(item => {
          if (item.jobId && item.jobDetails) {
            groupedData[item.jobId] = {
              job: item.jobDetails,
              applications: item.applications || [],
              statistics: item.statistics || { total: 0, pending: 0, reviewing: 0, accepted: 0, rejected: 0 }
            };
          }
        });
        setGroupedApplications(groupedData);
      } else if (Array.isArray(data)) {
        // Fallback for direct array response
        data.forEach(item => {
          if (item.jobId && item.jobDetails) {
            groupedData[item.jobId] = {
              job: item.jobDetails,
              applications: item.applications || [],
              statistics: item.statistics || { total: 0, pending: 0, reviewing: 0, accepted: 0, rejected: 0 }
            };
          }
        });
        setGroupedApplications(groupedData);
      } else {
        console.warn('Unexpected grouped applications response format:', data);
        setGroupedApplications({});
      }
      
      console.log('Processed grouped applications:', groupedData);
    } catch (error) {
      if (error.message !== 'Authentication required') {
        console.error('Error fetching grouped applications:', error);
        setGroupedApplications({});
      }
    }
  };

  const handleJobFormChange = (e) => {
    const { name, value } = e.target;
    setJobForm(prev => ({ ...prev, [name]: value }));
  };

  const handleRequirementChange = (index, value) => {
    const newRequirements = [...jobForm.requirements];
    newRequirements[index] = value;
    setJobForm(prev => ({ ...prev, requirements: newRequirements }));
  };

  const addRequirement = () => {
    setJobForm(prev => ({ ...prev, requirements: [...prev.requirements, ''] }));
  };

  const removeRequirement = (index) => {
    const newRequirements = jobForm.requirements.filter((_, i) => i !== index);
    setJobForm(prev => ({ ...prev, requirements: newRequirements }));
  };

  const handleSubmitJob = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const url = editingJob ? buildApiUrl(`/admin/careers/${editingJob.id}`) : buildApiUrl('/admin/careers');
      const method = editingJob ? 'PUT' : 'POST';

      const response = await makeAuthenticatedRequest(url, {
        method,
        body: JSON.stringify({
          ...jobForm,
          requirements: jobForm.requirements.filter(req => req.trim() !== '')
        })
      });

      if (response.ok) {
        await fetchJobs();
        setShowJobForm(false);
        setEditingJob(null);
        setJobForm({
          title: '',
          description: '',
          location: '',
          type: '',
          experience: '',
          requirements: [''],
          salary: '',
          status: 'active'
        });
      }
    } catch (error) {
      if (error.message !== 'Authentication required') {
        console.error('Error saving job:', error);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleEditJob = (job) => {
    setEditingJob(job);
    setJobForm({
      title: job.title || '',
      description: job.description || '',
      location: job.location || '',
      type: job.type || '',
      experience: job.experience || '',
      requirements: job.requirements?.length > 0 ? job.requirements : [''],
      salary: job.salary || '',
      status: job.status || 'active'
    });
    setShowJobForm(true);
  };

  const handleDeleteJob = async (jobId) => {
    if (!window.confirm('Are you sure you want to delete this job?')) return;

    try {
      const response = await makeAuthenticatedRequest(buildApiUrl(`/admin/careers/${jobId}`), {
        method: 'DELETE'
      });

      if (response.ok) {
        await fetchJobs();
      }
    } catch (error) {
      if (error.message !== 'Authentication required') {
        console.error('Error deleting job:', error);
      }
    }
  };

  const handleStatusChange = async (jobId, newStatus) => {
    try {
      const response = await makeAuthenticatedRequest(buildApiUrl(`/admin/careers/${jobId}/status`), {
        method: 'PATCH',
        body: JSON.stringify({ status: newStatus })
      });

      if (response.ok) {
        await fetchJobs();
      }
    } catch (error) {
      if (error.message !== 'Authentication required') {
        console.error('Error updating job status:', error);
      }
    }
  };

  const handleApplicationStatusChange = async (applicationId, newStatus) => {
    try {
      const response = await makeAuthenticatedRequest(buildApiUrl(`/admin/job-applications/${applicationId}/status`), {
        method: 'PATCH',
        body: JSON.stringify({ status: newStatus })
      });

      if (response.ok) {
        await fetchApplications();
        await fetchGroupedApplications();
      }
    } catch (error) {
      if (error.message !== 'Authentication required') {
        console.error('Error updating application status:', error);
      }
    }
  };

  const downloadResume = (application) => {
    const token = getAuthToken();
    if (token) {
      const url = buildApiUrl(`/admin/job-applications/${application.id}/resume`);
      window.open(`${url}?token=${encodeURIComponent(token)}`, '_blank');
    }
  };

  return (
    <>
      {/* Login Popup */}
      {showLoginPopup && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.8)',
          zIndex: 2000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <div style={{
            background: 'white',
            padding: '40px',
            borderRadius: '10px',
            width: '100%',
            maxWidth: '400px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
          }}>
            <h2 style={{ color: '#873034', marginBottom: '20px', textAlign: 'center' }}>
              Admin Login Required
            </h2>
            <p style={{ color: '#666', marginBottom: '30px', textAlign: 'center' }}>
              Please log in to access the admin panel.
            </p>

            {loginError && (
              <div style={{
                background: '#f8d7da',
                color: '#721c24',
                padding: '12px',
                borderRadius: '5px',
                marginBottom: '20px',
                border: '1px solid #f5c6cb'
              }}>
                {loginError}
              </div>
            )}

            <form onSubmit={handleLogin}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={loginForm.username}
                  onChange={handleLoginFormChange}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: '5px',
                    fontSize: '16px'
                  }}
                  required
                  autoFocus
                />
              </div>

              <div style={{ marginBottom: '30px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={loginForm.password}
                  onChange={handleLoginFormChange}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: '5px',
                    fontSize: '16px'
                  }}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loginLoading}
                style={{
                  width: '100%',
                  padding: '12px 24px',
                  background: loginLoading ? '#6c757d' : '#873034',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: loginLoading ? 'not-allowed' : 'pointer',
                  fontWeight: 'bold',
                  fontSize: '16px'
                }}
              >
                {loginLoading ? 'Logging in...' : 'Login'}
              </button>
            </form>
          </div>
        </div>
      )}

      <div style={{ padding: '20px', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <h1 style={{ color: '#873034', fontSize: '2.5em' }}>Career Management</h1>
          {activeTab === 'jobs' && (
            <button
              onClick={() => {
                setShowJobForm(true);
                setEditingJob(null);
                setJobForm({
                  title: '',
                  description: '',
                  location: '',
                  type: '',
                  experience: '',
                  requirements: [''],
                  salary: '',
                  status: 'active'
                });
              }}
              style={{
                background: '#873034',
                color: 'white',
                padding: '12px 24px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              Add New Job
            </button>
          )}
        </div>

        {/* Tab Navigation */}
        <div style={{ borderBottom: '2px solid #eee', marginBottom: '30px' }}>
          <button
            onClick={() => setActiveTab('jobs')}
            style={{
              padding: '12px 24px',
              border: 'none',
              background: activeTab === 'jobs' ? '#873034' : 'transparent',
              color: activeTab === 'jobs' ? 'white' : '#666',
              borderRadius: '5px 5px 0 0',
              marginRight: '10px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Job Positions ({jobs.length})
          </button>
          <button
            onClick={() => setActiveTab('applications')}
            style={{
              padding: '12px 24px',
              border: 'none',
              background: activeTab === 'applications' ? '#873034' : 'transparent',
              color: activeTab === 'applications' ? 'white' : '#666',
              borderRadius: '5px 5px 0 0',
              marginRight: '10px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Applications ({applications.length})
          </button>
          <button
            onClick={() => setActiveTab('grouped')}
            style={{
              padding: '12px 24px',
              border: 'none',
              background: activeTab === 'grouped' ? '#873034' : 'transparent',
              color: activeTab === 'grouped' ? 'white' : '#666',
              borderRadius: '5px 5px 0 0',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Grouped by Job ({Object.keys(groupedApplications).length})
          </button>
          <button
            onClick={() => setActiveTab('Constants')}
            style={{
              padding: '12px 24px',
              border: 'none',
              background: activeTab === 'Constants' ? '#873034' : 'transparent',
              color: activeTab === 'Constants' ? 'white' : '#666',
              borderRadius: '5px 5px 0 0',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Constants
          </button>
        </div>

        {/* Job Form Modal */}
        {showJobForm && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}>
            <div style={{
              background: 'white',
              padding: '40px',
              borderRadius: '10px',
              width: '100%',
              maxWidth: '800px',
              maxHeight: '90vh',
              overflow: 'auto'
            }}>
              <h2 style={{ color: '#873034', marginBottom: '30px' }}>
                {editingJob ? 'Edit Job' : 'Add New Job'}
              </h2>

              <form onSubmit={handleSubmitJob}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                      Job Title *
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={jobForm.title}
                      onChange={handleJobFormChange}
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '1px solid #ddd',
                        borderRadius: '5px'
                      }}
                      required
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                      Location *
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={jobForm.location}
                      onChange={handleJobFormChange}
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '1px solid #ddd',
                        borderRadius: '5px'
                      }}
                      required
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                      Job Type *
                    </label>
                    <select
                      name="type"
                      value={jobForm.type}
                      onChange={handleJobFormChange}
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '1px solid #ddd',
                        borderRadius: '5px'
                      }}
                      required
                    >
                      <option value="">Select Type</option>
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Contract">Contract</option>
                      <option value="Internship">Internship</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                      Experience *
                    </label>
                    <input
                      type="text"
                      name="experience"
                      value={jobForm.experience}
                      onChange={handleJobFormChange}
                      placeholder="e.g., 2-5 years"
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '1px solid #ddd',
                        borderRadius: '5px'
                      }}
                      required
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                      Status *
                    </label>
                    <select
                      name="status"
                      value={jobForm.status}
                      onChange={handleJobFormChange}
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '1px solid #ddd',
                        borderRadius: '5px'
                      }}
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                      <option value="closed">Closed</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                    Salary (Optional)
                  </label>
                  <input
                    type="text"
                    name="salary"
                    value={jobForm.salary}
                    onChange={handleJobFormChange}
                    placeholder="e.g., AED 8,000 - 12,000"
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #ddd',
                      borderRadius: '5px'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                    Job Description *
                  </label>
                  <textarea
                    name="description"
                    value={jobForm.description}
                    onChange={handleJobFormChange}
                    rows="5"
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #ddd',
                      borderRadius: '5px',
                      resize: 'vertical'
                    }}
                    required
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                    Requirements
                  </label>
                  {jobForm.requirements.map((req, index) => (
                    <div key={index} style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                      <input
                        type="text"
                        value={req}
                        onChange={(e) => handleRequirementChange(index, e.target.value)}
                        placeholder="Enter requirement"
                        style={{
                          flex: 1,
                          padding: '12px',
                          border: '1px solid #ddd',
                          borderRadius: '5px'
                        }}
                      />
                      {jobForm.requirements.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeRequirement(index)}
                          style={{
                            padding: '12px',
                            background: '#dc3545',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer'
                          }}
                        >
                          ×
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addRequirement}
                    style={{
                      padding: '8px 16px',
                      background: '#28a745',
                      color: 'white',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer'
                    }}
                  >
                    Add Requirement
                  </button>
                </div>

                <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                  <button
                    type="button"
                    onClick={() => setShowJobForm(false)}
                    style={{
                      padding: '12px 24px',
                      background: '#6c757d',
                      color: 'white',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer'
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      padding: '12px 24px',
                      background: loading ? '#6c757d' : '#873034',
                      color: 'white',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: loading ? 'not-allowed' : 'pointer'
                    }}
                  >
                    {loading ? 'Saving...' : (editingJob ? 'Update Job' : 'Create Job')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Jobs Tab */}
        {activeTab === 'jobs' && (
          <div>
            {jobs.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '60px', color: '#666' }}>
                <h3>No jobs created yet</h3>
                <p>Click "Add New Job" to create your first job posting.</p>
              </div>
            ) : (
              <div style={{ display: 'grid', gap: '20px' }}>
                {jobs.map((job) => (
                  <div key={job.id} style={{
                    background: 'white',
                    padding: '30px',
                    borderRadius: '10px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    border: '1px solid #eee'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                      <div>
                        <h3 style={{ color: '#873034', marginBottom: '10px' }}>{job.title}</h3>
                        <div style={{ display: 'flex', gap: '20px', marginBottom: '10px' }}>
                          <span style={{ color: '#666' }}>📍 {job.location}</span>
                          <span style={{ color: '#666' }}>💼 {job.type}</span>
                          <span style={{ color: '#666' }}>⏰ {job.experience}</span>
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <select
                          value={job.status}
                          onChange={(e) => handleStatusChange(job.id, e.target.value)}
                          style={{
                            padding: '5px 10px',
                            border: '1px solid #ddd',
                            borderRadius: '5px'
                          }}
                        >
                          <option value="active">Active</option>
                          <option value="inactive">Inactive</option>
                          <option value="closed">Closed</option>
                        </select>
                        <button
                          onClick={() => handleEditJob(job)}
                          style={{
                            padding: '8px 16px',
                            background: '#17a2b8',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer'
                          }}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteJob(job.id)}
                          style={{
                            padding: '8px 16px',
                            background: '#dc3545',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer'
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>

                    <p style={{ color: '#666', marginBottom: '15px', lineHeight: '1.6' }}>
                      {job.description}
                    </p>

                    {job.requirements && job.requirements.length > 0 && (
                      <div style={{ marginBottom: '15px' }}>
                        <strong>Requirements:</strong>
                        <ul style={{ marginTop: '5px', paddingLeft: '20px' }}>
                          {job.requirements.map((req, index) => (
                            <li key={index} style={{ color: '#666' }}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {job.salary && (
                      <div style={{ marginBottom: '15px' }}>
                        <strong>Salary:</strong> <span style={{ color: '#873034' }}>{job.salary}</span>
                      </div>
                    )}

                    <div style={{ fontSize: '0.9em', color: '#888' }}>
                      Created: {new Date(job.createdAt).toLocaleDateString()} | 
                      Applications: {job.applicationCount || 0}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Applications Tab */}
        {activeTab === 'applications' && (
          <div>
            {applications.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '60px', color: '#666' }}>
                <h3>No applications received yet</h3>
                <p>Applications will appear here once candidates start applying for your job postings.</p>
              </div>
            ) : (
              <div style={{ display: 'grid', gap: '20px' }}>
                {Array.isArray(applications) && applications.map((application) => (
                  <div key={application.id} style={{
                    background: 'white',
                    padding: '30px',
                    borderRadius: '10px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    border: '1px solid #eee'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                      <div>
                        <h3 style={{ color: '#873034', marginBottom: '5px' }}>
                          {application.fullName || `${application.firstName || ''} ${application.lastName || ''}`.trim() || 'N/A'}
                        </h3>
                        <p style={{ color: '#666', marginBottom: '10px' }}>
                          Applied for: <strong>{application.jobDetails?.title || application.position || 'N/A'}</strong>
                        </p>
                        <div style={{ display: 'flex', gap: '20px', fontSize: '0.9em', color: '#666' }}>
                          <span>📧 {application.email}</span>
                          <span>📱 {application.phone}</span>
                          <span>📅 {new Date(application.createdAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <select
                          value={application.status || 'pending'}
                          onChange={(e) => handleApplicationStatusChange(application.id, e.target.value)}
                          style={{
                            padding: '5px 10px',
                            border: '1px solid #ddd',
                            borderRadius: '5px'
                          }}
                        >
                          <option value="pending">Pending</option>
                          <option value="reviewing">Reviewing</option>
                          <option value="shortlisted">Shortlisted</option>
                          <option value="interviewed">Interviewed</option>
                          <option value="hired">Hired</option>
                          <option value="rejected">Rejected</option>
                        </select>
                        <button
                          onClick={() => downloadResume(application)}
                          style={{
                            padding: '8px 16px',
                            background: '#28a745',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer'
                          }}
                        >
                          Download Resume
                        </button>
                      </div>
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                      <strong>Location:</strong>
                      <p style={{ color: '#666', margin: '5px 0' }}>{application.location || application.address || 'Not provided'}</p>
                    </div>

                    {application.experience && (
                      <div style={{ marginBottom: '15px' }}>
                        <strong>Experience:</strong>
                        <p style={{ color: '#666', margin: '5px 0' }}>{application.experience}</p>
                      </div>
                    )}

                    {application.skills && application.skills.length > 0 && (
                      <div style={{ marginBottom: '15px' }}>
                        <strong>Skills:</strong>
                        <p style={{ color: '#666', margin: '5px 0' }}>{application.skills.join(', ')}</p>
                      </div>
                    )}

                    {(application.linkedinProfile || application.linkedinUrl) && (
                      <div style={{ marginBottom: '15px' }}>
                        <strong>LinkedIn:</strong>
                        <a 
                          href={application.linkedinProfile || application.linkedinUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{ color: '#873034', marginLeft: '10px' }}
                        >
                          View Profile
                        </a>
                      </div>
                    )}

                    {application.portfolioUrl && (
                      <div style={{ marginBottom: '15px' }}>
                        <strong>Portfolio:</strong>
                        <a 
                          href={application.portfolioUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{ color: '#873034', marginLeft: '10px' }}
                        >
                          View Portfolio
                        </a>
                      </div>
                    )}

                    <div style={{ marginBottom: '15px' }}>
                      <strong>Cover Letter:</strong>
                      <div style={{
                        background: '#f8f9fa',
                        padding: '15px',
                        borderRadius: '5px',
                        marginTop: '10px',
                        border: '1px solid #eee'
                      }}>
                        <p style={{ color: '#666', lineHeight: '1.6', margin: 0 }}>
                          {selectedApplication === application.id ? 
                            application.coverLetter : 
                            `${(application.coverLetter || 'No cover letter provided').substring(0, 200)}${(application.coverLetter || '').length > 200 ? '...' : ''}`
                          }
                        </p>
                        {(application.coverLetter || '').length > 200 && (
                          <button
                            onClick={() => setSelectedApplication(
                              selectedApplication === application.id ? null : application.id
                            )}
                            style={{
                              background: 'none',
                              border: 'none',
                              color: '#873034',
                              cursor: 'pointer',
                              marginTop: '10px',
                              fontWeight: 'bold'
                            }}
                          >
                            {selectedApplication === application.id ? 'Show Less' : 'Read More'}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Grouped Applications Tab */}
        {activeTab === 'grouped' && (
          <div>
            {Object.keys(groupedApplications).length === 0 ? (
              <div style={{ textAlign: 'center', padding: '60px', color: '#666' }}>
                <h3>No applications received yet</h3>
                <p>Applications grouped by job will appear here once candidates start applying for your job postings.</p>
              </div>
            ) : (
              <div style={{ display: 'grid', gap: '30px' }}>
                {Object.entries(groupedApplications).map(([jobId, data]) => {
                  // Add null checks for data and data.job
                  if (!data || !data.job) {
                    console.warn('Invalid grouped application data for jobId:', jobId, data);
                    return null;
                  }
                  
                  return (
                  <div key={jobId} style={{
                    background: 'white',
                    padding: '30px',
                    borderRadius: '10px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    border: '1px solid #eee'
                  }}>
                    {/* Job Header */}
                    <div style={{ 
                      marginBottom: '25px', 
                      padding: '20px', 
                      background: '#f8f9fa', 
                      borderRadius: '8px',
                      borderLeft: '4px solid #873034'
                    }}>
                      <h3 style={{ color: '#873034', marginBottom: '10px' }}>
                        {data.job.title || 'Untitled Job'}
                      </h3>
                      <div style={{ display: 'flex', gap: '20px', fontSize: '0.9em', color: '#666', marginBottom: '10px' }}>
                        <span>📍 {data.job.location || 'Location not specified'}</span>
                        <span>💼 {data.job.type || 'Type not specified'}</span>
                        <span>💰 {data.job.salary || 'Salary not specified'}</span>
                        <span>📊 {data.job.status || 'Status unknown'}</span>
                      </div>
                      <div style={{ display: 'flex', gap: '20px', fontSize: '0.9em', color: '#666' }}>
                        <span>📅 Posted: {data.job.createdAt ? new Date(data.job.createdAt).toLocaleDateString() : 'Date unknown'}</span>
                        <span>👥 Applications: <strong>{data.applications ? data.applications.length : 0}</strong></span>
                      </div>
                    </div>

                    {/* Applications for this job */}
                    <div>
                      <h4 style={{ color: '#666', marginBottom: '20px' }}>
                        Applications ({data.applications ? data.applications.length : 0})
                      </h4>
                      
                      {!data.applications || data.applications.length === 0 ? (
                        <p style={{ color: '#999', fontStyle: 'italic', textAlign: 'center', padding: '20px' }}>
                          No applications for this position yet.
                        </p>
                      ) : (
                        <div style={{ display: 'grid', gap: '15px' }}>
                          {data.applications.map((application) => (
                            <div key={application.id} style={{
                              background: '#fcfcfc',
                              padding: '20px',
                              borderRadius: '8px',
                              border: '1px solid #f0f0f0',
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center'
                            }}>
                              <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '8px' }}>
                                  <h5 style={{ color: '#873034', margin: 0 }}>
                                    {application.fullName || `${application.firstName || ''} ${application.lastName || ''}`.trim() || 'N/A'}
                                  </h5>
                                  <span style={{
                                    background: getStatusColor(application.status || 'pending'),
                                    color: 'white',
                                    padding: '3px 8px',
                                    borderRadius: '12px',
                                    fontSize: '0.8em',
                                    fontWeight: 'bold'
                                  }}>
                                    {(application.status || 'pending').toUpperCase()}
                                  </span>
                                </div>
                                <div style={{ display: 'flex', gap: '20px', fontSize: '0.85em', color: '#666' }}>
                                  <span>📧 {application.email}</span>
                                  <span>📱 {application.phone}</span>
                                  <span>📅 {new Date(application.createdAt).toLocaleDateString()}</span>
                                </div>
                                {application.location && (
                                  <div style={{ fontSize: '0.85em', color: '#666', marginTop: '5px' }}>
                                    📍 {application.location}
                                  </div>
                                )}
                              </div>
                              
                              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                <select
                                  value={application.status || 'pending'}
                                  onChange={(e) => handleApplicationStatusChange(application.id, e.target.value)}
                                  style={{
                                    padding: '6px 10px',
                                    border: '1px solid #ddd',
                                    borderRadius: '5px',
                                    fontSize: '0.9em'
                                  }}
                                >
                                  <option value="pending">Pending</option>
                                  <option value="reviewing">Reviewing</option>
                                  <option value="shortlisted">Shortlisted</option>
                                  <option value="interviewed">Interviewed</option>
                                  <option value="hired">Hired</option>
                                  <option value="rejected">Rejected</option>
                                </select>
                                
                                <button
                                  onClick={() => downloadResume(application)}
                                  style={{
                                    padding: '6px 12px',
                                    background: '#28a745',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    fontSize: '0.9em'
                                  }}
                                >
                                  Resume
                                </button>
                                
                                <button
                                  onClick={() => setSelectedApplication(
                                    selectedApplication === application.id ? null : application.id
                                  )}
                                  style={{
                                    padding: '6px 12px',
                                    background: '#17a2b8',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    fontSize: '0.9em'
                                  }}
                                >
                                  Details
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  );
                }).filter(Boolean)} {/* Filter out null entries */}
              </div>
            )}
          </div>
        )}

        {/* Constants Tab */
          <div
            style={{
              display: activeTab === 'constants' ? 'block' : 'none',
              padding: '20px',
              border: '1px solid #ddd',
              borderTop: 'none'
            }}
          >
            <h3>Constants</h3>
            
          </div>
        }
      </div>
    </>
  );
};

export default AdminCareersPage;
