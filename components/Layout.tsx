
import React from 'react';
import { Tab } from '../types';

interface LayoutProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ activeTab, setActiveTab, children }) => {
  const tabs = [
    { id: Tab.HOME, label: 'Welcome', icon: '👋' },
    { id: Tab.OVERVIEW, label: 'Network Overview', icon: '🌐' },
    { id: Tab.REWARDS, label: 'Benefits & Rewards', icon: '🎁' },
    { id: Tab.HARDWARE, label: 'Hardware Specs', icon: '🖥️' },
    { id: Tab.ACCOUNTS, label: 'Delegate Accounts', icon: '🔑' },
    { id: Tab.REGISTRATION, label: 'Profile Registration', icon: '👤' },
    { id: Tab.NAME_REGISTRATION, label: 'Name Registration', icon: '🏷️' },
    { id: Tab.STAKING_BUCKET, label: 'Staking Bucket', icon: '🪣' },
    { id: Tab.ENDORSEMENT, label: 'Endorsement', icon: '🤝' },
    { id: Tab.SERVER_INFO, label: 'Server Information', icon: '📡' },
    { id: Tab.REWARDS_POLICY, label: 'Rewards Policy', icon: '⚖️' },
    { id: Tab.PROFILE_DATA, label: 'Profile Branding', icon: '🖼️' },
    { id: Tab.PROJECTIONS, label: 'Profit Projections', icon: '📈' },
    { id: Tab.HOSTED_SERVICE, label: 'Hosted Service', icon: '☁️' },
    { id: Tab.SERVER_PROVIDER, label: 'Server Providers', icon: '📡' },
    { id: Tab.EDGE_PROXY, label: 'Edge Proxy (Envoy)', icon: '🛡️' },
    { id: Tab.KUBERNETES, label: 'Kubernetes (K8s)', icon: '☸️' },
    { id: Tab.HIGH_AVAILABILITY, label: 'High Availability', icon: '🔄' },
    { id: Tab.GRAVITY_CHAIN, label: 'Gravity Chain', icon: '⛓️' },
    { id: Tab.IMPROVEMENTS, label: 'Improvements', icon: '📈' },
    { id: Tab.TUTORIALS, label: 'Portal Tutorials', icon: '📖' },
    { id: Tab.ADVANCED, label: 'Advanced Setup', icon: '⚡' },
    { id: Tab.GUIDE, label: 'Bootstrap Guide', icon: '🚀' },
    { id: Tab.DEVELOPER, label: 'Developer Hub', icon: '🛠️' },
    { id: Tab.ASSISTANT, label: 'AI Assistant', icon: '🤖' },
    { id: Tab.CALCULATOR, label: 'Reward Calculator', icon: '📊' },
    { id: Tab.TERMINAL, label: 'Quick Commands', icon: '💻' },
  ];

  return (
    <div className="min-h-screen bg-[#05070a] flex flex-col md:flex-row relative overflow-hidden text-slate-200">
      {/* Background Cinematic Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-500/10 blur-[150px] rounded-full"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]"></div>
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(to right, #ffffff05 1px, transparent 1px), linear-gradient(to bottom, #ffffff05 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      {/* Sidebar */}
      <nav className="w-full md:w-72 bg-[#0b0e11]/80 backdrop-blur-xl border-r border-white/5 p-8 flex flex-col space-y-2 z-20 overflow-y-auto">
        <div className="flex items-center space-x-3 mb-12 px-2">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <span className="font-black text-black text-lg italic">IX</span>
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tighter text-white leading-none">DELEGATE</h1>
            <p className="text-[10px] font-bold text-emerald-500 tracking-[0.2em] uppercase">Forge Engine</p>
          </div>
        </div>
        
        <div className="space-y-1.5">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center space-x-3 px-5 py-4 rounded-2xl transition-all duration-300 group ${
                activeTab === tab.id 
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.05)]' 
                  : 'text-gray-500 hover:text-white hover:bg-white/5 border border-transparent'
              }`}
            >
              <span className={`text-xl transition-transform duration-300 ${activeTab === tab.id ? 'scale-110' : 'group-hover:scale-110'}`}>
                {tab.icon}
              </span>
              <span className="text-sm font-semibold tracking-wide">{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="mt-auto pt-10 px-2">
          <div className="bg-white/5 backdrop-blur-md p-5 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group">
             <div className="absolute -right-2 -bottom-2 w-16 h-16 bg-emerald-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
            <h3 className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-3 opacity-80">Live Network</h3>
            <div className="flex items-center space-x-3 text-sm text-gray-200">
              <div className="relative">
                <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full block"></span>
                <span className="absolute inset-0 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping opacity-75"></span>
              </div>
              <span className="font-bold">Mainnet Genesis</span>
            </div>
            <p className="text-[11px] text-gray-500 mt-2 font-mono">Epoch: 42,901.83</p>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6 md:p-12 z-10 relative">
        <div className="max-w-5xl mx-auto h-full">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
