import './LogIn.css';

import { useAuth } from 'react-oidc-context';

const LogIn = () => {
  const auth = useAuth();

  // const signOutRedirect = () => {
  //   const clientId = import.meta.env.VITE_CLIENT_ID;
  //   const logoutUri = 'https://van-ventura.eu/';
  //   const cognitoDomain = import.meta.env.VITE_USERPOOL_DOMAIN;
  //   console.log(
  //     `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(
  //       logoutUri
  //     )}`
  //   );
  //   window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(
  //     logoutUri
  //   )}`;
  // };

  console.log('lala');
  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {
    return (
      <div>
        <h1> Hello: {auth.user?.profile.preferred_username} </h1>
        {/* <pre> ID Token: {auth.user?.id_token} </pre>
        <pre> Access Token: {auth.user?.access_token} </pre>
        <pre> Refresh Token: {auth.user?.refresh_token} </pre> */}

        <button onClick={() => auth.removeUser()}>Sign out</button>
      </div>
    );
  }

  return (
    <div className='login-container'>
      <div className='acc-btn'>
        <h1>
          Hast du bereits einen Account? Oder möchtest du dir einen anlegen?
        </h1>
        <button onClick={() => auth.signinRedirect()}>Anmelden</button>
      </div>
      <button onClick={() => auth.removeUser()}>Sign out</button>
      {/* <button onClick={() => signOutRedirect()}>LogOut</button> */}
    </div>
  );
};

export default LogIn;
