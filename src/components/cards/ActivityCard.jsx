import React from 'react';

const ActivityCard = ({ title, activities }) => {
  return (
    <div style={styles.card}>
      <h4 style={styles.title}>{title}</h4>
      {activities.map((activity, index) => (
        <p key={index} style={styles.text}>{activity}</p>
      ))}
    </div>
  );
};

const styles = {
  card: {
    padding: '1.5rem', // p-6
    backgroundColor: '#eef2ff', // Tailwind's indigo-50
    borderRadius: '0.75rem', // rounded-xl
  },
  title: {
    fontWeight: 600, // font-semibold
    fontSize: '1.125rem', // text-lg
    marginBottom: '0.75rem', // mb-3
  },
  text: {
    color: '#4b5563', // text-gray-600
    marginBottom: '0.5rem', // mb-2
  }
};

export default ActivityCard;
