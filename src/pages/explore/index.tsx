import React, { useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import Header from '../../components/Header';
import {
    Search, Compass, Sparkles, MessageSquare, Share2,
    TrendingUp, Flame, Heart, Star, Filter,
    Palette, Book, Music, Coffee, Globe, Zap,
    Hash
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

/* ─── Category pills ─── */
const categories = [
    { label: 'For You', icon: Sparkles, active: true },
    { label: 'Trending', icon: Flame },
    { label: 'Mental Wellness', icon: Heart },
    { label: 'Creative', icon: Palette },
    { label: 'Life Stories', icon: Book },
    { label: 'Music', icon: Music },
    { label: 'Self Discovery', icon: Globe },
    { label: 'Mindfulness', icon: Coffee },
];

/* ─── Featured creators ─── */
const creators = [
    { name: 'Luna_writes', bio: 'Poet & storyteller', emoji: '🌙', followers: '12.4K', color: 'from-violet-500 to-purple-400' },
    { name: 'Zen_master', bio: 'Mindfulness coach', emoji: '🧘', followers: '8.7K', color: 'from-emerald-500 to-teal-400' },
    { name: 'Art_by_Maya', bio: 'Digital artist', emoji: '🎨', followers: '15.1K', color: 'from-pink-500 to-rose-400' },
    { name: 'Deep_thinker', bio: 'Philosophy & ideas', emoji: '💡', followers: '6.3K', color: 'from-amber-500 to-orange-400' },
];

/* ─── Trending hashtags ─── */
const trendingTags = [
    { tag: '#MentalHealthMatters', posts: '12.5K', growth: '+25%' },
    { tag: '#SelfLoveJourney', posts: '8.9K', growth: '+18%' },
    { tag: '#CreativeExpression', posts: '15.2K', growth: '+32%' },
    { tag: '#GenZThoughts', posts: '22.1K', growth: '+45%' },
    { tag: '#FreedomToBeMe', posts: '6.7K', growth: '+12%' },
    { tag: '#MindfulLiving', posts: '9.4K', growth: '+22%' },
];

/* ─── Explore posts (discover feed) ─── */
const explorePosts = [
    {
        id: 1,
        avatar: '🌙',
        username: 'Luna_writes',
        category: 'Life Stories',
        timeAgo: '1h ago',
        content: 'The most beautiful thing about growth is that it happens quietly. One day you just realize — you\'re not the same person you were six months ago. And that\'s okay. 🌱',
        reactions: '🔥🥰✨',
        reactCount: 234,
        commentCount: 42,
        featured: true,
    },
    {
        id: 2,
        avatar: '🎨',
        username: 'Art_by_Maya',
        category: 'Creative Corner',
        timeAgo: '3h ago',
        content: 'Started a 30-day art challenge where I draw my emotions instead of writing them down. Day 7 and it\'s already so therapeutic. Art really is medicine for the soul 🖌️',
        reactions: '🤯✨🎨',
        reactCount: 189,
        commentCount: 31,
        featured: false,
    },
    {
        id: 3,
        avatar: '🧘',
        username: 'Zen_master',
        category: 'Mental Wellness',
        timeAgo: '5h ago',
        content: 'Quick reminder: You don\'t have to be productive every single day to be valuable. Your worth is not measured by your output. Rest is productive too. 🧠💛',
        reactions: '💛🙏✨',
        reactCount: 412,
        commentCount: 67,
        featured: true,
    },
    {
        id: 4,
        avatar: '💡',
        username: 'Deep_thinker',
        category: 'Self Discovery',
        timeAgo: '6h ago',
        content: 'I asked myself: "What would I do if I wasn\'t afraid?" The answer changed everything. Fear is just an illusion that keeps us small. Break free. 🦋',
        reactions: '🔥🧠💜',
        reactCount: 156,
        commentCount: 23,
        featured: false,
    },
    {
        id: 5,
        avatar: '🎵',
        username: 'Melody_soul',
        category: 'Music & Vibes',
        timeAgo: '8h ago',
        content: 'Made a playlist called "songs that feel like a warm hug" and honestly it\'s been getting me through this week. Music heals what words can\'t reach 🎧💫',
        reactions: '😍🎵✨',
        reactCount: 298,
        commentCount: 55,
        featured: false,
    },
];

/* ─── Topics to explore ─── */
const exploreTopics = [
    { name: 'Art & Design', icon: Palette, members: '18.5K', color: 'bg-pink-100', iconColor: 'text-pink-600' },
    { name: 'Book Club', icon: Book, members: '15.2K', color: 'bg-indigo-100', iconColor: 'text-indigo-600' },
    { name: 'Music Lovers', icon: Music, members: '21.8K', color: 'bg-violet-100', iconColor: 'text-violet-600' },
    { name: 'Mindfulness', icon: Coffee, members: '12.9K', color: 'bg-emerald-100', iconColor: 'text-emerald-600' },
    { name: 'Philosophy', icon: Globe, members: '9.1K', color: 'bg-amber-100', iconColor: 'text-amber-600' },
    { name: 'Tech & Ideas', icon: Zap, members: '11.6K', color: 'bg-cyan-100', iconColor: 'text-cyan-600' },
];


const ExplorePage: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('For You');

    return (
        <MainLayout>
            <Header />

            <div className="w-full max-w-full pb-20 px-2 sm:px-0 overflow-hidden">

                {/* ── SEARCH BAR SECTION ── */}
                <div className="flex justify-center mb-8 pt-4">
                    <div className="relative w-full max-w-2xl group">
                        {/* Search Input with Glassmorphism & Glow */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-2xl blur-lg opacity-0 group-focus-within:opacity-100 transition duration-500"></div>

                        <div className="relative flex items-center">
                            <Search size={20} className="absolute left-4 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
                            <input
                                type="text"
                                placeholder="Search interesting topics or creators..."
                                className="w-full pl-12 pr-14 py-4 bg-white/70 backdrop-blur-md border border-gray-200
                                    rounded-2xl text-[15px] focus:outline-none focus:ring-2 focus:ring-purple-400/50
                                    focus:border-purple-400/50 shadow-sm transition-all duration-300
                                    placeholder:text-gray-400"
                            />

                            {/* Integrated Filter Button */}
                            <button className="absolute right-3 p-2 bg-gray-50 hover:bg-gray-100 
                                rounded-xl transition-all duration-200 border border-gray-100 hover:border-gray-200
                                group-focus-within:bg-purple-50 group-focus-within:border-purple-100">
                                <Filter size={18} className="text-gray-500 group-focus-within:text-purple-500" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* ── CATEGORY PILLS ── */}
                <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide">
                    {categories.map((cat, i) => {
                        const Icon = cat.icon;
                        const isActive = activeCategory === cat.label;
                        return (
                            <button
                                key={i}
                                onClick={() => setActiveCategory(cat.label)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm
                                    font-medium whitespace-nowrap transition-all duration-300
                                    ${isActive
                                        ? 'bg-gradient-to-r from-purple-600 to-indigo-500 text-white shadow-lg shadow-purple-300/40'
                                        : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300'
                                    }`}
                            >
                                <Icon size={14} />
                                {cat.label}
                            </button>
                        );
                    })}
                </div>

                {/* ── FEATURED CREATORS ── */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="font-semibold text-base sm:text-lg flex items-center gap-2">
                            <Star size={18} className="text-purple-500" />
                            Featured Creators
                        </h2>
                        <button className="text-sm text-purple-600 font-medium hover:underline">
                            See all
                        </button>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                        {creators.map((creator, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl shadow-sm overflow-hidden
                                    transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-pointer"
                            >
                                <div className={`h-14 sm:h-16 bg-gradient-to-r ${creator.color}`} />
                                <div className="p-3 sm:p-4 -mt-5 flex flex-col items-center text-center">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center
                                        text-xl shadow-md ring-2 ring-white">
                                        {creator.emoji}
                                    </div>
                                    <p className="font-semibold text-sm mt-2 truncate w-full">{creator.name}</p>
                                    <p className="text-xs text-gray-400 truncate w-full">{creator.bio}</p>
                                    <p className="text-xs text-gray-500 mt-1">{creator.followers}</p>
                                    <button className="mt-2 sm:mt-3 w-full text-xs font-semibold py-1.5 rounded-xl
                                        bg-gradient-to-r from-purple-600 to-indigo-500 text-white
                                        hover:opacity-90 transition shadow-sm">
                                        Follow
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── TRENDING HASHTAGS ── */}
                <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-5 mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="font-semibold text-base sm:text-lg flex items-center gap-2">
                            <TrendingUp size={18} className="text-purple-500" />
                            Trending Hashtags
                        </h2>
                        <NavLink to="/explore/trending" className="text-sm text-purple-600 font-medium hover:underline">
                            View all
                        </NavLink>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {trendingTags.map((item, i) => (
                            <button
                                key={i}
                                className="group flex items-center gap-2 px-3 sm:px-4 py-2 bg-gray-50
                                    rounded-xl border border-gray-100 hover:bg-purple-50
                                    hover:border-purple-200 transition-all duration-300 cursor-pointer"
                            >
                                <Hash size={14} className="text-purple-400 flex-shrink-0" />
                                <div className="text-left min-w-0">
                                    <p className="text-sm font-medium text-gray-700 group-hover:text-purple-700 transition truncate">
                                        {item.tag.replace('#', '')}
                                    </p>
                                    <p className="text-[11px] text-gray-400">{item.posts} posts</p>
                                </div>
                                <span className="neon-badge text-[10px] ml-1 flex-shrink-0">{item.growth}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* ── DISCOVER TOPICS ── */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="font-semibold text-base sm:text-lg flex items-center gap-2">
                            <Compass size={18} className="text-purple-500" />
                            Discover Topics
                        </h2>
                        <NavLink to="/explore/topics" className="text-sm text-purple-600 font-medium hover:underline">
                            Browse all
                        </NavLink>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {exploreTopics.map((topic, i) => {
                            const Icon = topic.icon;
                            return (
                                <button
                                    key={i}
                                    className="flex items-center gap-3 p-3 sm:p-4 bg-white rounded-2xl shadow-sm
                                        border border-gray-100 hover:shadow-md hover:-translate-y-0.5
                                        transition-all duration-300 text-left group w-full"
                                >
                                    <div className={`p-2.5 rounded-xl flex-shrink-0 ${topic.color}
                                        group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon size={18} className={topic.iconColor} />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="font-medium text-sm truncate">{topic.name}</p>
                                        <p className="text-[11px] text-gray-400">{topic.members} members</p>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* ── EXPLORE FEED ── */}
                <div>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="font-semibold text-base sm:text-lg flex items-center gap-2">
                            <Flame size={18} className="text-purple-500" />
                            Discover Posts
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {explorePosts.map((post) => (
                            <div
                                key={post.id}
                                className={`bg-white p-4 sm:p-5 rounded-2xl shadow-sm border transition-all duration-300
                                    hover:shadow-md ${post.featured ? 'border-purple-200 ring-1 ring-purple-100' : 'border-gray-100'}`}
                            >
                                {/* Featured badge */}
                                {post.featured && (
                                    <div className="flex items-center gap-1 mb-3">
                                        <Sparkles size={12} className="text-purple-500" />
                                        <span className="text-[11px] font-semibold text-purple-500 uppercase tracking-wide">
                                            Featured
                                        </span>
                                    </div>
                                )}

                                {/* Post header */}
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center
                                        justify-center text-lg flex-shrink-0">
                                        {post.avatar}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <p className="font-semibold text-sm">{post.username}</p>
                                            <span className="text-xs font-medium text-gray-500 bg-gray-100
                                                px-2 py-0.5 rounded-full">
                                                {post.category}
                                            </span>
                                        </div>
                                        <p className="text-xs text-gray-400">{post.timeAgo}</p>
                                    </div>
                                </div>

                                {/* Content */}
                                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                                    {post.content}
                                </p>

                                {/* Reactions */}
                                <div className="flex items-center text-sm text-gray-500 mb-3">
                                    <span className="mr-2 text-base">{post.reactions}</span>
                                    <span className="font-medium text-gray-600">{post.reactCount}</span>
                                </div>

                                {/* Actions */}
                                <div className="flex justify-start space-x-6 sm:space-x-8 text-gray-500 text-sm
                                    border-t border-gray-100 pt-3">
                                    <button className="flex items-center gap-1.5 hover:text-purple-600 transition font-medium">
                                        <Sparkles size={15} className="text-orange-400" />
                                        <span className="text-gray-600">React</span>
                                    </button>
                                    <button className="flex items-center gap-1.5 hover:text-purple-600 transition">
                                        <MessageSquare size={15} />
                                        <span className="font-medium text-gray-600">{post.commentCount}</span>
                                    </button>
                                    <button className="flex items-center gap-1.5 hover:text-purple-600 transition">
                                        <Share2 size={15} />
                                        <span className="font-medium text-gray-600 hidden sm:inline">Share</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </MainLayout>
    );
};

export default ExplorePage;

