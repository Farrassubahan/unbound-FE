// src/components/Header.tsx

import React from 'react';
import { Search, Bell, Zap } from 'lucide-react';

const Header: React.FC = () => {
    const navItems = ['For You', 'Trending', 'Your Topics'];
    const activeItem = 'For You';

    return (
        <header className="sticky top-14 md:top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-sm transition-all duration-300">

            {/* Container */}
            <div className="max-w-6xl mx-auto">

                {/* Row 1: Hide on mobile as MainLayout has one */}
                <div className="hidden md:flex justify-between items-center py-3 px-4">

                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <Zap className="w-6 h-6 text-purple-600" />
                        <span className="text-xl font-bold text-gray-800">
                            Unbound
                        </span>
                    </div>

                    {/* Right Icons */}
                    <div className="flex items-center space-x-4 text-gray-600">

                        <Search className="w-6 h-6 hover:text-purple-600 cursor-pointer transition" />

                        {/* Notification */}
                        <div className="relative cursor-pointer hover:text-purple-600 transition">
                            <Bell className="w-6 h-6" />

                            {/* Notification Dot */}
                            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-purple-500 rounded-full animate-pulse"></span>
                        </div>

                    </div>
                </div>

                {/* Row 2 Navigation */}
                <nav className="flex space-x-6 overflow-x-auto whitespace-nowrap px-4 py-2 md:py-0">

                    {navItems.map((item) => (
                        <a
                            key={item}
                            href="#"
                            className={`text-sm font-semibold pb-2 md:pb-3 transition 
                            ${item === activeItem
                                    ? 'text-purple-600 border-b-2 border-purple-600'
                                    : 'text-gray-500 hover:text-gray-800'
                                }`}
                        >
                            {item}
                        </a>
                    ))}

                </nav>

            </div>

        </header>
    );
};

export default Header;