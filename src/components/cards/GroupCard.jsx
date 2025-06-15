import React from 'react';

const GroupCard = ({ group }) => (
  <div style={styles.card}>
    <h4 style={styles.title}>{group.title}</h4>
    <p style={styles.meta}>
      <strong>Members:</strong> {group.members} • <strong>Active:</strong> {group.activity}
    </p>
    <p style={styles.description}>{group.description}</p>
    <button style={styles.button}>Join Group</button>
  </div>
);

const styles = {
  card: {
    padding: '1.5rem', // Tailwind's p-6
    border: '1px solid #e5e7eb', // border-gray-200
    borderRadius: '1rem', // rounded-xl
    marginBottom: '1rem' // mb-4
  },
  title: {
    fontSize: '1.25rem', // text-xl
    fontWeight: 600, // font-semibold
    marginBottom: '0.75rem' // mb-3
  },
  meta: {
    marginBottom: '0.75rem' // mb-3
  },
  description: {
    color: '#4b5563', // text-gray-600
    marginBottom: '1rem' // mb-4
  },
  button: {
    padding: '0.75rem 1.5rem', // px-6 py-3
    background: 'linear-gradient(to right, #6366f1, #8b5cf6)', // from-indigo-500 to-purple-600
    color: '#fff',
    border: 'none',
    borderRadius: '0.75rem', // rounded-xl
    fontWeight: 600,
    cursor: 'pointer'
  }
};

export default GroupCard;
