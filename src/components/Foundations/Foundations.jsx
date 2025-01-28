import React from "react";
import "./Foundations.css"; // Importa lo stile CSS per personalizzare il design

const OurFoundations = () => {
  const foundations = [
    {
      title: "Commitment",
      description: "We are committed to delivering a high-quality, error-free product that meets the needs of our users. Our dedication to excellence drives every decision and ensures customer satisfaction.",
    },
    {
      title: "Satisfied users",
      description: "We strive to create satisfied users and customers by consistently enhancing the user experience. Our goal is to provide intuitive, reliable, and enjoyable solutions.",
    },
    {
      title: "Stability",
      description: "Ensuring stability and correct software behavior is at the core of what we do. We prioritize dependable performance to build trust and reliability.",
    },
    {
      title: "Improving the day-to-day work",
      description: "We focus on improving the day-to-day work of our team and our customers. By fostering a supportive environment and delivering dependable solutions, we ensure reassurance and satisfaction for everyone involved.",
    },
  ];

  return (
    <div>
    <div className="about-container">
      <div className="about-content">
        <div className="about-text-container">
          <h1 className="about-title">Our Foundations</h1>
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
    <div className="our-foundations">

      <div className="foundations-list">
        {foundations.map((item, index) => (
          <div key={index} className="foundation-item">
            <div className="foundation-content">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default OurFoundations;
