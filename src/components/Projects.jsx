import React from 'react';
import './Projects.css';
import defaultImage from '../assets/profile.jpg'; // Place a default image here

const projectsData = [
  {
    id: 1,
    title: 'Project One',
    description: 'A web application that redefines user experience with modern technologies.',
    link: 'https://github.com/username/project-one',
    video: 'https://www.youtube.com/embed/T94PHkuydcw', // Replace with actual URL
    techStacks: ['React', 'Node.js', 'Express']
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'An innovative solution for managing complex workflows with ease.',
    link: 'https://github.com/username/project-two',
    // No video provided, will use default image
    techStacks: ['Angular', 'Firebase']
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'A mobile-responsive application leveraging cutting-edge design principles.',
    link: 'https://github.com/username/project-three',
    video: 'https://www.example.com/path-to-video3.mp4', // Replace with actual URL
    techStacks: ['Vue', 'Vuetify']
  },
  {
    id: 4,
    title: 'Project Four',
    description: 'A robust API service that scales effortlessly.',
    link: 'https://github.com/username/project-four',
    // No video provided, will use default image
    techStacks: ['Python', 'Django']
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
                <img src={defaultImage} alt="Default Project" className="project-video" />
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
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
