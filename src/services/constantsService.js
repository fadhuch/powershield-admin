import { buildApiUrl } from '../config/api';

// Service for fetching constants from the API
export const constantsService = {
  // Get all constants as a key-value object
  async getConstants() {
    try {
      const response = await fetch(buildApiUrl('/constants'));
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const constants = await response.json();
      return constants;
    } catch (error) {
      console.error('Error fetching constants:', error);
      return {};
    }
  },

  // Get a single constant by key
  async getConstantByKey(key) {
    try {
      const response = await fetch(buildApiUrl(`/constants/${encodeURIComponent(key)}`));
      
      if (!response.ok) {
        if (response.status === 404) {
          return null;
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      return result.value;
    } catch (error) {
      console.error(`Error fetching constant '${key}':`, error);
      return null;
    }
  }
};

export default constantsService;
