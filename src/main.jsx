// index.js or index.jsx

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { AuthProvider } from './contexts/AuthContext.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './i18n'; 
const container = document.getElementById('root');

if (!container) {
  throw new Error('Root container missing in index.html');
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
      <AuthProvider>
        <Router>
          <App />
        </Router>
      </AuthProvider>
  </React.StrictMode>
);
