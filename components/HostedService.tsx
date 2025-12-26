
import React from 'react';
import { Cloud, Zap, Shield, Cpu, ExternalLink, Box, Server, CheckCircle2, Globe, Activity } from 'lucide-react';

const HostedService: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      <header className="space-y-4">
        <div className="inline-flex items-center space-x-2 text-sky-400 text-xs font-bold uppercase tracking-widest bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
          <Cloud size={14} />
          <span>Managed Infrastructure</span>
        </div>
        <h2 className="text-4xl font-black text-white tracking-tighter">Hosted Service: Fastblocks</h2>
        <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
          Focus on your community, not the hardware. <strong>Fastblocks</strong> is a premium PaaS product designed to simplify IoTeX node management and data access.
        </p>
      </header>

      {/* Hero Card */}
      <div className="bg-gradient-to-br from-sky-500/10 to-transparent border border-white/5 p-10 rounded-[3rem] relative overflow-hidden group shadow-2xl">
        <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
          <Cloud size={240} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <h3 className="text-3xl font-black text-white leading-tight">Lowering the Threshold for Delegates</h3>
            <p className="text-gray-400 leading-relaxed">
              Building and maintaining nodes by yourself involves complex challenges like environmental consistency, security hardening, and storage scaling. Fastblocks handles all of this via a resilient, dedicated infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://www.fastblocks.io/" 
                target="_blank"
                className="px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-2xl transition-all shadow-xl shadow-sky-500/20 flex items-center justify-center space-x-2"
              >
                <span>Visit Fastblocks.io</span>
                <ExternalLink size={18} />
              </a>
              <a 
                href="https://docs.fastblocks.io" 
                target="_blank"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-2xl transition-all flex items-center justify-center space-x-2"
              >
                <span>Read Documentation</span>
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Security", icon: <Shield className="text-emerald-400" /> },
              { label: "Speed", icon: <Zap className="text-yellow-400" /> },
              { label: "Storage", icon: <Server className="text-sky-400" /> },
              { label: "Consistency", icon: <Box className="text-purple-400" /> }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-black/40 border border-white/5 rounded-3xl flex flex-col items-center text-center space-y-3">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center">
                  {item.icon}
                </div>
                <span className="text-xs font-bold text-gray-300">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Architecture Section */}
        <div className="lg:col-span-2 space-y-8">
           <div className="bg-[#14191f] border border-white/5 rounded-[2.5rem] p-8 space-y-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Cpu size={120} />
              </div>
              <h3 className="text-2xl font-black text-white flex items-center space-x-3">
                <Globe className="text-sky-400" />
                <span>Microservice Architecture</span>
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                The platform is built on an advanced, dynamically scalable, and microservice-driven architecture. This ensures that your node is not just a standalone instance, but a part of a resilient network infrastructure.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                 {[
                   "Dynamically Scalable Compute",
                   "Redundant Storage Layers",
                   "Global Traffic Management",
                   "Automated Security Patches"
                 ].map((feat, i) => (
                   <div key={i} className="flex items-center space-x-3 text-xs text-gray-400 bg-black/20 p-4 rounded-2xl border border-white/5">
                      <CheckCircle2 size={16} className="text-sky-500 shrink-0" />
                      <span>{feat}</span>
                   </div>
                 ))}
              </div>
           </div>

           <div className="p-8 bg-sky-500/5 border border-sky-500/10 rounded-[2.5rem] flex items-start space-x-4">
              <Activity size={24} className="text-sky-400 shrink-0 mt-1" />
              <div className="space-y-2">
                <h4 className="font-bold text-white">Why choose Fastblocks?</h4>
                <p className="text-xs text-sky-200/60 leading-relaxed">
                  Delegates who want a "hands-off" technical approach find Fastblocks essential. It eliminates the need for deep Linux system administration knowledge while providing the same high-availability guarantees required for consensus.
                </p>
              </div>
           </div>
        </div>

        {/* Sidebar info */}
        <div className="space-y-6">
           <div className="bg-black/40 border border-white/5 rounded-[2.5rem] p-8 space-y-6 shadow-xl">
             <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Platform Focus</h4>
             <div className="space-y-4">
                {[
                  "IoTeX Dedicated Nodes",
                  "Environmental Consistency",
                  "Managed Security Hardening",
                  "High-Speed Network Hubs"
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3 text-xs text-gray-400">
                    <div className="w-5 h-5 bg-sky-500/10 rounded-full flex items-center justify-center text-sky-500 mt-0.5 shrink-0">
                      <Zap size={12} />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
             </div>
           </div>

           <div className="p-8 bg-[#14191f] border border-white/5 rounded-[2.5rem] space-y-4">
              <div className="flex items-center space-x-3 text-white">
                <Box size={20} className="text-sky-400" />
                <h4 className="font-bold">Ecosystem Part</h4>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed italic">
                "Fastblocks is a key partner in the IoTeX ecosystem, providing the tooling necessary for professional block production."
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default HostedService;
