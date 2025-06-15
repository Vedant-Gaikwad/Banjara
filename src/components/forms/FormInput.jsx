import React from 'react';

const FormInput = ({ label, type = 'text', defaultValue, placeholder }) => (
  <div style={styles.inputGroup}>
    <label style={styles.label}>{label}</label>
    <input 
      type={type}
      defaultValue={defaultValue}
      placeholder={placeholder}
      style={styles.input}
      className="form-input"
    />
  </div>
);

const styles = {
  inputGroup: {
    marginBottom: '1.5rem',
  },
  label: {
    display: 'block',
    fontWeight: 600,
    marginBottom: '0.5rem',
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    border: '2px solid #e5e7eb', // gray-200
    borderRadius: '1rem', // xl
    outline: 'none',
    fontSize: '1rem',
    transition: 'border-color 0.3s ease',
  },
};

export default FormInput;
