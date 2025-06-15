import React from 'react';
import DashboardCard from '../components/cards/DashboardCard'; // Keep this if you're using it

const Dashboard = ({ onPageChange }) => {
  const dashboardData = [
    { title: 'Upcoming Bookings', stats: ['2 coworking spaces', '1 accommodation'] },
    { title: 'Community Activity', stats: ['3 upcoming events', '5 new messages'] },
    { title: 'Recent Reviews', stats: ['2 pending reviews', '4.8 average rating given'] },
    { title: 'Travel Stats', stats: ['12 cities visited', '6 countries explored'] }
  ];

  return (
    <div style={styles.page}>
      <div style={styles.wrapper}>
        <div style={styles.dashboardContainer}>
          <div style={styles.header}>
            <h2 style={styles.headerTitle}>Welcome back, Alex!</h2>
            <p style={styles.headerSubtext}>Current location: Bangkok, Thailand</p>
          </div>

          <div style={styles.content}>
            <div style={styles.cardGrid}>
              {dashboardData.map((card, index) => (
                <div key={index} style={styles.card}>
                  <h4 style={styles.cardTitle}>{card.title}</h4>
                  <ul style={styles.cardList}>
                    {card.stats.map((stat, i) => (
                      <li key={i} style={styles.cardItem}>{stat}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '2rem' }}>
              <h3 style={styles.quickActionTitle}>Quick Actions</h3>
              <div style={styles.actionButtons}>
                <button
                  onClick={() => onPageChange('services', 'coworking')}
                  style={{ ...styles.button, ...styles.primaryButton }}
                >
                  Find Workspace
                </button>
                <button
                  onClick={() => onPageChange('services', 'accommodation')}
                  style={{ ...styles.button, ...styles.outlineButton }}
                >
                  Book Stay
                </button>
                <button
                  onClick={() => onPageChange('community')}
                  style={{ ...styles.button, ...styles.outlineButton }}
                >
                  Join Event
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: '100vh',
    paddingTop: '5rem',
    background: 'linear-gradient(to bottom right, #6366f1, #8b5cf6)',
  },
  wrapper: {
    maxWidth: '96rem',
    margin: '0 auto',
    padding: '2rem 1.25rem',
  },
  dashboardContainer: {
    backgroundColor: '#fff',
    borderRadius: '1.5rem',
    overflow: 'hidden',
    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.1)',
  },
  header: {
    background: 'linear-gradient(to right, #6366f1, #8b5cf6)',
    color: '#fff',
    padding: '2rem',
  },
  headerTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  headerSubtext: {
    fontSize: '1.125rem',
    opacity: 0.9,
  },
  content: {
    padding: '2rem',
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '1.5rem',
    marginBottom: '2rem',
  },
  card: {
    backgroundColor: '#f3f4f6',
    padding: '1.25rem',
    borderRadius: '0.75rem',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
  },
  cardTitle: {
    fontSize: '1.125rem',
    fontWeight: 600,
    marginBottom: '0.75rem',
  },
  cardList: {
    paddingLeft: '1.25rem',
    margin: 0,
  },
  cardItem: {
    color: '#374151',
    fontSize: '0.95rem',
    marginBottom: '0.5rem',
  },
  quickActionTitle: {
    fontSize: '1.25rem',
    fontWeight: 600,
    marginBottom: '1rem',
  },
  actionButtons: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  button: {
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    fontWeight: 600,
    borderRadius: '9999px',
    transition: 'all 0.2s ease',
    cursor: 'pointer',
  },
  primaryButton: {
    background: 'linear-gradient(to right, #6366f1, #8b5cf6)',
    color: '#fff',
    border: 'none',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    color: '#4f46e5',
    border: '2px solid #4f46e5',
  },
};

export default Dashboard;
