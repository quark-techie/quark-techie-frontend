import React from 'react';
import './WorkingProcess.css';

const WorkingProcess = () => {
  return (
    <div className="working-process-container">
      <section className="working-process-header">
        <h1>Our Working Process</h1>
        <p className="intro-text">
          We follow a structured and thorough process to ensure top-notch quality in every project.
        </p>
      </section>

      {/* Fasi del processo lavorativo */}
      <section className="working-process-steps">
        <div className="steps-row">
          <div className="step">
            <h2>1. Planning</h2>
            <p>
              We begin by analyzing your project's scope, requirements, and desired outcomes. We work with your team to outline a detailed strategy.
            </p>
          </div>
          <div className="step">
            <h2>2. Design</h2>
            <p>
              Our team then moves into the design phase, creating a scalable testing strategy, testing environments, and frameworks tailored to your needs.
            </p>
          </div>
        </div>

        <div className="steps-row">
          <div className="step">
            <h2>3. Implementation</h2>
            <p>
              Once everything is planned and designed, we implement the necessary tools and frameworks, focusing on automation and continuous integration.
            </p>
          </div>
          <div className="step">
            <h2>4. Testing</h2>
            <p>
              We conduct thorough testing, including functional, performance, and security tests to ensure that everything works as intended.
            </p>
          </div>
        </div>
      </section>

      {/* Why Quark Techie Section */}
      <section className="why-quark-techie">
        <h2>Why Quark Techie?</h2>
        <p>
          Quark Techie stands out for its expertise, dedication, and a unique approach to quality assurance that makes a real difference in delivering exceptional results.
        </p>
      </section>

      {/* Dettagli aggiuntivi sulla sezione Why Quark Techie */}
      <section className="why-quark-techie-details">
        <div className="why-quark-techie-item">
          <h3>Expertise</h3>
          <p>
            Our team brings deep industry knowledge and a proven track record of delivering outstanding results across diverse sectors.
          </p>
        </div>
        <div className="why-quark-techie-item">
          <h3>Customization</h3>
          <p>
            We tailor our solutions to your specific needs, ensuring that each project is designed to meet your unique requirements.
          </p>
        </div>
        <div className="why-quark-techie-item">
          <h3>Communication</h3>
          <p>
            We prioritize clear and open communication throughout every stage of the project, keeping you informed and involved.
          </p>
        </div>
      </section>
    </div>
  );
};

export default WorkingProcess;
