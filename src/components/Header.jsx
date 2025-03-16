import React from 'react';
import './Header.css';

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="header">
      <div className="container header-container">
        <h1 style={{fontFamily: "sans-serif"}}>Sandeep Kumar Panigrahi</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="toggle-container">
          <label className="switch">
            <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
