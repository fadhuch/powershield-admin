import React from 'react';
import { useConstants, useConstant } from '../hooks/useConstants';

// Example component showing how to use constants
const ConstantsExample = () => {
  // Get all constants
  const { constants, loading: allLoading, getConstant } = useConstants();
  
  // Get a single constant
  const { value: projectCount, loading: projectLoading } = useConstant('projectCount', 0);

  if (allLoading || projectLoading) {
    return <div>Loading constants...</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Constants Usage Examples</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>Single Constant (projectCount):</h3>
        <p><strong>Project Count:</strong> {projectCount}</p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Using getConstant helper:</h3>
        <p><strong>Clients Count:</strong> {getConstant('clientsCount', '50+')}</p>
        <p><strong>Company Name:</strong> {getConstant('companyName', 'PowerShield')}</p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>All Constants:</h3>
        {Object.entries(constants).map(([key, value]) => (
          <p key={key}>
            <strong>{key}:</strong> {typeof value === 'object' ? JSON.stringify(value) : value.toString()}
          </p>
        ))}
      </div>
    </div>
  );
};

// Reusable component to display a single constant
export const ConstantDisplay = ({ 
  constantKey, 
  fallback = '', 
  label = null, 
  style = {},
  className = '' 
}) => {
  const { value, loading, error } = useConstant(constantKey, fallback);

  if (loading) {
    return <span className={className} style={style}>Loading...</span>;
  }

  if (error) {
    return <span className={className} style={style}>{fallback}</span>;
  }

  return (
    <span className={className} style={style}>
      {label && <span>{label}: </span>}
      {typeof value === 'object' ? JSON.stringify(value) : value.toString()}
    </span>
  );
};

// Component to display constants by category
export const ConstantsByCategory = ({ title = null }) => {
  const { constants, loading, error } = useConstants();

  if (loading) {
    return <div>Loading constants...</div>;
  }

  if (error) {
    return <div>Error loading constants: {error}</div>;
  }

  if (Object.keys(constants).length === 0) {
    return <div>No constants found</div>;
  }

  return (
    <div>
      {title && <h3>{title}</h3>}
      {Object.entries(constants).map(([key, value]) => (
        <div key={key} style={{ marginBottom: '8px' }}>
          <strong>{key}:</strong> {typeof value === 'object' ? JSON.stringify(value) : value.toString()}
        </div>
      ))}
    </div>
  );
};

export default ConstantsExample;
