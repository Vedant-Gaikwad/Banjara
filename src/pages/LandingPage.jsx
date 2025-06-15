import React from 'react';
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
    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 min-h-screen">
      <div className="max-w-6xl mx-auto px-5 pt-20">
        <div className="text-center py-16 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Your Digital Nomad Journey Starts Here
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Find workspaces, accommodation, restaurants, and connect with fellow nomads worldwide
          </p>
          
          <SearchBar />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
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