import { useState, useEffect } from 'react';
import constantsService from '../services/constantsService';

// Hook to fetch and use site constants
export const useConstants = () => {
  const [constants, setConstants] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchConstants = async () => {
      try {
        setLoading(true);
        setError(null);
        const constantsData = await constantsService.getConstants();
        setConstants(constantsData);
      } catch (err) {
        setError(err.message);
        console.error('Error in useConstants hook:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchConstants();
  }, []);

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
        const constantValue = await constantsService.getConstantByKey(key);
        
        setValue(constantValue !== null ? constantValue : fallback);
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
