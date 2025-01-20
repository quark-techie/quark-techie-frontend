import React from 'react';
import './Services.css'; // Importa il file CSS per lo stile

const Services = () => {
  const logos = [
    { src: "/logo1.png", alt: "Logo 1", text: " Cypress" },
    { src: "/logo2.png", alt: "Logo 2", text: "Azure DevOps" },
    { src: "/logo3.png", alt: "Logo 3", text: "Atlassian" },
    { src: "/logo4.png", alt: "Logo 4", text: "Docker" },
    { src: "/logo5.png", alt: "Logo 5", text: "Selenium" },
    { src: "/logo6.png", alt: "Logo 6", text: "Postman" },
    { src: "/logo7.png", alt: "Logo 7", text: "Git" },
    { src: "/logo8.png", alt: "Logo 8", text: "DevOps/CI-CD" },
  ];

  return (
    <div className="services-container">
      <div>
        <div className="our-services">
          <h2>Our Services</h2>
          <div className="services-list">
            <div className="service">
              <span className="icon">🔍</span>
              <div>
                <h3>Analysis and Assessment</h3>
                <p>
                  Study of the current situation of Testing in the company: flows, definition of use cases, frameworks, documentation, etc.
                </p>
              </div>
            </div>
            <div className="service">
              <span className="icon">💻</span>
              <div>
                <h3>Proposals and Implementation</h3>
                <p>
                  For improvement of weak and critical points identified at the QA level and in the team, both developers and analysts.
                </p>
              </div>
            </div>
            <div className="service">
              <span className="icon">ℹ️</span>
              <div>
                <h3>Support</h3>
                <p>
                  Assistance to the team during production releases, testing, documentation and development control.
                </p>
              </div>
            </div>
            <div className="service">
              <span className="icon">🎓</span>
              <div>
                <h3>Training</h3>
                <p>
                  Training along with support and resolution of doubts during the actions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className='toolsAndFramework'>Tools and frameworks</h1>
      <div className="logo-collection">
        {logos.map((logo, index) => (
          <div className="logo-item" key={index}>
            <img src={logo.src} alt={logo.alt} className="logo-image" />
            <div className="logo-text">{logo.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
