import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import ProfileHeader from './ProfileHeader';
import ProfileTabs from '../profile/ProfileTabs';
import {
    MessageSquare, Heart, Share2, Award, UserPlus,
    Star, TrendingUp, BookOpen, Sparkles
} from 'lucide-react';
import "../../styles/profile.css";

type ActivityType = 'post' | 'reaction' | 'follow' | 'achievement' | 'topic';

interface ActivityItem {
    type: ActivityType;
    title: string;
    description: string;
    time: string;
    meta?: string;
}

const activities: ActivityItem[] = [
    {
        type: 'post',
        title: 'Shared a new thought',
        description: 'Today I realized that sometimes we\'re too hard on ourselves. Self-compassion is everything ✨',
        time: '2h ago',
        meta: 'Mental Wellness',
    },
    {
        type: 'achievement',
        title: 'Earned "Creative Soul" badge',
        description: 'Reached 50 posts in the Creative Corner topic. Keep expressing yourself!',
        time: '5h ago',
    },
    {
        type: 'reaction',
        title: 'Reacted to 3 posts',
        description: 'You sent 🔥 to Maya_art, 🥰 to Alex_thoughts, and ✨ to Luna_writes',
        time: '8h ago',
    },
    {
        type: 'follow',
        title: 'Started following Luna_writes',
        description: 'You\'re now connected with Luna_writes. Check out their latest stories!',
        time: '1d ago',
    },
    {
        type: 'topic',
        title: 'Joined "Mindful Living"',
        description: 'You joined a new topic community. Explore posts about slow living and mindfulness.',
        time: '1d ago',
        meta: '15.3K members',
    },
    {
        type: 'post',
        title: 'Shared a creative piece',
        description: 'Sometimes the words I can\'t say out loud find their way onto paper. Art heals 🎨',
        time: '2d ago',
        meta: 'Creative Corner',
    },
    {
        type: 'reaction',
        title: 'Your post got 24 reactions',
        description: 'Your story about self-discovery resonated with many people. 🔥🥰🤯',
        time: '2d ago',
    },
    {
        type: 'follow',
        title: 'Alex_thoughts started following you',
        description: 'You have a new follower! Alex is active in Mental Wellness.',
        time: '3d ago',
    },
    {
        type: 'achievement',
        title: 'Reached Level 12',
        description: 'You leveled up! Keep sharing, reacting, and engaging to unlock more badges.',
        time: '3d ago',
    },
    {
        type: 'topic',
        title: 'Trending in "Life Stories"',
        description: 'Your recent story is trending! It\'s been viewed by 1.2K people and counting.',
        time: '4d ago',
        meta: '1.2K views',
    },
];

const iconMap: Record<ActivityType, { icon: React.ElementType; bg: string; color: string }> = {
    post: { icon: BookOpen, bg: 'bg-purple-100', color: 'text-purple-600' },
    reaction: { icon: Heart, bg: 'bg-rose-100', color: 'text-rose-500' },
    follow: { icon: UserPlus, bg: 'bg-cyan-100', color: 'text-cyan-600' },
    achievement: { icon: Award, bg: 'bg-amber-100', color: 'text-amber-600' },
    topic: { icon: Star, bg: 'bg-emerald-100', color: 'text-emerald-600' },
};

const ActivityPage: React.FC = () => {
    return (
        <MainLayout>
            <div className="w-full flex flex-col items-center pb-20 bg-[#f2f3f7]">

                <ProfileHeader />

                {/* CONTENT SECTION */}
                <div className="w-full max-w-[800px] mt-10 px-4">

                    <ProfileTabs activeTab="activity" />

                    {/* ACTIVITY STATS */}
                    <div className="grid grid-cols-3 gap-4 mt-6">
                        {[
                            { icon: TrendingUp, label: "This Week", value: "32 actions", color: "text-purple-600" },
                            { icon: MessageSquare, label: "Comments", value: "18 given", color: "text-indigo-600" },
                            { icon: Sparkles, label: "Streak", value: "7 days 🔥", color: "text-amber-600" },
                        ].map((stat, i) => (
                            <div key={i} className="bg-white p-4 rounded-2xl shadow-sm text-center
                                transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                                <stat.icon size={20} className={`mx-auto mb-2 ${stat.color}`} />
                                <p className="text-lg font-semibold">{stat.value}</p>
                                <p className="text-xs text-gray-400">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* ACTIVITY TIMELINE */}
                    <div className="mt-8 relative">
                        {/* Timeline line */}
                        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-purple-300 via-purple-200 to-transparent" />

                        <div className="flex flex-col gap-4">
                            {activities.map((activity, i) => {
                                const { icon: Icon, bg, color } = iconMap[activity.type];
                                return (
                                    <div
                                        key={i}
                                        className="group flex gap-4 pl-1 relative
                                            transition-all duration-300"
                                    >
                                        {/* Timeline dot */}
                                        <div className={`relative z-10 flex-shrink-0 w-11 h-11 rounded-full ${bg}
                                            flex items-center justify-center
                                            group-hover:scale-110 transition-transform duration-300
                                            ring-4 ring-[#f2f3f7]`}>
                                            <Icon size={18} className={color} />
                                        </div>

                                        {/* Content card */}
                                        <div className="flex-1 bg-white rounded-2xl p-4 shadow-sm
                                            group-hover:shadow-md transition-all duration-300
                                            group-hover:-translate-y-0.5">
                                            <div className="flex items-start justify-between">
                                                <div>
                                                    <h3 className="font-semibold text-sm">{activity.title}</h3>
                                                    <p className="text-xs text-gray-400 mt-0.5">{activity.time}</p>
                                                </div>

                                                {activity.meta && (
                                                    <span className="neon-badge text-[11px]">
                                                        {activity.meta}
                                                    </span>
                                                )}
                                            </div>

                                            <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                                                {activity.description}
                                            </p>

                                            {activity.type === 'post' && (
                                                <div className="flex gap-4 mt-3 text-gray-400 text-xs">
                                                    <button className="flex items-center gap-1 hover:text-purple-500 transition">
                                                        <Heart size={14} /> Like
                                                    </button>
                                                    <button className="flex items-center gap-1 hover:text-purple-500 transition">
                                                        <MessageSquare size={14} /> Comment
                                                    </button>
                                                    <button className="flex items-center gap-1 hover:text-purple-500 transition">
                                                        <Share2 size={14} /> Share
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default ActivityPage;
