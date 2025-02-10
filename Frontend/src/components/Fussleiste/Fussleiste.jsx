// import React from 'react';
import './Fussleiste.css';
import { Link } from 'react-router';

// Simple Footer

const Fussleiste = () => {
  return (
    <footer className='fussleiste'>
      <ul>
        <Link to='/impressumpage'>Impressum</Link>
      </ul>
    </footer>
  );
};

export default Fussleiste;
