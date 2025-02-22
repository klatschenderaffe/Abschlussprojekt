// import './Categorys.css';
// import { Link } from 'react-router';
// import Rostversiegelung from '../../assets/Rostversiegelung.png';
// import Dämmung from '../../assets/Dämmung.png';
// import MöbelBauen from '../../assets/MöbelBauen.png';
// import FahrzeugAuswahl from '../../assets/FahrzeugAuswahl.png';
// import BodenVerlegen from '../../assets/BodenVerlegen.png';
// import WaendeVerkleiden from '../../assets/WaendeVerkleiden.png';

// const Categorys = () => {

//   return (
//     <div className='category-container'>
//       <div className='category-item'>
//         <Link className='link' to='/blogpage'>
//           <img src={FahrzeugAuswahl} alt='' />
//           <h3 id='title'>Fahrzeug Auswahl</h3>
//         </Link>
//       </div>
//       <div className='category-item'>
//         <Link className='link' to='/'>
//           <img src={Rostversiegelung} alt='' />
//           <h3 id='title'>Rostversiegelung</h3>
//         </Link>
//       </div>
//       <div className='category-item'>
//         <Link className='link' to='/'>
//           <img src={Dämmung} alt='' />
//           <h3 id='title'>Dämmung</h3>
//         </Link>
//       </div>
//       <div className='category-item'>
//         <Link className='link' to='/'>
//           <img src={BodenVerlegen} alt='' />
//           <h3 id='title'>Boden verlegen</h3>
//         </Link>
//       </div>
//       <div className='category-item'>
//         <Link className='link' to='/'>
//           <img src={WaendeVerkleiden} alt='' />
//           <h3 id='title'>
//             Wände und Decken <br /> verkleiden
//           </h3>
//         </Link>
//       </div>
//       <div className='category-item'>
//         <Link className='link' to='/'>
//           <img src={MöbelBauen} alt='' />
//           <h3 id='title'>Möbel bauen</h3>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Categorys;
import './Categorys.css';
import { Link } from 'react-router-dom'; // Korrigiert: react-router -> react-router-dom
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
        <Link
          className='link'
          to='/blogpage'
          state={{ title: 'Fahrzeug Auswahl' }} // Titel übergeben
        >
          <img src={FahrzeugAuswahl} alt='' />
          <h3>Fahrzeug Auswahl</h3>
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
    </div>
  );
};

export default Categorys;
