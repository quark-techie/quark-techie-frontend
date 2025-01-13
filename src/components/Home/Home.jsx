import React from 'react';
import './Home.css'; // Importa il file CSS

const Home = () => {
  return (
    <div className="home-container">
      {/* Prima sezione: immagine a sinistra e testo a destra */}
      <div className="home-item">
        <img src="https://via.placeholder.com/200" alt="Placeholder 1" />
        <div className="home-item-text">
          <h2>About us          </h2>
          <p>
          Quark Techie is now backed by more than 14 years of experience defining QA processes and methodologies.
To ensure us an efficient and agile implementation we usually work in a continuous coaching, structuring the testing process.

We offer to our clients  some services of software quality consulting, we’re more precisely specialized in the study, definition and implementation of software testing services.
          </p>
        </div>
      </div>

      {/* Seconda sezione: immagine a destra e testo a sinistra */}
      <div className="home-item">
        <div className="home-item-text">
          <h2>Titolo immagine 2</h2>
          <p>
            Un altro esempio di testo che si trova a sinistra dell'immagine. Puoi personalizzare ulteriormente con altri dettagli.
          </p>
        </div>
        <img src="https://via.placeholder.com/200" alt="Placeholder 2" />
      </div>
    </div>
  );
};

export default Home;
