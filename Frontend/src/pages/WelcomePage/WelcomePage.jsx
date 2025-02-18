import Categorys from '../../components/Categorys/Categorys';
import Navbar from '../../components/Navbar/Navbar';
import Title from '../../components/Title/Title';

const WelcomePage = () => {
  return (
    <div>
      <div className='nav-page'>
        <Navbar />
      </div>
      <Title
        subtitle='Hier dreht sich alles um deinen neuen Lieblingsort'
        title='Herzlich Willkommen'
      />
      <Categorys />
    </div>
  );
};

export default WelcomePage;
