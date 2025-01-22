import React, { useState } from 'react';
import './Working.css';
import { FaCog, FaChartBar, FaClipboardList, FaUserCheck } from 'react-icons/fa';

const Working = () => {
  const slides = [
    { id: 1, title: '01', subtitle: 'Consulting', text: 'We analyze your needs and advise you on the best quality assurance strategies.' },
    { id: 2, title: '02', subtitle: 'Assessment', text: 'We evaluate your software’s current state and identify areas for improvement.' },
    { id: 3, title: '03', subtitle: 'Defining KPIs and Metrics', text: 'We establish key performance indicators to measure testing success.' },
    { id: 4, title: '04', subtitle: 'Process Modeling', text: 'We help in defining the process structure to ensure a smooth development flow.' },
    { id: 5, title: '05', subtitle: 'Coaching', text: 'We train teams on quality practices to ensure long-term results and knowledge sharing.' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const sections = [
    {
      title: 'Consulting',
      icon: <FaClipboardList />,
      points: ['Assessment', 'KPI & Metrics', 'Process Modeling', 'Coaching'],
    },
    {
      title: 'Functional',
      icon: <FaUserCheck />,
      points: ['Test Plan', 'Test Cycles', 'Test Management', 'Bug Reporting'],
    },
    {
      title: 'Automation',
      icon: <FaCog />,
      points: ['ROI', 'Tools & Frameworks', 'Shifting Left', 'DevOps Integration'],
    },
    {
      title: 'Performance',
      icon: <FaChartBar />,
      points: ['Technical Architecture', 'Environments & Data', 'Test Parameterization', 'Non-Functional Testing'],
    },
  ];

  return (
    <div className="working-container">
      {/* Working Process Section */}
      <div className="working-content">
        <div className="working-text-container">
          <h1 className="working-title">Our Working Process</h1>
          <p className="working-text">
          A holistic strategy managed by QA experts

          </p>
          <a href="#contact" className="working-button">Contact Us</a>
        </div>
      </div>

      {/* Card Grid Section */}
      <div className="working-grid">
        {sections.map((section, index) => (
          <div key={index} className="working-card">
            <div className="card-icon">{section.icon}</div>
            <h3 className="card-title">{section.title}</h3>
            <ul className="card-points">
              {section.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Headline Section - "How We Do It" */}
      <div className="headline-container">
        <h2 className="headline-title">How We Do It</h2>
        <h3 className="headline-subtitle">Comprehensive Methodology for Exhaustive Quality Assurance</h3>
        <p className="headline-text">
          We implement a holistic strategy covering every stage of development, ensuring quality every step of the way.
        </p>
      </div>

      {/* Slider Section */}
      <div className="slider-container">
        {/* Left Arrow */}
        <div className="slider-buttons left" onClick={prevSlide}>
          <span>&lt;</span>
        </div>

        {/* Slider Content */}
        <div className="slider-content">
          <div className="slider-number">{slides[currentIndex].title}</div>
          <h3 className="slider-subtitle">{slides[currentIndex].subtitle}</h3>
          <p className="slider-text">{slides[currentIndex].text}</p>
        </div>

        {/* Right Arrow */}
        <div className="slider-buttons right" onClick={nextSlide}>
          <span>&gt;</span>
        </div>
      </div>
    </div>
  );
};

export default Working;
