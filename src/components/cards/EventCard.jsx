import React from 'react';

const EventCard = ({ event }) => (
  <div style={styles.card}>
    <h4 style={styles.title}>{event.title}</h4>
    <p style={styles.info}>
      <strong>Date:</strong> {event.date} | <strong>Time:</strong> {event.time}
    </p>
    <p style={styles.info}>
      <strong>Location:</strong> {event.location}
    </p>
    <p style={styles.description}>{event.description}</p>
    <button style={styles.button}>Join Event</button>
  </div>
);

const styles = {
  card: {
    padding: '1.5rem', // Tailwind's p-6
    border: '1px solid #e5e7eb', // Tailwind's border-gray-200
    borderRadius: '1rem', // Tailwind's rounded-xl
    marginBottom: '1rem' // Tailwind's mb-4
  },
  title: {
    fontSize: '1.25rem', // Tailwind's text-xl
    fontWeight: 600, // Tailwind's font-semibold
    marginBottom: '0.75rem' // Tailwind's mb-3
  },
  info: {
    marginBottom: '0.5rem' // Tailwind's mb-2 or mb-3
  },
  description: {
    marginBottom: '1rem',
    color: '#4b5563' // Tailwind's text-gray-600
  },
  button: {
    padding: '0.75rem 1.5rem', // Tailwind's px-6 py-3
    background: 'linear-gradient(to right, #6366f1, #8b5cf6)', // from-indigo-500 to-purple-600
    color: 'white',
    border: 'none',
    borderRadius: '0.75rem', // rounded-xl
    fontWeight: 600,
    cursor: 'pointer'
  }
};

export default EventCard;
