import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <p>&copy; {new Date().getFullYear()} Sandeep Kumar Panigrahi. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
