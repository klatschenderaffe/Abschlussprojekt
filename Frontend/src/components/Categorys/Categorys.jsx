import './Categorys.css';
import { Link } from 'react-router';
import Rostversiegelung from '../../assets/Rostversiegelung.png';
import Dämmung from '../../assets/Dämmung.png';
import MöbelBauen from '../../assets/MöbelBauen.png';
import FahrzeugAuswahl from '../../assets/FahrzeugAuswahl.png';
import BodenVerlegen from '../../assets/BodenVerlegen.png';
import WaendeVerkleiden from '../../assets/WaendeVerkleiden.png';

const Categorys = () => {
  return (
    <div className='category-container'>
      <div className='category-item'>
        <Link className='link' to='/blogpage'>
          <img src={FahrzeugAuswahl} alt='' />
          <h3 id='title'>Fahrzeug Auswahl</h3>
        </Link>
      </div>
      <div className='category-item'>
        <Link className='link' to='/'>
          <img src={Rostversiegelung} alt='' />
          <h3 id='title'>Rostversiegelung</h3>
        </Link>
      </div>
      <div className='category-item'>
        <Link className='link' to='/'>
          <img src={Dämmung} alt='' />
          <h3 id='title'>Dämmung</h3>
        </Link>
      </div>
      <div className='category-item'>
        <Link className='link' to='/'>
          <img src={BodenVerlegen} alt='' />
          <h3 id='title'>Boden verlegen</h3>
        </Link>
      </div>
      <div className='category-item'>
        <Link className='link' to='/'>
          <img src={WaendeVerkleiden} alt='' />
          <h3 id='title'>
            Wände und Decken <br /> verkleiden
          </h3>
        </Link>
      </div>
      <div className='category-item'>
        <Link className='link' to='/'>
          <img src={MöbelBauen} alt='' />
          <h3 id='title'>Möbel bauen</h3>
        </Link>
      </div>
    </div>
  );
};

export default Categorys;
