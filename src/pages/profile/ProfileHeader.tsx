import React from 'react';
import { Sparkles, Settings } from 'lucide-react';
import "../../styles/profile.css";

const ProfileHeader: React.FC = () => {
    return (
        <>
            {/* HEADER PROFILE */}
            <div className="w-full h-64 
                bg-gradient-to-r from-purple-600 to-indigo-300
                rounded-b-3xl flex flex-col items-center justify-center text-white 
                relative z-30 shadow-lg shadow-purple-300/40">

                {/* SETTINGS BUTTON */}
                <button className="absolute top-5 right-5 p-2 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition">
                    <Settings size={20} className="text-white" />
                </button>

                {/* PROFILE ICON */}
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Sparkles className="text-yellow-500" size={45} />
                </div>

                <h1 className="text-2xl font-semibold mt-3">Emma_creates</h1>
                <p className="text-sm text-purple-200">@emma.unbound</p>

                <div className="flex gap-3 mt-3">
                    <div className="profile-badge">Level 12</div>
                    <div className="profile-badge">2,450 XP</div>
                </div>

                <p className="mt-4 w-[65%] text-center text-purple-200 text-sm leading-relaxed">
                    Creative soul sharing stories about mental wellness, art, and
                    self-discovery ✨
                </p>
            </div>

            {/* FLOATING STATS */}
            <div className="w-full flex justify-center relative -mt-3 z-10 overflow-visible">
                <div className="grid grid-cols-3 gap-6 w-full px-6">
                    {[
                        { num: "127", label: "Posts" },
                        { num: "3.2K", label: "Reactions" },
                        { num: "89", label: "Following" },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl p-6 shadow-sm text-center
                                transform transition-all duration-300
                                hover:-translate-y-2 hover:shadow-md
                                cursor-pointer relative
                                z-10 hover:z-40"
                        >
                            <p className="text-2xl font-semibold">{item.num}</p>
                            <p className="text-gray-500 text-sm">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProfileHeader;
