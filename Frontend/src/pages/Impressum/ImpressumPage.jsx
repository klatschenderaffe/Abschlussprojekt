// import React from 'react';
import './ImpressumPage.css';
import Impressum from '../../components/Impressum/Impressum';
import Navbar from '../../components/Navbar/Navbar';

const ImpressumPage = () => {
  return (
    <div>
      <div className='nav-page'>
        <Navbar />
      </div>
      <Impressum />
    </div>
  );
};

export default ImpressumPage;
