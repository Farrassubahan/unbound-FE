// src/components/Header.tsx

import React from 'react';
import { Search, Bell, Zap } from 'lucide-react';

const Header: React.FC = () => {
    const navItems = ['For You', 'Trending', 'Your Topics'];
    const activeItem = 'For You';

    return (
        // Wrapper utama Header dengan sticky dan border bawah
        <div className="sticky top-0 bg-white z-10 border-b border-gray-200">
            {/* Baris 1: Logo dan Ikon Kanan (Search & Notification) */}
            <div className="flex justify-between items-center py-3 px-4 sm:px-0">
                {/* Logo Unbound */}
                <div className="flex items-center space-x-1">
                    <Zap className="w-6 h-6 text-purple-600" />
                    <span className="text-xl font-bold text-gray-800">Unbound</span>
                </div>

                <div className="flex space-x-4 text-gray-600">
                    <Search className="w-6 h-6 hover:text-purple-600 cursor-pointer" />

                    {/* Bungkus Ikon Bell dan Titik Notifikasi dalam satu DIV RELATIF */}
                    <div className="relative cursor-pointer hover:text-purple-600">
                        {/* 1. Ikon Bell */}
                        <Bell className="w-6 h-6" />

                        {/* 2. Titik Notifikasi Neon (span dengan posisi absolute) */}
                        <span className="neon-notification-dot"></span>
                    </div>
                </div>

            </div>

            {/* Baris 2: Navigasi (For You, Trending, Topics) - Scrollable untuk Mobile */}
            <div className="flex space-x-4 overflow-x-auto whitespace-nowrap px-4 sm:px-0 pb-1">
                {navItems.map((item) => (
                    <a
                        key={item}
                        href="#"
                        className={`text-sm font-semibold pb-3 transition duration-150 ${item === activeItem
                            ? 'text-purple-600 border-b-2 border-purple-600'
                            : 'text-gray-500 hover:text-gray-800'
                            }`}
                    >
                        {item}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Header;