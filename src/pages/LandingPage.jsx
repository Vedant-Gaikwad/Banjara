import React from 'react';
import './LandingPage.css';
import SearchBar from '../components/common/SearchBar';
import ServiceCard from '../components/cards/ServiceCard';

const LandingPage = ({ onPageChange }) => {
  const services = [
    { icon: '💼', title: 'Coworking Spaces', desc: 'Find the perfect workspace with all amenities you need', type: 'coworking' },
    { icon: '🍽️', title: 'Restaurants & Cafes', desc: 'Discover work-friendly dining spots with great WiFi', type: 'dining' },
    { icon: '🏠', title: 'Accommodation', desc: 'Book nomad-friendly stays for short or long term', type: 'accommodation' },
    { icon: '🗺️', title: 'Living Areas', desc: 'Explore safe neighborhoods perfect for digital nomads', type: 'areas' },
    { icon: '👥', title: 'Community', desc: 'Connect with other nomads and join local events', type: 'community' },
    { icon: '🏢', title: 'Corporate Services', desc: 'Access company benefits designed for remote workers', type: 'corporate' }
  ];

  const handleServiceClick = (serviceType) => {
    if (serviceType === 'community') {
      onPageChange('community');
    } else {
      onPageChange('services', serviceType);
    }
  };

  return (
    <div className="landing-page">
      <div className="container">
        <div className="hero">
          <h1>Your Digital Nomad Journey Starts Here</h1>
          <p>Find workspaces, accommodation, restaurants, and connect with fellow nomads worldwide</p>
          <div className="search-bar-wrapper">
            <SearchBar />
          </div>
          <div className="service-cards">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                service={service}
                onServiceClick={handleServiceClick}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
