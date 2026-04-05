import React from 'react';
import './About.css';
import { FaPython, FaJava, FaLanguage, FaHtml5, FaNetworkWired, FaCertificate } from 'react-icons/fa';
import { SiC } from 'react-icons/si';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        
        <div className="about-layout">
          
          <div className="journey-col">
            <h2 className="section-title" style={{textAlign: "left", marginBottom: "2rem"}}>My <span>Journey</span></h2>
            <div className="journey-list">
              <div className="journey-card glass-panel">
                <div className="card-dot"></div>
                <div className="card-status">Ongoing</div>
                <h3>B.Tech in AI & ML</h3>
                <h4>Kamala Institute of Technology & Science</h4>
                <p>2023 - 2027 • CGPA: 7.6</p>
                <p className="card-desc">Currently a third-year university student.</p>
              </div>

              <div className="journey-card glass-panel">
                <div className="card-dot"></div>
                <div className="card-status">Completed</div>
                <h3>Intermediate (MPC)</h3>
                <h4>Telangana State Model Junior College</h4>
                <p>2021 - 2023 • Percentage: 92.4%</p>
              </div>

              <div className="journey-card glass-panel">
                <div className="card-dot"></div>
                <div className="card-status">Completed</div>
                <h3>SSC</h3>
                <h4>Telangana State Model School</h4>
                <p>2021 • GPA: 10.0</p>
              </div>
            </div>
          </div>

          <div className="skills-col">
            <h2 className="section-title" style={{textAlign: "left", marginBottom: "2rem"}}>Technical <span>Skills</span></h2>
            
            <div className="skills-grid">
              <div className="skill-card glass-panel">
                <FaPython className="skill-icon" />
                <span className="skill-name">Python</span>
              </div>
              <div className="skill-card glass-panel">
                <FaJava className="skill-icon" />
                <span className="skill-name">Java</span>
              </div>
              <div className="skill-card glass-panel">
                <SiC className="skill-icon" />
                <span className="skill-name">C</span>
              </div>
              <div className="skill-card glass-panel">
                <FaLanguage className="skill-icon" />
                <span className="skill-name">Typing (60WPM)</span>
              </div>
            </div>

            <h2 className="section-title" style={{textAlign: "left", marginBottom: "2rem", marginTop: "4rem"}}><span>Certifications</span></h2>
            <div className="cert-list">
              <div className="cert-item glass-panel">
                <FaHtml5 className="cert-icon" />
                <span>Introduction to HTML by Infosys</span>
              </div>
              <div className="cert-item glass-panel">
                <FaNetworkWired className="cert-icon" />
                <span>Networking Cloud Virtual Internship</span>
              </div>
              <div className="cert-item glass-panel">
                <FaCertificate className="cert-icon" />
                <span>Programming using Java</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
