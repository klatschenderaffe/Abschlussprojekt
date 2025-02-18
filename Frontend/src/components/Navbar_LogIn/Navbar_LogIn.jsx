import { useEffect, useState } from 'react';
import { useAuth } from 'react-oidc-context';
import '../Navbar/Navbar.css';
import logo from '../../assets/Logo1.png';
import { Link } from 'react-router';
import Menue from '../../assets/menue.png';

const Navbar_LogIn = () => {
  const auth = useAuth();

  // const signOutRedirect = () => {
  //   const clientId = import.meta.env.VITE_CLIENT_ID;
  //   const logoutUri = 'https://van-ventura.eu';
  //   const cognitoDomain = import.meta.env.VITE_USERPOOL_DOMAIN;
  //   console.log(
  //     `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(
  //       logoutUri
  //     )}`
  //   );
  //   window.location.href = `${cognitoDomain}/logout?client_id=${clientId}`;
  // };

  console.log('lala');
  // if (auth.isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (auth.error) {
  //   return <div>Encountering error... {auth.error.message}</div>;
  // }

  // if (auth.isAuthenticated) {
  //   return;
  // }

  //The navbar should only become dark when we start scrolling
  const [sticky, setSticky] = useState(false);
  //If we scroll --> eventlistener on --> start function
  useEffect(() => {
    window.addEventListener('scroll', () => {
      //If you scroll about the value of 50px setSticky to true otherwise false
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  //If mobileMenu is on you can see the navigation on the side. Otherwise is hidden.
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    //if mobileMenu is true then set it to false, else set it to true
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };
  return (
    // if sticky is set show the class 'dark-nav'
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt='' className='logo' />
      {/* If MobileMenu is true nothing change, otherwise hide-mobile-menu */}
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li>
          <Link to='/welcomepage'>Kategorien</Link>
        </li>
        {/* <li>
          <button onClick={() => signOutRedirect()}>LogOut</button>
        </li> */}
        <li>
          <button onClick={() => auth.removeUser()}>Sign out</button>
        </li>
      </ul>
      <img src={Menue} alt='' className='menue-icon' onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar_LogIn;
