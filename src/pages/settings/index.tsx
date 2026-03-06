import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import Header from '../../components/Header';
import {
    Settings, User, Lock, Bell,
    Eye, Globe, ShieldCheck, LogOut,
    ChevronRight, Moon, HelpCircle
} from 'lucide-react';

const settingSections = [
    {
        title: 'Account',
        items: [
            { icon: User, label: 'Personal Information', description: 'Update your name, bio, and contact details', color: 'bg-blue-100', iconColor: 'text-blue-600' },
            { icon: Lock, label: 'Password & Security', description: 'Manage your password and 2-step verification', color: 'bg-orange-100', iconColor: 'text-orange-600' },
        ]
    },
    {
        title: 'Preferences',
        items: [
            { icon: Bell, label: 'Notifications', description: 'Configure how you receive alerts', color: 'bg-purple-100', iconColor: 'text-purple-600' },
            { icon: Moon, label: 'Display & Mode', description: 'Dark mode, text size, and accessibility', color: 'bg-indigo-100', iconColor: 'text-indigo-600' },
            { icon: Globe, label: 'Language', description: 'Change the app language', color: 'bg-emerald-100', iconColor: 'text-emerald-600' },
        ]
    },
    {
        title: 'Privacy',
        items: [
            { icon: Eye, label: 'Privacy Center', description: 'Control who can see your activity', color: 'bg-rose-100', iconColor: 'text-rose-600' },
            { icon: ShieldCheck, label: 'Blocked Accounts', description: 'Manage the people you\'ve blocked', color: 'bg-gray-100', iconColor: 'text-gray-600' },
        ]
    },
];

const SettingsPage: React.FC = () => {
    return (
        <MainLayout>
            <Header />

            <div className="w-full max-w-full pb-20 px-4 sm:px-0">

                {/* ── HEADER SECTION ── */}
                <div className="mb-8 pt-6">
                    <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                        <div className="p-3 bg-gray-100 border border-gray-50 rounded-2xl shadow-sm">
                            <Settings size={28} className="text-gray-600" />
                        </div>
                        Settings
                    </h1>
                    <p className="text-gray-500 mt-2 ml-1">
                        Manage your account, privacy, and app experience.
                    </p>
                </div>

                {/* ── SETTINGS CONTENT ── */}
                <div className="space-y-8">
                    {settingSections.map((section, i) => (
                        <div key={i}>
                            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 ml-2">
                                {section.title}
                            </h2>
                            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                                {section.items.map((item, j) => {
                                    const Icon = item.icon;
                                    return (
                                        <div
                                            key={j}
                                            className={`flex items-center gap-4 p-5 cursor-pointer transition-all duration-300
                                                ${j !== section.items.length - 1 ? 'border-b border-gray-50' : ''}
                                                hover:bg-gray-50/50 group`}
                                        >
                                            <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                                <Icon size={22} className={item.iconColor} />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-bold text-gray-800 group-hover:text-purple-700 transition">
                                                    {item.label}
                                                </p>
                                                <p className="text-xs text-gray-400 font-medium mt-0.5">{item.description}</p>
                                            </div>
                                            <ChevronRight size={18} className="text-gray-300 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}

                    {/* ── SECONDARY ACTIONS ── */}
                    <div className="pt-4 space-y-3">
                        <button className="w-full flex items-center justify-between p-5 bg-white border border-gray-100 rounded-3xl text-sm font-bold text-gray-600 hover:bg-gray-50 transition shadow-sm group">
                            <div className="flex items-center gap-3">
                                <HelpCircle size={20} className="text-blue-500" />
                                <span>Help & Support</span>
                            </div>
                            <ChevronRight size={18} className="text-gray-300 group-hover:translate-x-1 transition-all" />
                        </button>

                        <button className="w-full flex items-center justify-center gap-2 p-5 bg-rose-50 border border-rose-100 rounded-3xl text-sm font-bold text-rose-600 hover:bg-rose-100 transition-all shadow-sm">
                            <LogOut size={20} />
                            <span>Log Out</span>
                        </button>
                    </div>

                    <div className="text-center pt-6">
                        <p className="text-[10px] text-gray-300 font-bold uppercase tracking-tighter">
                            Unbound App • Version 1.2.0 • Build 24k8
                        </p>
                    </div>
                </div>

            </div>
        </MainLayout>
    );
};

export default SettingsPage;
