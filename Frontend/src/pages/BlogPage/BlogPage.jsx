import './BlogPage.css';
import { useLocation } from 'react-router-dom';
import Title from '../../components/Title/Title';
import Navbar from '../../components/Navbar/Navbar';
import BlogList from '../../components/BlogList/BlogList';
import BlogDetails from '../../components/BlogDetails/BlogDetails';

const BlogPage = () => {
  const location = useLocation();
  const { title } = location.state || { title: 'Kein Titel verfügbar' }; // Fallback für den Fall, dass kein Titel übergeben wurde
  return (
    <div>
      <div className='nav-page'>
        <Navbar />
      </div>

      <Title title={title} />

      <div className='blog'>
        <BlogList />
        <BlogDetails />
      </div>
    </div>
  );
};

export default BlogPage;
