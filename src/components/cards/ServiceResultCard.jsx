import React from 'react';

const ServiceResultCard = ({ service }) => (
  <div style={styles.card}>
    <div style={styles.iconContainer}>
      {service.icon}
    </div>
    <div style={styles.content}>
      <h3 style={styles.title}>{service.title}</h3>
      <div style={styles.rating}>{service.rating}</div>
      <p style={styles.description}>{service.description}</p>
      <p style={styles.price}>{service.price}</p>
      <button style={styles.button}>
        {service.buttonText || 'Book Now'}
      </button>
    </div>
  </div>
);

const styles = {
  card: {
    backgroundColor: '#fff',
    borderRadius: '1.5rem', // rounded-2xl
    overflow: 'hidden',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
  },
  iconContainer: {
    height: '12rem', // h-48
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(to bottom right, #6366f1, #8b5cf6)',
    color: '#fff',
    fontSize: '3.75rem', // text-6xl
  },
  content: {
    padding: '1.5rem', // p-6
  },
  title: {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
  },
  rating: {
    color: '#facc15', // text-yellow-500
    fontSize: '1.125rem',
    marginBottom: '0.5rem',
  },
  description: {
    color: '#4b5563', // text-gray-600
    marginBottom: '1rem',
  },
  price: {
    fontWeight: '600',
    fontSize: '1.125rem',
    marginBottom: '1rem',
  },
  button: {
    width: '100%',
    padding: '0.75rem 1.5rem',
    background: 'linear-gradient(to right, #6366f1, #8b5cf6)',
    color: '#fff',
    border: 'none',
    borderRadius: '0.75rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  }
};

export default ServiceResultCard;
