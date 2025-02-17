import './BlogPage.css';
import Title from '../../components/Title/Title';
import Navbar from '../../components/Navbar/Navbar';
import BlogList from '../../components/BlogList/BlogList';
import BlogDetails from '../../components/BlogDetails/BlogDetails';

const BlogPage = () => {
  return (
    <div>
      <div className='nav-page'>
        <Navbar />
      </div>

      <Title
        subtitle='Welchen Van sollte ich mir anschauen?'
        title='Die verschiedenen Grundfahrzeuge'
      />

      <div className='blog'>
        <BlogList />
        <BlogDetails />
      </div>
    </div>
  );
};

export default BlogPage;
