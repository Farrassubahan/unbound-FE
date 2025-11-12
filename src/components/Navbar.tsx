import React from 'react';
import Avatar from './Avatar';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-white shadow p-4 flex justify-between items-center">
            <div className="text-xl font-bold">Unbound</div>
            <div className="flex items-center gap-4">
                <button className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200">Home</button>
                <button className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200">Explore</button>
                <Avatar />
            </div>
        </nav>
    );
};

export default Navbar;
