import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import './BlogDetails.css';

const BlogDetails = ({ article }) => {
  const { category } = useParams();
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (article) {
      // Lade die Markdown-Datei basierend auf dem Artikelnamen
      fetch(`/BlogPosts/${category}/${article}.md`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Fehler beim Laden des Artikels');
          }
          return response.text(); // Lade den Inhalt der Datei als Text
        })
        .then((data) => setContent(data))
        .catch((error) => {
          console.error(error);
          setError('Fehler beim Laden des Artikels.');
        });
    }
  }, [category, article]);

  return (
    <div>
      {error && <p className='error'>{error}</p>}
      {!error && article && (
        <div className='details-container'>
          <div className='content'>
            <ReactMarkdown>{content}</ReactMarkdown> {/* Render Markdown */}
          </div>
        </div>
      )}
    </div>
  );
};

// Prop-Typen-Validierung
BlogDetails.propTypes = {
  article: PropTypes.string.isRequired,
};

export default BlogDetails;
