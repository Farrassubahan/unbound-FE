import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import ProfilePage from './pages/profile'; // ← tambahkan ini
import './index.css';
import "./styles/neon.css";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} /> {/* ← route baru */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
