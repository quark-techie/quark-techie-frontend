import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-text-container">
          <h1 className="about-title">About Us</h1>
          <p className="about-text">
            At Quark Techie, we are a team of professionals passionate about software quality. With over 14 years of industry experience, we help businesses like yours create flawless digital products.
          </p>
          <a href="#contact" className="about-button">
            Let's Build Together
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
