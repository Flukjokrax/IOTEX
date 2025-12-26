
import React from 'react';
import { Users, ShieldCheck, Zap, Award, CheckCircle2, Info, ArrowRight, ExternalLink, Handshake, Lock, Coins, TrendingUp } from 'lucide-react';

const Endorsement: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      <header className="space-y-4">
        <div className="inline-flex items-center space-x-2 text-indigo-400 text-xs font-bold uppercase tracking-widest bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
          <Award size={14} />
          <span>Inclusive Governance</span>
        </div>
        <h2 className="text-4xl font-black text-white tracking-tighter">Delegate Endorsement</h2>
        <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
          Participate in consensus without the 1.2M IOTX self-stake. Leverage endorsements from stakeholders to foster a more decentralized and inclusive IoTeX ecosystem.
        </p>
      </header>

      {/* Role Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* For Delegates */}
        <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-[2.5rem] p-8 space-y-6 relative overflow-hidden group hover:border-emerald-500/30 transition-all duration-500">
           <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Users size={120} />
           </div>
           <div className="flex items-center space-x-4 mb-4">
              <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400">
                 <Users size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white">For Delegates</h3>
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500/70">Aspiring Nodes</span>
              </div>
           </div>
           <ul className="space-y-4 pt-2">
              {[
                { title: "No Self-Stake Requirement", desc: "Register with just 100 IOTX and gain eligibility via endorsements." },
                { title: "Streamlined Registration", desc: "Focus on community building and reputation while others stake for you." },
                { title: "Governance Rights", desc: "Contribute to the network's direction regardless of personal capital." }
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="text-sm font-bold text-white">{item.title}</span>
                    <p className="text-xs text-emerald-100/40 leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
           </ul>
        </div>

        {/* For Endorsers */}
        <div className="bg-indigo-500/5 border border-indigo-500/10 rounded-[2.5rem] p-8 space-y-6 relative overflow-hidden group hover:border-indigo-500/30 transition-all duration-500">
           <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Handshake size={120} />
           </div>
           <div className="flex items-center space-x-4 mb-4">
              <div className="w-14 h-14 bg-indigo-500/20 rounded-2xl flex items-center justify-center text-indigo-400">
                 <Handshake size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white">For Endorsers</h3>
                <span className="text-[10px] font-black uppercase tracking-widest text-indigo-500/70">Capital Supporters</span>
              </div>
           </div>
           <ul className="space-y-4 pt-2">
              {[
                { title: "Supportcredible Nodes", desc: "Empower talented operators by providing the required 1.2M IOTX stake." },
                { title: "Earn Shared Rewards", desc: "Benefit from block rewards and bonuses based on agreements with the Delegate." },
                { title: "Flexible Staking", desc: "Customizable durations with auto-stake options for maximum yield." }
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <CheckCircle2 size={18} className="text-indigo-500 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="text-sm font-bold text-white">{item.title}</span>
                    <p className="text-xs text-indigo-100/40 leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
           </ul>
        </div>
      </div>

      {/* How It Works */}
      <section className="space-y-8">
        <div className="flex items-center space-x-3 text-white">
          <Zap className="text-yellow-400" />
          <h3 className="text-2xl font-bold">The Endorsement Workflow</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {[
            { step: 1, title: "Register", desc: "Delegate pays 100 IOTX to initialize profile." },
            { step: 2, title: "Bucket", desc: "Endorser stakes 1.2M+ IOTX in an endorsement bucket." },
            { step: 3, title: "Propose", desc: "Endorser submits request to the chosen Delegate." },
            { step: 4, title: "Accept", desc: "Delegate accepts; bucket locks; consensus starts." },
            { step: 5, title: "Benefit", desc: "Rewards distributed according to the agreement." }
          ].map((item, i) => (
            <div key={i} className="bg-white/5 border border-white/5 p-6 rounded-3xl relative overflow-hidden group hover:bg-white/[0.08] transition-all">
               <span className="text-3xl font-black text-white/10 absolute -top-1 -left-1">{item.step}</span>
               <div className="relative z-10 space-y-2 pt-4">
                  <h4 className="font-bold text-white text-sm">{item.title}</h4>
                  <p className="text-[10px] text-gray-500 leading-relaxed">{item.desc}</p>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="space-y-6">
         <div className="flex items-center space-x-3 text-white">
           <Coins className="text-emerald-400" />
           <h3 className="text-2xl font-bold">Staking Comparison</h3>
         </div>
         <div className="bg-[#0b0e11] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl overflow-x-auto">
            <table className="w-full text-left text-sm">
               <thead className="bg-white/5 text-gray-500 font-bold text-[10px] uppercase tracking-[0.2em]">
                  <tr>
                     <th className="px-8 py-5">Method</th>
                     <th className="px-8 py-5">Rewards</th>
                     <th className="px-8 py-5">Requirements</th>
                     <th className="px-8 py-5">Primary Risk</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-white/5">
                  <tr className="hover:bg-emerald-500/[0.02] transition-colors">
                     <td className="px-8 py-6 font-bold text-white flex items-center space-x-2">
                        <ShieldCheck size={14} className="text-emerald-400" />
                        <span>Self-Stake</span>
                     </td>
                     <td className="px-8 py-6 text-emerald-400 font-bold">1.06x Base</td>
                     <td className="px-8 py-6 text-gray-400">Node + 1.2M IOTX</td>
                     <td className="px-8 py-6 text-[11px] text-gray-500">Full Operational Burden</td>
                  </tr>
                  <tr className="hover:bg-indigo-500/[0.02] transition-colors">
                     <td className="px-8 py-6 font-bold text-white flex items-center space-x-2">
                        <Handshake size={14} className="text-indigo-400" />
                        <span>Endorsement</span>
                     </td>
                     <td className="px-8 py-6 text-indigo-400 font-bold">Negotiable (~1.06x)</td>
                     <td className="px-8 py-6 text-gray-400">1.2M IOTX Stake</td>
                     <td className="px-8 py-6 text-[11px] text-gray-500">Delegate Misbehavior Risk</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                     <td className="px-8 py-6 font-bold text-white flex items-center space-x-2">
                        <Users size={14} className="text-gray-400" />
                        <span>Standard Vote</span>
                     </td>
                     <td className="px-8 py-6 text-gray-400 font-bold">1x Base</td>
                     <td className="px-8 py-6 text-gray-400">Small amounts</td>
                     <td className="px-8 py-6 text-[11px] text-gray-500">Minimal Risk</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        <div className="p-10 bg-gradient-to-br from-indigo-500/10 to-transparent border border-white/5 rounded-[3rem] relative overflow-hidden group">
          <div className="absolute -right-4 -bottom-4 opacity-5 transform rotate-12 group-hover:scale-110 transition-transform">
             <TrendingUp size={240} />
          </div>
          <div className="relative z-10 flex flex-col h-full">
            <h3 className="text-2xl font-black text-white mb-4">Rewards Distribution</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Endorsers receive their share of rewards based on the endorsement bucket, which benefits from the <strong>1.06x self-stake bonus</strong>. Split agreements between Delegates and Endorsers are typically negotiated off-chain.
            </p>
            <div className="mt-auto space-y-3">
               <div className="flex items-center space-x-3 p-4 bg-black/40 rounded-2xl border border-white/5">
                 <Lock size={18} className="text-indigo-400" />
                 <span className="text-xs text-indigo-100/60 font-medium">Protection period ensures transition stability.</span>
               </div>
            </div>
          </div>
        </div>

        <div className="p-10 bg-[#14191f] border border-white/5 rounded-[3rem] space-y-6 flex flex-col justify-center">
           <div className="flex items-center space-x-3 text-white mb-2">
              <Info className="text-emerald-400" />
              <h3 className="text-xl font-bold">Ready to Start?</h3>
           </div>
           <p className="text-sm text-gray-400 leading-relaxed mb-6">
             The endorsement mechanism is compatible with IoTeX’s existing staking system. Visit the Governance Portal to explore endorsement opportunities.
           </p>
           <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://stake.iotex.io" 
                target="_blank"
                className="flex-1 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl transition-all shadow-xl shadow-emerald-500/20 flex items-center justify-center space-x-2"
              >
                <span>Stake.iotex.io</span>
                <ExternalLink size={18} />
              </a>
              <a 
                href="https://community.iotex.io/t/iip-25-delegate-endorsement/11142" 
                target="_blank"
                className="flex-1 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-2xl transition-all flex items-center justify-center space-x-2"
              >
                <span>Forum Discussion</span>
                <ArrowRight size={18} />
              </a>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Endorsement;
