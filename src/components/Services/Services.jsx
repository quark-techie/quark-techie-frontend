import React, { useState, useRef, useEffect } from 'react';
import './Services.css';

const Services = () => {
  const [showDetails, setShowDetails] = useState(false);
  const detailsRef = useRef(null); // Riferimento alla sezione dei dettagli

  // Funzione per gestire il click sul pulsante "Show More"
  const handleShowDetails = () => {
    setShowDetails(true);
  };

  // Effetto che esegue lo scroll verso i dettagli quando il contenuto è visibile
  useEffect(() => {
    if (showDetails && detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [showDetails]); // Trigger dell'effetto ogni volta che "showDetails" cambia

  return (
    <div>
      <div className="services-container">
        <div className="services-content">
          <h1 className="services-title">Our Services</h1>
          <p className="services-text">
            Quality Assurance Services Tailored to Your Needs
          </p>

          {/* Bottone "Contact Us" */}
          <button className="contact-button">Contact Us</button>
        </div>
      </div>

      {/* Sezione "What We Do" */}
      <div className="what-we-do-container">
        <h2 className="what-we-do-title">What We Do</h2>
        <p className="what-we-do-text">
        We Take Your Software Quality to the Next Level
        </p>

        {/* Icone o immagini che rappresentano ciascun punto */}
        <div className="services-cards-container">
          <div className="service-card">
            <div className="service-card-icon">✔️</div>
            <h3 className="service-card-title">Error-Free Products</h3>
            <p className="service-card-text">
              We detect and prevent errors at every stage of development, ensuring a polished and functional final product.
            </p>
          </div>

          <div className="service-card">
            <div className="service-card-icon">😊</div>
            <h3 className="service-card-title">Exceptional User Experience</h3>
            <p className="service-card-text">
              We focus on usability and accessibility, guaranteeing a smooth and intuitive user experience.
            </p>
          </div>

          <div className="service-card">
            <div className="service-card-icon">📊</div>
            <h3 className="service-card-title">Stable and Reliable Software</h3>
            <p className="service-card-text">
              We conduct thorough testing to ensure your software’s stability, performance, and security.
            </p>
          </div>

          <div className="service-card">
            <div className="service-card-icon">🤝</div>
            <h3 className="service-card-title">Teamwork Optimization</h3>
            <p className="service-card-text">
              We implement efficient processes that enhance collaboration and communication within your team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
