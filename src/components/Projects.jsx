import React from 'react';
import { FiExternalLink } from "react-icons/fi"; 
import './Projects.css';
import rockPaperScissors from '../assets/projects/rock-paper-scissors.png'; 

const projectsData = [
  {
    id: 1,
    title: 'BLOG SITE',
    description: 'A blogging web application with features for creating, editing, and managing blogs built using Flask, HTML, and Bootstrap, with MySql database for data storage.',
    link: 'https://github.com/sandeepdot1/Blog-Site',
    video: 'https://github.com/user-attachments/assets/85957040-0441-45d7-9b49-f0947a5a2167',
    techStacks: ['Python', 'Flask', 'MySql', 'HTML', 'Bootstrap', 'Jinja']
  },
  {
    id: 2,
    title: 'MOVIE RECOMMENDATION SYSTEM',
    description: 'A content-based movie recommendation system using movie names, actors, and genres, leveraging Kaggle datasets and the TMDB API for up-to-date movie data.',
    link: 'https://github.com/sandeepdot1/Movieflix',
    video: 'https://github.com/user-attachments/assets/dcfa2c03-7b95-4a00-bf89-b607a411634b',
    techStacks: ['Python', 'Flask', 'Scikit-learn', 'Pandas', 'Jinja']
  },
  {
    id: 3,
    title: 'FLIGHT FARE WEB APP',
    description: 'A web app for flight price prediction using Random Forest, achieving close to 91% accuracy. Applied feature engineering and EDA to optimize model performance.',
    link: 'https://github.com/sandeepdot1/Flight-Fare',
    video: 'https://github.com/user-attachments/assets/b4e1a8d1-8bdd-47b2-81e8-e5722fcd5bcb',
    techStacks: ['Python', 'Flask', 'Pandas', 'Scikit-learn']
  },
  {
    id: 4,
    title: 'ROCK PAPER SCISSORS AI GAME',
    description: 'A Rock Paper Scissors game built using OpenCV and a CNN, trained on hand gesture images. Built with Python, OpenCV, NumPy, Tensorflow and Keras for real-time gesture recognition.',
    link: 'https://github.com/sandeepdot1/Stone-paper-scissors-AI-Game',
    image: rockPaperScissors, // Using image when video is not available
    techStacks: ['Python', 'Keras', 'Tensorflow', 'OpenCV', 'Numpy']
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container projects-container">
        <h2>Projects Overview</h2>
        {projectsData.map(project => (
          <div key={project.id} className="project-row">
            <div className="project-media">
              {project.video ? (
                <video src={project.video} controls className="project-video" />
              ) : (
                <img src={project.image} alt="Project Preview" className="project-image" />
              )}
            </div>
            <div className="project-details">
              <h3>{project.title}</h3>
              <div className="tech-stacks">
                {project.techStacks && project.techStacks.map((tech, idx) => (
                  <span key={idx} className="tech-stack">{tech}</span>
                ))}
              </div>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <span>View on GitHub</span>
                <FiExternalLink style={{ margin: "0" }} />
              </a>
            </div>
          </div>
        ))}
        {/* Show More Projects Button */}
        <div className="show-more">
          <a href="https://github.com/sandeepdot1" target="_blank" rel="noopener noreferrer" className="show-more-btn">
            More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
