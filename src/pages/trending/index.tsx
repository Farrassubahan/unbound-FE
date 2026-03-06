import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import Header from '../../components/Header';
import {
    Flame, TrendingUp, MessageSquare,
    Share2, Star, Users, ArrowUpRight
} from 'lucide-react';

/* ─── Trending posts ─── */
const trendingPosts = [
    {
        id: 1,
        avatar: '🚀',
        username: 'Tech_Visionary',
        category: 'Technology',
        timeAgo: '2h ago',
        content: 'AI is not just a tool, it\'s a new canvas for human creativity. We are entering an era where the only limit is our imagination. #FutureTech #AI',
        reactions: '🔥🚀✨',
        reactCount: 1540,
        commentCount: 89,
        featured: true,
    },
    {
        id: 2,
        avatar: '🎭',
        username: 'Acting_Life',
        category: 'Entertainment',
        timeAgo: '4h ago',
        content: 'Just finished the final rehearsal for "The Unbound Soul". The energy in the theater is electric. Can\'t wait for opening night! 🎭✨',
        reactions: '❤️👏✨',
        reactCount: 842,
        commentCount: 45,
        featured: false,
    },
    {
        id: 3,
        avatar: '🌍',
        username: 'Eco_Warrior',
        category: 'Environment',
        timeAgo: '6h ago',
        content: 'Small changes lead to big results. Today I started a community compost bin. It\'s amazing how much waste we can reduce together. 🌿♻️',
        reactions: '🌿💚🤲',
        reactCount: 2310,
        commentCount: 156,
        featured: true,
    },
];

/* ─── Trending creators ─── */
const topCreators = [
    { name: 'Dr_Mindset', bio: 'Psychology & Wellness', emoji: '🧠', trend: '+45% this week' },
    { name: 'Chef_Vibe', bio: 'Culinary experiments', emoji: '🍳', trend: '+32% this week' },
    { name: 'Pixel_Master', bio: 'NFT & Digital Art', emoji: '🎨', trend: '+28% this week' },
];

const TrendingPage: React.FC = () => {
    return (
        <MainLayout>
            <Header />

            <div className="w-full max-w-full pb-20 px-4 sm:px-0">

                {/* ── HEADER SECTION ── */}
                <div className="mb-8 pt-6">
                    <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                        <div className="p-3 bg-orange-100 rounded-2xl shadow-sm">
                            <Flame size={28} className="text-orange-600" />
                        </div>
                        Trending Now
                    </h1>
                    <p className="text-gray-500 mt-2 ml-1">
                        The most viral conversations and popular creators on Unbound today.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">

                    {/* ── LEFT COLUMN: TRENDING FEED ── */}
                    <div className="flex-1 space-y-6">
                        <div className="flex items-center justify-between mb-2">
                            <h2 className="font-bold text-xl flex items-center gap-2">
                                <TrendingUp size={20} className="text-purple-600" />
                                Hot Conversations
                            </h2>
                        </div>

                        {trendingPosts.map((post) => (
                            <div
                                key={post.id}
                                className={`bg-white p-5 rounded-3xl shadow-sm border transition-all duration-300
                                    hover:shadow-md ${post.featured ? 'border-orange-100 ring-1 ring-orange-50' : 'border-gray-100'}`}
                            >
                                {/* Featured badge for trending */}
                                {post.featured && (
                                    <div className="flex items-center gap-1 mb-3">
                                        <Flame size={12} className="text-orange-500" />
                                        <span className="text-[11px] font-bold text-orange-500 uppercase tracking-wider">
                                            Going Viral
                                        </span>
                                    </div>
                                )}

                                {/* Post header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center
                                        justify-center text-xl flex-shrink-0 shadow-sm border border-white">
                                        {post.avatar}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <p className="font-bold text-gray-800">{post.username}</p>
                                            <span className="text-[10px] font-bold text-gray-400 bg-gray-50
                                                px-2 py-0.5 rounded-lg border border-gray-100 uppercase tracking-tight">
                                                {post.category}
                                            </span>
                                        </div>
                                        <p className="text-xs text-gray-400 font-medium">{post.timeAgo}</p>
                                    </div>
                                    <button className="p-2 hover:bg-gray-50 rounded-xl transition">
                                        <ArrowUpRight size={18} className="text-gray-400" />
                                    </button>
                                </div>

                                {/* Content */}
                                <p className="text-gray-700 leading-relaxed mb-5 font-medium">
                                    {post.content}
                                </p>

                                {/* Reactions & Stats */}
                                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-1.5 text-gray-500">
                                            <span className="text-lg">{post.reactions}</span>
                                            <span className="text-sm font-bold">{post.reactCount}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-gray-400 hover:text-purple-600 transition cursor-pointer">
                                            <MessageSquare size={16} />
                                            <span className="text-sm font-bold">{post.commentCount}</span>
                                        </div>
                                    </div>
                                    <button className="text-gray-400 hover:text-purple-600 transition">
                                        <Share2 size={18} />
                                    </button>
                                </div>
                            </div>
                        ))}

                        <button className="w-full py-4 bg-gray-100 hover:bg-gray-200 text-gray-500 font-bold rounded-2xl transition shadow-sm">
                            Show More Trending Content
                        </button>
                    </div>

                    {/* ── RIGHT COLUMN: TOP CREATORS & STATS ── */}
                    <div className="w-full lg:w-80 space-y-6">

                        {/* ── TOP CREATORS ── */}
                        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <Star size={18} className="text-yellow-500" />
                                Rising Stars
                            </h3>
                            <div className="space-y-4">
                                {topCreators.map((creator, i) => (
                                    <div key={i} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-2xl transition cursor-pointer group">
                                        <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-indigo-50 rounded-xl flex items-center justify-center text-xl shadow-sm">
                                            {creator.emoji}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-bold text-gray-800 group-hover:text-purple-600 transition">{creator.name}</p>
                                            <p className="text-[11px] text-gray-400 truncate">{creator.bio}</p>
                                            <p className="text-[10px] font-bold text-green-500 mt-0.5">{creator.trend}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="w-full mt-4 py-2.5 text-xs font-bold text-purple-600 bg-purple-50 rounded-xl hover:bg-purple-100 transition">
                                Discover All Creators
                            </button>
                        </div>

                        {/* ── TRENDING TOPIC STATS ── */}
                        <div className="bg-gradient-to-br from-purple-600 to-indigo-700 p-6 rounded-3xl text-white shadow-lg">
                            <h3 className="font-bold mb-4 flex items-center gap-2">
                                <Users size={18} />
                                Community Pulse
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-xs font-bold mb-1 opacity-80">
                                        <span>Active Users</span>
                                        <span>12.4K</span>
                                    </div>
                                    <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                                        <div className="h-full bg-white w-3/4 shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-xs font-bold mb-1 opacity-80">
                                        <span>New Posts/Hour</span>
                                        <span>840</span>
                                    </div>
                                    <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                                        <div className="h-full bg-white w-1/2 shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
                                    </div>
                                </div>
                            </div>
                            <p className="text-[10px] mt-4 opacity-70 italic">
                                *Real-time data from all Unbound communities
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        </MainLayout>
    );
};

export default TrendingPage;
