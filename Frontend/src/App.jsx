import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Fussleiste from './components/Fussleiste/Fussleiste';
import Title from './components/Title/Title';
import Laenderregeln from './components/Laenderregeln/Laenderregeln';
import Contact from './components/Contact/Contact';
import Def from './components/Def/Def';
import Map from './components/Map/Map';
import Impressum from './components/Impressum/Impressum';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import React from "react";
// import Sleepspots from './components/Sleepspots.jsx';
// import MapboxMap from './components/Map';

// Hier ist die Struktur der Website
// Die verschiedenen Komponenten werden hier nacheinander aufgerufen
const App = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        const yOffset = -150; // Offset von -100px
        const yPosition =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: yPosition, behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div>
      <div id='home'>
        <Navbar />
        <Hero />
      </div>
      <div id='map'>
        <div className='container'>
          <Title
            subtitle='Suche deinen nächsten Stellplatz'
            title='Stellplatz Sucher'
          />
          <Map />
        </div>
        <Contact />
        <div id='definitionen'>
          <Title
            subtitle='Du willst wissen wo es erlaubt ist zu stehen?'
            title='Länder und ihre Regeln'
          />
          <Def />
        </div>
        <Laenderregeln />

        {/* <Sleepspots/> */}
      </div>
      <Fussleiste />
    </div>
  );
};

export default App;
