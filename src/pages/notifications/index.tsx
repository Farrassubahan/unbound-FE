import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import Header from '../../components/Header';
import {
    Bell, Heart, MessageSquare, UserPlus,
    AtSign, Filter, CheckCircle2
} from 'lucide-react';

const notifications = [
    {
        id: 1,
        type: 'like',
        user: 'Luna_writes',
        avatar: '🌙',
        content: 'liked your post: "The most beautiful thing about growth..."',
        time: '2m ago',
        unread: true,
    },
    {
        id: 2,
        type: 'comment',
        user: 'Zen_master',
        avatar: '🧘',
        content: 'commented: "Exactly what I needed to hear today!"',
        time: '15m ago',
        unread: true,
    },
    {
        id: 3,
        type: 'follow',
        user: 'Deep_thinker',
        avatar: '💡',
        content: 'started following you',
        time: '1h ago',
        unread: false,
    },
    {
        id: 4,
        type: 'mention',
        user: 'Art_by_Maya',
        avatar: '🎨',
        content: 'mentioned you in a post: "@Emma_creates check this out!"',
        time: '3h ago',
        unread: false,
    },
    {
        id: 5,
        type: 'like',
        user: 'Chef_Vibe',
        avatar: '🍳',
        content: 'liked your post about culinary experiments',
        time: '5h ago',
        unread: false,
    },
];

const NotificationsPage: React.FC = () => {
    return (
        <MainLayout>
            <Header />

            <div className="w-full max-w-full pb-20 px-4 sm:px-0">

                {/* ── HEADER SECTION ── */}
                <div className="mb-8 pt-6 flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                            <div className="p-3 bg-purple-100 rounded-2xl shadow-sm">
                                <Bell size={28} className="text-purple-600" />
                            </div>
                            Notifications
                        </h1>
                        <p className="text-gray-500 mt-2 ml-1">
                            Stay updated with your latest activity and mentions.
                        </p>
                    </div>
                    <button className="p-3 bg-white border border-gray-100 rounded-2xl text-gray-400 hover:text-purple-600 hover:shadow-sm transition hidden sm:flex">
                        <Filter size={20} />
                    </button>
                </div>

                {/* ── NOTIFICATION TABS ── */}
                <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
                    <button className="px-6 py-2 bg-purple-600 text-white rounded-full text-sm font-bold shadow-lg shadow-purple-200">
                        All
                    </button>
                    <button className="px-6 py-2 bg-white border border-gray-100 text-gray-500 hover:bg-gray-50 rounded-full text-sm font-bold transition">
                        Mentions
                    </button>
                    <button className="px-6 py-2 bg-white border border-gray-100 text-gray-500 hover:bg-gray-50 rounded-full text-sm font-bold transition">
                        Verified
                    </button>
                </div>

                {/* ── NOTIFICATIONS LIST ── */}
                <div className="space-y-3">
                    {notifications.map((notif) => (
                        <div
                            key={notif.id}
                            className={`flex items-start gap-4 p-5 rounded-3xl border transition-all duration-300 cursor-pointer
                                ${notif.unread
                                    ? 'bg-purple-50/50 border-purple-100 ring-1 ring-purple-50'
                                    : 'bg-white border-gray-50 hover:border-purple-100 hover:shadow-sm'
                                }`}
                        >
                            <div className="w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-xl flex-shrink-0 shadow-sm">
                                {notif.avatar}
                                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-lg bg-white border border-gray-50 flex items-center justify-center shadow-sm">
                                    {notif.type === 'like' && <Heart size={12} className="text-rose-500 fill-rose-500" />}
                                    {notif.type === 'comment' && <MessageSquare size={12} className="text-purple-500" />}
                                    {notif.type === 'follow' && <UserPlus size={12} className="text-blue-500" />}
                                    {notif.type === 'mention' && <AtSign size={12} className="text-indigo-500" />}
                                </div>
                            </div>

                            <div className="flex-1 min-w-0">
                                <p className="text-sm text-gray-800 leading-snug">
                                    <span className="font-bold text-gray-900 mr-1">{notif.user}</span>
                                    {notif.content}
                                </p>
                                <p className="text-[11px] text-gray-400 mt-1 font-medium">{notif.time}</p>
                            </div>

                            {notif.unread && (
                                <div className="w-2.5 h-2.5 bg-purple-600 rounded-full mt-2"></div>
                            )}
                        </div>
                    ))}
                </div>

                {/* ── EMPTY STATE PLACEHOLDER (FOR DEMO) ── */}
                <div className="mt-12 p-10 bg-gray-50/50 rounded-3xl border-2 border-dashed border-gray-100 text-center">
                    <div className="inline-flex p-4 bg-white rounded-2xl shadow-sm mb-4">
                        <CheckCircle2 size={32} className="text-gray-300" />
                    </div>
                    <p className="text-gray-400 font-bold">You're all caught up!</p>
                    <p className="text-xs text-gray-300 mt-1 italic">No more notifications to show.</p>
                </div>

            </div>
        </MainLayout>
    );
};

export default NotificationsPage;
