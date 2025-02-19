import './index.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import App from './App';
import { AuthProvider } from 'react-oidc-context';

// Import der Pages
import ImpressumPage from './pages/ImpressumPage/ImpressumPage';
import LogInPage from './pages/LogInPage/LogInPage';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import BlogPage from './pages/BlogPage/BlogPage';
import ProtectedRoute from './ProtectedRoute';

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
        <Route path='/loginpage' element={<LogInPage />} />
        {/* 'Protected Route' */}
        <Route element={<ProtectedRoute />}>
          <Route path='/welcomepage' element={<WelcomePage />} />
          <Route path='/blogpage' element={<BlogPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  </BrowserRouter>
);
