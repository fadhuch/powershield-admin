# Constants System Usage Guide

## Overview

The simplified constants system stores all site constants in a single JSON document with key-value pairs. This makes it easy to manage dynamic content throughout your application.

## Example Document Structure

```json
{
  "projectCount": 50,
  "clientsCount": "100+",
  "companyName": "PowerShield Technical Service LLC",
  "contactEmail": "info@powershield.ae",
  "yearsExperience": 10,
  "officeLocation": "Umm Al Quwain, UAE"
}
```

## API Endpoints

### Public Endpoints (No Authentication Required)

- **GET `/api/constants`** - Get all constants
- **GET `/api/constants/:key`** - Get specific constant by key

### Admin Endpoints (Authentication Required)

- **GET `/admin/constants`** - Get all constants (admin interface)
- **PUT `/admin/constants`** - Update all constants
- **PUT `/admin/constants/:key`** - Update specific constant
- **DELETE `/admin/constants/:key`** - Delete specific constant

## Frontend Usage

### Using React Hooks

```jsx
import { useConstants, useConstant } from './hooks/useConstants';

function MyComponent() {
  // Get all constants
  const { constants, loading, getConstant } = useConstants();
  
  // Get a specific constant
  const { value: projectCount } = useConstant('projectCount', 0);
  
  if (loading) return <div>Loading...</div>;
  
  return (
    <div>
      <h1>{getConstant('companyName', 'Default Company')}</h1>
      <p>Projects Completed: {projectCount}</p>
      <p>Clients Served: {getConstant('clientsCount', '0')}</p>
      <p>Contact: {getConstant('contactEmail', 'contact@example.com')}</p>
    </div>
  );
}
```

### Using the ConstantDisplay Component

```jsx
import { ConstantDisplay } from './components/ConstantsExample';

function HomePage() {
  return (
    <div>
      <ConstantDisplay 
        constantKey="companyName" 
        fallback="PowerShield" 
        label="Company" 
      />
      
      <ConstantDisplay 
        constantKey="projectCount" 
        fallback="0" 
        label="Projects Completed" 
      />
    </div>
  );
}
```

### Direct API Calls

```javascript
// Fetch all constants
async function getConstants() {
  const response = await fetch('/api/constants');
  const constants = await response.json();
  return constants;
}

// Fetch specific constant
async function getConstant(key) {
  const response = await fetch(`/api/constants/${key}`);
  if (response.ok) {
    const result = await response.json();
    return result.value;
  }
  return null;
}
```

## Admin Interface Usage

1. Navigate to the **Constants** tab in the admin interface
2. Add new constants using the "Add New Constant" button
3. Edit existing constants directly in the interface
4. Click "Save All Changes" to persist your modifications
5. Use "Reset Changes" to discard unsaved modifications

## Benefits

- **Simple Structure**: Single document with key-value pairs
- **Type Flexibility**: Supports strings, numbers, booleans, and JSON objects
- **Real-time Updates**: Changes are immediately available via API
- **Easy Integration**: Simple hooks and components for React
- **Admin Friendly**: Intuitive interface for non-technical users

## Example Use Cases

- Site configuration (company name, contact info)
- Dynamic counters (project count, client count)
- Feature flags (enable/disable features)
- Social media links
- Marketing content
- API keys and configuration
