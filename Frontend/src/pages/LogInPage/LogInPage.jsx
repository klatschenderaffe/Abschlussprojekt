import LogIn from '../../components/LogIn/LogIn';
import Navbar from '../../components/Navbar/Navbar';
import './LogInPage.css';

const LogInPage = () => {
  return (
    <div>
      <div className='nav-page'>
        <Navbar />
      </div>

      <LogIn />
    </div>
  );
};

export default LogInPage;
