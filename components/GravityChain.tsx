
import React from 'react';
import { Cpu, Link, ExternalLink, Info, CheckCircle2, Server, Settings, Zap, Terminal } from 'lucide-react';

const GravityChain: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      <header className="space-y-4">
        <div className="inline-flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
          <Cpu size={14} />
          <span>Genesis Synchronization</span>
        </div>
        <h2 className="text-4xl font-black text-white tracking-tighter">Gravity Chain Binding</h2>
        <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
          Historical data bridge. Before the IoTeX 1.0 mainnet launch, delegate election results were stored on the Ethereum blockchain.
        </p>
      </header>

      {/* Snapshot Recommendation */}
      <div className="bg-emerald-500/10 border border-emerald-500/20 p-8 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[80px] rounded-full"></div>
        <div className="shrink-0 w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform duration-500">
          <CheckCircle2 size={32} />
        </div>
        <div className="flex-1 space-y-2">
          <h4 className="text-xl font-bold text-white">Using a Snapshot?</h4>
          <p className="text-sm text-emerald-200/60 leading-relaxed max-w-2xl">
            This configuration is <strong>optional</strong> if you are starting your node from an official snapshot. It only applies if you are syncing from block height 1 or before Mainnet 1.0 (height 5157001).
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Approach 1: Self-Hosted */}
        <div className="bg-[#14191f] border border-white/5 rounded-[2.5rem] p-8 space-y-6 relative overflow-hidden group hover:border-indigo-500/30 transition-all duration-500">
           <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Server size={120} />
           </div>
           <div className="flex items-center space-x-4 mb-4">
              <div className="w-14 h-14 bg-indigo-500/20 rounded-2xl flex items-center justify-center text-indigo-400">
                 <Server size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white">Self-Hosted Node</h3>
                <span className="text-[10px] font-black uppercase tracking-widest text-indigo-500/70">Full Decentralization</span>
              </div>
           </div>
           <p className="text-sm text-gray-400 leading-relaxed">
             Set up your own Ethereum node as an API Gateway. This ensures maximum security and performance for fetching legacy staking data.
           </p>
           <div className="space-y-3">
              {[
                "Deploy Geth or Parity/Nethermind.",
                "Expose JSON-RPC endpoints.",
                "High availability and low latency.",
                "No dependency on third-party APIs."
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3 text-xs text-indigo-200/60 font-medium">
                  <Zap size={14} className="text-indigo-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
           </div>
           <div className="pt-4">
             <a href="https://github.com/ethereum/go-ethereum" target="_blank" className="inline-flex items-center space-x-2 text-indigo-400 font-bold text-xs uppercase tracking-widest hover:text-indigo-300 transition-colors">
               <span>Installing Geth</span>
               <ExternalLink size={14} />
             </a>
           </div>
        </div>

        {/* Approach 2: Infura */}
        <div className="bg-[#14191f] border border-white/5 rounded-[2.5rem] p-8 space-y-6 relative overflow-hidden group hover:border-emerald-500/30 transition-all duration-500">
           <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Link size={120} />
           </div>
           <div className="flex items-center space-x-4 mb-4">
              <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400">
                 <Settings size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white">Infura / Alchemy</h3>
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500/70">Managed Infrastructure</span>
              </div>
           </div>
           <p className="text-sm text-gray-400 leading-relaxed">
             Utilize established Ethereum blockchain infrastructure providers for a faster and easier setup process.
           </p>
           <div className="space-y-3">
              {[
                "Sign up for an Infura account.",
                "Create a project for Ethereum Mainnet.",
                "Use the provided v3 project ID endpoint.",
                "Easier for initial testing and small setups."
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3 text-xs text-emerald-200/60 font-medium">
                  <Zap size={14} className="text-emerald-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
           </div>
           <div className="pt-4">
             <a href="https://infura.io" target="_blank" className="inline-flex items-center space-x-2 text-emerald-400 font-bold text-xs uppercase tracking-widest hover:text-emerald-300 transition-colors">
               <span>Sign up for Infura</span>
               <ExternalLink size={14} />
             </a>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        <div className="lg:col-span-3 space-y-8">
           <div className="bg-black/40 border border-white/5 rounded-[2.5rem] p-8 space-y-6 shadow-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 text-white">
                  <Terminal className="text-emerald-400" />
                  <h3 className="text-xl font-bold">Node Configuration</h3>
                </div>
                <div className="text-[10px] font-bold text-gray-500 bg-white/5 px-3 py-1 rounded-lg font-mono">config.yaml</div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Add your Ethereum JSON-RPC endpoint(s) to the <code className="text-emerald-400">gravityChainAPIs</code> list in your configuration file.
              </p>
              
              <div className="bg-[#0b0e11] rounded-2xl p-6 border border-white/10 shadow-inner overflow-x-auto">
                <pre className="text-[11px] font-mono text-emerald-100/70 leading-relaxed">
{`chain:
  committee:
    gravityChainAPIs:
      - https://mainnet.infura.io/v3/YOUR_PROJECT_ID
      - https://your-own-node-endpoint.com`}
                </pre>
              </div>
              
              <div className="p-4 bg-white/5 border border-white/5 rounded-2xl flex items-start space-x-3">
                 <Info size={16} className="text-gray-400 shrink-0 mt-0.5" />
                 <p className="text-[10px] text-gray-500 italic leading-relaxed">
                   Multiple endpoints can be added to improve the robustness of the data synchronization process.
                 </p>
              </div>
           </div>
        </div>

        <div className="lg:col-span-2 space-y-6 sticky top-8">
           <div className="p-8 bg-gradient-to-br from-indigo-900/20 to-transparent border border-white/10 rounded-[2.5rem] space-y-6 shadow-xl">
              <h4 className="font-bold text-white text-lg">Why it matters?</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                IoTeX's journey to Mainnet 1.0 was a multi-stage process. The "Gravity Chain" (Ethereum) served as the primary truth for staking data during the early bootstrapping phase. Syncing history requires access to these legacy records.
              </p>
              <div className="pt-4 border-t border-white/5">
                <div className="flex items-center space-x-3 text-indigo-400">
                  <Link size={16} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Protocol Architecture</span>
                </div>
              </div>
           </div>

           <div className="p-8 bg-white/5 border border-white/5 rounded-[2.5rem] space-y-4">
              <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Expert Tip</h4>
              <p className="text-xs text-gray-400 italic leading-relaxed">
                "For most new delegates, the snapshot approach is recommended. Gravity Chain binding is primarily for archivists and protocol researchers."
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default GravityChain;
