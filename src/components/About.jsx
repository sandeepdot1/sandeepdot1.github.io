import React from 'react';
import './About.css';
import profilePic from '../assets/profile.jpg';
import moroLogo from '../assets/mro_logo.jpeg';
import ineuronLogo from '../assets/ineuron_logo.jpg';
import widhyaLogo from '../assets/widhyaorg_logo.jpeg';

const experienceData = [
  {
    id: 1,
    company: 'MRO Corporation',
    link: 'https://mrocorp.com/',
    role: 'Software Developer',
    info: 'Developed scalable web services, optimized CI/CD pipelines, automated data processing with Airflow, enhanced security with Snyk, integrated FHIR API data, built event-driven Cloud Functions, and optimized ETL workflows using Scala and Spark.',
    period: 'July 2022 - Present',
    companyImage: moroLogo,
  },
  {
    id: 2,
    company: 'INeuron.ai',
    link: 'https://ineuron.ai/',
    role: 'Project Intern',
    info: 'Developed an image-based employee productivity analysis system by creating a 5000-image dataset, fine-tuning YOLOv5 for eye movement detection, and integrating results into a dashboard for daily productivity reports.',
    period: 'May 2021 - August 2021',
    companyImage: ineuronLogo,
  },
  {
    id: 3,
    company: 'Widhya',
    link: 'https://widhya-7791d.web.app/',
    role: 'Machine Learning Intern',
    info: 'Developed machine learning models on four datasets, performed advanced data cleaning and feature engineering, and utilized Pandas, NumPy, and Scikit-learn for data analysis and visualization.',
    period: 'Jan 2021 - Feb 2021',
    companyImage: widhyaLogo,
  },
];

const technicalSkills = [
  "Microservices",
  "Rest APIs",
  "Cloud Computing",
  "Databases",
  "CICD",
  "Python",
  "Javascript",
  "Scala",
  "SQL",
  "HTML",
  "Node.js",
  "Google Cloud Platform (GCP)",
  "Docker",
  "Jenkins",
  "Postgres",
  "Cassandra",
  "GraphQL",
  "Flask",
  "Express.js",
  "Pytest",
  "Falcon",
  "Spark",
  "Git/GitLab",
  "Postman",
  "Snyk",
  "Jira"
];

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-main-container">
        {/* Profile Info Container */}
        <div className="profile-container">
          <img src={profilePic} alt="Profile" className="profile-picture" />
          <div className="name-designation">
            <h1 className="name">Sandeep, I am a</h1>
            <h3 className="designation">Software Engineer</h3>
          </div>
          <p className="description">
          Software Engineer with 2+ years of experience in designing and deploying scalable microservices. Proficient in
          Python, JavaScript, Node.js, Google Cloud, and Postgres. Skilled in Unit testing, API testing, Docker, and Jenkins.
          Committed to continuous learning and eager to leverage technical skills in a role that drives innovation.
          </p>
          <div className="tech-skills">
            <h4>Technical Skills</h4>
            <ul className="skills-list">
              {technicalSkills.map((skill, index) => (
                <li key={index} className="skill">{skill}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="timeline-container">
          <h2 className="timeline-title">Work Experience</h2>
          <div className="timeline">
            {experienceData.map(exp => (
              <div key={exp.id} className="timeline-item">
                <div className="timeline-time">{exp.period}</div>
                <div className="timeline-content">
                  <div className="company-info">
                    <div className="company-image">
                      <img src={exp.companyImage} alt={exp.company} />
                    </div>
                    <div className="company-details">
                      <h3><a className="company" href={exp.link}>{exp.company}</a></h3>
                      <h4 className="role">{exp.role}</h4>
                      <p className="info">{exp.info}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
