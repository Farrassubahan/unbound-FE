// src/components/Header.tsx

import React from 'react';
import { Search, Bell, Zap } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
    const navItems = [
        { label: 'For You', path: '/' },
        { label: 'Trending', path: '/trending' },
        { label: 'Your Topics', path: '/your-topics' },
    ];

    return (
        <header className="sticky top-14 md:top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-sm transition-all duration-300">

            {/* Container */}
            <div className="max-w-6xl mx-auto">

                {/* Row 1: Hide on mobile as MainLayout has one */}
                <div className="hidden md:flex justify-between items-center py-3 px-4">

                    {/* Logo */}
                    <NavLink to="/" className="flex items-center space-x-2 hover:opacity-80 transition">
                        <Zap className="w-6 h-6 text-purple-600" />
                        <span className="text-xl font-bold text-gray-800">
                            Unbound
                        </span>
                    </NavLink>

                    {/* Right Icons */}
                    <div className="flex items-center space-x-4 text-gray-600">

                        <NavLink to="/search" className="hover:text-purple-600 transition p-1.5 hover:bg-purple-50 rounded-xl">
                            <Search className="w-6 h-6 cursor-pointer" />
                        </NavLink>

                        {/* Notification */}
                        <NavLink to="/notifications" className="relative cursor-pointer hover:text-purple-600 transition p-1.5 hover:bg-purple-50 rounded-xl">
                            <Bell className="w-6 h-6" />

                            {/* Notification Dot */}
                            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-purple-500 rounded-full animate-pulse border-2 border-white"></span>
                        </NavLink>

                    </div>
                </div>

                {/* Row 2 Navigation */}
                <nav className="flex space-x-6 overflow-x-auto whitespace-nowrap px-4 py-2 md:py-0 scrollbar-hide">

                    {navItems.map((item) => (
                        <NavLink
                            key={item.label}
                            to={item.path}
                            className={({ isActive }) => `
                                text-sm font-semibold pb-2 md:pb-3 transition 
                                ${isActive
                                    ? 'text-purple-600 border-b-2 border-purple-600'
                                    : 'text-gray-500 hover:text-gray-800'
                                }`
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}

                </nav>

            </div>

        </header>
    );
};

export default Header;