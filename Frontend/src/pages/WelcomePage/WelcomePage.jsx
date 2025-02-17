import Categorys from '../../components/Categorys/Categorys';
import Navbar_LogIn from '../../components/Navbar_LogIn/Navbar_LogIn';
import Title from '../../components/Title/Title';

const WelcomePage = () => {
  return (
    <div>
      <div className='nav-page'>
        <Navbar_LogIn />
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
