import React, { useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import Header from '../../components/Header';
import {
    Search, Users, MessageSquare,
    Filter, ArrowRight,
    Sparkles, Heart
} from 'lucide-react';

const searchResults = {
    accounts: [
        { name: 'Luna_writes', bio: 'Poet & storyteller', emoji: '🌙', followers: '12.4K', color: 'bg-indigo-50', textColor: 'text-indigo-600' },
        { name: 'Zen_master', bio: 'Mindfulness coach', emoji: '🧘', followers: '8.7K', color: 'bg-emerald-50', textColor: 'text-emerald-600' },
        { name: 'Art_by_Maya', bio: 'Digital artist', emoji: '🎨', followers: '15.1K', color: 'bg-rose-50', textColor: 'text-rose-600' },
    ],
    posts: [
        {
            id: 1,
            user: 'Deep_thinker',
            avatar: '💡',
            content: 'The only way to make sense out of change is to plunge into it, move with it, and join the dance. 💃✨',
            likes: 412,
            comments: 23
        },
        {
            id: 2,
            user: 'Chef_Vibe',
            avatar: '🍳',
            content: 'Cooking is like love. It should be entered into with abandonment or not at all. Today\'s experiment: Truffle linguine! 🍝🔥',
            likes: 298,
            comments: 45
        },
    ]
};

const SearchPage: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeTab, setActiveTab] = useState('top');

    return (
        <MainLayout>
            <Header />

            <div className="w-full max-w-full pb-20 px-4 sm:px-0">

                {/* ── SEARCH INPUT SECTION ── */}
                <div className="pt-6 mb-8">
                    <div className="relative group mx-auto max-w-2xl">
                        <Search size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-600 transition-colors" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search names, topics, or stories..."
                            className="w-full pl-14 pr-6 py-5 bg-white border border-gray-100 rounded-[2rem] text-sm focus:outline-none focus:ring-2 focus:ring-purple-400/50 shadow-sm transition-all duration-300"
                        />
                        <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-gray-50 rounded-xl text-gray-400 hover:text-purple-600 transition">
                            <Filter size={18} />
                        </button>
                    </div>
                </div>

                {/* ── SEARCH TABS ── */}
                <div className="flex gap-2 mb-8 border-b border-gray-100 pb-2">
                    {['top', 'accounts', 'posts', 'hashtags'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-2 rounded-full text-xs font-bold transition-all duration-300 capitalize
                                ${activeTab === tab
                                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-200'
                                    : 'text-gray-400 hover:text-gray-800'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* ── SEARCH RESULTS ── */}
                <div className="space-y-10">

                    {/* ACCOUNTS SECTION */}
                    {(activeTab === 'top' || activeTab === 'accounts') && (
                        <section>
                            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                <Users size={16} /> Accounts
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {searchResults.accounts.map((user, i) => (
                                    <div key={i} className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all group cursor-pointer text-center">
                                        <div className={`w-14 h-14 mx-auto rounded-2xl ${user.color} flex items-center justify-center text-2xl shadow-sm mb-3 group-hover:scale-110 transition-transform`}>
                                            {user.emoji}
                                        </div>
                                        <p className="font-bold text-gray-800 group-hover:text-purple-600 transition">{user.name}</p>
                                        <p className="text-[10px] text-gray-400 font-medium mb-3">{user.bio}</p>
                                        <div className="pt-2 border-t border-gray-50 flex items-center justify-between">
                                            <span className="text-[10px] font-bold text-gray-400">{user.followers} followers</span>
                                            <ArrowRight size={14} className="text-gray-300" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* POSTS SECTION */}
                    {(activeTab === 'top' || activeTab === 'posts') && (
                        <section>
                            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                <MessageSquare size={16} /> Stories & Posts
                            </h3>
                            <div className="space-y-4">
                                {searchResults.posts.map((post) => (
                                    <div key={post.id} className="bg-white p-6 rounded-3xl border border-gray-50 shadow-sm hover:shadow-md transition-all group cursor-pointer">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-lg">{post.avatar}</div>
                                            <p className="font-bold text-sm text-gray-800">{post.user}</p>
                                        </div>
                                        <p className="text-sm text-gray-600 leading-relaxed font-medium mb-4">{post.content}</p>
                                        <div className="flex items-center gap-6 pt-4 border-t border-gray-50 text-gray-400">
                                            <div className="flex items-center gap-1.5 hover:text-rose-500 transition">
                                                <Heart size={16} />
                                                <span className="text-[11px] font-bold">{post.likes}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5 hover:text-purple-600 transition">
                                                <MessageSquare size={16} />
                                                <span className="text-[11px] font-bold">{post.comments}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* RECOMMENDED TOPICS FOR SEARCH */}
                    <section className="bg-gradient-to-r from-purple-600 to-indigo-600 p-8 rounded-[2.5rem] text-white shadow-xl">
                        <div className="flex items-center gap-3 mb-4">
                            <Sparkles size={24} className="text-yellow-400" />
                            <h3 className="text-xl font-bold">Try searching for these trends</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {['#MentalHealth', '#WebDesign2024', '#UnboundStories', '#ProductivityHacks', '#SelfCare'].map((trend) => (
                                <button key={trend} className="px-5 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-xs font-bold transition-all">
                                    {trend}
                                </button>
                            ))}
                        </div>
                    </section>
                </div>

            </div>
        </MainLayout>
    );
};

export default SearchPage;
