import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Foundations from './components/Foundations/Foundations';
import Services from './components/Services/Services';
import Working from './components/Working/Working'; // Importa WorkingProcess
import NotFound from './components/pages/NotFound';
import Footer from './components/Home/Footer/Footer';
import ScrollToTop from './components/hooks/scrollToTop';

const App = () => {
  const footerRef = useRef(null); // Crea un riferimento per il footer

  const scrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: 'smooth' }); // Scrolla al footer
    }
  };

  return (
    <Router>
      <Navbar scrollToFooter={scrollToFooter} /> {/* Passa la funzione al Navbar */}
      <ScrollToTop/>
      <div>
        <Routes>s
          <Route path="/" element={<Home />} />
          <Route path="/Foundations" element={<Foundations />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/About" element={<About />} />
          <Route path="/Working-process" element={<Working />} /> {/* Aggiungi WorkingProcess */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer ref={footerRef} /> {/* Usa il riferimento per il footer */}
    </Router>
  );
};

export default App;
