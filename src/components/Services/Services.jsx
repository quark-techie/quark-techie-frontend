import React, { useState, useRef, useEffect } from 'react';
import './Services.css';

const Services = () => {
  const [showDetails, setShowDetails] = useState(false);
  const detailsRef = useRef(null);
  const toolsRef = useRef(null);
  
  const handleShowDetails = () => {
    setShowDetails(true);
  };

  useEffect(() => {
    if (showDetails && detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [showDetails]);

  const handleSwipe = (e) => {
    if (toolsRef.current) {
      const touch = e.touches[0];
      const touchStartX = touch.clientX;
      const touchEndX = touch.clientX;
      const threshold = 100; // Threshold for swipe movement

      if (touchEndX - touchStartX > threshold) {
        // Swipe right: scroll left
        toolsRef.current.scrollBy({ left: -200, behavior: 'smooth' });
      } else if (touchStartX - touchEndX > threshold) {
        // Swipe left: scroll right
        toolsRef.current.scrollBy({ left: 200, behavior: 'smooth' });
      }
    }
  };

  return (
    <div>
      <div className="services-container">
        <div className="services-content">
          <h1 className="services-title">Our Services</h1>
          <p className="services-text">
            Quality Assurance Services Tailored to Your Needs
          </p>
          <button className="contact-button">Contact Us</button>
        </div>
      </div>
      <div className="what-we-do-container">
        <h2 className="what-we-do-title">/ What We Do /</h2>
        <p className="what-we-do-text">We Take Your Software Quality to the Next Level</p>
        <div className="services-cards-container">
          <div className="service-card">
            <div className="service-card-icon"><img src="/icons/1.png" alt="" /></div>
            <h3 className="service-card-title">Error-Free Products</h3>
            <p className="service-card-text">
              We detect and prevent errors at every stage of development, ensuring a polished and functional final product.
            </p>
          </div>
          <div className="service-card">
            <div className="service-card-icon"><img src="/icons/2.png" alt="" /></div>
            <h3 className="service-card-title">Exceptional User Experience</h3>
            <p className="service-card-text">
              We focus on usability and accessibility, guaranteeing a smooth and intuitive user experience.
            </p>
          </div>
          <div className="service-card">
            <div className="service-card-icon"><img src="/icons/3.png" alt="" /></div>
            <h3 className="service-card-title">Stable and Reliable Software</h3>
            <p className="service-card-text">
              We conduct thorough testing to ensure your software’s stability, performance, and security.
            </p>
          </div>
          <div className="service-card">
            <div className="service-card-icon"><img src="/icons/4.png" alt="" /></div>
            <h3 className="service-card-title">Teamwork Optimization</h3>
            <p className="service-card-text">
              We implement efficient processes that enhance collaboration and communication within your team.
            </p>
          </div>
        </div>
      </div>
      <div className="what-we-do-container">
        <h2 className="what-we-do-title2">/ Tools & Frameworks /</h2>
        <p className="what-we-do-text2">
          We adapt to the tools and frameworks that best fit your project’s needs, <br />ensuring efficient and accurate testing.
        </p>
        <div className="tools-cards-container" ref={toolsRef} onTouchStart={handleSwipe} onTouchMove={handleSwipe}>
          <div className="tool-card" id="tool-card-1">
            <img src="/selenium.png" alt="Selenium" className="tool-icon" />
            <h3 className="tool-title">Selenium</h3>
            <p className="tool-description">
              We use Selenium to automate your web application testing, ensuring complete coverage and fast execution.
            </p>
          </div>
          <div className="tool-card" id="tool-card-2">
            <img src="/cypress.png" alt="Cypress" className="tool-icon" />
            <h3 className="tool-title">Cypress</h3>
            <p className="tool-description">
              Ideal for end-to-end testing, Cypress provides a seamless way to ensure quality across your web applications.
            </p>
          </div>
          <div className="tool-card" id="tool-card-3">
            <img src="/jmeter.png" alt="JMeter" className="tool-icon" />
            <h3 className="tool-title">JMeter</h3>
            <p className="tool-description">
              We leverage JMeter for performance testing, ensuring your application can handle high traffic and usage.
            </p>
          </div>
          <div className="tool-card" id="tool-card-4">
            <img src="/cucumber.png" alt="Cucumber" className="tool-icon" />
            <h3 className="tool-title">Cucumber</h3>
            <p className="tool-description">
              Using Cucumber, we enable behavior-driven development to align testing with your business goals.
            </p>
          </div>
          {/* Aggiungere altre card per i tool */}
          <div className="tool-card" id="tool-card-5">
            <img src="/1.png" alt="Tool 5" className="tool-icon" />
            <h3 className="tool-title">Azure Devops</h3>
            <p className="tool-description">Tool description.</p>
          </div>
          <div className="tool-card" id="tool-card-6">
            <img src="/tools/2.png" alt="Tool 6" className="tool-icon" />
            <h3 className="tool-title">Postman</h3>
            <p className="tool-description">Tool description.</p>
          </div>
          <div className="tool-card" id="tool-card-7">
            <img src="/tools/3.png" alt="Tool 7" className="tool-icon" />
            <h3 className="tool-title">Atlassian</h3>
            <p className="tool-description">Tool description.</p>
          </div>
          <div className="tool-card" id="tool-card-8">
            <img src="/tools/4.png" alt="Tool 8" className="tool-icon" />
            <h3 className="tool-title">CI/CD Pipelines</h3>
            <p className="tool-description">Tool description.</p>
          </div>
          <div className="tool-card" id="tool-card-8">
            <img src="/tools/4.png" alt="Tool 8" className="tool-icon" />
            <h3 className="tool-title">GIT</h3>
            <p className="tool-description">Tool description.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;