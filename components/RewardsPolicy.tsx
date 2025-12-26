
import React from 'react';
import { Scale, Zap, Hand, Info, Activity, Monitor, Terminal, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';

const RewardsPolicy: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      <header className="space-y-4">
        <div className="inline-flex items-center space-x-2 text-pink-400 text-xs font-bold uppercase tracking-widest bg-pink-500/10 px-3 py-1 rounded-full border border-pink-500/20">
          <Scale size={14} />
          <span>Distribution Framework</span>
        </div>
        <h2 className="text-4xl font-black text-white tracking-tighter">Rewards Policy</h2>
        <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
          Define how your infrastructure earnings are shared. This policy is the foundation of your relationship with your voters and is publicly visible on the staking portal.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Automatic Card */}
        <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-[2.5rem] p-8 space-y-6 relative overflow-hidden group hover:border-emerald-500/30 transition-all duration-500 shadow-2xl">
           <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Zap size={120} />
           </div>
           <div className="flex items-center space-x-4 mb-4">
              <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400">
                 <Zap size={32} fill="currentColor" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white">Automatic</h3>
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500/70">Powered by HERMES</span>
              </div>
           </div>
           <p className="text-sm text-gray-400 leading-relaxed">
             Leverage the <strong>HERMES protocol</strong> to automate daily reward distributions. Voters receive their share directly in their wallets every 24 hours.
           </p>
           <ul className="space-y-3 pt-2">
              {[
                "Share Epoch, Block, and Foundation rewards.",
                "Zero manual effort after initial setup.",
                "Verified and transparent on-chain history.",
                "Boosts voter trust via daily consistency."
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-3 text-xs text-emerald-200/60">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
           </ul>
           <div className="pt-4">
             <a href="https://hermes.to" target="_blank" className="inline-flex items-center space-x-2 text-emerald-400 font-bold text-xs uppercase tracking-widest hover:text-emerald-300 transition-colors">
               <span>Open Hermes.to</span>
               <ExternalLink size={14} />
             </a>
           </div>
        </div>

        {/* Manual Card */}
        <div className="bg-[#14191f] border border-white/5 rounded-[2.5rem] p-8 space-y-6 relative overflow-hidden group hover:border-indigo-500/30 transition-all duration-500 shadow-2xl">
           <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Hand size={120} />
           </div>
           <div className="flex items-center space-x-4 mb-4">
              <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-400">
                 <Hand size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white">Manual</h3>
                <span className="text-[10px] font-black uppercase tracking-widest text-indigo-500/70">Self-Managed Control</span>
              </div>
           </div>
           <p className="text-sm text-gray-400 leading-relaxed">
             Full sovereignty over your reward account. You are responsible for claiming accumulated rewards from the blockchain and distributing them according to your own custom logic.
           </p>
           <ul className="space-y-3 pt-2">
              {[
                "Claim rewards via ioctl CLI at any time.",
                "Requires manual distribution to voters.",
                "Total control over payout frequency.",
                "Higher administrative responsibility."
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-3 text-xs text-indigo-200/60">
                  <div className="w-1 h-1 rounded-full bg-indigo-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
           </ul>
           <div className="pt-4">
             <span className="text-[10px] px-2 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-md font-bold uppercase">Advanced Users Only</span>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
           {/* Monitor & Claim Section */}
           <div className="bg-black/40 border border-white/5 rounded-[2.5rem] p-8 space-y-6">
              <div className="flex items-center space-x-3 text-white">
                <Activity className="text-pink-400" />
                <h3 className="text-xl font-bold">Monitor & Claim</h3>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                The blockchain collects rewards for you at the end of every epoch. You can track these accumulated funds directly on your profile.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 bg-white/5 rounded-2xl border border-white/5 space-y-2 group hover:border-pink-500/30 transition-all">
                   <div className="flex items-center space-x-2 text-pink-400 font-black text-[10px] uppercase tracking-widest">
                     <Monitor size={14} />
                     <span>Portal Tracking</span>
                   </div>
                   <p className="text-xs text-gray-500">View available balances at <code className="text-pink-200/60">stake.iotex.io/profile</code></p>
                </div>
                <div className="p-5 bg-white/5 rounded-2xl border border-white/5 space-y-2 group hover:border-emerald-500/30 transition-all">
                   <div className="flex items-center space-x-2 text-emerald-400 font-black text-[10px] uppercase tracking-widest">
                     <Terminal size={14} />
                     <span>CLI Claiming</span>
                   </div>
                   <p className="text-xs text-gray-500">Execute <code className="text-emerald-200/60">ioctl</code> actions to trigger reward withdrawals.</p>
                </div>
              </div>
           </div>

           {/* Important Tip */}
           <div className="flex items-start space-x-4 p-6 bg-blue-500/10 border border-blue-500/20 rounded-3xl">
              <Info size={24} className="text-blue-400 shrink-0 mt-1" />
              <div className="space-y-1">
                <h4 className="font-bold text-white text-sm">A Note on HERMES Transparency</h4>
                <p className="text-xs text-blue-200/60 leading-relaxed">
                  If you use HERMES, this policy will be used for automated calculations. If not, it is your responsibility to keep the policy text up to date to avoid community confusion.
                </p>
              </div>
           </div>
        </div>

        <div className="space-y-6 sticky top-8">
          <div className="relative group">
            <div className="absolute inset-0 bg-pink-500/5 blur-[80px] rounded-full opacity-50"></div>
            <div className="relative bg-[#0b0e11] border border-white/10 rounded-[2.5rem] p-6 shadow-2xl overflow-hidden">
               <div className="flex items-center justify-between mb-6">
                 <div className="text-xs font-bold text-gray-400 bg-white/5 px-3 py-1 rounded-lg">Portal Preview</div>
                 <CheckCircle2 size={16} className="text-pink-500" />
               </div>
               <img 
                 src="https://1634134081-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F5whGkGlpM5BFduENPztv%2Fuploads%2FWyXyAICTKrRu6Y9GUIp4%2FScreen%20Shot%202022-09-15%20at%2011.15.38%20AM.png?alt=media&token=2bb6f841-2b04-4363-9ae8-2fa2ec3f28fb" 
                 alt="Rewards Policy configuration interface" 
                 className="w-full h-auto rounded-xl border border-white/5 shadow-inner mb-6"
               />
               <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                 <p className="text-[11px] text-gray-500 italic leading-relaxed">
                   The official portal shows your <strong>Distribution Percentage</strong> to all potential voters, influencing your rank.
                 </p>
               </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/20 to-transparent border border-white/5 p-8 rounded-[2.5rem] flex flex-col justify-center">
            <h4 className="text-lg font-bold text-white mb-2">Final Step</h4>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Review your <strong>Delegate Profile</strong> and confirm your candidacy.
            </p>
            <button className="flex items-center space-x-2 text-emerald-400 font-black text-xs uppercase tracking-widest hover:translate-x-1 transition-transform group">
               <span>Review My Profile</span>
               <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardsPolicy;
