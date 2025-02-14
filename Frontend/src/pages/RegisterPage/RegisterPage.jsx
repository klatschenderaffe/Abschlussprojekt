import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

const RegisterPage = () => {
  return (
    <div>
      {' '}
      <div>
        <div className='nav-page'>
          <Navbar />
        </div>
        {/* Register Form */}
        <RegisterForm />
        <div className='register-btn'>
          <p>Du hast schon einen Account? </p>
          <Link to='/loginpage'>Logge dich ein</Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
