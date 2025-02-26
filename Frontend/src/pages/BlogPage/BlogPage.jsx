import './BlogPage.css';
import { useState } from 'react';
import BlogList from '../../components/BlogList/BlogList';
import BlogDetails from '../../components/BlogDetails/BlogDetails';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Title from '../../components/Title/Title';

const BlogPage = () => {
  const [selectedArticle, setSelectedArticle] = useState(null); // Track selected article
  const { category } = useParams();
  const formatTitle = (title) => {
    return title.replace(/_/g, ' '); // Ersetzt alle Unterstriche durch Leerzeichen
  };

  const formattedCategory = formatTitle(category);

  return (
    <div>
      <div className='nav-page'>
        <Navbar />
      </div>
      <Title subtitle='Kategorie' title={formattedCategory} />
      <div className='blog'>
        {/* Left: Blog List */}
        <div className='blog-category'>
          <BlogList
            onSelectArticle={(article) => setSelectedArticle(article)}
          />
        </div>

        {/* Right: Blog Details */}
        <div className='blog-details'>
          {selectedArticle ? (
            <BlogDetails article={selectedArticle} />
          ) : (
            <div className='details-container'>
              <p>Bitte wähle einen Artikel aus der Liste aus.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
