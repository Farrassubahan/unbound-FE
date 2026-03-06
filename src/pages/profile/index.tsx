import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { Sparkles, MessageSquare, Share2 } from 'lucide-react';
import ProfileHeader from './ProfileHeader';
import ProfileTabs from './ProfileTabs';
import "../../styles/profile.css";


const ProfilePage: React.FC = () => {
    return (
        <MainLayout>
            <div className="w-full flex flex-col items-center pb-20 bg-[#f2f3f7]">

                <ProfileHeader />

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
                <div className="w-full max-w-[800px] mt-8 px-4">

                    {/* TABS */}
                    <ProfileTabs activeTab="posts" />

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

