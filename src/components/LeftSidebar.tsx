import React from "react";
import { Home, Compass, Flame, User, Plus, Settings, LogOut, X } from "lucide-react";

interface Props {
    isMobile?: boolean;
    onClose?: () => void;
}

const LeftSidebar: React.FC<Props> = ({ isMobile, onClose }) => {
    return (
        <aside
            className={`
                flex flex-col w-64 h-screen bg-white border-r p-6 z-50
                transition-transform duration-300
                ${isMobile ? "fixed top-0 left-0 translate-x-0" : "hidden md:flex"}
            `}
        >
            {/* === WRAPPER YANG BISA SCROLL === */}
            <div className="flex-1 overflow-y-auto pr-2">

                {isMobile && (
                    <button
                        onClick={onClose}
                        className="mb-4 p-2 rounded-lg hover:bg-gray-100"
                    >
                        <X size={22} />
                    </button>
                )}

                {/* LOGO */}
                <div className="flex items-center gap-3 mb-10">
                    <div className="w-8 h-8 bg-purple-500 rounded-xl flex items-center justify-center text-white text-lg">
                        ✨
                    </div>
                    <h1 className="text-2xl font-semibold">Unbound</h1>
                </div>

                {/* MENU */}
                <nav className="flex flex-col gap-3 text-[15px]">

                    <button className="
                        flex items-center gap-3 px-4 py-3 rounded-2xl text-white
                        bg-gradient-to-r from-purple-600 to-indigo-500 
                        shadow-lg shadow-purple-300/40
                    ">
                        <Home size={20} color="white" />
                        Home
                    </button>

                    <button className="
                        flex items-center gap-3 px-4 py-3 rounded-2xl 
                        bg-gray-50 hover:bg-gray-100 transition
                        border border-gray-200
                    ">
                        <Compass size={20} />
                        Explore
                    </button>

                    <button className="
                        flex items-center gap-3 px-4 py-3 rounded-2xl 
                        bg-gray-50 hover:bg-gray-100 transition
                        border border-gray-200
                    ">
                        <Flame size={20} />
                        Trending
                    </button>

                    <button className="
                        flex items-center gap-3 px-4 py-3 rounded-2xl 
                        bg-gray-50 hover:bg-gray-100 transition
                        border border-gray-200
                    ">
                        <User size={20} />
                        Profile
                    </button>

                    <button className="flex items-center gap-3 mt-2 neon-lime-btn">
                        <Plus size={20} />
                        New Post
                    </button>
                </nav>

                <div className="my-8 border-t" />

                <div>
                    <h2 className="text-xs font-semibold uppercase text-gray-500 tracking-wide mb-3">
                        Your Topics
                    </h2>

                    <ul className="flex flex-col gap-4 text-[15px]">
                        <li className="flex items-center gap-3"><span>🧠</span> Mental Wellness</li>
                        <li className="flex items-center gap-3"><span>🎨</span> Creative Corner</li>
                        <li className="flex items-center gap-3"><span>💬</span> Life Stories</li>
                        <li className="flex items-center gap-3"><span>✨</span> Self Discovery</li>
                        <li className="flex items-center gap-3"><span>💗</span> Relationships</li>
                    </ul>
                </div>
            </div>

            {/* FOOTER (TIDAK IKUT SCROLL) */}
            <div className="flex flex-col gap-4 text-[15px] pt-4 border-t">
                <button className="flex items-center gap-3 text-gray-700 hover:text-gray-900">
                    <Settings size={20} />
                    Settings
                </button>

                <button className="flex items-center gap-3 text-gray-700 hover:text-gray-900">
                    <LogOut size={20} />
                    Logout
                </button>
            </div>
        </aside>
    );
};

export default LeftSidebar;
