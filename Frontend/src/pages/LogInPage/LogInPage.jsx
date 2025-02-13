import LogIn from '../../components/LogIn/LogIn';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import './LogInPage.css';

const LogInPage = () => {
  return (
    <div>
      <div className='nav-page'>
        <Navbar />
      </div>
      <LogIn />
      <div className='register-btn'>
        <p>Noch kein Account? </p>
        <Link to='/registerpage'>Registriere dich</Link>
      </div>
    </div>
  );
};

export default LogInPage;
