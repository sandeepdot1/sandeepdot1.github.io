import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <p>&copy; {new Date().getFullYear()} John Doe. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
