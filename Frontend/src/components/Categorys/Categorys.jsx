import './Categorys.css';
import { Link } from 'react-router-dom';

// Importiere die Bilder und weise sie den Kategorien dynamisch zu
import Rostversiegelung from '../../assets/Rostversiegelung.png';
import Dämmung from '../../assets/Dämmung.png';
import MöbelBauen from '../../assets/MöbelBauen.png';
import Fahrzeug from '../../assets/FahrzeugAuswahl.png';
import BodenVerlegen from '../../assets/BodenVerlegen.png';
import WaendeVerkleiden from '../../assets/WaendeVerkleiden.png';
import Elektrik from '../../assets/Elektrik.png';
import Gasinstallation from '../../assets/Gasinstallation.png';

const WelcomePage = () => {
  // Kategorien mit zugehörigen Bildern definieren
  const categories = [
    { name: 'Fahrzeug', title: 'Fahrzeug', image: Fahrzeug },
    {
      name: 'Rostversiegelung',
      title: 'Rostversiegelung',
      image: Rostversiegelung,
    },
    { name: 'Dämmung', title: 'Dämmung', image: Dämmung },
    { name: 'BodenVerlegen', title: 'Boden verlegen', image: BodenVerlegen },
    {
      name: 'WaendeVerkleiden',
      title: 'Wände und Decken verkleiden',
      image: WaendeVerkleiden,
    },
    { name: 'MoebelBauen', title: 'Möbel bauen', image: MöbelBauen },
    { name: 'Elektrik', title: 'Elektrik', image: Elektrik },
    {
      name: 'Gasinstallation',
      title: 'Gasinstallation',
      image: Gasinstallation,
    },
  ];

  return (
    <div>
      <div className='category-container'>
        {categories.map((category) => (
          <div key={category.name} className='category-item'>
            <Link className='link' to={`/blog/${category.name}`}>
              {/* Dynamisches Bild basierend auf der Kategorie */}
              <img
                src={category.image}
                alt={`Bild für die Kategorie ${category.title}`}
              />
              <h3>{category.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WelcomePage;
