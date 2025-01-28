import React, { useState, useEffect } from 'react';
import './About.css';
import { FaCog, FaChartBar, FaClipboardList, FaUserCheck } from 'react-icons/fa';

const About = () => {
  const slides = [
    { id: 1, title: '01', subtitle: 'Consulting', text: 'We analyze your needs and advise you on the best quality assurance strategies.' },
    { id: 2, title: '02', subtitle: 'Assessment', text: 'We evaluate your software’s current state and identify areas for improvement.' },
    { id: 3, title: '03', subtitle: 'Defining KPIs and Metrics', text: 'We establish key performance indicators to measure testing success.' },
    { id: 4, title: '04', subtitle: 'Process Modeling', text: 'We help in defining the process structure to ensure a smooth development flow.' },
    { id: 5, title: '05', subtitle: 'Coaching', text: 'We train teams on quality practices to ensure long-term results and knowledge sharing.' },
  ];

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

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About Us</h1>
        <p className="about-text">Everything you need to know about Quark Techie</p>
        <a href="#contact" className="about-button">Contact Us</a>
      </div>

      <div className='aboutus-text'>
        <div className="text1">
          <h2>Quark Techie</h2>
          <p>At Quark Techie, we are a team of professionals passionate about software quality. With over 14 years of industry experience, we help businesses like yours create flawless digital products. We specialize in defining and implementing tailored quality assurance processes and methodologies, leveraging best practices and market standards. Through ongoing coaching, we guide you in structuring efficient and agile testing, ensuring quality at every stage of development. Our approach is rooted in collaboration and transparency, working hand-in-hand with you to achieve the best results.</p>
        </div>
        <img src="./aboutusimg.png" alt="About us" />
      </div>

      <div className='whyquark'>
        <h2 className='text2'>Why Quark Techie</h2>
        <div className="whyquark-content">
          <img src="./aboutusimg.png" alt="Why Quark Techie" />
          <div className="text2-left">
            <h4>Quark Techie: Your Strategic Partner in Quality Assurance</h4>
            <p>Experience: Our team of quality assurance experts has extensive experience in various sectors and technologies. Example: "Our engineers have worked on web, mobile, e-commerce, and enterprise software development projects."</p>
            <p>Customization: We design tailored quality assurance strategies that align with your technological environment, needs, and goals. Example: "We adapt our methodology to your development cycle, whether Agile, Waterfall, or hybrid."</p>
            <p>Communication: We maintain clear and transparent communication, with direct channels for efficient collaboration. Example: "We use project management and real-time communication tools to keep you informed at all times."</p>
            <p>Commitment to Quality: We are passionate about software quality and dedicated to helping you achieve your goals.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;