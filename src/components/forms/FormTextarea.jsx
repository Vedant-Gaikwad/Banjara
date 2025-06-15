import React from 'react';

const FormTextarea = ({ label, defaultValue, rows = 3 }) => (
  <div style={styles.container}>
    <label style={styles.label}>{label}</label>
    <textarea 
      rows={rows}
      defaultValue={defaultValue}
      style={styles.textarea}
      className="form-textarea"
    />
  </div>
);

const styles = {
  container: {
    marginBottom: '1.5rem',
  },
  label: {
    display: 'block',
    fontWeight: 600,
    marginBottom: '0.5rem',
  },
  textarea: {
    width: '100%',
    padding: '0.75rem',
    border: '2px solid #e5e7eb', // light gray
    borderRadius: '1rem',
    outline: 'none',
    fontSize: '1rem',
    resize: 'vertical',
    transition: 'border-color 0.3s ease',
  }
};

export default FormTextarea;
