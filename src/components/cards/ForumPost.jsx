import React from 'react';

const ForumPost = ({ post }) => (
  <div style={styles.card}>
    <h4 style={styles.title}>{post.title}</h4>
    <p style={styles.meta}>Posted by {post.author} • {post.time}</p>
    <p style={styles.preview}>{post.preview}</p>
    <p style={styles.stats}>
      <strong>{post.replies} replies</strong> • <strong>{post.upvotes} upvotes</strong>
    </p>
  </div>
);

const styles = {
  card: {
    padding: '1.5rem',             // Tailwind's p-6
    border: '1px solid #e5e7eb',   // Tailwind's border-gray-200
    borderRadius: '1rem',          // Tailwind's rounded-xl
    marginBottom: '1rem'           // Tailwind's mb-4
  },
  title: {
    fontSize: '1.25rem',           // Tailwind's text-xl
    fontWeight: 600,               // Tailwind's font-semibold
    marginBottom: '0.5rem'         // Tailwind's mb-2
  },
  meta: {
    color: '#6b7280',              // Tailwind's text-gray-500
    marginBottom: '0.5rem'
  },
  preview: {
    color: '#4b5563',              // Tailwind's text-gray-600
    marginBottom: '0.75rem'        // Tailwind's mb-3
  },
  stats: {
    fontSize: '0.875rem',          // Tailwind's text-sm
    color: '#6b7280'               // Tailwind's text-gray-500
  }
};

export default ForumPost;
