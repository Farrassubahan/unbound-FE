import React from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
    activeTab: 'posts' | 'topics' | 'activity';
}

const ProfileTabs: React.FC<Props> = ({ activeTab }) => {
    const tabs = [
        { key: 'posts', label: 'Posts', to: '/profile' },
        { key: 'topics', label: 'Favorite Topics', to: '/profile/favorite-topics' },
        { key: 'activity', label: 'Activity', to: '/profile/activity' },
    ];

    return (
        <div className="flex gap-8 border-b pb-2 text-sm">
            {tabs.map((tab) => (
                <NavLink
                    key={tab.key}
                    to={tab.to}
                    end={tab.key === 'posts'}
                    className={
                        activeTab === tab.key
                            ? "font-semibold border-b-2 border-purple-600 pb-1 text-gray-900"
                            : "text-gray-500 hover:text-gray-700 transition pb-1"
                    }
                >
                    {tab.label}
                </NavLink>
            ))}
        </div>
    );
};

export default ProfileTabs;
