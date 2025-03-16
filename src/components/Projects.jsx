import React from 'react';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: 'Project One',
    description: 'A web application that redefines user experience with modern technologies.',
    link: 'https://github.com/username/project-one'
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'An innovative solution for managing complex workflows with ease.',
    link: 'https://github.com/username/project-two'
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'A mobile-responsive application leveraging cutting-edge design principles.',
    link: 'https://github.com/username/project-three'
  },
  {
    id: 4,
    title: 'Project Four',
    description: 'A robust API service that scales effortlessly.',
    link: 'https://github.com/username/project-four'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container projects-container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projectsData.map(project => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
