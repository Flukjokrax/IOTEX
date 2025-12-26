
import React from 'react';
import { Shield, Users, Cpu, Coins, ArrowRight, ExternalLink, Box, Vote } from 'lucide-react';

const Overview: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="space-y-4">
        <div className="inline-flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
          <Shield size={14} />
          <span>Governance & Consensus</span>
        </div>
        <h2 className="text-4xl font-black text-white tracking-tighter">What is a Delegate?</h2>
        <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
          The IoTeX network is a digital democracy where token-holders secure the future by electing trusted nodes to maintain the blockchain.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#14191f]/40 border border-white/5 p-8 rounded-[2rem] hover:border-emerald-500/30 transition-all duration-500 group">
          <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
            <Users size={24} />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Digital Democracy</h3>
          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            IoTeX token-holders <strong>stake</strong> their IOTX and vote for Delegates. This voting power directly determines who manages the network's consensus and security.
          </p>
          <div className="flex items-center space-x-2 text-emerald-400 text-xs font-black uppercase tracking-widest">
            <Vote size={14} />
            <span>Staking Power</span>
          </div>
        </div>

        <div className="bg-[#14191f]/40 border border-white/5 p-8 rounded-[2rem] hover:border-indigo-500/30 transition-all duration-500 group">
          <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
            <Cpu size={24} />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Roll-DPoS Consensus</h3>
          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            A randomized Delegated Proof of Stake system where 24 of the top 36 community-voted Delegates are randomly selected every hour to mine blocks.
          </p>
          <div className="flex items-center space-x-2 text-indigo-400 text-xs font-black uppercase tracking-widest">
            <Box size={14} />
            <span>Efficient Block Production</span>
          </div>
        </div>
      </div>

      {/* Consensus Delegates Section */}
      <section className="bg-gradient-to-br from-emerald-500/5 to-transparent border border-emerald-500/10 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold text-white">The Top 36: Consensus Delegates</h3>
            <p className="text-gray-400 leading-relaxed">
              The top 36 voted Delegates are designated as <strong>Consensus Delegates</strong>. They handle all transaction verification and block production. For their services, they earn IOTX rewards which are often shared with their loyal voters.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="px-4 py-2 bg-black/40 border border-white/5 rounded-2xl flex flex-col">
                <span className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">Active Delegates</span>
                <span className="text-lg font-bold text-white">100+ Nodes</span>
              </div>
              <div className="px-4 py-2 bg-black/40 border border-white/5 rounded-2xl flex flex-col">
                <span className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">Voter Yield</span>
                <span className="text-lg font-bold text-emerald-400">Up to 10% APY</span>
              </div>
            </div>
            <a 
              href="https://stake.iotex.io" 
              target="_blank" 
              className="inline-flex items-center space-x-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-6 rounded-2xl transition-all shadow-xl shadow-emerald-500/20 group"
            >
              <span>Explore Current Delegates</span>
              <ExternalLink size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-[#0b0e11] border border-white/10 rounded-3xl p-6 shadow-2xl flex flex-col justify-center items-center text-center space-y-4">
              <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-500 animate-pulse">
                <Shield size={40} />
              </div>
              <div>
                <div className="text-3xl font-black text-white">36</div>
                <div className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter">Consensus Seats</div>
              </div>
              <p className="text-xs text-gray-400">Randomly picking 24 active block producers per hour.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rewards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: <Coins />, title: "Earn IOTX", desc: "Delegates earn block rewards and foundation subsidies for their infrastructure." },
          { icon: <Users />, title: "Community Share", desc: "Many delegates distribute up to 90% of their rewards back to their voters." },
          { icon: <Shield />, title: "Network Security", desc: "By voting and staking, the community creates a resilient and secure barrier." },
        ].map((item, idx) => (
          <div key={idx} className="p-6 bg-white/5 border border-white/5 rounded-3xl">
            <div className="text-emerald-500 mb-4">{item.icon}</div>
            <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
            <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
