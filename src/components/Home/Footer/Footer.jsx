// Footer.js
import React from 'react';
import './Footer.css'; // Importiamo un file CSS per il footer

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <p className="footer-text">© 2025 Quark Techie. All rights reserved.</p>
        <p className="footer-contact">
          Email: <a href="mailto:contact@quarktechie.com">contact@quarktechie.com</a> | Phone: <a href="tel:+1234567890">+1 234 567 890</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
