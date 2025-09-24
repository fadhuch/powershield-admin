import React, { useState, useEffect } from 'react';
import { buildApiUrl } from '../config/api';

const ConstantsTest = () => {
  const [constants, setConstants] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchConstants();
  }, []);

  const fetchConstants = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Use the public API endpoint (no authentication required)
      const response = await fetch(buildApiUrl('/constants'));
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Constants data:', data);
      
      setConstants(data);
    } catch (err) {
      console.error('Error fetching constants:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const updateConstant = async (key, value) => {
    // For testing, we'll just update the local state
    setConstants(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const addConstant = async (key, value) => {
    if (key && value !== '') {
      setConstants(prev => ({
        ...prev,
        [key]: value
      }));
    }
  };

  const deleteConstant = async (key) => {
    const newConstants = { ...constants };
    delete newConstants[key];
    setConstants(newConstants);
  };

  if (loading) {
    return <div style={{ padding: '20px' }}>Loading constants...</div>;
  }

  if (error) {
    return <div style={{ padding: '20px', color: 'red' }}>Error: {error}</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Constants Test Page</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <button onClick={fetchConstants} style={{ padding: '10px 20px', background: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}>
          Refresh Constants
        </button>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h3>Current Constants ({Object.keys(constants).length}):</h3>
        {Object.keys(constants).length === 0 ? (
          <p>No constants found</p>
        ) : (
          <div style={{ display: 'grid', gap: '15px' }}>
            {Object.entries(constants).map(([key, value]) => (
              <div key={key} style={{ 
                background: '#f8f9fa', 
                padding: '15px', 
                borderRadius: '5px',
                border: '1px solid #dee2e6'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ 
                      fontFamily: 'monospace',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      color: '#007bff',
                      marginBottom: '10px'
                    }}>
                      {key}
                    </div>
                    
                    <div>
                      <strong>Value:</strong>
                      <div style={{ 
                        background: 'white',
                        padding: '8px',
                        borderRadius: '3px',
                        marginTop: '5px',
                        fontFamily: typeof value === 'object' ? 'monospace' : 'inherit'
                      }}>
                        {typeof value === 'object' ? JSON.stringify(value, null, 2) : value.toString()}
                      </div>
                    </div>
                    
                    <div style={{ fontSize: '12px', color: '#6c757d', marginTop: '8px' }}>
                      Type: {typeof value === 'object' ? 'Object' : typeof value}
                    </div>
                  </div>
                  
                  <button
                    onClick={() => deleteConstant(key)}
                    style={{
                      padding: '5px 10px',
                      background: '#dc3545',
                      color: 'white',
                      border: 'none',
                      borderRadius: '3px',
                      marginLeft: '15px',
                      cursor: 'pointer',
                      fontSize: '12px'
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div style={{ 
        background: '#e9ecef',
        padding: '20px',
        borderRadius: '5px'
      }}>
        <h4>API Test:</h4>
        <p><strong>Endpoint:</strong> GET {buildApiUrl('/constants')}</p>
        <p><strong>Status:</strong> {Object.keys(constants).length > 0 ? '✅ Working' : '❌ No data'}</p>
        <p><strong>Response:</strong></p>
        <pre style={{ 
          background: 'white', 
          padding: '10px', 
          borderRadius: '3px',
          fontSize: '12px',
          overflow: 'auto'
        }}>
          {JSON.stringify(constants, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default ConstantsTest;
