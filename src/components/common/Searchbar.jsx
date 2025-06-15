import React from 'react';

const SearchBar = () => (
  <div style={styles.container} className="search-container">
    <input 
      type="text" 
      placeholder="Search for city, country, or service..." 
      style={styles.input}
    />
    <button style={styles.button} className="search-btn">
      Search
    </button>
  </div>
);

const styles = {
  container: {
    backgroundColor: '#fff',
    padding: '1rem',
    borderRadius: '9999px', // fully rounded
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '42rem', // ~max-w-2xl
    margin: '0 auto 3rem auto',
    boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
  },
  input: {
    flex: 1,
    border: 'none',
    outline: 'none',
    padding: '0.5rem 1rem',
    color: '#374151',
    fontSize: '1.125rem',
    borderRadius: '9999px',
  },
  button: {
    background: 'linear-gradient(to right, #6366f1, #8b5cf6)',
    color: '#fff',
    padding: '0.75rem 2rem',
    border: 'none',
    borderRadius: '9999px',
    fontWeight: '600',
    marginTop: '1rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  }
};

export default SearchBar;
