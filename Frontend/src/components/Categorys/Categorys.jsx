import './Categorys.css';
import { Link } from 'react-router';
import Rostversiegelung from '../../assets/Rostversiegelung.png';
import Dämmung from '../../assets/Dämmung.png';

const Categorys = () => {
  return (
    <div className='category-container'>
      <div className='category-item'>
        <Link className='link' to='/'>
          <img src={Rostversiegelung} alt='' />
          <h3>Rostversiegelung</h3>
        </Link>
      </div>
      <div className='category-item'>
        <Link className='link' to='/'>
          <img src={Dämmung} alt='' />
          <h3>Dämmung</h3>
        </Link>
      </div>
    </div>
  );
};

export default Categorys;
