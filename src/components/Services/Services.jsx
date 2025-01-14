import React from 'react';
import './Services.css'; // Importa il file CSS per lo stile


const LogoCollection = () => {
  const logos = [
    { src: "/logo1.png", alt: "Logo 1", text: "Descrizione Logo 1" },
    { src: "/logo2.png", alt: "Logo 2", text: "Descrizione Logo 2" },
    { src: "/logo3.png", alt: "Logo 3", text: "Descrizione Logo 3" },
    { src: "/logo4.png", alt: "Logo 4", text: "Descrizione Logo 4" },
    { src: "/logo5.png", alt: "Logo 5", text: "Descrizione Logo 5" },
    { src: "/logo6.png", alt: "Logo 6", text: "Descrizione Logo 6" },
    { src: "/logo7.png", alt: "Logo 7", text: "Descrizione Logo 7" },
    { src: "/logo8.png", alt: "Logo 8", text: "Descrizione Logo 8" },
  ];

  return (
    <div className="logo-collection">
      {logos.map((logo, index) => (
        <div className="logo-item" key={index}>
          <img src={logo.src} alt={logo.alt} className="logo-image" />
          <div className="logo-text">{logo.text}</div>
        </div>
      ))}
    </div>
  );
};

export default LogoCollection;
