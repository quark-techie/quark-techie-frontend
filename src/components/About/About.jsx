import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-item">
          <div className="about-text">
            <h2 className="about-title">Experience and Expertise in QA</h2>
            <p className="about-description">
              Quark Techie is an energetic and progressive company with a comprehensive experience of more than 14 years in the line of software quality assurance. In this course of time, we have gained experience in defining, developing, and implementing comprehensive and robust QA processes and methodologies to meet ever-evolving industry needs.
            </p>
          </div>
          <div className="about-image">
            <img src="/aboutimage.png" alt="Quark Techie" className="about-img" />
          </div>
        </div>

        <div className="about-item reverse">
          <div className="about-text">
          <h2 className="about-title">. Agile and Flexible Approach</h2>

            <p className="about-description">
              Our highly qualified team realizes that quality means more than just testing software; it is a question of culture that pervades the climate for excellence and continuous improvement at every phase in the development life cycle. We make our testing processes flexible and adaptive to answer immediately for the fluctuations of project requirements, technologies, or timelines.
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
              Quark Techie specializes in providing bespoke software quality consulting services beyond conventional testing. We focus on the strategic aspects of software quality, including process optimization and the creation of scalable testing strategies that align with business objectives. We guide you in every step to ensure the highest standards of quality in your software.
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
