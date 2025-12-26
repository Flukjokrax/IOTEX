
import React from 'react';
import { TrendingUp, Coins, Calendar, PieChart, Info, AlertTriangle, BookOpen, Clock, Zap, CheckCircle2 } from 'lucide-react';

const Projections: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      <header className="space-y-4">
        <div className="inline-flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
          <TrendingUp size={14} />
          <span>Financial Outlook</span>
        </div>
        <h2 className="text-4xl font-black text-white tracking-tighter">Profits Projections</h2>
        <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
          Analyze potential revenue streams based on network voting power. These projections provide a roadmap for your node's financial sustainability.
        </p>
      </header>

      {/* Average Rewards Table */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
           <div className="flex items-center space-x-3 text-white">
             <Clock className="text-indigo-400" />
             <h3 className="text-2xl font-bold">Average Rewards (Per Epoch)</h3>
           </div>
           <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest bg-white/5 px-2 py-1 rounded border border-white/5">1 Epoch ≈ 1 Hour</span>
        </div>

        <div className="bg-[#14191f] border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl overflow-x-auto">
           <table className="w-full text-left text-sm">
              <thead className="bg-white/5 text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em]">
                 <tr>
                    <th className="px-8 py-5">% of Network Votes</th>
                    <th className="px-8 py-5">Block Rewards (1)</th>
                    <th className="px-8 py-5">Foundation Bonus (2)</th>
                    <th className="px-8 py-5">Epoch Rewards (3)</th>
                 </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                 {[
                   { votes: "5.0%", block: "160 IOTX", foundation: "80 IOTX (suspended)", epoch: "937.50 IOTX" },
                   { votes: "2.0%", block: "160 IOTX", foundation: "80 IOTX (suspended)", epoch: "375.00 IOTX" },
                   { votes: "0.5%", block: "N/A (4)", foundation: "N/A (4)", epoch: "93.75 IOTX" }
                 ].map((row, i) => (
                   <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                      <td className="px-8 py-6 font-black text-white group-hover:text-emerald-400 transition-colors">{row.votes}</td>
                      <td className="px-8 py-6 text-gray-400">{row.block}</td>
                      <td className="px-8 py-6 text-gray-400/60 italic">{row.foundation}</td>
                      <td className="px-8 py-6 text-emerald-400 font-mono font-bold">{row.epoch}</td>
                   </tr>
                 ))}
              </tbody>
           </table>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           {[
             "(1) Calculated on average, accounting for 2/3 consensus selection probability.",
             "(2) Foundation bonus of 80 IOTX/epoch for top 36, voted annually by community.",
             "(3) Epoch bonus share equals delegate share of total network votes.",
             "(4) Nodes with <1% of network votes are unlikely to reach consensus status."
           ].map((note, i) => (
             <div key={i} className="flex items-start space-x-2 text-[11px] text-gray-500 italic leading-relaxed">
                <span className="shrink-0 text-emerald-500 font-bold">•</span>
                <span>{note}</span>
             </div>
           ))}
        </div>
      </section>

      {/* Yearly Projections */}
      <section className="space-y-6">
        <div className="flex items-center space-x-3 text-white">
          <Calendar className="text-emerald-400" />
          <h3 className="text-2xl font-bold">Yearly Projections</h3>
        </div>

        <div className="bg-[#14191f] border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl overflow-x-auto">
           <table className="w-full text-left text-sm">
              <thead className="bg-white/5 text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em]">
                 <tr>
                    <th className="px-8 py-5">% of Network Votes</th>
                    <th className="px-8 py-5">Estimated Total IOTX / Year</th>
                    <th className="px-8 py-5">Status</th>
                 </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                 {[
                   { votes: "5.0%", total: "10,314,900 IOTX", color: "bg-emerald-500/10 text-emerald-400" },
                   { votes: "2.0%", total: "5,387,400 IOTX", color: "bg-emerald-500/10 text-emerald-400" },
                   { votes: "0.5%", total: "821,250 IOTX", color: "bg-yellow-500/10 text-yellow-400" }
                 ].map((row, i) => (
                   <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                      <td className="px-8 py-6 font-black text-white">{row.votes}</td>
                      <td className="px-8 py-6">
                         <span className={`px-4 py-1.5 rounded-full font-black text-sm ${row.color}`}>
                           {row.total}
                         </span>
                      </td>
                      <td className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-600">
                        {parseInt(row.votes) >= 1 ? "Active Consensus" : "Non-Consensus Candidate"}
                      </td>
                   </tr>
                 ))}
              </tbody>
           </table>
        </div>
      </section>

      {/* Calculator Notice */}
      <div className="bg-indigo-500/10 border border-indigo-500/20 p-10 rounded-[3rem] relative overflow-hidden group">
         <div className="absolute -right-4 -bottom-4 opacity-5 transform rotate-12 group-hover:scale-110 transition-transform">
            <PieChart size={240} />
         </div>
         <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
               <h3 className="text-3xl font-black text-white">Dynamic Calculations</h3>
               <p className="text-sm text-indigo-100/60 leading-relaxed">
                 While these tables provide static benchmarks, the real-world network is dynamic. Use our interactive calculator to adjust variables like commission, self-stake, and voter behavior.
               </p>
               <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-2xl flex items-start space-x-3">
                  <AlertTriangle size={18} className="text-amber-500 shrink-0 mt-0.5" />
                  <p className="text-[11px] text-amber-200/60 italic leading-relaxed">
                    Estimates from these tools are based on assumptions - please do your own analysis. Returns are subject to network participation.
                  </p>
               </div>
            </div>
            <div className="bg-black/40 border border-white/5 rounded-[2rem] p-8 space-y-4">
               <h4 className="text-sm font-bold text-white flex items-center space-x-2">
                 <Zap size={16} className="text-yellow-400" />
                 <span>Profit Tool Highlights</span>
               </h4>
               <ul className="space-y-3">
                  {[
                    "Simulate voter growth over time.",
                    "Analyze commission vs. self-stake revenue.",
                    "Project yield for your unique community."
                  ].map((item, i) => (
                    <li key={i} className="flex items-center space-x-2 text-xs text-gray-400">
                       {/* Fix: Added CheckCircle2 to imports above */}
                       <CheckCircle2 size={14} className="text-emerald-500" />
                       <span>{item}</span>
                    </li>
                  ))}
               </ul>
            </div>
         </div>
      </div>

      {/* Glossary Section */}
      <section className="p-10 bg-[#14191f] border border-white/5 rounded-[3rem] space-y-8">
         <div className="flex items-center space-x-3 text-white">
           <BookOpen className="text-indigo-400" />
           <h3 className="text-2xl font-bold">Glossary</h3>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-4">
               <h4 className="text-xl font-black text-white">Epoch</h4>
               <p className="text-sm text-gray-400 leading-relaxed">
                 In IoTeX, transactions verification and consensus happen in <strong>epochs</strong>. One IoTeX epoch is completed every time 720 blocks get added to the blockchain.
               </p>
               <div className="flex items-center space-x-3 p-4 bg-black/20 rounded-2xl border border-white/5 w-fit">
                  <Clock size={16} className="text-indigo-400" />
                  <span className="text-xs font-bold text-indigo-100/70">5s Block Time ≈ 1 Hour Epoch</span>
               </div>
            </div>
            <div className="space-y-4">
               <h4 className="text-xl font-black text-white">Consensus Randomness</h4>
               <p className="text-sm text-gray-400 leading-relaxed">
                 Consensus delegates are not fixed. Every epoch, 24 nodes are randomly picked from the top 36 candidates to handle actual block production, ensuring high censorship resistance.
               </p>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Projections;
