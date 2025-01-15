import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contacts/Contacts';
import Foundations from './components/Foundations/Foundations';
import NotFound from './components/NotFound';
import Services from './components/Services/Services';

const App = () => {
  return (
    <Router>
      <Navbar />
  
      <div> 
        <Routes>
          {/* Definisci le rotte principali */}
          <Route path="/" element={<Home />} />
          <Route path="/Foundations" element={<Foundations />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
