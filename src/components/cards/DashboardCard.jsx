import React from 'react';

const DashboardCard = ({ title, stats }) => (
  <div style={styles.card}>
    <h3 style={styles.title}>{title}</h3>
    {stats.map((stat, i) => (
      <p key={i} style={styles.text}>{stat}</p>
    ))}
  </div>
);

const styles = {
  card: {
    backgroundColor: '#eef2ff', // Tailwind's bg-indigo-50
    padding: '1.5rem',           // Tailwind's p-6
    borderRadius: '1rem',        // Tailwind's rounded-2xl
    borderLeft: '4px solid #6366f1', // Tailwind's border-l-4 border-indigo-500
  },
  title: {
    fontWeight: 600,             // Tailwind's font-semibold
    fontSize: '1.125rem',        // Tailwind's text-lg
    marginBottom: '0.75rem',     // Tailwind's mb-3
  },
  text: {
    color: '#4b5563',            // Tailwind's text-gray-600
    marginBottom: '0.25rem',     // Tailwind's mb-1
  }
};

export default DashboardCard;
