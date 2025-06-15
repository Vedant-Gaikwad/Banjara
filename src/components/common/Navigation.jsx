import React from 'react';

const Navigation = ({ currentPage, onPageChange }) => (
  <nav style={styles.nav}>
    <div style={styles.container}>
      <div style={styles.inner}>
        <div style={styles.logoText}>NomadHub</div>
        <ul style={styles.navList}>
          {['landing', 'services', 'community', 'dashboard'].map((page) => (
            <li key={page}>
              <button
                onClick={() => onPageChange(page)}
                style={{
                  ...styles.navLink,
                  color: currentPage === page ? '#6366f1' : '#374151',
                }}
                className={currentPage !== page ? 'hover-indigo' : ''}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </button>
            </li>
          ))}
        </ul>
        <div style={styles.actions}>
          <button
            onClick={() => onPageChange('profile')}
            className="profile-btn"
            style={styles.profileBtn}
          >
            Profile
          </button>
          <button
            className="signup-btn"
            style={styles.signupBtn}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  </nav>
);

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(5px)',
    zIndex: 50,
    boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
  },
  container: {
    maxWidth: '96rem',
    margin: '0 auto',
    padding: '0 1.25rem',
  },
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 0',
  },
  logoText: {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    background: 'linear-gradient(to right, #6366f1, #8b5cf6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  navList: {
    display: 'flex',
    gap: '2rem',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navLink: {
    fontWeight: 500,
    background: 'none',
    border: 'none',
    fontSize: '1rem',
    transition: 'color 0.3s ease',
    cursor: 'pointer',
  },
  actions: {
    display: 'flex',
    gap: '0.75rem',
  },
  profileBtn: {
    padding: '0.75rem 1.5rem',
    border: '2px solid #6366f1',
    borderRadius: '9999px',
    fontWeight: '600',
    color: '#374151',
    backgroundColor: 'transparent',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  signupBtn: {
    padding: '0.75rem 1.5rem',
    background: 'linear-gradient(to right, #6366f1, #8b5cf6)',
    color: '#fff',
    borderRadius: '9999px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
};

export default Navigation;
