import React from 'react';
import { Compass, ArrowLeft, Search, Users, Zap, Palette, Book, Music, Coffee, Globe, Heart, MessageSquare, Sparkles } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import MainLayout from '../../../layouts/MainLayout';
import Header from '../../../components/Header';

const discoverTopics = [
    { name: 'Art & Design', icon: Palette, members: '18.5K', discussions: '1.2K', color: 'bg-pink-100', iconColor: 'text-pink-600', description: 'A community for digital artists, designers, and creative minds.' },
    { name: 'Book Club', icon: Book, members: '15.2K', discussions: '840', color: 'bg-indigo-100', iconColor: 'text-indigo-600', description: 'Discuss your favorite books, share reviews, and join reading challenges.' },
    { name: 'Music Lovers', icon: Music, members: '21.8K', discussions: '2.5K', color: 'bg-violet-100', iconColor: 'text-violet-600', description: 'From lo-fi to rock, share your playlists and discover new sounds.' },
    { name: 'Mindfulness', icon: Coffee, members: '12.9K', discussions: '560', color: 'bg-emerald-100', iconColor: 'text-emerald-600', description: 'Practice gratitude, share meditation tips, and find your inner peace.' },
    { name: 'Philosophy', icon: Globe, members: '9.1K', discussions: '420', color: 'bg-amber-100', iconColor: 'text-amber-600', description: 'Deep thoughts about life, existence, and the universe.' },
    { name: 'Tech & Ideas', icon: Zap, members: '11.6K', discussions: '930', color: 'bg-cyan-100', iconColor: 'text-cyan-600', description: 'The latest in technology, AI, and futuristic concepts.' },
    { name: 'Mental Wellness', icon: Heart, members: '24.1K', discussions: '3.1K', color: 'bg-rose-100', iconColor: 'text-rose-600', description: 'Supporting each other through life\'s ups and downs.' },
    { name: 'Photography', icon: Globe, members: '10.5K', discussions: '670', color: 'bg-blue-100', iconColor: 'text-blue-600', description: 'Capture the world through your lens and share your perspective.' },
    { name: 'Travel Stories', icon: Globe, members: '14.8K', discussions: '1.1K', color: 'bg-teal-100', iconColor: 'text-teal-600', description: 'Share your adventures and discover hidden gems around the globe.' },
];

const DiscoverTopicsPage: React.FC = () => {
    return (
        <MainLayout>
            <Header />

            <div className="w-full max-w-full pb-20 px-2 sm:px-0">

                {/* ── BREADCRUMB ── */}
                <div className="mb-6">
                    <NavLink
                        to="/explore"
                        className="mt-6 group inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md 
                            border border-gray-100 rounded-2xl text-sm font-semibold text-gray-500 
                            hover:text-purple-600 hover:bg-white hover:border-purple-100 
                            hover:shadow-sm transition-all duration-300"
                    >
                        <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
                        <span>Back to Explore</span>
                    </NavLink>
                </div>

                {/* ── HEADER SECTION ── */}
                <div className="mb-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 flex items-center gap-3">
                        <div className="p-2 sm:p-3 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl shadow-sm">
                            <Compass size={24} className="text-purple-600" />
                        </div>
                        Discover Topics
                    </h1>
                    <p className="text-gray-500 mt-2 ml-14 sm:ml-20">
                        Join common interest groups and connect with people who share your passion.
                    </p>
                </div>

                {/* ── SEARCH TOPICS ── */}
                <div className="relative mb-8 group">
                    {/* <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-600 transition-colors" /> */}
                    <input
                        type="text"
                        placeholder="Search for a topic or community..."
                        className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200
                            rounded-2xl text-[15px] focus:outline-none focus:ring-2 focus:ring-purple-400/50
                            focus:border-purple-400/50 shadow-sm transition-all outline-none"
                    />
                </div>

                {/* ── TOPICS GRID ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {discoverTopics.map((topic, i) => {
                        const Icon = topic.icon;
                        return (
                            <div
                                key={i}
                                className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm
                                    hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer"
                            >
                                <div className={`w-14 h-14 rounded-2xl ${topic.color} flex items-center justify-center mb-5
                                    group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon size={28} className={topic.iconColor} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-700 transition">
                                    {topic.name}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">
                                    {topic.description}
                                </p>
                                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                                    <div className="flex gap-4">
                                        <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-400">
                                            <Users size={14} className="text-gray-300" />
                                            {topic.members}
                                        </div>
                                        <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-400">
                                            <MessageSquare size={14} className="text-gray-300" />
                                            {topic.discussions}
                                        </div>
                                    </div>
                                    <button className="text-xs font-bold text-purple-600 hover:text-purple-700 transition">
                                        Join Community
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* ── CREATE YOUR OWN ── */}
                <div className="mt-12 p-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl text-center text-white shadow-lg">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 backdrop-blur-sm">
                        <Sparkles size={32} />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Can't find your topic?</h2>
                    <p className="text-purple-100 mb-6 max-w-md mx-auto">
                        Create your own community and start inviting people who share your interests.
                    </p>
                    <button className="px-8 py-3 bg-white text-purple-600 rounded-2xl font-bold hover:bg-gray-50 hover:-translate-y-1 transition-all shadow-md">
                        Start a New Community
                    </button>
                </div>

            </div>
        </MainLayout>
    );
};

export default DiscoverTopicsPage;
