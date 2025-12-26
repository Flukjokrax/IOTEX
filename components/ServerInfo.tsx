
import React from 'react';
import { Server, Activity, Globe, Info, AlertTriangle, ArrowRight, CheckCircle2, FastForward } from 'lucide-react';

const ServerInfo: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      <header className="space-y-4">
        <div className="inline-flex items-center justify-between w-full">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 text-indigo-400 text-xs font-bold uppercase tracking-widest bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
              <Server size={14} />
              <span>Connectivity Setup</span>
            </div>
            <h2 className="text-4xl font-black text-white tracking-tighter">Server Information</h2>
          </div>
          <button className="hidden md:flex items-center space-x-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all text-xs font-bold text-gray-400">
            <FastForward size={14} />
            <span>Skip for now</span>
          </button>
        </div>
        <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
          Link your physical infrastructure to your on-chain Delegate profile to broadcast your node's health and protocol version.
        </p>
      </header>

      {/* Optional Step Alert */}
      <div className="bg-blue-500/10 border border-blue-500/20 p-8 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px] rounded-full"></div>
        <div className="shrink-0 w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-500">
          <Info size={32} />
        </div>
        <div className="flex-1 space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <h4 className="text-xl font-bold text-white">This step is optional</h4>
            <span className="px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded-md text-[10px] font-black tracking-widest uppercase">Skip Available</span>
          </div>
          <p className="text-sm text-blue-200/60 leading-relaxed max-w-2xl">
            If you don't have a server initialized yet, you can skip this step and configure it later. However, we recommend completing this as soon as possible.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <div className="bg-[#14191f] border border-white/5 rounded-[2.5rem] p-8 space-y-8 relative group overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Activity size={80} />
            </div>
            <h3 className="text-xl font-bold text-white flex items-center space-x-3">
              <Globe className="text-emerald-400" />
              <span>Network Visibility</span>
            </h3>
            <div className="space-y-6">
              <p className="text-sm text-gray-400 leading-relaxed">
                Configuring your server details is essential for appearing correctly on <a href="https://stake.iotex.io" target="_blank" className="text-emerald-400 underline decoration-emerald-500/30 underline-offset-4">stake.iotex.io</a>.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-400"><strong>Real-time Status:</strong> Shows voters that your Delegate is online.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-400"><strong>Protocol Compliance:</strong> Confirms you are running the latest network version.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-400"><strong>Voter Confidence:</strong> Transparent infrastructure breeds trust in your candidacy.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 bg-amber-500/10 border border-amber-500/20 rounded-[2.5rem] space-y-4">
            <div className="flex items-center space-x-3 text-amber-500">
               <AlertTriangle size={24} />
               <h4 className="font-bold">Urgent Notice</h4>
            </div>
            <p className="text-sm text-amber-200/60 leading-relaxed">
              Without server information, your delegate profile will appear as "Incomplete" or "Offline" on the official portal, which may lead to reduced votes from the community.
            </p>
          </div>
        </div>

        <div className="space-y-6 sticky top-8">
          <div className="relative group">
            <div className="absolute inset-0 bg-indigo-500/5 blur-[80px] rounded-full opacity-50"></div>
            <div className="relative bg-[#0b0e11] border border-white/10 rounded-[2.5rem] p-6 shadow-2xl overflow-hidden">
               <div className="flex items-center justify-between mb-6">
                 <div className="text-xs font-bold text-gray-400 bg-white/5 px-3 py-1 rounded-lg">Portal Preview</div>
                 <CheckCircle2 size={16} className="text-indigo-500" />
               </div>
               <img 
                 src="https://1634134081-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F5whGkGlpM5BFduENPztv%2Fuploads%2FEnZNV18SrXOFP2hGDm41%2FScreen%20Shot%202022-09-15%20at%2010.54.39%20AM.png?alt=media&token=c6f3d02e-d895-4cfc-92c7-8a5bc560c512" 
                 alt="Server Information interface" 
                 className="w-full h-auto rounded-xl border border-white/5 shadow-inner mb-6"
               />
               <div className="bg-white/5 rounded-2xl p-4 border border-white/5 group-hover:border-indigo-500/20 transition-colors">
                 <div className="flex items-start space-x-3">
                   <Server size={16} className="text-indigo-400 shrink-0 mt-0.5" />
                   <p className="text-[11px] text-gray-500 leading-relaxed">
                     You'll be asked to provide your node's <strong>External IP</strong> and <strong>Listen Port</strong> during this stage.
                   </p>
                 </div>
               </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/20 to-transparent border border-white/5 p-8 rounded-[2.5rem] flex flex-col justify-center">
            <h4 className="text-lg font-bold text-white mb-2">Final Stages</h4>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Only two steps left: <strong>Reward Distribution</strong> and a final review of your <strong>Delegate Profile</strong>.
            </p>
            <button className="flex items-center space-x-2 text-emerald-400 font-black text-xs uppercase tracking-widest hover:translate-x-1 transition-transform group">
               <span>Next: Reward Distribution</span>
               <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerInfo;
