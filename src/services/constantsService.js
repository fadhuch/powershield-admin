import { buildApiUrl } from '../config/api';

// Service for fetching constants from the API
export const constantsService = {
  // Get all constants as a key-value map
  async getConstantsMap(category = null) {
    try {
      const url = category 
        ? buildApiUrl(`/constants/map?category=${encodeURIComponent(category)}`)
        : buildApiUrl('/constants/map');
      
      const response = await fetch(url);
      
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
      const response = await fetch(buildApiUrl(`/constants/key/${encodeURIComponent(key)}`));
      
      if (!response.ok) {
        if (response.status === 404) {
          return null;
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const constant = await response.json();
      return constant;
    } catch (error) {
      console.error(`Error fetching constant '${key}':`, error);
      return null;
    }
  }
};

export default constantsService;
