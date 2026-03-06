import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import ProfileHeader from './ProfileHeader';
import ProfileTabs from '../profile/ProfileTabs';
import { Palette, Book, Music, Coffee, Heart, Sparkles, Flame, Globe } from 'lucide-react';
import "../../styles/profile.css";

const topics = [
    {
        name: "Mental Wellness",
        emoji: "🧠",
        members: "45.2K",
        description: "A space for sharing thoughts on mental health, self-care routines, and emotional growth.",
        color: "from-purple-500 to-indigo-400",
        bgLight: "bg-purple-50",
        icon: Sparkles,
        posts: 34,
    },
    {
        name: "Creative Corner",
        emoji: "🎨",
        members: "32.8K",
        description: "Share your art, music, writing, and all forms of creative expression.",
        color: "from-pink-500 to-rose-400",
        bgLight: "bg-pink-50",
        icon: Palette,
        posts: 21,
    },
    {
        name: "Life Stories",
        emoji: "💬",
        members: "28.1K",
        description: "Real stories from real people. Share your journey, listen to others.",
        color: "from-amber-500 to-orange-400",
        bgLight: "bg-amber-50",
        icon: Book,
        posts: 18,
    },
    {
        name: "Self Discovery",
        emoji: "✨",
        members: "22.5K",
        description: "Exploring who you truly are, your values, passions, and purpose.",
        color: "from-cyan-500 to-teal-400",
        bgLight: "bg-cyan-50",
        icon: Globe,
        posts: 15,
    },
    {
        name: "Music & Vibes",
        emoji: "🎵",
        members: "19.7K",
        description: "Share playlists, new discoveries, and the songs that heal your soul.",
        color: "from-violet-500 to-purple-400",
        bgLight: "bg-violet-50",
        icon: Music,
        posts: 12,
    },
    {
        name: "Relationships",
        emoji: "💗",
        members: "38.4K",
        description: "Navigate love, friendships, family dynamics, and everything in between.",
        color: "from-rose-500 to-pink-400",
        bgLight: "bg-rose-50",
        icon: Heart,
        posts: 27,
    },
    {
        name: "Mindful Living",
        emoji: "🍃",
        members: "15.3K",
        description: "Slow down, breathe, and find beauty in everyday moments.",
        color: "from-emerald-500 to-green-400",
        bgLight: "bg-emerald-50",
        icon: Coffee,
        posts: 9,
    },
    {
        name: "Trending Now",
        emoji: "🔥",
        members: "52.1K",
        description: "Hot topics and viral conversations happening right now on Unbound.",
        color: "from-orange-500 to-red-400",
        bgLight: "bg-orange-50",
        icon: Flame,
        posts: 42,
    },
];

const FavoriteTopicsPage: React.FC = () => {
    return (
        <MainLayout>
            <div className="w-full flex flex-col items-center pb-20 bg-[#f2f3f7]">

                <ProfileHeader />

                {/* CONTENT SECTION */}
                <div className="w-full max-w-[800px] mt-10 px-4">

                    <ProfileTabs activeTab="topics" />

                    {/* TOPICS GRID */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6">
                        {topics.map((topic, i) => {
                            const Icon = topic.icon;
                            return (
                                <div
                                    key={i}
                                    className="group bg-white rounded-2xl shadow-sm overflow-hidden
                                        transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                                >
                                    {/* Gradient top strip */}
                                    <div className={`h-2 bg-gradient-to-r ${topic.color}`} />

                                    <div className="p-5">
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className={`p-3 rounded-xl ${topic.bgLight}
                                                    group-hover:scale-110 transition-transform duration-300`}>
                                                    <Icon size={22} className="text-purple-600" />
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-base flex items-center gap-2">
                                                        <span>{topic.emoji}</span>
                                                        {topic.name}
                                                    </h3>
                                                    <p className="text-xs text-gray-400 mt-0.5">
                                                        {topic.members} members
                                                    </p>
                                                </div>
                                            </div>

                                            <span className="neon-badge text-[11px]">
                                                {topic.posts} posts
                                            </span>
                                        </div>

                                        <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                                            {topic.description}
                                        </p>

                                        <div className="flex items-center gap-2 mt-4">
                                            <button className="flex-1 text-sm font-semibold py-2 rounded-xl
                                                bg-gradient-to-r from-purple-600 to-indigo-500 text-white
                                                hover:opacity-90 transition shadow-md shadow-purple-200/50">
                                                View Topic
                                            </button>
                                            <button className="p-2 rounded-xl border border-gray-200
                                                hover:bg-gray-50 transition">
                                                <Heart size={16} className="text-gray-400" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default FavoriteTopicsPage;
