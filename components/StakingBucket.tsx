
import React from 'react';
import { Coins, Lock, Clock, TrendingUp, Info, AlertCircle, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

const StakingBucket: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      <header className="space-y-4">
        <div className="inline-flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
          <Coins size={14} />
          <span>Capital Requirements</span>
        </div>
        <h2 className="text-4xl font-black text-white tracking-tighter">Staking Bucket</h2>
        <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
          The Self-Stake Bucket represents your skin in the game. It is a mandatory deposit that secures your position as a Delegate candidate.
        </p>
      </header>

      {/* Minimum Requirement Alert */}
      <div className="bg-emerald-500/10 border border-emerald-500/20 p-8 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[80px] rounded-full"></div>
        <div className="shrink-0 w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform duration-500">
          <ShieldCheck size={32} />
        </div>
        <div className="flex-1 space-y-2">
          <h4 className="text-xl font-bold text-white">1.2 Million IOTX Minimum</h4>
          <p className="text-sm text-emerald-200/60 leading-relaxed max-w-2xl">
            To autonomously run as an IoTeX Delegate, you must create a self-stake bucket with at least <strong>1.2 million IOTX</strong>. These tokens are voted to yourself and remain under your ownership.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          {/* Staking Duration Card */}
          <div className="bg-[#14191f] border border-white/5 rounded-[2.5rem] p-8 space-y-6 relative group overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Clock size={80} />
            </div>
            <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 mb-2">
              <Clock size={24} />
            </div>
            <h3 className="text-xl font-bold text-white">Staking Duration</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Select your staking timeline. Remember: the longer the duration of your stake, the higher the <strong>voting power</strong> and <strong>yield</strong> you'll receive from the protocol.
            </p>
            <div className="flex items-center space-x-2 text-indigo-400 text-[10px] font-black uppercase tracking-widest">
               <TrendingUp size={14} />
               <span>Yield Multiplier Active</span>
            </div>
          </div>

          {/* Stake Lock Card */}
          <div className="bg-[#14191f] border border-white/5 rounded-[2.5rem] p-8 space-y-6 relative group overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Lock size={80} />
            </div>
            <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center text-pink-400 mb-2">
              <Lock size={24} />
            </div>
            <h3 className="text-xl font-bold text-white">Stake-Lock Mechanism</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Activating Stake-Lock grants you the maximum possible return. However, it imposes a 365-day cooldown: you won't be able to unstake until <strong>365 days have elapsed</strong> after you manually disable the lock.
            </p>
            <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-2xl flex items-start space-x-3">
               <AlertCircle size={16} className="text-red-400 shrink-0 mt-0.5" />
               <p className="text-[11px] text-red-200/60 italic leading-relaxed">
                 Warning: Stake-Lock is for long-term committed Delegates only. Funds are not liquid during the lock period.
               </p>
            </div>
          </div>
        </div>

        <div className="space-y-6 sticky top-8">
          <div className="relative group">
            <div className="absolute inset-0 bg-emerald-500/5 blur-[80px] rounded-full opacity-50"></div>
            <div className="relative bg-[#0b0e11] border border-white/10 rounded-[2.5rem] p-6 shadow-2xl overflow-hidden">
               <div className="flex items-center justify-between mb-6">
                 <div className="text-xs font-bold text-gray-400 bg-white/5 px-3 py-1 rounded-lg">Portal Preview</div>
                 <CheckCircle2 size={16} className="text-emerald-500" />
               </div>
               <img 
                 src="https://1634134081-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F5whGkGlpM5BFduENPztv%2Fuploads%2F8DF2nNCul0bh5VF2AeZh%2FScreen%20Shot%202022-09-15%20at%209.55.46%20AM.png?alt=media&token=266df41a-8542-4e46-a189-546d10a74878" 
                 alt="Staking Bucket configuration interface" 
                 className="w-full h-auto rounded-xl border border-white/5 shadow-inner mb-6"
               />
               <div className="space-y-4">
                 <div className="flex items-center justify-between px-4 py-3 bg-white/5 rounded-2xl">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Self Stake</span>
                    <span className="text-sm font-bold text-white">1,200,000 IOTX</span>
                 </div>
                 <div className="flex items-center justify-between px-4 py-3 bg-white/5 rounded-2xl">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Stake Lock</span>
                    <span className="text-[10px] px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded-md font-black">ENABLED</span>
                 </div>
               </div>
            </div>
          </div>

          <div className="bg-indigo-500/10 border border-indigo-500/20 p-8 rounded-[2.5rem] flex flex-col justify-center">
            <h4 className="text-lg font-bold text-white mb-2">Next Stage</h4>
            <p className="text-sm text-indigo-200/60 mb-6">After creating your bucket, you will provide Server Information and configure Reward Distribution settings.</p>
            <button className="flex items-center space-x-2 text-indigo-400 font-black text-xs uppercase tracking-widest hover:translate-x-1 transition-transform group">
               <span>Proceed to Server Info</span>
               <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StakingBucket;
