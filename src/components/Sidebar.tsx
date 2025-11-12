import React from 'react';

const Sidebar: React.FC = () => {
    return (
        <aside className="w-64 bg-gray-100 p-4 min-h-screen hidden md:block">
            <ul className="flex flex-col gap-2">
                <li>
                    <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-200">Home</button>
                </li>
                <li>
                    <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-200">Explore</button>
                </li>
                <li>
                    <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-200">Profile</button>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
