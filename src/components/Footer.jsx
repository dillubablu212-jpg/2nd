import React from 'react';

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#1e293b', color: '#94a3b8' }}>
      <p>&copy; {new Date().getFullYear()} Sanjana Guntuka. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
