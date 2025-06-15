import React from 'react';

const FormSelect = ({ label, defaultValue, options }) => (
  <div style={styles.container}>
    <label style={styles.label}>{label}</label>
    <select 
      defaultValue={defaultValue}
      style={styles.select}
      className="form-select"
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>{option.label}</option>
      ))}
    </select>
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
  select: {
    width: '100%',
    padding: '0.75rem',
    border: '2px solid #e5e7eb', // light gray
    borderRadius: '1rem', // similar to Tailwind's rounded-xl
    outline: 'none',
    fontSize: '1rem',
    transition: 'border-color 0.3s ease',
  }
};

export default FormSelect;
