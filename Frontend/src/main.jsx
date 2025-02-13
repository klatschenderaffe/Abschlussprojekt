import './index.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import App from './App';
import ImpressumPage from './pages/ImpressumPage/ImpressumPage';
import LogInPage from './pages/LogInPage/LogInPage';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import BlogPage from './pages/BlogPage/BlogPage';
import ProtectedRoute from './ProtectedRoute';
import RegisterPage from './pages/RegisterPage/RegisterPage';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      # Home Route
      <Route path='/' element={<App />} />
      <Route path='/impressumpage' element={<ImpressumPage />} />
      <Route path='/loginpage' element={<LogInPage />} />
      <Route path='/registerpage' element={<RegisterPage />} />
      {/* 'Protected Route' */}
      <Route element={<ProtectedRoute />}>
        <Route path='/welcomepage' element={<WelcomePage />} />
        <Route path='/blogpage' element={<BlogPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
