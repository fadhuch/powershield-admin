import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import CareersPage from './pages/CareersPage';
import JobApplicationPage from './pages/JobApplicationPage';
import AdminCareersPage from './pages/AdminCareersPage';

// Import individual service pages
import FireAlarmPage from './pages/services/FireAlarm';
import FireFightingPage from './pages/services/FireFighting';
import SmokeExtractionPage from './pages/services/SmokeExtraction';
import EmergencyExitPage from './pages/services/EmergencyExit';
import DesignApprovalsPage from './pages/services/DesignApprovals';
import ElectricalPage from './pages/services/Electrical';
import PlumbingPage from './pages/services/Plumbing';
import MaintenancePage from './pages/services/Maintenance';

import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/history" element={<AboutPage />} />
          <Route path="/about/team" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/fire-alarm" element={<FireAlarmPage />} />
          <Route path="/services/fire-fighting" element={<FireFightingPage />} />
          <Route path="/services/smoke-extraction" element={<SmokeExtractionPage />} />
          <Route path="/services/emergency-exit" element={<EmergencyExitPage />} />
          <Route path="/services/design-approvals" element={<DesignApprovalsPage />} />
          <Route path="/services/electrical" element={<ElectricalPage />} />
          <Route path="/services/plumbing" element={<PlumbingPage />} />
          <Route path="/services/maintenance" element={<MaintenancePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:projectId" element={<ProjectsPage />} />
          <Route path="/projects/grid" element={<ProjectsPage />} />
          <Route path="/gallery" element={<ProjectsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/careers/apply/:jobId" element={<JobApplicationPage />} />
          <Route path="/admin/careers" element={<AdminCareersPage />} />
          <Route path="/shop" element={<div style={{padding: '20px'}}>Shop Page - Coming Soon</div>} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<div style={{padding: '20px'}}>404 - Page Not Found</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
