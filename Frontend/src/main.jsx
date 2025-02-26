import './index.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import App from './App';
import { AuthProvider } from 'react-oidc-context';

// Import der Pages
import ImpressumPage from './pages/ImpressumPage/ImpressumPage';

import WelcomePage from './pages/WelcomePage/WelcomePage';
import BlogPage from './pages/BlogPage/BlogPage';
// import BlogDetails from './components/BlogDetails/BlogDetails';
// import ProtectedRoute from './ProtectedRoute';

const cognitoAuthConfig = {
  authority: import.meta.env.VITE_AUTHORITY,
  client_id: import.meta.env.VITE_CLIENT_ID,
  redirect_uri: import.meta.env.VITE_REDIRECT_URI,
  response_type: 'code',
  scope: 'phone openid email',
};
console.log(cognitoAuthConfig);

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <AuthProvider {...cognitoAuthConfig}>
      <Routes>
        {/* Home Route */}
        <Route path='/' element={<App />} />
        <Route path='/impressumpage' element={<ImpressumPage />} />

        {/* 'Protected Route' */}
        {/* <Route element={<ProtectedRoute />}> */}
        <Route path='/welcomepage' element={<WelcomePage />} />
        <Route path='/blog/:category' element={<BlogPage />} />
        <Route path='/blog/:category/:article' element={<BlogPage />} />

        {/* </Route> */}
      </Routes>
    </AuthProvider>
  </BrowserRouter>
);
