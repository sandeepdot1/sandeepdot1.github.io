import React from 'react';
import './Header.css';

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="header">
      <div className="container header-container">
        <h1 style={{ fontFamily: "sans-serif" }}>Sandeep Kumar Panigrahi</h1>
        <nav>
          <ul>
            <li className="email-text">sandeeppanigrahi3570@gmail.com</li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </nav>
        <div className="header-right">
          <div className="resume-container">
            <a
              href="https://drive.google.com/file/d/1Yb6kYSkIJfLE3kc1L3e8FiQMoAqa4oFL/view?usp=sharing"  // Replace with your resume URL
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn"
            >
              Resume
            </a>
          </div>
          <div className="toggle-container">
            <label className="switch">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
