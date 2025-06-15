import React from 'react';

const ServiceCard = ({ service, onServiceClick }) => (
  <div 
    onClick={() => onServiceClick(service.type)}
    style={styles.card}
  >
    <div style={styles.icon}>{service.icon}</div>
    <h3 style={styles.title}>{service.title}</h3>
    <p style={styles.desc}>{service.desc}</p>
  </div>
);

const styles = {
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(8px)',
    padding: '2rem', // Tailwind p-8
    borderRadius: '1.5rem', // Tailwind rounded-3xl
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  },
  icon: {
    fontSize: '3rem', // Tailwind text-5xl
    marginBottom: '1rem', // Tailwind mb-4
  },
  title: {
    fontSize: '1.25rem', // Tailwind text-xl
    fontWeight: 600, // Tailwind font-semibold
    marginBottom: '0.5rem', // Tailwind mb-2
  },
  desc: {
    opacity: 0.9,
  }
};

export default ServiceCard;
