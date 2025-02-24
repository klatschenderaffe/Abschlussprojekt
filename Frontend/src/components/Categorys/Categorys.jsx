import './Categorys.css';
import { Link } from 'react-router-dom'; // Korrigiert: react-router -> react-router-dom
import Rostversiegelung from '../../assets/Rostversiegelung.png';
import Dämmung from '../../assets/Dämmung.png';
import MöbelBauen from '../../assets/MöbelBauen.png';
import FahrzeugAuswahl from '../../assets/FahrzeugAuswahl.png';
import BodenVerlegen from '../../assets/BodenVerlegen.png';
import WaendeVerkleiden from '../../assets/WaendeVerkleiden.png';
import Elektrik from '../../assets/Elektrik.png';
import Gasinstallation from '../../assets/Gasinstallation.png';

const Categorys = () => {
  return (
    <div className='category-container'>
      <div className='category-item'>
        <Link
          className='link'
          to='/blogpage'
          state={{ title: 'Fahrzeug' }} // Titel übergeben
        >
          <img src={FahrzeugAuswahl} alt='' />
          <h3>Fahrzeug</h3>
        </Link>
      </div>
      <div className='category-item'>
        <Link
          className='link'
          to='/blogpage'
          state={{ title: 'Rostversiegelung' }} // Titel übergeben
        >
          <img src={Rostversiegelung} alt='' />
          <h3>Rostversiegelung</h3>
        </Link>
      </div>
      <div className='category-item'>
        <Link
          className='link'
          to='/blogpage'
          state={{ title: 'Dämmung' }} // Titel übergeben
        >
          <img src={Dämmung} alt='' />
          <h3>Dämmung</h3>
        </Link>
      </div>
      <div className='category-item'>
        <Link
          className='link'
          to='/blogpage'
          state={{ title: 'Boden verlegen' }} // Titel übergeben
        >
          <img src={BodenVerlegen} alt='' />
          <h3>Boden verlegen</h3>
        </Link>
      </div>
      <div className='category-item'>
        <Link
          className='link'
          to='/blogpage'
          state={{ title: 'Wände und Decken verkleiden' }} // Titel übergeben
        >
          <img src={WaendeVerkleiden} alt='' />
          <h3>
            Wände und Decken <br /> verkleiden
          </h3>
        </Link>
      </div>
      <div className='category-item'>
        <Link
          className='link'
          to='/blogpage'
          state={{ title: 'Möbel bauen' }} // Titel übergeben
        >
          <img src={MöbelBauen} alt='' />
          <h3>Möbel bauen</h3>
        </Link>
      </div>
      <div className='category-item'>
        <Link
          className='link'
          to='/blogpage'
          state={{ title: 'Elektrik' }} // Titel übergeben
        >
          <img src={Elektrik} alt='' />
          <h3>Elektrik</h3>
        </Link>
      </div>
      <div className='category-item'>
        <Link
          className='link'
          to='/blogpage'
          state={{ title: 'Gasinstallation' }} // Titel übergeben
        >
          <img src={Gasinstallation} alt='' />
          <h3>Gasinstallation</h3>
        </Link>
      </div>
    </div>
  );
};

export default Categorys;
