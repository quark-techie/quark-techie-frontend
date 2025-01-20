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
            <h2>Consulting</h2>
            <p>
            · Assessment <br />
· KPI & metrics <br />
· Process modeling <br />
· Coaching

            </p>
          </div>
          <div className="step">
            <h2>Functional</h2>
            <p>
            · Testing Plan <br />
· Testing Cycles <br />
· Test Management <br />
· Bug Reporting

            </p>
          </div>
        </div>

        <div className="steps-row">
          <div className="step">
            <h2>Automation</h2>
            <p>
            · ROI <br />
· Tools & Frameworks <br />
· Shifting Left <br />
· DevOps Integration

            </p>
          </div>
          <div className="step">
            <h2>Performance</h2>
            <p>
            · Technical architecture <br />
· Environments & Data <br />
· Test parameterization <br />
· Non functional testing
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
          Our team is an expert in QA methodologies, ensuring flawless software performance.
</p>
        </div>
        <div className="why-quark-techie-item">
          <h3>Customization</h3>
          <p>
          Tailored QA strategies crafted to fit your tech environment and project requirements. 
</p>
        </div>
        <div className="why-quark-techie-item">
          <h3>Communication</h3>
          <p>
          Direct communication channels for seamless collaboration and feedback integration.
          </p>
        </div>
      </section>
    </div>
  );
};

export default WorkingProcess;
