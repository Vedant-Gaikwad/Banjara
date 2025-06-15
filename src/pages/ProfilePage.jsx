import React from 'react';
import FormInput from '../components/forms/FormInput';
import FormSelect from '../components/forms/FormSelect';
import FormTextarea from '../components/forms/FormTextarea';
import ActivityCard from '../components/cards/ActivityCard';

const ProfilePage = () => {
  const workStyleOptions = [
    { value: 'coworking', label: 'Coworking Spaces' },
    { value: 'cafes', label: 'Cafes' },
    { value: 'home', label: 'Home Office' }
  ];

  const budgetOptions = [
    { value: '500-1000', label: '$500-1000/month' },
    { value: '1000-2000', label: '$1000-2000/month' },
    { value: '2000+', label: '$2000+/month' }
  ];

  const recentActivities = [
    {
      title: 'Recent Bookings',
      activities: ['TechHub Bangkok - Booked for June 10-20', 'Nomad House - Checked in June 5']
    },
    {
      title: 'Reviews Written',
      activities: ['★★★★★ TechHub Bangkok', '★★★★☆ Café Workstation']
    }
  ];

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* Profile Section */}
        <div style={styles.section}>
          <div style={styles.profileHeader}>
            <div style={styles.avatar}>AJ</div>
            <div>
              <h2 style={styles.name}>Alex Johnson</h2>
              <p style={styles.subheading}>Software Developer | Digital Nomad</p>
              <p style={styles.location}>📍 Currently in Bangkok, Thailand</p>
            </div>
          </div>

          <div style={styles.grid}>
            <div>
              <h3 style={styles.sectionTitle}>Personal Information</h3>
              <FormInput label="Full Name" defaultValue="Alex Johnson" />
              <FormInput label="Email" type="email" defaultValue="alex@example.com" />
              <FormInput label="Profession" defaultValue="Software Developer" />
              <FormInput label="Current Location" defaultValue="Bangkok, Thailand" />
            </div>

            <div>
              <h3 style={styles.sectionTitle}>Preferences</h3>
              <FormSelect label="Work Style" defaultValue="coworking" options={workStyleOptions} />
              <FormSelect label="Budget Range" defaultValue="500-1000" options={budgetOptions} />
              <FormTextarea
                label="Interests"
                defaultValue="Technology, Traveling, Photography, Food"
                rows={3}
              />
            </div>
          </div>

          <button style={styles.updateButton}>Update Profile</button>
        </div>

        {/* Recent Activity Section */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Recent Activity</h3>
          <div style={styles.activityGrid}>
            {recentActivities.map((activity, index) => (
              <ActivityCard
                key={index}
                title={activity.title}
                activities={activity.activities}
              />
            ))}
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
  container: {
    maxWidth: '96rem',
    margin: '0 auto',
    padding: '2rem 1.25rem',
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: '1.5rem',
    padding: '2rem',
    boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
    marginBottom: '2rem',
  },
  profileHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
    marginBottom: '2rem',
  },
  avatar: {
    width: '6rem',
    height: '6rem',
    borderRadius: '50%',
    background: 'linear-gradient(to right, #6366f1, #8b5cf6)',
    color: '#fff',
    fontSize: '2rem',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  subheading: {
    color: '#4B5563',
    fontSize: '1.125rem',
  },
  location: {
    color: '#4B5563',
  },
  sectionTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '1rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '2rem',
    marginTop: '1rem',
  },
  updateButton: {
    marginTop: '2rem',
    padding: '1rem 2rem',
    background: 'linear-gradient(to right, #6366f1, #8b5cf6)',
    color: 'white',
    fontWeight: '600',
    border: 'none',
    borderRadius: '1rem',
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
  },
  activityGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '1.5rem',
  },
};

export default ProfilePage;
