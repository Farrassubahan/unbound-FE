import React from 'react';
import { Hash, TrendingUp, ArrowLeft, Search, Filter, Sparkles } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import MainLayout from '../../../layouts/MainLayout';
import Header from '../../../components/Header';

const trendingHashtags = [
    { tag: '#MentalHealthMatters', posts: '12.5K', growth: '+25%', category: 'Wellness', description: 'Discussions about mental health awareness and self-care.' },
    { tag: '#SelfLoveJourney', posts: '8.9K', growth: '+18%', category: 'Personal Growth', description: 'Sharing stories of self-discovery and acceptance.' },
    { tag: '#CreativeExpression', posts: '15.2K', growth: '+32%', category: 'Arts', description: 'A space for artists to showcase their latest work.' },
    { tag: '#GenZThoughts', posts: '22.1K', growth: '+45%', category: 'Social', description: 'The latest trends and perspectives from Gen Z.' },
    { tag: '#FreedomToBeMe', posts: '6.7K', growth: '+12%', category: 'Lifestyle', description: 'Celebrating individuality and personal freedom.' },
    { tag: '#MindfulLiving', posts: '9.4K', growth: '+22%', category: 'Wellness', description: 'Tips and stories about living a more mindful life.' },
    { tag: '#UnboundStories', posts: '5.2K', growth: '+8%', category: 'Community', description: 'The official tag for sharing your Unbound journey.' },
    { tag: '#DigitalArt2024', posts: '18.4K', growth: '+38%', category: 'Arts', description: 'The future of digital art and design.' },
    { tag: '#MotivationMonday', posts: '31.2K', growth: '+15%', category: 'Inspiration', description: 'Weekly dose of motivation and positivity.' },
    { tag: '#TechForGood', posts: '7.8K', growth: '+20%', category: 'Technology', description: 'Innovations that are making the world a better place.' },
];

const TrendingHashtagsPage: React.FC = () => {
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
                            <Hash size={24} className="text-purple-600" />
                        </div>
                        Trending Hashtags
                    </h1>
                    <p className="text-gray-500 mt-2 ml-14 sm:ml-20">
                        Explore the hottest topics and conversations happening right now across Unbound.
                    </p>
                </div>

                {/* ── SEARCH & FILTER ── */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <div className="relative flex-1 group">
                        {/* <Search size={18} className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-600 transition-colors" /> */}
                        <input
                            type="text"
                            placeholder="Search hashtags..."
                            className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200
                                rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-400/50
                                focus:border-purple-400/50 shadow-sm transition-all outline-none"
                        />
                    </div>
                    <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-200 
                        rounded-2xl text-sm font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
                        <Filter size={18} />
                        Filter Category
                    </button>
                </div>

                {/* ── HASHTAGS LIST ── */}
                <div className="grid grid-cols-1 gap-4">
                    {trendingHashtags.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm
                                hover:shadow-md hover:border-purple-100 transition-all duration-300 group cursor-pointer"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center
                                        group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                                        <Hash size={24} className="text-purple-400 group-hover:text-white" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <h3 className="text-lg font-bold text-gray-800 group-hover:text-purple-700 transition">
                                                {item.tag.replace('#', '')}
                                            </h3>
                                            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 
                                                bg-gray-100 text-gray-400 rounded-md group-hover:bg-purple-100 group-hover:text-purple-600 transition">
                                                {item.category}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-500 mt-1 line-clamp-1">{item.description}</p>
                                    </div>
                                </div>
                                <div className="flex items-center sm:flex-col sm:items-end gap-4 sm:gap-1">
                                    <div className="flex items-center gap-2">
                                        <TrendingUp size={16} className="text-orange-400" />
                                        <span className="text-sm font-bold text-gray-700">{item.posts}</span>
                                        <span className="text-xs text-gray-400">posts</span>
                                    </div>
                                    <span className="neon-badge text-[11px] px-3">
                                        {item.growth} growth
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── LOAD MORE ── */}
                <div className="mt-10 flex justify-center">
                    <button className="flex items-center gap-2 px-8 py-4 bg-white border border-gray-200 
                        rounded-3xl text-sm font-bold text-gray-800 hover:bg-gray-50 hover:-translate-y-1 
                        transition-all duration-300 shadow-sm">
                        <Sparkles size={18} className="text-purple-500" />
                        Explore More Trends
                    </button>
                </div>

            </div>
        </MainLayout>
    );
};

export default TrendingHashtagsPage;
