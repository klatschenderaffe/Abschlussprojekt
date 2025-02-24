import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import './BlogList.css';

const BlogList = ({ onSelectArticle }) => {
  const { category } = useParams(); // Hole die Kategorie aus der URL
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Lade die Liste der Dateien aus der JSON-Datei in der Kategorie
    fetch(`/BlogPosts/${category}/files.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Fehler beim Laden der Dateien');
        }
        return response.json(); // Erwartet eine JSON-Liste von Dateinamen
      })
      .then((data) => setFiles(data))
      .catch((error) => {
        console.error(error);
        setError('Fehler beim Laden der Artikel.');
      });
  }, [category]);

  return (
    <div>
      {error && <p className='error'>{error}</p>}
      <ul className='list-container'>
        {files.map((filename, index) => {
          // Entferne die .md-Endung aus dem Dateinamen
          const cleanFilename = filename.replace('.md', '');

          return (
            <li key={index}>
              {/* Benachrichtige den Elternkomponenten bei Auswahl eines Artikels */}
              <button
                className='list-item'
                onClick={() => onSelectArticle(cleanFilename)}
              >
                <h3>{cleanFilename}</h3>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// Prop-Typen-Validierung
BlogList.propTypes = {
  onSelectArticle: PropTypes.func.isRequired, // Muss eine Funktion sein und ist erforderlich
};

export default BlogList;
