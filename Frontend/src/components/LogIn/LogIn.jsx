import './LogIn.css';

import { useAuth } from 'react-oidc-context';

const LogIn = () => {
  const auth = useAuth();

  const signOutRedirect = () => {
    const clientId = import.meta.env.VITE_CLIENT_ID;
    const logoutUri = 'https://van-ventura.eu';
    const cognitoDomain = import.meta.env.VITE_USERPOOL_DOMAIN;
    console.log(
      `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(
        logoutUri
      )}`
    );
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(
      logoutUri
    )}`;
  };

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {
    return (
      <div>
        <pre> Hello: {auth.user?.profile.email} </pre>
        <pre> ID Token: {auth.user?.id_token} </pre>
        <pre> Access Token: {auth.user?.access_token} </pre>
        <pre> Refresh Token: {auth.user?.refresh_token} </pre>

        <button onClick={() => auth.removeUser()}>Sign out</button>
      </div>
    );
  }

  return (
    <div className='login-container'>
      <div className='acc-btn'>
        <h1>Hast du bereits einen Account?</h1>
        <button onClick={() => auth.signinRedirect()}>Anmelden</button>
      </div>
      <div className='acc-btn'>
        <h1>Möchtest du dir einen Account erstellen?</h1>
        <button onClick={() => signOutRedirect()}>Registrieren</button>
      </div>
    </div>
  );
};

export default LogIn;
