import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Publicar from './pages/Publicar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/publicar" element={<Publicar />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
