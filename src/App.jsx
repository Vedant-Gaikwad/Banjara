import React, { useState } from 'react';
import Navigation from './components/common/Navigation';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import ServicesPage from './pages/ServicesPage';
import CommunityPage from './pages/CommunityPage';
import ProfilePage from './pages/ProfilePage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('landing');
  const [currentServiceType, setCurrentServiceType] = useState('coworking');
  const [currentCommunityTab, setCurrentCommunityTab] = useState('events');

  const handlePageChange = (pageId, serviceType = null) => {
    setCurrentPage(pageId);
    if (pageId === 'services' && serviceType) {
      setCurrentServiceType(serviceType);
    }
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onPageChange={handlePageChange} />;
      case 'dashboard':
        return <Dashboard onPageChange={handlePageChange} />;
      case 'services':
        return (
          <ServicesPage 
            currentServiceType={currentServiceType}
            onServiceTypeChange={setCurrentServiceType}
          />
        );
      case 'community':
        return (
          <CommunityPage 
            currentCommunityTab={currentCommunityTab}
            onCommunityTabChange={setCurrentCommunityTab}
          />
        );
      case 'profile':
        return <ProfilePage />;
      default:
        return <LandingPage onPageChange={handlePageChange} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation 
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      {renderCurrentPage()}
    </div>
  );
};

export default App;

