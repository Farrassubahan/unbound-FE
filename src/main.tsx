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
import TrendingPage from './pages/trending';
import YourTopicsPage from './pages/your-topics';
import NotificationsPage from './pages/notifications';
import SettingsPage from './pages/settings';
import SearchPage from './pages/search';
import PostDetailPage from './pages/post';
import UserProfile from './pages/profile/UserProfile';
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
        <Route path="/trending" element={<TrendingPage />} />
        <Route path="/your-topics" element={<YourTopicsPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/post/:id" element={<PostDetailPage />} />
        <Route path="/profile/:username" element={<UserProfile />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/favorite-topics" element={<FavoriteTopicsPage />} />
        <Route path="/profile/activity" element={<ActivityPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
