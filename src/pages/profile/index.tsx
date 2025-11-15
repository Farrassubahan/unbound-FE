import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { Sparkles, MessageSquare, Share2} from 'lucide-react';

const ProfilePage: React.FC = () => {
    return (
        <MainLayout>
            <div className="w-full flex flex-col items-center pb-10">
                {/* HEADER PROFILE */}
                <div className="w-full h-60 bg-gradient-to-b from-purple-500 to-purple-600 rounded-b-3xl flex flex-col items-center justify-center text-white relative">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <Sparkles className="text-yellow-500" size={40} />
                    </div>
                    <h1 className="text-2xl font-semibold mt-3">Emma_creates</h1>
                    <p className="text-sm text-purple-200">@emma.unbound</p>

                    <div className="flex gap-3 mt-3">
                        <div className="bg-white/20 px-4 py-1 rounded-full text-sm">Level 12</div>
                        <div className="bg-white/20 px-4 py-1 rounded-full text-sm">2,450 XP</div>
                    </div>

                    <p className="mt-4 w-[70%] text-center text-purple-200 text-sm">
                        Creative soul sharing stories about mental wellness, art, and self-discovery ✨
                    </p>
                </div>

                {/* STATS */}
                <div className="grid grid-cols-3 gap-4 w-[90%] mt-5">
                    <div className="bg-white rounded-2xl p-4 shadow text-center">
                        <p className="text-xl font-semibold">127</p>
                        <p className="text-gray-500 text-sm">Posts</p>
                    </div>
                    <div className="bg-white rounded-2xl p-4 shadow text-center">
                        <p className="text-xl font-semibold">3.2K</p>
                        <p className="text-gray-500 text-sm">Reactions</p>
                    </div>
                    <div className="bg-white rounded-2xl p-4 shadow text-center">
                        <p className="text-xl font-semibold">89</p>
                        <p className="text-gray-500 text-sm">Following</p>
                    </div>
                </div>

                {/* ACHIEVEMENTS */}
                <div className="w-[90%] bg-white mt-6 p-5 rounded-2xl shadow">
                    <h2 className="font-semibold text-lg mb-3">Achievements</h2>
                    <div className="flex flex-wrap gap-3">
                        <span className="px-4 py-1 rounded-full bg-yellow-300 text-sm">🌞 Early Explorer</span>
                        <span className="px-4 py-1 rounded-full bg-purple-500 text-white text-sm flex items-center gap-1">📘 Storyteller</span>
                        <span className="px-4 py-1 rounded-full bg-blue-400 text-white text-sm">💙 Supportive</span>
                        <span className="px-4 py-1 rounded-full bg-pink-400 text-white text-sm">🎨 Creative Soul</span>
                    </div>
                </div>

                {/* POSTS */}
                <div className="w-[90%] mt-6">
                    <div className="flex gap-6 border-b pb-2">
                        <button className="font-semibold border-b-2 border-purple-600 pb-1">Posts</button>
                        <button className="text-gray-500">Favorite Topics</button>
                        <button className="text-gray-500">Activity</button>
                    </div>

                    <div className="bg-white p-5 rounded-2xl shadow mt-4">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-purple-200 flex items-center justify-center">
                                <Sparkles className="text-purple-600" />
                            </div>
                            <div>
                                <p className="font-semibold">Emma_creates</p>
                                <p className="text-xs text-gray-500">Mental Wellness • 2h ago</p>
                            </div>
                        </div>

                        <p className="mt-3 text-gray-700 text-sm">
                            Today I realized that sometimes we're too hard on ourselves. What we really need is rest, not constant high expectations.
                            Self-compassion is everything ✨
                        </p>

                        <div className="flex justify-between items-center mt-4 text-gray-600 text-sm">
                            <div className="flex gap-3">
                                <span>🔥🥰🤯 44</span>
                            </div>
                            <div className="flex gap-6">
                                <div className="flex items-center gap-1"><MessageSquare size={16} /> 15</div>
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
