import React from 'react';
import './About.css';

const About = () => {
  return (
    <div>
    <div className="about-container">
      <div className="about-content">
        <div className="about-text-container">
          <h1 className="about-title">About Us</h1>
          <p className="about-text">
            At Quark Techie, we are a team of professionals passionate about software quality. With over 14 years of industry experience, we help businesses like yours create flawless digital products.
          </p>
          </div>
          <div classname="about-image">
          <a href="#contact" className="about-button">
            Let's Build Together
          </a>
        </div>
      </div>
    </div>
    <section className="why-choose-us">
      <div className="container">
        <h2>Why Choose Us</h2>
        <p>Discover why our team is the right fit for your quality assurance needs.</p>

        <div className="why-choose-us__subsections">
          <div className="subsection">
            <div className="subsection__icon">🔍</div>
            <h3>Experience</h3>
            <p>Our team of quality assurance experts has extensive experience in various sectors and technologies.</p>
            <p><strong>Example:</strong> "Our engineers have worked on web, mobile, e-commerce, and enterprise software development projects."</p>
          </div>

          <div className="subsection">
            <div className="subsection__icon">⚙️</div>
            <h3>Customization</h3>
            <p>We design tailored quality assurance strategies that align with your technological environment, needs, and goals.</p>
            <p><strong>Example:</strong> "We adapt our methodology to your development cycle, whether Agile, Waterfall, or hybrid."</p>
          </div>

          <div className="subsection">
            <div className="subsection__icon">📞</div>
            <h3>Communication</h3>
            <p>We maintain clear and transparent communication, with direct channels for efficient collaboration.</p>
            <p><strong>Example:</strong> "We use project management and real-time communication tools to keep you informed at all times."</p>
          </div>

          <div className="subsection">
            <div className="subsection__icon">💡</div>
            <h3>Commitment to Quality</h3>
            <p>We are passionate about software quality and dedicated to helping you achieve your goals.</p>
          </div>

          <div className="subsection">
            <div className="subsection__icon">🏆</div>
            <h3>Results-Driven</h3>
            <p>We focus on outcomes, helping you improve software quality, reduce costs, and increase customer satisfaction.</p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default About;
