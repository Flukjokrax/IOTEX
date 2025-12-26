
import React from 'react';
import { Gift, Zap, TrendingUp, Sparkles, Hexagon, Orbit, Network, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';

const Rewards: React.FC = () => {
  const rewardCards = [
    {
      title: "Fixed Block Reward",
      subtitle: "For every mined block",
      primary: "8 IOTX per block",
      secondary: "240 IOTX per epoch",
      desc: "Earned by Consensus Delegates for verifying transactions and producing blocks (1 block every 5 sec).",
      icon: <Hexagon size={48} className="text-emerald-400" />,
      gradient: "from-emerald-500/20 to-transparent",
      borderColor: "group-hover:border-emerald-500/50"
    },
    {
      title: "Foundation Bonus",
      subtitle: "Extra from IoTeX Foundation",
      primary: "80 IOTX per epoch",
      secondary: "For top 36 Delegates",
      desc: "Additional incentives provided by the IoTeX Foundation to the top 36 voted delegates for securing the network.",
      icon: <Orbit size={48} className="text-indigo-400" />,
      gradient: "from-indigo-500/20 to-transparent",
      borderColor: "group-hover:border-indigo-500/50"
    },
    {
      title: "Epoch Bonus Reward",
      subtitle: "Shared Pool",
      primary: "18,750 IOTX per epoch",
      secondary: "Split by top 100 Delegates",
      desc: "Distributed among the top 100 delegates proportional to their total vote percentage every hour.",
      icon: <Network size={48} className="text-pink-400" />,
      gradient: "from-pink-500/20 to-transparent",
      borderColor: "group-hover:border-pink-500/50"
    }
  ];

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="space-y-4">
        <div className="inline-flex items-center space-x-2 text-indigo-400 text-xs font-bold uppercase tracking-widest bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
          <Gift size={14} />
          <span>Incentives & Ecosystem Perks</span>
        </div>
        <h2 className="text-4xl font-black text-white tracking-tighter">Benefits & Rewards</h2>
        <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
          Becoming an IoTeX Delegate offers competitive financial returns and exclusive governance rights within the machine economy.
        </p>
      </header>

      {/* Hero Rewards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {rewardCards.map((card, i) => (
          <div 
            key={i} 
            className={`group relative p-8 bg-[#14191f] border border-white/5 rounded-[2.5rem] overflow-hidden transition-all duration-500 ${card.borderColor} shadow-xl hover:-translate-y-1`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            
            <div className="relative z-10 flex flex-col items-center text-center h-full">
              <div className="mb-8 transform group-hover:scale-110 transition-transform duration-500">
                {card.icon}
              </div>
              
              <h3 className="text-lg font-bold text-white mb-1">{card.title}</h3>
              <p className="text-xs text-gray-500 mb-6">{card.subtitle}</p>
              
              <div className="mt-auto space-y-2">
                <div className="text-2xl font-black text-white tracking-tight">{card.primary}</div>
                <div className="text-sm font-bold text-emerald-400/80">{card.secondary}</div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/5 text-xs text-gray-500 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity">
                {card.desc}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Exclusive Benefits Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-8">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white flex items-center space-x-3">
            <Sparkles className="text-yellow-400" />
            <span>Exclusive Perks</span>
          </h3>
          <ul className="space-y-4">
            {[
              "Proposal rights on gov.iotex.io and join Delegate-only votes.",
              "Early access to new IoTeX features, tools, and ecosystem dApps.",
              "Direct communication channels with the IoTeX core team.",
              "Invitation to exclusive global events and workshops."
            ].map((benefit, i) => (
              <li key={i} className="flex items-start space-x-3 p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-white/10 transition-all">
                <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300 leading-relaxed font-medium">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gradient-to-br from-indigo-500/10 to-emerald-500/10 p-8 rounded-[2.5rem] border border-white/5 relative overflow-hidden group">
          <div className="absolute -right-4 -bottom-4 opacity-5 transform rotate-12 group-hover:scale-110 transition-transform">
             <TrendingUp size={240} />
          </div>
          <div className="relative z-10">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white mb-6">
               <Zap size={24} fill="currentColor" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Auto-Distribution</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Delegates can share rewards with their voters seamlessly using <strong>HERMES</strong>. Our auto-distribution service handles everything based on your custom policy.
            </p>
            <div className="space-y-3">
              <a 
                href="https://hermes.to" 
                target="_blank" 
                className="flex items-center justify-between p-4 bg-black/40 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-all group/link"
              >
                <span className="text-white font-bold text-sm">Open HERMES Portal</span>
                <ExternalLink size={16} className="text-gray-500 group-hover/link:text-emerald-400 transition-colors" />
              </a>
              <a 
                href="https://hermes.to/user-guide" 
                target="_blank" 
                className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-transparent hover:bg-white/10 transition-all group/link"
              >
                <span className="text-gray-300 font-semibold text-xs">Read HERMES User Guide</span>
                <ArrowRight size={14} className="text-gray-600 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
