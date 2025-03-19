import React from 'react';
import './Footer.css';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedin, FaGithub, FaTwitter, FaPhoneAlt } from 'react-icons/fa';

const contactsData = [
  { id: 1, platform: 'Email', link: 'mailto:example@example.com', icon: <AiOutlineMail /> },
  { id: 2, platform: 'LinkedIn', link: 'https://linkedin.com/in/yourprofile', icon: <FaLinkedin /> },
  { id: 3, platform: 'GitHub', link: 'https://github.com/yourusername', icon: <FaGithub /> },
  { id: 4, platform: 'Twitter', link: 'https://twitter.com/yourhandle', icon: <FaTwitter /> },
  { id: 5, platform: 'Phone', link: 'tel:+1234567890', icon: <FaPhoneAlt /> }
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-left">
          <p>&copy; {new Date().getFullYear()} Sandeep Kumar Panigrahi.</p>
        </div>
        <div className="footer-right">
          <ul className="contact-list">
            {contactsData.map(contact => (
              <li key={contact.id}>
                <a href={contact.link} target="_blank" rel="noopener noreferrer">
                  {contact.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
