import React from 'react';
import './About.css';
import profilePic from '../assets/profile.jpg'; // Place your image in src/assets/profile.jpg

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container about-container">
        <img src={profilePic} alt="Profile" className="profile-picture" />
        <h2>About Me</h2>
        <p>
          I am a passionate software engineer with a knack for crafting scalable applications.
          With expertise in React, Node.js, and cloud technologies, I thrive on solving complex
          problems and creating interactive user experiences.
        </p>
      </div>
    </section>
  );
};

export default About;
