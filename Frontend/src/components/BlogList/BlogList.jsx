import './BlogList.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const BlogList = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    // Fetch the list of files from the public directory
    fetch('/BlogPosts/Boden_verlegen/files.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Fehler beim Laden der Dateien');
        }
        return response.json(); // Erwartet eine JSON-Liste von Dateien
      })
      .then((data) => setFiles(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <div className='list-container'>
        <ul>
          {files.map((filename, index) => {
            // Entferne die .md-Endung aus dem Dateinamen
            const cleanFilename = filename.replace('.md', '');

            return (
              <li key={index}>
                <div className='list-item'>
                  {/* Verwende den bereinigten Dateinamen im Link */}
                  <Link to={`/${cleanFilename}`}>
                    <h3>{cleanFilename}</h3>{' '}
                    {/* Zeige den bereinigten Namen an */}
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default BlogList;
