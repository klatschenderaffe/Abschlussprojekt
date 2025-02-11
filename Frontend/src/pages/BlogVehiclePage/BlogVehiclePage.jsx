import Title from '../../components/Title/Title';
import Navbar_LogIn from '../../components/Navbar_LogIn/Navbar_LogIn';
import BlogOverview from '../../components/BlogOverview/BlogOverview';

const BlogVehiclePage = () => {
  return (
    <div>
      <div className='nav-page'>
        <Navbar_LogIn />
      </div>

      <Title
        subtitle='Welchen Van sollte ich mir anschauen?'
        title='Die verschiedenen Grundfahrzeuge'
      />

      <BlogOverview />
    </div>
  );
};

export default BlogVehiclePage;
