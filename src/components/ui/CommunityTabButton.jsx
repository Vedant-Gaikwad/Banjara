import React from 'react';

const CommunityTabButton = ({ tab, label, isActive, onClick }) => {
  const activeStyle = {
    padding: '1rem 2rem',
    borderRadius: '1rem',
    fontWeight: '600',
    background: 'linear-gradient(to right, #6366f1, #8b5cf6)', // from-indigo-500 to-purple-600
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  const inactiveStyle = {
    padding: '1rem 2rem',
    borderRadius: '1rem',
    fontWeight: '600',
    backgroundColor: 'white',
    color: '#374151', // gray-700
    border: '1px solid #e5e7eb',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  return (
    <button
      onClick={() => onClick(tab)}
      style={isActive ? activeStyle : inactiveStyle}
      onMouseOver={(e) => {
        if (!isActive) e.target.style.backgroundColor = '#f9fafb'; // hover: bg-gray-50
      }}
      onMouseOut={(e) => {
        if (!isActive) e.target.style.backgroundColor = 'white';
      }}
    >
      {label}
    </button>
  );
};

export default CommunityTabButton;
