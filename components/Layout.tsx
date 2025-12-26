
import React from 'react';
import { Tab } from '../types';

interface LayoutProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ activeTab, setActiveTab, children }) => {
  const tabs = [
    { id: Tab.GUIDE, label: 'Bootstrap Guide', icon: '🚀' },
    { id: Tab.DEVELOPER, label: 'Developer Hub', icon: '🛠️' },
    { id: Tab.ASSISTANT, label: 'AI Assistant', icon: '🤖' },
    { id: Tab.CALCULATOR, label: 'Reward Calculator', icon: '📊' },
    { id: Tab.TERMINAL, label: 'Quick Commands', icon: '💻' },
  ];

  return (
    <div className="min-h-screen bg-[#0b0e11] flex flex-col md:flex-row">
      {/* Sidebar */}
      <nav className="w-full md:w-64 bg-[#14191f] border-r border-gray-800 p-6 flex flex-col space-y-2">
        <div className="flex items-center space-x-3 mb-10 px-2">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center font-bold text-black text-sm">IX</div>
          <h1 className="text-xl font-bold tracking-tight text-white">Delegate Forge</h1>
        </div>
        
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium ${
              activeTab === tab.id 
                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <span className="text-lg">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}

        <div className="mt-auto pt-10 px-2">
          <div className="bg-gradient-to-br from-indigo-900/40 to-emerald-900/20 p-4 rounded-2xl border border-white/5">
            <h3 className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">Network Status</h3>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span>Mainnet Live</span>
            </div>
            <p className="text-[11px] text-gray-500 mt-2">Epoch: 42,901</p>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4 md:p-10">
        <div className="max-w-4xl mx-auto h-full">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
