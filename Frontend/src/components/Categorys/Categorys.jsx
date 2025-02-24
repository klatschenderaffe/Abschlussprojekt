import './Categorys.css';
import { Link } from 'react-router-dom';

import Category_json from '../../../public/categories.json';

const WelcomePage = () => {
  // Kategorien mit zugehörigen Bildern definieren
  const categories = Category_json;

  return (
    <div>
      <div className='category-container'>
        {categories.map((category) => (
          <div key={category.name} className='category-item'>
            <Link className='link' to={`/blog/${category.name}`}>
              {/* Dynamisches Bild basierend auf der Kategorie */}
              <img
                src={`../../assets/${category.image}`} // Sicherstellen, dass der Pfad korrekt ist
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
