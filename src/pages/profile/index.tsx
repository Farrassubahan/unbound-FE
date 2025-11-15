import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { Sparkles, MessageSquare, Share2, Settings } from 'lucide-react';

const ProfilePage: React.FC = () => {
    return (
        <MainLayout>
            <div className="w-full flex flex-col items-center pb-20 bg-[#f2f3f7]">

                {/* HEADER PROFILE */}
                <div className="w-full h-64 bg-gradient-to-b from-purple-500 to-purple-600 
                    rounded-b-3xl flex flex-col items-center justify-center text-white 
                    relative z-30">

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
                        <div className="bg-white/20 px-4 py-1 rounded-full text-sm">Level 12</div>
                        <div className="bg-white/20 px-4 py-1 rounded-full text-sm">2,450 XP</div>
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

                {/* ACHIEVEMENTS */}
                <div className="w-full bg-white mt-10 p-5 px-10 rounded-3xl shadow-sm">

                    <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
                        🏅 Achievements
                    </h2>

                    <div className="flex flex-wrap gap-4">

                        <span className="neon-badge px-6 py-2 mr-1 mr-2 rounded-full bg-[#e8feca] text-[#82b022] text-base font-semibold">
                            🌞 Early Explorer
                        </span>

                        <span className="badge-storyteller px-6 py-2 mr-1 rounded-full bg-[#e5e9ff] text-[#3142c9] text-base font-semibold">
                            📘 Storyteller
                        </span>

                        <span className="badge-supportive px-6 py-2 mr-1 rounded-full bg-[#e1f2ff] text-[#2563eb] text-base font-semibold">
                            💙 Supportive
                        </span>

                        <span className="badge-creative px-6 py-2 mr-1 rounded-full bg-[#ffe2fa] text-[#b83392] text-base font-semibold">
                            🎨 Creative Soul
                        </span>
                        <span className="badge-creative px-6 py-2 mr-1 rounded-full bg-[#ffe2fa] text-[#b83392] text-base font-semibold">
                            🎨 Creative Soul
                        </span>

                    </div>


                </div>

                {/* POSTS SECTION */}
                <div className="w-[90%] max-w-[800px] mt-8">

                    {/* TABS */}
                    <div className="flex gap-8 border-b pb-2 text-sm">
                        <button className="font-semibold border-b-2 border-purple-600 pb-1">
                            Posts
                        </button>
                        <button className="text-gray-500">Favorite Topics</button>
                        <button className="text-gray-500">Activity</button>
                    </div>

                    {/* POST CARD */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm mt-4 transition-all duration-300">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-purple-200 flex items-center justify-center">
                                <Sparkles className="text-purple-600" />
                            </div>
                            <div>
                                <p className="font-semibold text-sm">Emma_creates</p>
                                <p className="text-xs text-gray-500">Mental Wellness • 2h ago</p>
                            </div>
                        </div>

                        <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                            Today I realized that sometimes we're too hard on ourselves.
                            What we really need is rest, not constant high expectations.
                            Self-compassion is everything ✨
                        </p>

                        <div className="flex justify-between items-center mt-4 text-gray-600 text-sm">
                            <span>🔥🥰🤯 44</span>

                            <div className="flex gap-6">
                                <div className="flex items-center gap-1">
                                    <MessageSquare size={16} /> 15
                                </div>
                                <Share2 size={18} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default ProfilePage;
