import React from "react";
import { TrendingUp, Palette, Book, Music, Coffee, User } from "lucide-react";

const topicIcons = [Palette, Book, Music, Coffee];

const RightSidebar: React.FC = () => {
    return (
        <aside
            className="
                hidden lg:flex flex-col w-80 h-screen bg-white border-l p-6
                sticky top-0 overflow-hidden
            "
        >
            {/* Scroll hanya di bagian dalam */}
            <div className="flex-1 overflow-y-auto pr-2">

                {/* TRENDING */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <TrendingUp size={18} className="text-purple-500" />
                        <h2 className="font-semibold text-lg">Trending Now</h2>
                    </div>

                    <ul className="flex flex-col gap-5 text-sm">
                        {[
                            { tag: "#MentalHealthMatters", posts: "12.5K posts", growth: "+25%" },
                            { tag: "#SelfLoveJourney", posts: "8.9K posts", growth: "+18%" },
                            { tag: "#CreativeExpression", posts: "15.2K posts", growth: "+32%" },
                            { tag: "#GenZThoughts", posts: "22.1K posts", growth: "+45%" },
                            { tag: "#FreedomToBeMe", posts: "6.7K posts", growth: "+12%" }
                        ].map((item, i) => (
                            <li key={i} className="flex items-center justify-between">
                                <div className="flex flex-col">
                                    <span className="font-medium">{item.tag}</span>
                                    <span className="text-xs text-gray-500">{item.posts}</span>
                                </div>
                                <span className="neon-badge">{item.growth}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="my-8 border-t"></div>

                {/* DISCOVER TOPICS */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <TrendingUp size={18} className="text-purple-500 rotate-90" />
                        <h2 className="font-semibold text-lg">Discover Topics</h2>
                    </div>

                    <ul className="flex flex-col gap-6 text-sm">
                        {[
                            { name: "Art & Design", members: "18.5K" },
                            { name: "Book Club", members: "15.2K" },
                            { name: "Music Lovers", members: "21.8K" },
                            { name: "Mindfulness", members: "12.9K" }
                        ].map((topic, idx) => {
                            const Icon = topicIcons[idx];
                            return (
                                <li key={idx} className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="p-3 bg-purple-100 rounded-full">
                                            <Icon size={18} className="text-purple-600" />
                                        </div>

                                        <div>
                                            <p className="font-medium">{topic.name}</p>
                                            <p className="text-xs text-gray-500">
                                                {topic.members} members
                                            </p>
                                        </div>
                                    </div>

                                    <button className="neon-badge px-4">
                                        Join
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className="my-8 border-t"></div>

                {/* ACTIVE NOW */}
                <div className="mb-10">
                    <div className="flex items-center gap-2 mb-4">
                        <User size={18} className="text-purple-600" />
                        <h2 className="font-semibold text-lg">Active Now</h2>
                    </div>

                    <ul className="flex flex-col gap-6 text-sm">
                        {[
                            { name: "Emma_creates", status: "Sharing creative journey", emoji: "✨" },
                            { name: "Alex_thoughts", status: "Active in Mental Wellness", emoji: "💭" },
                            { name: "Maya_art", status: "Posted new artwork", emoji: "🎨" }
                        ].map((user, i) => (
                            <li key={i} className="flex items-center gap-3">
                                {/* Avatar */}
                                <div className="relative">
                                    <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white text-xl">
                                        {user.emoji}
                                    </div>
                                    <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-lime-400 border-2 border-white rounded-full"></span>
                                </div>

                                <div>
                                    <p className="font-medium">{user.name}</p>
                                    <p className="text-xs text-gray-500">{user.status}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </aside>
    );
};

export default RightSidebar;
