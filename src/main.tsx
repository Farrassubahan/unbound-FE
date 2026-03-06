import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import ProfilePage from './pages/profile';
import FavoriteTopicsPage from './pages/profile/FavoriteTopicsPage';
import ActivityPage from './pages/profile/ActivityPage';
import ExplorePage from './pages/explore';
import TrendingHashtagsPage from './pages/explore/trending';
import DiscoverTopicsPage from './pages/explore/topics';
import './index.css';
import "./styles/neon.css";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/explore/trending" element={<TrendingHashtagsPage />} />
        <Route path="/explore/topics" element={<DiscoverTopicsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/favorite-topics" element={<FavoriteTopicsPage />} />
        <Route path="/profile/activity" element={<ActivityPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
