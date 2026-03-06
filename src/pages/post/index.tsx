import React, { useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import Header from '../../components/Header';
import {
    ArrowLeft, MessageSquare, Share2,
    Heart, Send, MoreHorizontal,
    Link
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const postData = {
    id: 1,
    user: 'Emma_creates',
    avatar: '✨',
    category: 'Mental Wellness',
    timeAgo: '2h ago',
    content: 'Today I realized that sometimes we\'re too hard on ourselves. What we really need is rest, not constant high expectations. Self-compassion is everything ✨',
    likes: 44,
    comments: 15,
};

const initialComments = [
    { id: 1, user: 'Zen_master', avatar: '🧘', text: 'Beautifully said. We all need that reminder sometimes.', time: '1h ago', likes: 12 },
    { id: 2, user: 'Luna_writes', avatar: '🌙', text: 'This resonates so much with my recent journey. Thank you for sharing! 💜', time: '45m ago', likes: 8 },
    { id: 3, user: 'Deep_thinker', avatar: '💡', text: 'Self-compassion is the foundation of all growth.', time: '10m ago', likes: 2 },
];

const PostDetailPage: React.FC = () => {
    const [commentText, setCommentText] = useState('');

    return (
        <MainLayout>
            <Header />

            <div className="w-full max-w-full pb-20 px-4 sm:px-0">

                {/* ── BREADCRUMB ── */}
                <div className="pt-6 mb-6">
                    <NavLink
                        to="/"
                        className="group inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md border border-gray-100 rounded-2xl text-sm font-semibold text-gray-500 hover:text-purple-600 hover:bg-white hover:border-purple-100 transition-all duration-300"
                    >
                        <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
                        <span>Back to Feed</span>
                    </NavLink>
                </div>

                {/* ── MAIN POST ── */}
                <article className="bg-white p-6 sm:p-8 rounded-[2.5rem] border border-gray-100 shadow-sm mb-8">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center text-2xl shadow-sm border border-white">
                                {postData.avatar}
                            </div>
                            <div>
                                <h2 className="font-bold text-gray-900">{postData.user}</h2>
                                <div className="flex items-center gap-2 text-xs font-semibold text-gray-400">
                                    <span>{postData.category}</span>
                                    <span>•</span>
                                    <span>{postData.timeAgo}</span>
                                </div>
                            </div>
                        </div>
                        <button className="p-2 text-gray-400 hover:text-gray-600 transition">
                            <MoreHorizontal size={20} />
                        </button>
                    </div>

                    <p className="text-lg text-gray-800 leading-relaxed font-medium mb-8">
                        {postData.content}
                    </p>

                    <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                        <div className="flex items-center gap-8">
                            <button className="flex items-center gap-2 group">
                                <Heart size={22} className="text-gray-400 group-hover:text-rose-500 group-hover:scale-110 transition-all" />
                                <span className="text-sm font-bold text-gray-500 group-hover:text-rose-600">{postData.likes}</span>
                            </button>
                            <button className="flex items-center gap-2 group">
                                <MessageSquare size={22} className="text-gray-400 group-hover:text-purple-500 transition-all" />
                                <span className="text-sm font-bold text-gray-500 group-hover:text-purple-600">{postData.comments}</span>
                            </button>
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="p-2.5 bg-gray-50 text-gray-400 hover:text-purple-600 rounded-xl transition">
                                <Link size={18} />
                            </button>
                            <button className="p-2.5 bg-gray-50 text-gray-400 hover:text-purple-600 rounded-xl transition">
                                <Share2 size={18} />
                            </button>
                        </div>
                    </div>
                </article>

                {/* ── COMMENTS SECTION ── */}
                <div className="space-y-6">
                    <h3 className="text-base font-bold text-gray-800 flex items-center gap-2 ml-2">
                        <MessageSquare size={18} className="text-purple-600" />
                        Discussions
                    </h3>

                    {/* Write Comment */}
                    <div className="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-lg">😊</div>
                        <input
                            type="text"
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                            placeholder="Share your thoughts..."
                            className="flex-1 bg-transparent text-sm focus:outline-none font-medium"
                        />
                        <button className="p-2.5 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-all active:scale-95 shadow-lg shadow-purple-100">
                            <Send size={18} />
                        </button>
                    </div>

                    {/* Comment List */}
                    <div className="space-y-4">
                        {initialComments.map((comment) => (
                            <div key={comment.id} className="bg-white/70 p-5 rounded-3xl border border-gray-50 transition-all hover:bg-white hover:border-purple-50">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-lg bg-white border border-gray-100 flex items-center justify-center text-base shadow-sm">
                                            {comment.avatar}
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-gray-800">{comment.user}</p>
                                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">{comment.time}</p>
                                        </div>
                                    </div>
                                    <button className="text-gray-300 hover:text-gray-500">
                                        <MoreHorizontal size={14} />
                                    </button>
                                </div>
                                <p className="text-sm text-gray-700 font-medium leading-relaxed pl-12 mb-3">
                                    {comment.text}
                                </p>
                                <div className="pl-12 flex items-center gap-4 text-gray-400">
                                    <button className="flex items-center gap-1.5 hover:text-rose-500 transition group">
                                        <Heart size={14} className="group-hover:fill-rose-500" />
                                        <span className="text-[11px] font-bold">{comment.likes}</span>
                                    </button>
                                    <button className="text-[11px] font-bold hover:text-purple-600 transition">Reply</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── LOAD MORE / FOOTER ── */}
                <div className="text-center mt-12 mb-8">
                    <p className="text-xs font-bold text-gray-300 italic">EndOfThread::JoinTheDance 💃</p>
                </div>

            </div>
        </MainLayout>
    );
};

export default PostDetailPage;
