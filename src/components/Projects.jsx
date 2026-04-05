import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Home Workout Guide",
      duration: "Ongoing",
      team: "Team Size: 4",
      description: "A real-time digital fitness platform designed to provide individuals with a convenient, safe, and effective way to improve their physical fitness from the comfort of their own homes.",
      techStack: ["React", "HTML/CSS", "JavaScript"],
      link: "#"
    },
    {
      title: "AI Model Simulator (Placeholder)",
      duration: "Completed",
      team: "Solo",
      description: "An intelligent application leveraging machine learning concepts to help analyze simple datasets and model relationships natively in the browser.",
      techStack: ["Python", "Pandas", "Scikit-Learn"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Featured <span>Projects</span></h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card glass-panel">
              <div className="project-header">
                <span className="project-status">{project.duration}</span>
                <span className="project-team">{project.team}</span>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              
              <div className="project-tech">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="tech-chip">{tech}</span>
                ))}
              </div>
              
              <a href={project.link} className="project-link">
                View Live <span>&rarr;</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
