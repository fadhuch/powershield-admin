// API connection test utility
import apiService from './services/api.js';

export const testApiConnection = async () => {
  try {
    console.log('Testing API connection...');
    console.log('API Base URL:', apiService.baseUrl);
    
    // Test health check endpoint
    const health = await apiService.healthCheck();
    console.log('Health check response:', health);
    return true;
  } catch (error) {
    console.error('API connection test failed:', error);
    return false;
  }
};

// You can call this in the browser console to test the connection
window.testApiConnection = testApiConnection;
