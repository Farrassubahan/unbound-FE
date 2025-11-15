

import React from 'react';
import MainLayout from '../../layouts/MainLayout'; 
import Header from '../../components/Header'; 
import { Sparkles, MessageSquare, Share2, User, Sun } from 'lucide-react';

// --- Komponen ShareThoughts (Kotak Input) ---
// Ditempatkan di sini karena tidak perlu dipisahkan
const ShareThoughts: React.FC = () => {
    return (
        <div className="mb-6 px-4 sm:px-0">
            <div className="neon-share-thoughts-box">
                <p className="text-sm font-semibold text-lime-800 mb-1">
                    What's on your mind?
                </p>
                <p className="text-lg font-bold text-lime-900 cursor-pointer">
                    Share your thoughts freely today... <Sparkles className="w-5 h-5 inline-block text-lime-700 ml-1" />
                </p>
            </div>
        </div>
    );
};

// --- Komponen FeedPost (Card Postingan) ---
// Ditempatkan di sini karena tidak perlu dipisahkan
interface FeedPostProps {
    avatarIcon: React.ReactNode;
    username: string;
    category: string;
    timeAgo: string;
    content: string;
    reactions: string;
    reactCount: number;
    commentCount: number;
}

const FeedPost: React.FC<FeedPostProps> = ({
    avatarIcon,
    username,
    category,
    timeAgo,
    content,
    reactions,
    reactCount,
    commentCount,
}) => {
    return (
        <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 mb-4 mx-4 sm:mx-0">
            {/* Header Post */}
            <div className="flex items-center mb-3">
                {/* Avatar */}
                <div className="p-1 rounded-full bg-purple-100 text-purple-600 mr-3">
                    {avatarIcon}
                </div>
                {/* Info Pengguna */}
                <div>
                    <div className="font-semibold text-gray-800 flex items-center">
                        {username}
                        <span className="ml-2 text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                            {category}
                        </span>
                    </div>
                    <span className="text-xs text-gray-500 ml-0.5">{timeAgo}</span>
                </div>
            </div>

            {/* Konten Post */}
            <p className="text-gray-700 text-base mb-4 whitespace-pre-line">
                {content}
            </p>

            {/* Reaksi Emoji dan Count */}
            <div className="flex items-center text-sm text-gray-500 mb-4">
                <span className="mr-2 text-lg">{reactions}</span>
                <span className="font-medium text-sm text-gray-600">{reactCount}</span>
            </div>

            {/* Interaksi (React, Comment, Share) */}
            <div className="flex justify-start space-x-8 text-gray-500 text-sm border-t border-gray-100 pt-3">
                {/* Tombol React */}
                <button className="flex items-center hover:text-purple-600 transition duration-150 font-medium">
                    <Sparkles className="w-4 h-4 mr-1 text-orange-400" />
                    <span className="text-gray-600">React</span>
                </button>

                {/* Tombol Komentar */}
                <button className="flex items-center hover:text-purple-600 transition duration-150">
                    <MessageSquare className="w-4 h-4 mr-1" />
                    <span className="font-medium text-gray-600">{commentCount}</span>
                </button>

                {/* Tombol Share */}
                <button className="flex items-center hover:text-purple-600 transition duration-150">
                    <Share2 className="w-4 h-4 mr-1" />
                    <span className="font-medium text-gray-600">Share</span>
                </button>
            </div>
        </div>
    );
};


// --- Halaman Utama (Index Page) ---
const HomePage: React.FC = () => {

    // Data postingan contoh tetap berada di sini
    const posts = [
        {
            id: 1,
            avatarIcon: <Sparkles className="w-4 h-4" />,
            username: 'Emma_creates',
            category: 'Mental Wellness',
            timeAgo: '2h ago',
            content: "Today I realized that sometimes we're too hard on ourselves. What we really need is rest, not constant high expectations. Self-compassion is everything ✨",
            reactions: '🔥😍🤯',
            reactCount: 44,
            commentCount: 15,
        },
        {
            id: 2,
            avatarIcon: <User className="w-4 h-4" />,
            username: 'Anonymous',
            category: 'Life Stories',
            timeAgo: '4h ago',
            content: "Honestly, I'm still learning not to overthink every small thing. Sometimes my brain feels like 100 browser tabs open at once. Anyone relate? 🤪",
            reactions: '🔥🤯😂',
            reactCount: 114,
            commentCount: 28,
        },
        {
            id: 3,
            avatarIcon: <Sun className="w-4 h-4" />,
            username: 'Alex_aesthetic',
            category: 'Creative Corner',
            timeAgo: '5h ago',
            content: "Just finished an art project I've been postponing for 3 months. Sometimes you just need one day where you're really \"feeling it\" to start something. Don't overthink the process!",
            reactions: '🧠✨🔥',
            reactCount: 80,
            commentCount: 12,
        },
        {
            id: 3,
            avatarIcon: <Sun className="w-4 h-4" />,
            username: 'Alex_aesthetic',
            category: 'Creative Corner',
            timeAgo: '5h ago',
            content: "Just finished an art project I've been postponing for 3 months. Sometimes you just need one day where you're really \"feeling it\" to start something. Don't overthink the process!",
            reactions: '🧠✨🔥',
            reactCount: 80,
            commentCount: 12,
        },
        {
            id: 3,
            avatarIcon: <Sun className="w-4 h-4" />,
            username: 'Alex_aesthetic',
            category: 'Creative Corner',
            timeAgo: '5h ago',
            content: "Just finished an art project I've been postponing for 3 months. Sometimes you just need one day where you're really \"feeling it\" to start something. Don't overthink the process!",
            reactions: '🧠✨🔥',
            reactCount: 80,
            commentCount: 12,
        },
    ];

    return (
        <MainLayout>
            {/* 1. Header yang Diimport */}
            <Header />

            {/* 2. Kotak Share Thoughts (Didefinisikan Lokal) */}
            <ShareThoughts />

            {/* 3. Feed Postingan (Didefinisikan Lokal) */}
            <div className="space-y-4 pb-20">
                {posts.map(post => (
                    <FeedPost
                        key={post.id}
                        avatarIcon={post.avatarIcon}
                        username={post.username}
                        category={post.category}
                        timeAgo={post.timeAgo}
                        content={post.content}
                        reactions={post.reactions}
                        reactCount={post.reactCount}
                        commentCount={post.commentCount}
                    />
                ))}
            </div>

        </MainLayout>
    );
};

export default HomePage;