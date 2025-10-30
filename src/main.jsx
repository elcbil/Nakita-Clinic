import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';  // Mengimpor BrowserRouter dari React Router
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router> {/* Membungkus komponen App dengan Router */}
      <App />
    </Router>
  </StrictMode>
);
