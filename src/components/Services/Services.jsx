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
          <div className="services-text-container">
            <h1 className="services-title">Our Services</h1>
            <p className="services-text">
              Quality Assurance Services Tailored to Your Needs
            </p>
            <button className="services-button" onClick={handleShowDetails}>
              Show More
            </button>
          </div>
        </div>
      </div>

      {/* Dettagli visibili solo quando il bottone "Show More" viene cliccato */}
      {showDetails && (
        <div ref={detailsRef} className="services-details">
          <div className="services-cards-container">
            <div className="service-card">
              <h3 className="service-card-title">Analysis and Evaluation</h3>
              <p className="service-card-text">
                We conduct a thorough audit of your existing testing processes, identifying strengths, weaknesses, and areas for improvement.
                <br />
                <br />
                This detailed evaluation ensures that the solutions we provide are tailored to your specific needs, helping your team perform at its best.
              </p>
            </div>

            <div className="service-card">
              <h3 className="service-card-title">Quality Control</h3>
              <p className="service-card-text">
                With years of experience, we ensure quality control across all processes, guaranteeing the highest standards of product quality.
                <br />
                <br />
                Our experts continuously monitor and improve processes to achieve optimal results and minimize risks.
              </p>
            </div>

            <div className="service-card">
              <h3 className="service-card-title">Customized Approach</h3>
              <p className="service-card-text">
                We customize our approach based on your business requirements, ensuring that our solutions align perfectly with your goals.
                <br />
                <br />
                By understanding your unique challenges, we craft strategies that drive success.
              </p>
            </div>

            <div className="service-card">
              <h3 className="service-card-title">Success-Oriented</h3>
              <p className="service-card-text">
                Our goal is to drive success by implementing the best solutions for your business, ensuring continuous growth and improvement.
                <br />
                <br />
                We work closely with you to implement the best strategies that lead to long-term success.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
