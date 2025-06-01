import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ✅ HashRouter → BrowserRouter로 교체
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/wms_project_frontend/manager/inventory">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
