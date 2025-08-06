// API Configuration
const API_CONFIG = {
  // Backend API base URL - Vite uses import.meta.env for environment variables
  baseURL: import.meta.env?.VITE_API_URL || 'http://localhost:3001',
  
  // API endpoints (without /api prefix - it's added automatically by baseURL)
  endpoints: {
    // Public endpoints
    careers: '/careers/public',        // Will be /api/careers/public
    careersById: '/careers/public',    // Will be /api/careers/public/:id
    jobApplications: '/job-applications', // Will be /api/job-applications
    
    // Admin endpoints  
    adminCareers: '/admin/careers',              // Will be /api/admin/careers
    adminApplications: '/admin/job-applications', // Will be /api/admin/job-applications
    adminAuth: '/admin',                         // Will be /api/admin
  },
};

// Helper function to build full API URLs
export const buildApiUrl = (endpoint) => {
  return `${API_CONFIG.baseURL}${endpoint}`;
};

// Helper function for API requests with error handling
export const apiRequest = async (endpoint, options = {}) => {
  const url = buildApiUrl(endpoint);
  
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(errorData?.message || `HTTP error! status: ${response.status}`);
    }

    return response;
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};

export default API_CONFIG;
