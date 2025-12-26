
import React from 'react';
import { 
  Settings, 
  Shield, 
  Server, 
  Cpu, 
  ExternalLink, 
  Activity, 
  Lock, 
  Coins, 
  Globe, 
  Zap,
  Info,
  ChevronRight,
  Monitor
} from 'lucide-react';

const Advanced: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      <header className="space-y-4">
        <div className="inline-flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
          <Settings size={14} />
          <span>Portal Configuration</span>
        </div>
        <h2 className="text-4xl font-black text-white tracking-tighter">Advanced Configuration</h2>
        <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
          The Advanced Configuration page in the Delegate Portal allows you to manage critical parameters for your identity, infrastructure, and financial policy.
        </p>
      </header>

      {/* Portal Simulation Dashboard */}
      <div className="space-y-10">
        
        {/* Section 1: Staking Bucket Settings */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 text-white">
              <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                <Coins size={20} />
              </div>
              <h3 className="text-2xl font-bold">Staking Bucket Settings</h3>
            </div>
            <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest bg-white/5 px-3 py-1 rounded border border-white/5">Primary Identity</span>
          </div>

          <div className="bg-[#14191f] border border-white/5 rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-gray-400 text-sm leading-relaxed">
                  View and edit your core staking requirements. Your bucket must maintain a minimum of 1.2M IOTX to remain eligible for consensus without external endorsement.
                </p>
                <div className="space-y-4">
                  {[
                    { label: "Bucket ID", value: "#4290", icon: <Activity size={16} /> },
                    { label: "Staking Duration", value: "365 Days", icon: <Activity size={16} /> },
                    { label: "Auto-Stake", value: "Enabled", icon: <Zap size={16} />, active: true }
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-black/40 rounded-2xl border border-white/5">
                      <div className="flex items-center space-x-3">
                        <span className="text-gray-500">{stat.icon}</span>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{stat.label}</span>
                      </div>
                      <span className={`text-sm font-black ${stat.active ? 'text-emerald-400' : 'text-white'}`}>{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-[#0b0e11] border border-white/10 rounded-[2rem] p-4 shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
                  <img 
                    src="https://1634134081-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F5whGkGlpM5BFduENPztv%2Fuploads%2FDvkSh2gNCsQ3pxnoqAtM%2FScreen%20Shot%202022-09-15%20at%202.56.39%20PM.png?alt=media&token=57c65465-629b-4c3e-a759-7289431dbaa9" 
                    alt="Staking Bucket Settings" 
                    className="w-full h-auto rounded-xl opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 p-4 bg-emerald-600 rounded-2xl shadow-xl shadow-emerald-500/20 text-white font-black text-[10px] uppercase tracking-widest flex items-center space-x-2">
                  <Lock size={12} />
                  <span>Secure Assets</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Server Info & Rewards */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 text-white">
              <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                <Server size={20} />
              </div>
              <h3 className="text-2xl font-bold">Server & Reward Distribution</h3>
            </div>
            <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest bg-white/5 px-3 py-1 rounded border border-white/5">Operations</span>
          </div>

          <div className="bg-[#14191f] border border-white/5 rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden group">
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="bg-[#0b0e11] border border-white/10 rounded-[2rem] p-4 shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
                  <img 
                    src="https://1634134081-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F5whGkGlpM5BFduENPztv%2Fuploads%2FLQipImbypck324Vq5t2h%2FScreen%20Shot%202022-09-15%20at%202.56.48%20PM.png?alt=media&token=a24da0f0-31f3-4c72-8aa3-e86836bfd18d" 
                    alt="Server Info and Reward Settings" 
                    className="w-full h-auto rounded-xl opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>

              <div className="order-1 lg:order-2 space-y-6">
                <p className="text-gray-400 text-sm leading-relaxed">
                  Update your node's networking metadata and define your reward policy. High transparency in reward distribution often results in higher community vote retention.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-6 bg-black/40 rounded-[1.5rem] border border-white/5 space-y-3">
                    <div className="flex items-center space-x-2 text-indigo-400">
                      <Globe size={16} />
                      <h4 className="text-xs font-black uppercase tracking-widest">Connectivity</h4>
                    </div>
                    <p className="text-[10px] text-gray-500">Manage External IP and Port 4689 broadcast settings.</p>
                  </div>
                  <div className="p-6 bg-black/40 rounded-[1.5rem] border border-white/5 space-y-3">
                    <div className="flex items-center space-x-2 text-pink-400">
                      <Monitor size={16} />
                      <h4 className="text-xs font-black uppercase tracking-widest">Distribution</h4>
                    </div>
                    <p className="text-[10px] text-gray-500">Set percentage for Voters and Foundation Bonus sharing.</p>
                  </div>
                </div>
                <div className="p-5 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl flex items-start space-x-3">
                  <Info size={18} className="text-indigo-400 shrink-0 mt-0.5" />
                  <p className="text-[11px] text-indigo-200/60 leading-relaxed italic">
                    Changes to the reward policy are reflected on the portal after one epoch (~1 hour).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Advanced Infrastructure Topics - The original content shifted to a "Deeper Infrastructure" footer */}
      <section className="space-y-8 pt-12 border-t border-white/5">
        <div className="space-y-2">
          <h3 className="text-2xl font-black text-white">Advanced Infrastructure Guides</h3>
          <p className="text-sm text-gray-500">Deep dive into technical excellence for enterprise delegates.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: "Edge Proxy", icon: <Shield size={18} />, link: "https://docs.iotex.io/get-started/advanced/edge-proxy" },
            { title: "High Availability", icon: <Activity size={18} />, link: "https://docs.iotex.io/get-started/advanced/high-availability" },
            { title: "Gravity Chain", icon: <Cpu size={18} />, link: "https://docs.iotex.io/get-started/advanced/gravity-chain-binding" }
          ].map((topic, i) => (
            <a 
              key={i}
              href={topic.link}
              target="_blank"
              className="group p-6 bg-white/5 border border-white/5 rounded-3xl hover:bg-emerald-500/5 hover:border-emerald-500/30 transition-all flex items-center justify-between"
            >
              <div className="flex items-center space-x-4">
                <div className="text-emerald-400 group-hover:scale-110 transition-transform">{topic.icon}</div>
                <span className="text-sm font-bold text-gray-200">{topic.title}</span>
              </div>
              <ChevronRight size={16} className="text-gray-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
            </a>
          ))}
        </div>
      </section>

      {/* Call to Action to Portal */}
      <div className="p-10 bg-gradient-to-br from-emerald-500/10 to-transparent border border-white/10 rounded-[3rem] relative overflow-hidden group text-center">
         <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-emerald-500/5 blur-[100px] rounded-full group-hover:scale-125 transition-transform duration-1000"></div>
         <h3 className="text-2xl font-black text-white mb-4">Ready to update your node?</h3>
         <p className="text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8">
           Visit the official Staking Portal to apply these advanced configurations to your live Delegate profile.
         </p>
         <a 
           href="https://stake.iotex.io" 
           target="_blank"
           className="inline-flex items-center space-x-3 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl transition-all shadow-xl shadow-emerald-500/20 group"
         >
            <span>Launch Staking Portal</span>
            <ExternalLink size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
         </a>
      </div>
    </div>
  );
};

export default Advanced;
