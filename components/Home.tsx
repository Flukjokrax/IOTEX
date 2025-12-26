
import React from 'react';
import { Tab } from '../types';
import { ArrowRight, Shield, Zap, Globe, MessageCircle, Send } from 'lucide-react';

interface HomeProps {
  setActiveTab: (tab: Tab) => void;
}

const Home: React.FC<HomeProps> = ({ setActiveTab }) => {
  return (
    <div className="space-y-12 animate-in fade-in zoom-in-95 duration-1000">
      <section className="relative py-12">
        <div className="relative z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-6">
            <Globe size={12} />
            <span>Official Governance Hub</span>
          </div>
          <h1 className="text-6xl font-black text-white leading-tight tracking-tighter mb-6">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-indigo-400">IoTeX Forge</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed font-medium">
            Join the backbone of the Decentralized Physical Infrastructure Network (DePIN). 
            Secure the network, earn rewards, and shape the future of machine intelligence on the IoTeX blockchain.
          </p>
        </div>
        
        {/* Abstract Cubes Visual Inspired by Image */}
        <div className="absolute top-0 right-0 w-96 h-96 opacity-30 select-none pointer-events-none hidden lg:block">
           <div className="relative w-full h-full">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute border border-emerald-500/30 bg-emerald-500/5 backdrop-blur-sm transition-all duration-1000 animate-pulse"
                  style={{
                    width: `${60 + i * 20}px`,
                    height: `${60 + i * 20}px`,
                    top: `${i * 30}px`,
                    right: `${i * 30}px`,
                    transform: `rotateX(45deg) rotateZ(${i * 15}deg)`,
                    animationDelay: `${i * 0.2}s`
                  }}
                />
              ))}
           </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <button 
          onClick={() => setActiveTab(Tab.GUIDE)}
          className="group p-8 bg-white/5 border border-white/10 rounded-[2.5rem] text-left hover:bg-white/[0.08] hover:border-emerald-500/30 transition-all duration-500 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Zap size={80} />
          </div>
          <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
            <Zap size={28} fill="currentColor" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Bootstrap Node</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">Complete step-by-step infrastructure guide to launching your first full node.</p>
          <div className="flex items-center text-emerald-400 font-bold text-xs uppercase tracking-widest group-hover:translate-x-1 transition-transform">
            <span>Get Started</span>
            <ArrowRight size={14} className="ml-2" />
          </div>
        </button>

        <button 
          onClick={() => setActiveTab(Tab.CALCULATOR)}
          className="group p-8 bg-white/5 border border-white/10 rounded-[2.5rem] text-left hover:bg-white/[0.08] hover:border-indigo-500/30 transition-all duration-500 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Shield size={80} />
          </div>
          <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
            <Shield size={28} fill="currentColor" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Reward Analytics</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">Simulate staking scenarios and project your long-term yield as a Delegate.</p>
          <div className="flex items-center text-indigo-400 font-bold text-xs uppercase tracking-widest group-hover:translate-x-1 transition-transform">
            <span>Open Calculator</span>
            <ArrowRight size={14} className="ml-2" />
          </div>
        </button>

        <div className="group p-8 bg-gradient-to-br from-emerald-500/10 to-transparent border border-white/5 rounded-[2.5rem] flex flex-col justify-center">
          <h4 className="text-sm font-black text-emerald-400 uppercase tracking-[0.2em] mb-4">Support Channels</h4>
          <div className="space-y-4">
            <a href="https://iotex.io/devdiscord" target="_blank" className="flex items-center justify-between p-4 bg-black/40 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-all">
              <div className="flex items-center space-x-3">
                <MessageCircle size={18} className="text-emerald-400" />
                <span className="text-white font-semibold text-sm">Discord Community</span>
              </div>
              <ArrowRight size={14} className="text-gray-600" />
            </a>
            <a href="https://t.me/IoTeXGroup" target="_blank" className="flex items-center justify-between p-4 bg-black/40 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-all">
              <div className="flex items-center space-x-3">
                <Send size={18} className="text-emerald-400" />
                <span className="text-white font-semibold text-sm">Telegram Admin</span>
              </div>
              <ArrowRight size={14} className="text-gray-600" />
            </a>
          </div>
          <p className="text-[10px] text-gray-500 mt-6 leading-relaxed">
            For additional onboarding support, please contact an admin on our official channels.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
