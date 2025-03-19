import React from 'react';
import './About.css';
import profilePic from '../assets/profile.jpg';
// import company1 from '../assets/company1.jpg';
// import company2 from '../assets/company2.jpg';
// import company3 from '../assets/company3.jpg';

const experienceData = [
  {
    id: 1,
    company: 'Company One',
    role: 'Software Engineer',
    info: 'Developed scalable web applications and microservices.',
    period: 'Jan 2020 - Present',
    companyImage: profilePic,
  },
  {
    id: 2,
    company: 'Company Two',
    role: 'Frontend Developer',
    info: 'Created interactive user interfaces and optimized performance.',
    period: 'Jun 2018 - Dec 2019',
    companyImage: profilePic,
  },
  {
    id: 3,
    company: 'Company Three',
    role: 'Intern',
    info: 'Assisted in various development projects and QA testing.',
    period: 'Jan 2018 - May 2018',
    companyImage: profilePic,
  },
];

const technicalSkills = ['React', 'Node.js', 'Express', 'MongoDB', 'GraphQL'];

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
            I am a passionate software engineer with expertise in building scalable and robust applications.
            I love solving complex challenges and continuously learning new technologies.
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
                      <h3 className="company">{exp.company}</h3>
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
