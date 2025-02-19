import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from 'react-oidc-context';

const ProtectedRoute = () => {
  const auth = useAuth();

  const isLoggedIn = auth.isAuthenticated;

  return isLoggedIn === 'true' ? <Outlet /> : <Navigate to='/' />;
};

export default ProtectedRoute;
