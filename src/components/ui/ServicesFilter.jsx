import React from 'react';

const ServicesFilter = ({ currentServiceType, onServiceTypeChange }) => {
  const containerStyle = {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '1rem',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    marginBottom: '2rem',
  };

  const flexWrapStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    alignItems: 'center',
  };

  const selectStyle = {
    padding: '0.75rem 1rem',
    border: '2px solid #e5e7eb',
    borderRadius: '0.75rem',
    outline: 'none',
    fontSize: '1rem',
    transition: 'border-color 0.3s ease',
  };

  const buttonStyle = {
    padding: '0.75rem 1.5rem',
    background: 'linear-gradient(to right, #6366f1, #8b5cf6)', // indigo to purple
    color: 'white',
    borderRadius: '0.75rem',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
  };

  return (
    <div style={containerStyle}>
      <div style={flexWrapStyle}>
        <select
          value={currentServiceType}
          onChange={(e) => onServiceTypeChange(e.target.value)}
          style={selectStyle}
        >
          <option value="coworking">Coworking Spaces</option>
          <option value="dining">Restaurants & Cafes</option>
          <option value="accommodation">Accommodation</option>
          <option value="areas">Living Areas</option>
          <option value="corporate">Corporate Services</option>
        </select>

        <select style={selectStyle}>
          <option>All Locations</option>
          <option>Bangkok, Thailand</option>
          <option>Lisbon, Portugal</option>
          <option>Mexico City, Mexico</option>
        </select>

        <select style={selectStyle}>
          <option>Price Range</option>
          <option>$ (Budget)</option>
          <option>$$ (Mid-range)</option>
          <option>$$$ (Premium)</option>
        </select>

        <button style={buttonStyle}>Filter</button>
      </div>
    </div>
  );
};

export default ServicesFilter;
