import React from 'react';
import './Contact.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In <span>Touch</span></h2>
        
        <div className="contact-grid">
          <a href="mailto:sanjanaguntuka76@gmail.com" className="contact-card glass-panel">
            <div className="contact-icon-wrapper">
              <FaEnvelope className="contact-icon" />
            </div>
            <h3>Email</h3>
            <p>sanjanaguntuka76@gmail.com</p>
          </a>

          <a href="tel:9966043637" className="contact-card glass-panel">
            <div className="contact-icon-wrapper">
              <FaPhoneAlt className="contact-icon" />
            </div>
            <h3>Phone</h3>
            <p>+91 9966043637</p>
          </a>

          <div className="contact-card glass-panel">
            <div className="contact-icon-wrapper">
              <FaMapMarkerAlt className="contact-icon" />
            </div>
            <h3>Location</h3>
            <p>Karimnagar, Telangana</p>
          </div>

          <a href="#" className="contact-card glass-panel">
            <div className="contact-icon-wrapper">
              <FaGithub className="contact-icon" />
            </div>
            <h3>GitHub</h3>
            <p>github.com/SanjanaGuntuka</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
