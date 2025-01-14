import React, { useState, useEffect, useRef } from 'react';
import './Home.css';

const Section = ({ title, title2, text, img, reverse, index, isBlue }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const getColorClass = (index, isBlue) => {
    if (isBlue) {
      return 'blue-full';
    }
    return index % 2 === 0 ? 'blue' : 'yellow';
  };

  return (
    <div
      ref={sectionRef}
      className={`section ${reverse ? 'reverse' : ''} ${isVisible ? 'visible' : ''}`}
    >
      <div className="text-container">
        <h1 className={`title ${getColorClass(index, isBlue)}`}>
          {title} {title2 && <span className="subtitle">{title2}</span>}
        </h1>
        <p className={`description ${isVisible ? 'complete' : ''}`}>
          {text}
        </p>
      </div>
      <div className="image-container">
        <img src={img} alt={title2} className="image" />
      </div>
    </div>
  );
};

const Home = () => {
  const sections = [
    {
      title: "Quark",
      title2: "Techie",
      text: "Quality for the finest",
      img: "/horizontal_original.png",
      reverse: false,
      isBlue: false,
    },
    {
      title: "About",
      title2: "Us",
      text: "Quark Techie is now backed by more than 14 years of experience defining QA processes and methodologies.",
      img: "/img1.jpg",
      reverse: true,
      isBlue: false,
    },
    {
      title: "Our",
      title2: "Services",
      text: "Mostly the services we offer to our customers are.",
      img: "/images/section3.jpg",
      reverse: false,
      isBlue: true,
    },
    {
      title: "Contact",
      title2: "Us",
      text: "Get in touch with us for more information.",
      img: "/images/section4.jpg",
      reverse: true,
      isBlue: false,
    },
  ];

  return (
    <div className="home">
      {sections.map((section, index) => (
        <Section
          key={index}
          title={section.title}
          title2={section.title2}
          text={section.text}
          img={section.img}
          reverse={section.reverse}
          index={index}
          isBlue={section.isBlue}
        />
      ))}
    </div>
  );
};

export default Home;
