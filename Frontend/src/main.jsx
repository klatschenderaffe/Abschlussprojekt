import './index.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import App from './App';
import ImpressumPage from './pages/ImpressumPage/ImpressumPage';
import LogInPage from './pages/LogInPage/LogInPage';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import BlogVehiclePage from './pages/BlogVehiclePage/BlogVehiclePage';
import ProtectedRoute from './ProtectedRoute';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      # Home Route
      <Route path='/' element={<App />} />
      <Route path='/impressumpage' element={<ImpressumPage />} />
      <Route path='/loginpage' element={<LogInPage />} />
      {/* 'Protected Route' */}
      <Route element={<ProtectedRoute />}>
        <Route path='/welcomepage' element={<WelcomePage />} />
        <Route path='/vehiclepage' element={<BlogVehiclePage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
