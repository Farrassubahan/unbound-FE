import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import Header from '../../components/Header';
import {
    Book, Palette, Music, Coffee,
    MessageSquare, Users, Star,
    Bell, Settings, Filter, ArrowUpRight,
    Heart
} from 'lucide-react';

/* ─── My Followed Topics ─── */
const myTopics = [
    { name: 'Art & Design', icon: Palette, members: '18.5K', newPosts: 12, color: 'bg-pink-100', iconColor: 'text-pink-600' },
    { name: 'Book Club', icon: Book, members: '15.2K', newPosts: 5, color: 'bg-indigo-100', iconColor: 'text-indigo-600' },
    { name: 'Music Lovers', icon: Music, members: '21.8K', newPosts: 24, color: 'bg-violet-100', iconColor: 'text-violet-600' },
    { name: 'Mindfulness', icon: Coffee, members: '12.9K', newPosts: 3, color: 'bg-emerald-100', iconColor: 'text-emerald-600' },
];

/* ─── Recommended for your topics ─── */
const recommendedPosts = [
    {
        id: 1,
        topic: 'Art & Design',
        username: 'Maya_Art',
        content: 'Just finished this digital piece inspired by the theme of "Harmony". What do you guys think? 🎨✨',
        likes: 124,
        comments: 18,
    },
    {
        id: 2,
        topic: 'Book Club',
        username: 'Reader_Joe',
        content: 'Has anyone read "The Midnight Library"? I just finished it and I have so many thoughts. Let\'s discuss! 📚🤔',
        likes: 89,
        comments: 32,
    },
];

const YourTopicsPage: React.FC = () => {
    return (
        <MainLayout>
            <Header />

            <div className="w-full max-w-full pb-20 px-4 sm:px-0">

                {/* ── HEADER SECTION ── */}
                <div className="mb-8 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                            <div className="p-3 bg-indigo-100 rounded-2xl shadow-sm">
                                <Star size={28} className="text-indigo-600" />
                            </div>
                            Your Topics
                        </h1>
                        <p className="text-gray-500 mt-2 ml-1">
                            A personalized feed based on the communities you love.
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="p-3 bg-white border border-gray-100 rounded-2xl text-gray-400 hover:text-purple-600 hover:shadow-sm transition">
                            <Bell size={20} />
                        </button>
                        <button className="p-3 bg-white border border-gray-100 rounded-2xl text-gray-400 hover:text-purple-600 hover:shadow-sm transition">
                            <Settings size={20} />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* ── LEFT: MY TOPICS LIST ── */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="font-bold text-gray-800 flex items-center gap-2">
                                    <Users size={18} className="text-purple-600" />
                                    Followed (4)
                                </h3>
                                <button className="text-xs font-bold text-purple-600 hover:underline">Manage</button>
                            </div>

                            <div className="space-y-3">
                                {myTopics.map((topic, i) => {
                                    const Icon = topic.icon;
                                    return (
                                        <div key={i} className="group flex items-center gap-3 p-3 hover:bg-gray-50 rounded-2xl transition cursor-pointer border border-transparent hover:border-gray-100">
                                            <div className={`p-2.5 rounded-xl ${topic.color} group-hover:scale-105 transition-transform duration-300`}>
                                                <Icon size={20} className={topic.iconColor} />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-bold text-gray-800 truncate">{topic.name}</p>
                                                <p className="text-[11px] text-gray-400">{topic.members} members</p>
                                            </div>
                                            {topic.newPosts > 0 && (
                                                <span className="px-2 py-0.5 bg-purple-600 text-white text-[10px] font-bold rounded-full shadow-lg shadow-purple-200">
                                                    +{topic.newPosts}
                                                </span>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>

                            <button className="w-full mt-6 py-3 border-2 border-dashed border-gray-100 text-gray-400 hover:border-purple-200 hover:text-purple-500 rounded-2xl text-sm font-bold transition flex items-center justify-center gap-2">
                                <span>Discover More</span>
                            </button>
                        </div>
                    </div>

                    {/* ── RIGHT: TOPIC FEED ── */}
                    <div className="lg:col-span-8 space-y-6">
                        <div className="flex items-center justify-between mb-2">
                            <h2 className="font-bold text-xl flex items-center gap-2">
                                <Filter size={20} className="text-purple-600" />
                                Latest from your feed
                            </h2>
                            <div className="flex gap-2">
                                <button className="px-4 py-1.5 bg-white border border-gray-100 rounded-xl text-xs font-bold text-gray-500 hover:bg-gray-50 transition">Recent</button>
                                <button className="px-4 py-1.5 bg-purple-50 border border-purple-100 rounded-xl text-xs font-bold text-purple-600">Popular</button>
                            </div>
                        </div>

                        {recommendedPosts.map((post) => (
                            <div key={post.id} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-sm">👤</div>
                                        <p className="text-sm font-bold text-gray-800">{post.username}</p>
                                        <span className="text-[10px] text-gray-400">• in {post.topic}</span>
                                    </div>
                                    <ArrowUpRight size={16} className="text-gray-300 group-hover:text-purple-500 transition" />
                                </div>
                                <p className="text-gray-700 font-medium leading-relaxed mb-6">
                                    {post.content}
                                </p>
                                <div className="flex items-center gap-6 pt-4 border-t border-gray-50">
                                    <button className="flex items-center gap-2 text-gray-400 hover:text-rose-500 transition">
                                        <Heart size={18} />
                                        <span className="text-xs font-bold">{post.likes}</span>
                                    </button>
                                    <button className="flex items-center gap-2 text-gray-400 hover:text-purple-600 transition">
                                        <MessageSquare size={18} />
                                        <span className="text-xs font-bold">{post.comments}</span>
                                    </button>
                                </div>
                            </div>
                        ))}

                        <div className="p-8 bg-gray-50 rounded-3xl text-center border-2 border-dashed border-gray-200">
                            <p className="text-gray-400 font-bold mb-2">No more updates right now.</p>
                            <button className="text-sm text-purple-600 font-bold hover:underline">Explore new topics</button>
                        </div>
                    </div>

                </div>

            </div>
        </MainLayout>
    );
};

export default YourTopicsPage;
