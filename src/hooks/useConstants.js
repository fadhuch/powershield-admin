import { useState, useEffect } from 'react';
import constantsService from '../services/constantsService';

// Hook to fetch and use site constants
export const useConstants = (category = null) => {
  const [constants, setConstants] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchConstants = async () => {
      try {
        setLoading(true);
        setError(null);
        const constantsData = await constantsService.getConstantsMap(category);
        setConstants(constantsData);
      } catch (err) {
        setError(err.message);
        console.error('Error in useConstants hook:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchConstants();
  }, [category]);

  // Helper function to get a constant value with a fallback
  const getConstant = (key, fallback = '') => {
    return constants[key] !== undefined ? constants[key] : fallback;
  };

  return {
    constants,
    loading,
    error,
    getConstant
  };
};

// Hook to fetch a single constant by key
export const useConstant = (key, fallback = '') => {
  const [value, setValue] = useState(fallback);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!key) {
      setLoading(false);
      return;
    }

    const fetchConstant = async () => {
      try {
        setLoading(true);
        setError(null);
        const constant = await constantsService.getConstantByKey(key);
        
        if (constant && constant.value !== undefined) {
          // Parse value based on type
          let parsedValue = constant.value;
          switch (constant.type) {
            case 'number':
              parsedValue = Number(constant.value);
              break;
            case 'boolean':
              parsedValue = Boolean(constant.value);
              break;
            case 'json':
              try {
                parsedValue = JSON.parse(constant.value);
              } catch (e) {
                console.warn(`Failed to parse JSON for constant ${key}:`, e);
                parsedValue = constant.value;
              }
              break;
            default:
              parsedValue = constant.value;
              break;
          }
          setValue(parsedValue);
        } else {
          setValue(fallback);
        }
      } catch (err) {
        setError(err.message);
        setValue(fallback);
        console.error(`Error fetching constant '${key}':`, err);
      } finally {
        setLoading(false);
      }
    };

    fetchConstant();
  }, [key, fallback]);

  return {
    value,
    loading,
    error
  };
};

export default useConstants;
