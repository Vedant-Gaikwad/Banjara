import React from 'react';
import CommunityTabButton from '../components/ui/CommunityTabButton';
import CommunityContent from '../components/ui/CommunityContent';

const CommunityPage = ({ currentCommunityTab, onCommunityTabChange }) => {
  const tabs = [
    { key: 'events', label: 'Events' },
    { key: 'forums', label: 'Forums' },
    { key: 'groups', label: 'Groups' }
  ];

  const gradientBackground = {
    minHeight: '100vh',
    paddingTop: '5rem',
    background: 'linear-gradient(to bottom right, #6366f1, #8b5cf6)', // from indigo to purple
  };

  const containerStyle = {
    maxWidth: '96rem',
    margin: '0 auto',
    padding: '2rem 1.25rem',
  };

  const headingStyle = {
    fontSize: '2.25rem',
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginBottom: '2rem',
  };

  const tabContainerStyle = {
    display: 'flex',
    gap: '1rem',
    marginBottom: '2rem',
    flexWrap: 'wrap',
  };

  const contentBoxStyle = {
    backgroundColor: 'white',
    borderRadius: '1rem',
    padding: '2rem',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={gradientBackground}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>Connect with Fellow Nomads</h2>

        <div style={tabContainerStyle}>
          {tabs.map((tab) => (
            <CommunityTabButton
              key={tab.key}
              tab={tab.key}
              label={tab.label}
              isActive={currentCommunityTab === tab.key}
              onClick={onCommunityTabChange}
            />
          ))}
        </div>

        <div style={contentBoxStyle}>
          <CommunityContent currentTab={currentCommunityTab} />
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
