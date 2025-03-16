import React from 'react';
import './Contact.css';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedin, FaGithub, FaTwitter, FaPhoneAlt } from 'react-icons/fa';

const contactsData = [
  { id: 1, platform: 'Email', link: 'mailto:example@example.com', icon: <AiOutlineMail /> },
  { id: 2, platform: 'LinkedIn', link: 'https://linkedin.com/in/yourprofile', icon: <FaLinkedin /> },
  { id: 3, platform: 'GitHub', link: 'https://github.com/yourusername', icon: <FaGithub /> },
  { id: 4, platform: 'Twitter', link: 'https://twitter.com/yourhandle', icon: <FaTwitter /> },
  { id: 5, platform: 'Phone', link: 'tel:+1234567890', icon: <FaPhoneAlt /> }
];

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-container">
        <h2>Contact</h2>
        <ul className="contact-list">
          {contactsData.map(contact => (
            <li key={contact.id}>
              <a href={contact.link} target="_blank" rel="noopener noreferrer">
                {contact.icon}
                <span className="platform-name">{contact.platform}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Contact;
