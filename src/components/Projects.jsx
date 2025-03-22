import React from 'react';
import { FiExternalLink } from "react-icons/fi"; 
import './Projects.css';
import defaultImage from '../assets/profile.jpg'; // Default image for projects without a video

const projectsData = [
  {
    id: 1,
    title: 'BLOG SITE',
    description: 'Developed a blogging site with features for creating, editing, and managing blogs using Flask, HTML, and Bootstrap, with MySql database for secure data storage.',
    link: 'https://github.com/sandeepdot1/Blog-Site',
    video: 'https://www.youtube.com/embed/T94PHkuydcw',
    techStacks: ['Python', 'Flask', 'MySql', 'HTML', 'Bootstrap', 'Jinja']
  },
  {
    id: 2,
    title: 'MOVIE RECOMMENDER SYSTEM',
    description: 'Built a content-based movie recommendation system using movie names, actors, and genres, leveraging Kaggle datasets and the TMDB API for up-to-date movie data.',
    link: 'https://github.com/sandeepdot1/Movieflix',
    image: defaultImage, // Using image when video is not available
    techStacks: ['Python', 'Flask', 'Scikit-learn']
  },
  {
    id: 3,
    title: 'Flight Fare Web App',
    description: 'Developed a web app for flight price prediction using Random Forest, achieving 91% accuracy. Applied feature engineering and EDA to optimize model performance.',
    link: 'https://github.com/sandeepdot1/Flight-Fare',
    video: 'https://www.example.com/path-to-video3.mp4',
    techStacks: ['Python', 'Flask', 'Pandas', 'Scikit-learn']
  },
  {
    id: 4,
    title: 'AI-Powered Rock Paper Scissors',
    description: 'A Rock Paper Scissors game using OpenCV and a CNN, trained on hand gesture images. Built with Python, OpenCV, NumPy, and Keras for real-time gesture recognition.',
    link: 'https://github.com/sandeepdot1/Stone-paper-scissors-AI-Game',
    image: defaultImage, // Using image when video is not available
    techStacks: ['Python', 'keras', 'opencv', 'numpy']
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container projects-container">
        <h2>Projects</h2>
        {projectsData.map(project => (
          <div key={project.id} className="project-row">
            <div className="project-media">
              {project.video ? (
                <video src={project.video} controls className="project-video" />
              ) : (
                <img src={project.image || defaultImage} alt="Project Preview" className="project-image" />
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
            Show More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
