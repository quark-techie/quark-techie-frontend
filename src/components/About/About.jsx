import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-item">
          <div className="about-text">
            <h1>About Us</h1>
            <h2 className="about-title">Experience and Expertise in QA</h2>
            <p className="about-description">
              Quark Techie is an energetic and progressive company with over 14 years of experience in software quality assurance. In this time, we've developed comprehensive QA processes and methodologies to address the ever-evolving needs of the industry.
            </p>
          </div>
          <div className="about-image">
            <img src="/aboutimage.png" alt="Quark Techie" className="about-img" />
          </div>
        </div>

        <div className="about-item reverse">
          <div className="about-text">
            <h2 className="about-title">Agile and Flexible Approach</h2>
            <p className="about-description">
              Our highly qualified team understands that quality isn't just about testing software, it's about creating a culture of excellence and continuous improvement. Our processes are flexible and adaptive to meet the fluctuating needs of projects.
            </p>
          </div>
          <div className="about-image">
            <img src="/aboutimage2.png" alt="Agile Testing" className="about-img" />
          </div>
        </div>

        <div className="about-item">
          <div className="about-text">
            <h2 className="about-title">About Quark Techie</h2>
            <p className="about-description">
              Quark Techie specializes in offering strategic software quality consulting services, optimizing processes, and creating scalable testing strategies that align with business objectives, ensuring top-notch quality at every phase.
            </p>
          </div>
          <div className="about-image">
            <img src="/aboutimage3.png" alt="Consulting Services" className="about-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
