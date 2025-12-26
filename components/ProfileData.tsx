
import React from 'react';
import { Image, Globe, Share2, Twitter, MessageSquare, Briefcase, CheckCircle2, Layout, Info } from 'lucide-react';

const ProfileData: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      <header className="space-y-4">
        <div className="inline-flex items-center space-x-2 text-indigo-400 text-xs font-bold uppercase tracking-widest bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
          <Layout size={14} />
          <span>Brand Identity</span>
        </div>
        <h2 className="text-4xl font-black text-white tracking-tighter">Profile Data</h2>
        <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
          Your public persona in the IoTeX ecosystem. Configure how voters perceive your brand on the official staking portal.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <div className="bg-[#14191f] border border-white/5 rounded-[2.5rem] p-8 space-y-8 relative group overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Image size={80} />
            </div>
            <h3 className="text-xl font-bold text-white flex items-center space-x-3">
              <Briefcase className="text-indigo-400" />
              <span>Public Assets</span>
            </h3>
            
            <div className="grid gap-6">
              {[
                { icon: <Globe size={18} />, label: "Official Website", desc: "The primary link for voters to learn about your team." },
                { icon: <Image size={18} />, label: "Logo & Banner", desc: "High-quality visual identification for your profile card." },
                { icon: <Share2 size={18} />, label: "Social Channels", desc: "Connect Twitter, Telegram, and Discord for community trust." }
              ].map((item, i) => (
                <div key={i} className="flex space-x-4 p-4 bg-white/5 rounded-2xl border border-white/5 group-hover:border-indigo-500/20 transition-all">
                  <div className="shrink-0 w-10 h-10 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{item.label}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-emerald-500/10 border border-emerald-500/20 p-8 rounded-[2.5rem] space-y-4">
            <div className="flex items-center space-x-3 text-emerald-500">
               <Info size={24} />
               <h4 className="font-bold">Community Visibility</h4>
            </div>
            <p className="text-sm text-emerald-200/60 leading-relaxed">
              This information is displayed on your Delegate Profile page on <strong>stake.iotex.io</strong> when users click your name. Transparent profiles often attract significantly more votes.
            </p>
          </div>
        </div>

        <div className="space-y-6 sticky top-8">
          <div className="relative group">
            <div className="absolute inset-0 bg-indigo-500/5 blur-[80px] rounded-full opacity-50"></div>
            <div className="relative bg-[#0b0e11] border border-white/10 rounded-[2.5rem] p-6 shadow-2xl overflow-hidden">
               <div className="flex items-center justify-between mb-6">
                 <div className="text-xs font-bold text-gray-400 bg-white/5 px-3 py-1 rounded-lg">My Profile Preview</div>
                 <CheckCircle2 size={16} className="text-indigo-500" />
               </div>
               <img 
                 src="https://1634134081-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F5whGkGlpM5BFduENPztv%2Fuploads%2FnUuZgnCo8n6t7iXMfxrN%2FScreen%20Shot%202022-09-14%20at%202.34.59%20PM.png?alt=media&token=3891c17f-4641-45f4-8f1c-d0ff82f36aa1" 
                 alt="Profile data configuration interface" 
                 className="w-full h-auto rounded-xl border border-white/5 shadow-inner mb-6"
               />
               <div className="flex items-center space-x-4">
                 <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-[#0b0e11] flex items-center justify-center"><Twitter size={14} /></div>
                    <div className="w-8 h-8 rounded-full bg-sky-500 border-2 border-[#0b0e11] flex items-center justify-center"><MessageSquare size={14} /></div>
                 </div>
                 <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Connect Socials</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileData;
