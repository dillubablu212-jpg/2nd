import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Sanjana Guntuka";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-layout">
        <div className="hero-content">
          <div className="badge glass-panel">🔥 Aspiring AI & ML Student</div>
          <h1 className="hero-greeting">Hi, I'm</h1>
          <h2 className="hero-name">{text}<span className="cursor">|</span></h2>
          <p className="hero-desc">
            Eager to apply knowledge in developing intelligent solutions and gaining 
            hands-on experience in Artificial Intelligence and Machine Learning.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn btn-gradient">View Projects</a>
            <a href="#contact" className="btn btn-glass">Contact Me</a>
          </div>
        </div>
        <div className="hero-image-col">
          <div className="avatar-wrapper">
            {/* Note: Drop your photo named "profile.jpg" inside the "public" folder */}
            <img 
              src="/profile.jpeg" 
              alt="Sanjana" 
              className="avatar-image glass-panel" 
              onError={(e) => { 
                e.target.style.display = 'none'; 
                e.target.nextSibling.style.display = 'flex'; 
              }} 
            />
            <div className="avatar-placeholder glass-panel" style={{display: 'none'}}>
               <span>SG</span>
            </div>
            <div className="glow-circle"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
