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
      {/* Black Container: Working Process */}
      <div className="working-content">
        <div className="working-text-container">
          <h1 className="working-title">Working Process</h1>
          <p className="working-text">
            At Quark Techie, we are a team of professionals passionate about working software quality.
            With over 14 years of industry experience, we help businesses like yours create flawless digital products.
          </p>
          <a href="#contact" className="working-button">Let's Build Together</a>
        </div>
      </div>

      {/* New Card Grid Section */}
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

      {/* Slider Section */}
      <div className="slider-container">
        <div className="slider-buttons">
          <button className="slider-button" onClick={prevSlide}>&lt;</button>
        </div>

        <div className="slider-content">
          <div className="slider-number">
            <span>{slides[currentIndex].title}</span>
          </div>
          <h3 className="slider-subtitle">{slides[currentIndex].subtitle}</h3>
          <p className="slider-text">{slides[currentIndex].text}</p>
        </div>

        <div className="slider-buttons">
          <button className="slider-button" onClick={nextSlide}>&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Working;
