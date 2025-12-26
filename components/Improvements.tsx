
import React from 'react';
import { Sparkles, GitPullRequest, Heart, ExternalLink, Zap, BookOpen, Share2, ShieldCheck } from 'lucide-react';

const Improvements: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      <header className="space-y-4 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 text-yellow-400 text-xs font-bold uppercase tracking-widest bg-yellow-500/10 px-3 py-1 rounded-full border border-yellow-500/20">
          <Sparkles size={14} />
          <span>Evolving the Infrastructure</span>
        </div>
        <h2 className="text-4xl font-black text-white tracking-tighter">Network Improvements</h2>
        <p className="text-lg text-gray-400 leading-relaxed">
          Running decentralized infrastructure is an ongoing journey. We invite the community to share ideas, report findings, and contribute to the protocol's excellence.
        </p>
      </header>

      {/* Contribution Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-[#14191f] border border-white/5 rounded-[2.5rem] p-10 space-y-6 relative overflow-hidden group hover:border-emerald-500/30 transition-all duration-500 shadow-2xl">
           <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <GitPullRequest size={120} />
           </div>
           <div className="flex items-center space-x-4 mb-4">
              <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400">
                 <GitPullRequest size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white">Community Driven</h3>
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500/70">Open Contribution</span>
              </div>
           </div>
           <p className="text-sm text-gray-400 leading-relaxed">
             Since the IoTeX network is <strong>decentralized</strong>, diverse perspectives are crucial. Your contributions help make the network more secure and performant for everyone.
           </p>
           <div className="pt-4">
             <a href="https://github.com/iotexproject/iotex-bootstrap" target="_blank" className="inline-flex items-center space-x-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl transition-all shadow-xl shadow-emerald-500/20 group">
               <span>Contribute on GitHub</span>
               <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
             </a>
           </div>
        </div>

        <div className="bg-indigo-500/5 border border-indigo-500/10 rounded-[2.5rem] p-10 space-y-6 flex flex-col justify-center relative overflow-hidden group">
           <div className="absolute bottom-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Heart size={120} />
           </div>
           <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-400">
                <Share2 size={24} />
              </div>
              <h4 className="text-xl font-bold text-white">Share Your Experience</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                Found a better way to optimize node performance? Discovered a novel security hardening technique? We want to hear from you.
              </p>
              <div className="flex items-center space-x-3 pt-2">
                 <div className="px-3 py-1 bg-white/5 rounded-lg border border-white/5 text-[10px] font-bold text-indigo-300">#Infrastructure</div>
                 <div className="px-3 py-1 bg-white/5 rounded-lg border border-white/5 text-[10px] font-bold text-indigo-300">#Security</div>
                 <div className="px-3 py-1 bg-white/5 rounded-lg border border-white/5 text-[10px] font-bold text-indigo-300">#Performance</div>
              </div>
           </div>
        </div>
      </div>

      {/* Resources & Footnotes */}
      <div className="space-y-8">
        <div className="flex items-center space-x-3 text-white">
          <BookOpen className="text-yellow-500" />
          <h3 className="text-2xl font-bold">Research & Resources</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "AWS DDoS Mitigation",
              url: "https://aws.amazon.com/answers/networking/aws-ddos-attack-mitigation/",
              desc: "Best practices for AWS-based infrastructure protection.",
              icon: <Zap size={18} className="text-orange-400" />
            },
            {
              title: "GCP DDoS Protection",
              url: "https://cloud.google.com/files/GCPDDoSprotection-04122016.pdf",
              desc: "Whitepaper on Google Cloud's defense architecture.",
              icon: <ShieldCheck size={18} className="text-blue-400" />
            },
            {
              title: "Cloudflare DDoS Guide",
              url: "https://www.cloudflare.com/ddos/",
              desc: "How edge networks neutralize sophisticated network threats.",
              icon: <Zap size={18} className="text-yellow-400" />
            }
          ].map((resource, i) => (
            <a 
              key={i} 
              href={resource.url} 
              target="_blank" 
              className="p-6 bg-[#14191f] border border-white/5 rounded-3xl hover:border-yellow-500/30 transition-all group flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center">
                  {resource.icon}
                </div>
                <ExternalLink size={14} className="text-gray-600 group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-sm font-bold text-white mb-2">{resource.title}</h4>
              <p className="text-[11px] text-gray-500 leading-relaxed mb-4">{resource.desc}</p>
              <div className="mt-auto text-[9px] font-black text-yellow-500 uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">View Documentation</div>
            </a>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="p-10 bg-gradient-to-br from-yellow-500/10 to-transparent border border-white/10 rounded-[3rem] relative overflow-hidden group text-center">
         <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-yellow-500/5 blur-[100px] rounded-full group-hover:scale-125 transition-transform duration-1000"></div>
         <h3 className="text-2xl font-black text-white mb-4">Build the Future of DePIN</h3>
         <p className="text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8">
           The IoTeX ecosystem thrives on collaboration. Help us refine the delegate experience by submitting your feedback or documentation improvements.
         </p>
         <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-2xl transition-all flex items-center space-x-2 mx-auto">
            <span>Contact Core Team</span>
            <ExternalLink size={16} />
         </button>
      </div>
    </div>
  );
};

export default Improvements;
