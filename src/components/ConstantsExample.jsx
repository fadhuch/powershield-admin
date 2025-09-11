import React from 'react';
import { useConstants, useConstant } from '../hooks/useConstants';

// Example component showing how to use constants
const ConstantsExample = () => {
  // Get all constants
  const { constants, loading: allLoading, getConstant } = useConstants();
  
  // Get specific constants by category
  const { constants: contactConstants, loading: contactLoading } = useConstants('contact');
  
  // Get a single constant
  const { value: siteTitle, loading: titleLoading } = useConstant('site_title', 'PowerShield');

  if (allLoading || contactLoading || titleLoading) {
    return <div>Loading constants...</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Constants Usage Examples</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>Single Constant (site_title):</h3>
        <p><strong>Site Title:</strong> {siteTitle}</p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Using getConstant helper:</h3>
        <p><strong>Company Name:</strong> {getConstant('company_name', 'PowerShield')}</p>
        <p><strong>Contact Email:</strong> {getConstant('contact_email', 'info@powershield.com')}</p>
        <p><strong>Phone Number:</strong> {getConstant('phone_number', '+971 XX XXX XXXX')}</p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Contact Constants (category filter):</h3>
        {Object.entries(contactConstants).map(([key, value]) => (
          <p key={key}>
            <strong>{key}:</strong> {typeof value === 'object' ? JSON.stringify(value) : value.toString()}
          </p>
        ))}
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
export const ConstantsByCategory = ({ category, title = null }) => {
  const { constants, loading, error } = useConstants(category);

  if (loading) {
    return <div>Loading {category} constants...</div>;
  }

  if (error) {
    return <div>Error loading constants: {error}</div>;
  }

  if (Object.keys(constants).length === 0) {
    return <div>No constants found for category: {category}</div>;
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
