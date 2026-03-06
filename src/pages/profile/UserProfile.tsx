import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import Header from '../../components/Header';
import {
    MessageSquare, Share2,
    ArrowLeft, MapPin, Link as LinkIcon,
    Calendar, Heart, MoreHorizontal
} from 'lucide-react';
import { NavLink, useParams } from 'react-router-dom';

const UserProfile: React.FC = () => {
    const { username } = useParams<{ username: string }>();

    // Mock data for other users
    const userData = {
        name: username || 'Luna_writes',
        handle: `@${username || 'Luna_writes'}`,
        avatar: '🌙',
        bio: 'Weaving stories out of moonlight and morning coffee. Poet, dreamer, and digital nomad. Published at Unbound Anthology.',
        location: 'Dreamland / Remote',
        website: 'luna.writes',
        joined: 'Joined April 2023',
        followers: '12.4K',
        following: '842',
        isFollowing: false,
    };

    const userPosts = [
        { id: 1, content: 'The stars tonight are particularly talkative. Can you hear them? ✨🌑', time: '5h ago', likes: 124, comments: 18 },
        { id: 2, content: 'Sometimes the best stories are the ones we never tell. They live in the quiet moments between heartbeats.', time: '1d ago', likes: 245, comments: 32 },
    ];

    return (
        <MainLayout>
            <Header />

            <div className="w-full max-w-full pb-20">

                {/* ── COVER & BACK BUTTON ── */}
                <div className="relative h-48 sm:h-64 bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-400 rounded-b-[3rem] shadow-lg">
                    <NavLink
                        to="/search"
                        className="absolute top-6 left-6 p-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl text-white hover:bg-white hover:text-purple-600 transition-all duration-300 shadow-xl"
                    >
                        <ArrowLeft size={20} />
                    </NavLink>
                </div>

                {/* ── PROFILE INFO ── */}
                <div className="px-6 -mt-16 sm:-mt-20">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                        <div className="relative">
                            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-[2.5rem] bg-white p-1.5 shadow-2xl">
                                <div className="w-full h-full rounded-[2.2rem] bg-indigo-50 flex items-center justify-center text-5xl sm:text-6xl border border-indigo-100 shadow-inner">
                                    {userData.avatar}
                                </div>
                            </div>
                            <div className="absolute bottom-2 right-2 p-2 bg-green-500 border-4 border-white rounded-full shadow-lg"></div>
                        </div>

                        <div className="flex gap-3 mb-2">
                            <button className="flex-1 sm:flex-none px-8 py-3 bg-purple-600 text-white rounded-2xl font-bold shadow-lg shadow-purple-200 hover:bg-purple-700 hover:scale-[1.02] active:scale-95 transition-all">
                                Follow
                            </button>
                            <button className="p-3 bg-white border border-gray-100 rounded-2xl text-gray-400 hover:text-purple-600 hover:shadow-sm transition">
                                <MessageSquare size={20} />
                            </button>
                            <button className="p-3 bg-white border border-gray-100 rounded-2xl text-gray-400 hover:text-purple-600 hover:shadow-sm transition">
                                <Share2 size={20} />
                            </button>
                        </div>
                    </div>

                    <div className="mt-6">
                        <h1 className="text-3xl font-bold text-gray-900">{userData.name}</h1>
                        <p className="text-gray-400 font-bold mb-4 tracking-tight">{userData.handle}</p>

                        <p className="max-w-xl text-gray-600 font-medium leading-relaxed mb-6">
                            {userData.bio}
                        </p>

                        <div className="flex flex-wrap gap-y-3 gap-x-6 text-sm font-bold text-gray-400 mb-8 pb-8 border-b border-gray-50">
                            <div className="flex items-center gap-1.5">
                                <MapPin size={16} className="text-gray-300" />
                                <span>{userData.location}</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-purple-500">
                                <LinkIcon size={16} />
                                <a href="#" className="hover:underline">{userData.website}</a>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Calendar size={16} className="text-gray-300" />
                                <span>{userData.joined}</span>
                            </div>
                        </div>

                        <div className="flex gap-8 mb-10">
                            <div className="flex flex-col">
                                <span className="text-lg font-bold text-gray-900">{userData.followers}</span>
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Followers</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-bold text-gray-900">{userData.following}</span>
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Following</span>
                            </div>
                        </div>

                        {/* ── POST FEED ── */}
                        <div className="space-y-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-bold text-xl text-gray-800">Latest Stories</h3>
                                <button className="p-2 text-gray-300 hover:text-gray-500">
                                    <MoreHorizontal size={20} />
                                </button>
                            </div>

                            {userPosts.map((post) => (
                                <div key={post.id} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                                    <p className="text-gray-700 font-medium leading-relaxed mb-6">
                                        {post.content}
                                    </p>
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                                        <div className="flex items-center gap-6">
                                            <button className="flex items-center gap-2 text-gray-400 hover:text-rose-500 transition">
                                                <Heart size={18} />
                                                <span className="text-xs font-bold">{post.likes}</span>
                                            </button>
                                            <button className="flex items-center gap-2 text-gray-400 hover:text-purple-600 transition">
                                                <MessageSquare size={18} />
                                                <span className="text-xs font-bold">{post.comments}</span>
                                            </button>
                                        </div>
                                        <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">{post.time}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </MainLayout>
    );
};

export default UserProfile;
