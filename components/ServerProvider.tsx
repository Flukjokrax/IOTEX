
import React from 'react';
import { Cloud, Shield, Activity, Globe, Zap, ExternalLink, ShieldAlert, Cpu } from 'lucide-react';

const ServerProvider: React.FC = () => {
  const providers = [
    {
      name: "Amazon AWS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      desc: "Enterprise-grade infrastructure with global availability zones and advanced networking.",
      features: ["Elastic Load Balancing", "AWS Shield Standard", "Global Accelerator"]
    },
    {
      name: "Google Cloud (GCE)",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_Logo.svg",
      desc: "High-performance virtual machines with private fiber networking and robust security tools.",
      features: ["Cloud Load Balancing", "Cloud Armor (DDoS)", "Shielded VMs"]
    },
    {
      name: "Cloudflare",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Cloudflare_Logo.svg",
      desc: "Specialized in edge security and protection against global network-level threats.",
      features: ["L3/L4 DDoS Protection", "WAF Integration", "Magic Transit"]
    }
  ];

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      <header className="space-y-4">
        <div className="inline-flex items-center space-x-2 text-sky-400 text-xs font-bold uppercase tracking-widest bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
          <Cloud size={14} />
          <span>Cloud Infrastructure</span>
        </div>
        <h2 className="text-4xl font-black text-white tracking-tighter">Server Providers</h2>
        <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
          Running your node behind a commercial cloud load balancer is a critical defense mechanism against network-level attacks.
        </p>
      </header>

      {/* Resilience Warning */}
      <div className="bg-emerald-500/10 border border-emerald-500/20 p-8 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[80px] rounded-full"></div>
        <div className="shrink-0 w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform duration-500">
          <Shield size={32} />
        </div>
        <div className="flex-1 space-y-2">
          <h4 className="text-xl font-bold text-white">Commercial Protection</h4>
          <p className="text-sm text-emerald-200/60 leading-relaxed max-w-2xl">
            Reliable service providers offer solutions built by network experts to help you protect your node. Cloud providers provide high-level protection against large-scale DDoS attacks that are difficult to mitigate on private hardware.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {providers.map((provider, i) => (
          <div key={i} className="bg-[#14191f] border border-white/5 rounded-[2.5rem] p-8 flex flex-col group hover:border-sky-500/30 transition-all duration-500 shadow-xl">
            <div className="h-12 w-auto flex items-center mb-8 grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100">
              <span className="text-xl font-black text-white">{provider.name}</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              {provider.desc}
            </p>
            <div className="space-y-3 mt-auto">
              {provider.features.map((feat, j) => (
                <div key={j} className="flex items-center space-x-2 text-[11px] font-bold text-gray-500">
                  <div className="w-1 h-1 rounded-full bg-sky-500" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <div className="bg-black/40 border border-white/5 rounded-[2.5rem] p-8 space-y-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <ShieldAlert size={120} />
            </div>
            <h3 className="text-2xl font-black text-white flex items-center space-x-3">
              <Zap className="text-sky-400" />
              <span>Attack Mitigation</span>
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Commercial cloud load balancers effectively neutralize sophisticated network-level threats before they reach your IoTeX node software:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "L3 & L4 Protection", desc: "Network and Transport layer security." },
                { label: "SYN Flood Control", desc: "TCP handshake resource protection." },
                { label: "IP Fragment Floods", desc: "Prevents buffer overflow from fragments." },
                { label: "Port Exhaustion", desc: "Manages connection state limits." }
              ].map((item, i) => (
                <div key={i} className="p-4 bg-white/5 rounded-2xl border border-white/5 group-hover:border-sky-500/20 transition-all">
                  <h4 className="text-xs font-black text-sky-400 uppercase tracking-widest mb-1">{item.label}</h4>
                  <p className="text-[10px] text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6 sticky top-8">
          <div className="bg-[#0b0e11] border border-white/10 rounded-[2.5rem] p-8 shadow-2xl space-y-6">
            <div className="flex items-center space-x-3 text-white">
              <Activity className="text-emerald-400" />
              <h3 className="text-xl font-bold">Resilience Checklist</h3>
            </div>
            <div className="space-y-4">
               {[
                 "Deploy in multi-region configurations.",
                 "Use private VPCs for node communication.",
                 "Implement automated health checks.",
                 "Enable flow logs for security auditing."
               ].map((text, i) => (
                 <div key={i} className="flex items-center space-x-3 text-sm text-gray-400">
                    <div className="w-5 h-5 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-500">
                      <Zap size={12} />
                    </div>
                    <span>{text}</span>
                 </div>
               ))}
            </div>
            <div className="pt-6 border-t border-white/5">
              <button className="w-full py-4 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-2xl transition-all shadow-xl shadow-sky-500/20 flex items-center justify-center space-x-2">
                 <span>View Infrastructure Guide</span>
                 <ExternalLink size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerProvider;
