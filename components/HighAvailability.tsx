
import React from 'react';
import { RotateCw, ShieldAlert, Zap, Terminal, ExternalLink, Activity, Info, AlertTriangle, Layers, Server } from 'lucide-react';

const HighAvailability: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      <header className="space-y-4">
        <div className="inline-flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
          <RotateCw size={14} className="animate-spin-slow" />
          <span>Zero Downtime Infrastructure</span>
        </div>
        <h2 className="text-4xl font-black text-white tracking-tighter">High Availability (HA)</h2>
        <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
          Ensure your node is always producing blocks. Running multiple IoTeX nodes in a <strong>Main/Backup</strong> configuration protects your delegation from host, network, or software failures.
        </p>
      </header>

      {/* Slashing Warning - High Priority */}
      <div className="bg-red-500/10 border border-red-500/20 p-8 rounded-[2.5rem] flex flex-col md:flex-row items-start gap-8 relative overflow-hidden group shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 blur-[80px] rounded-full"></div>
        <div className="shrink-0 w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform duration-500">
          <ShieldAlert size={32} />
        </div>
        <div className="flex-1 space-y-3">
          <h4 className="text-xl font-bold text-white">CRITICAL: Slashing Risk</h4>
          <p className="text-sm text-red-200/60 leading-relaxed max-w-2xl">
            Never run two <strong>Active</strong> block-producer nodes using the same private key simultaneously. This is considered a serious network attack (double signing) and will result in <strong>slashing of your delegate</strong> and loss of your self-stake deposit.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Node Configuration */}
        <div className="bg-[#14191f] border border-white/5 rounded-[2.5rem] p-8 space-y-6">
          <div className="flex items-center space-x-4">
             <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-emerald-400">
               <Layers size={24} />
             </div>
             <h3 className="text-xl font-bold text-white">HA Configuration</h3>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">
            Configure all replicas with the same <code className="text-emerald-400">producerPrivKey</code> but assign unique <code className="text-indigo-400">masterKey</code> suffixes.
          </p>
          <div className="bg-black/40 rounded-2xl border border-white/10 p-4 space-y-4">
             <div className="space-y-2">
               <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Global Setting (All Nodes)</span>
               <pre className="text-xs font-mono text-emerald-100/70 p-4 bg-black/40 rounded-xl border border-white/5">
{`network:
  masterKey: producer_private_key-replica_id`}
               </pre>
             </div>
             <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Main Node</span>
                  <pre className="text-[10px] font-mono text-emerald-100/70 p-3 bg-emerald-500/5 rounded-xl border border-emerald-500/20">
{`system:
  active: true`}
                  </pre>
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-black text-indigo-500 uppercase tracking-widest">Backup Nodes</span>
                  <pre className="text-[10px] font-mono text-indigo-100/70 p-3 bg-indigo-500/5 rounded-xl border border-indigo-500/20">
{`system:
  active: false`}
                  </pre>
                </div>
             </div>
          </div>
        </div>

        {/* Failover Process */}
        <div className="bg-[#14191f] border border-white/5 rounded-[2.5rem] p-8 space-y-6">
          <div className="flex items-center space-x-4">
             <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-indigo-400">
               <Zap size={24} />
             </div>
             <h3 className="text-xl font-bold text-white">Manual Failover</h3>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">
            Switching active mode is handled via the Node API. <strong>Always deactivate the old main node before activating the backup.</strong>
          </p>
          <div className="space-y-3">
             {[
               { label: "Activate Node", url: "/ha?activate=true", color: "text-emerald-400" },
               { label: "Deactivate Node", url: "/ha?activate=false", color: "text-red-400" },
               { label: "Check Status", url: "/ha", color: "text-gray-400" }
             ].map((endpoint, i) => (
               <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-white/10 transition-all">
                  <span className="text-xs font-bold text-gray-300">{endpoint.label}</span>
                  <code className={`text-[11px] font-mono ${endpoint.color}`}>http://node-ip:9009{endpoint.url}</code>
               </div>
             ))}
          </div>
          <div className="p-4 bg-amber-500/5 border border-amber-500/10 rounded-2xl flex items-start space-x-3">
             <AlertTriangle size={16} className="text-amber-500 shrink-0 mt-0.5" />
             <p className="text-[10px] text-amber-200/60 italic leading-relaxed">
               Ensure port <strong>9009</strong> is correctly exported from your Docker container and reachable within your private network.
             </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        <div className="lg:col-span-3 space-y-8">
           <div className="bg-black/40 border border-white/5 rounded-[2.5rem] p-8 space-y-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Activity size={140} />
              </div>
              <h3 className="text-2xl font-black text-white flex items-center space-x-3">
                <Server className="text-indigo-400" />
                <span>Automatic Leader Election</span>
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                For complex setups, avoid manual operation by implementing an automated leader election solution. This ensures one—and only one—node is active at all times.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                 <a 
                   href="https://github.com/zjshen14/iotex-leader-election" 
                   target="_blank"
                   className="flex-1 p-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all flex flex-col space-y-2 group"
                 >
                   <div className="flex items-center justify-between">
                     <span className="text-xs font-black text-gray-500 uppercase tracking-widest">Github Repo</span>
                     <ExternalLink size={14} className="group-hover:text-white transition-colors" />
                   </div>
                   <span className="text-sm font-bold text-white">iotex-leader-election</span>
                   <p className="text-[10px] text-gray-500">Automated leader election algorithm for cluster management.</p>
                 </a>
              </div>
              
              <div className="p-6 bg-indigo-500/10 border border-indigo-500/20 rounded-[2rem]">
                 <div className="flex items-center space-x-3 text-indigo-400 mb-2">
                   <Info size={18} />
                   <h4 className="font-bold text-sm">Best Practice</h4>
                 </div>
                 <p className="text-xs text-indigo-200/60 leading-relaxed">
                   Running a <strong>Hot Standby</strong> allows backup nodes to keep their blockchain state synchronized while being in standby mode, enabling near-instantaneous failover.
                 </p>
              </div>
           </div>
        </div>

        <div className="lg:col-span-2 space-y-6 sticky top-8">
          <div className="bg-[#0b0e11] border border-white/10 rounded-[2.5rem] p-8 space-y-6 shadow-xl">
             <div className="flex items-center space-x-3 text-white">
               <Activity className="text-emerald-400" />
               <h3 className="text-xl font-bold">Resilience Guide</h3>
             </div>
             <div className="space-y-4">
                {[
                  "Deploy replicas in different regions.",
                  "Automate health checks via K8s or custom scripts.",
                  "Centralize monitoring for all replica nodes.",
                  "Strictly audit failover triggers for safety."
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3 text-xs text-gray-400">
                    <div className="w-5 h-5 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500 mt-0.5 shrink-0">
                      <RotateCw size={12} />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
             </div>
             <div className="pt-6 border-t border-white/5">
                <button className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl transition-all shadow-xl shadow-emerald-500/20 flex items-center justify-center space-x-2">
                  <span>View HA Architecture</span>
                  <ExternalLink size={16} />
                </button>
             </div>
          </div>
          
          <div className="p-8 bg-white/5 border border-white/5 rounded-[2.5rem]">
             <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-4">Operations Tip</h4>
             <p className="text-xs text-gray-400 italic leading-relaxed">
               "High availability isn't just about hardware; it's about the safety procedures that prevent accidental double-signing."
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighAvailability;
