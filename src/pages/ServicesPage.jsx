import React from 'react';
import ServiceResultCard from '../components/cards/ServiceResultCard';
import ServicesFilter from '../components/ui/ServicesFilter';

const ServicesPage = ({ currentServiceType, onServiceTypeChange }) => {
  const servicesData = {
    coworking: [
      {
        icon: '💼',
        title: 'TechHub Bangkok',
        rating: '★★★★★ 4.8 (124 reviews)',
        description: 'Modern coworking space in the heart of Bangkok with high-speed internet, meeting rooms, and café.',
        price: '$15/day • $280/month'
      }
    ],
    dining: [
      {
        icon: '🍽️',
        title: 'Café Workstation',
        rating: '★★★★☆ 4.5 (89 reviews)',
        description: 'Nomad-friendly café with reliable WiFi, power outlets at every table, and great coffee.',
        price: 'Coffee + Workspace Access',
        buttonText: 'Visit'
      }
    ],
    accommodation: [
      {
        icon: '🏠',
        title: 'Nomad House Sukhumvit',
        rating: '★★★★★ 4.9 (67 reviews)',
        description: 'Fully furnished apartment perfect for digital nomads with dedicated workspace and high-speed internet.',
        price: '$45/night • $1200/month',
        buttonText: 'Book Stay'
      }
    ],
    areas: [
      {
        icon: '🗺️',
        title: 'Sukhumvit District',
        rating: '★★★★★ 4.7 (89 reviews)',
        description: 'Safe, modern area with excellent transportation, shopping, and dining options.',
        price: 'Area Guide Available'
      }
    ],
    corporate: [
      {
        icon: '🏢',
        title: 'Remote Work Benefits',
        rating: '★★★★☆ 4.6 (45 reviews)',
        description: 'Access corporate discounts, health insurance, and professional services.',
        price: 'Contact for Pricing'
      }
    ]
  };

  const currentServices = servicesData[currentServiceType] || servicesData.coworking;

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Find Your Perfect Service</h2>

        <ServicesFilter 
          currentServiceType={currentServiceType}
          onServiceTypeChange={onServiceTypeChange}
        />

        <div style={styles.grid}>
          {currentServices.map((service, index) => (
            <ServiceResultCard key={index} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: '100vh',
    paddingTop: '5rem',
    background: 'linear-gradient(to bottom right, #6366f1, #8b5cf6)',
  },
  container: {
    maxWidth: '96rem',
    margin: '0 auto',
    padding: '2rem 1.25rem',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginBottom: '2rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '2rem',
  },
};

export default ServicesPage;
