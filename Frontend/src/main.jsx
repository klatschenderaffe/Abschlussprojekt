import './index.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import App from './App';
import ImpressumPage from './pages/Impressum/ImpressumPage';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/impressumpage' element={<ImpressumPage />} />
    </Routes>
  </BrowserRouter>
);
