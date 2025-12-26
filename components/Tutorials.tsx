
import React, { useState } from 'react';
import { BookOpen, UserPlus, Handshake, ExternalLink, CheckCircle2, ChevronRight, Info, Layout, Settings, PlayCircle } from 'lucide-react';

const Tutorials: React.FC = () => {
  const [activeMode, setActiveMode] = useState<'delegate' | 'endorser'>('delegate');

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      <header className="space-y-4">
        <div className="inline-flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
          <BookOpen size={14} />
          <span>Onboarding Guides</span>
        </div>
        <h2 className="text-4xl font-black text-white tracking-tighter">Staking Portal Tutorials</h2>
        <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
          Step-by-step walkthroughs for interacting with the official IoTeX Staking Portal. Whether you're a new node operator or a community supporter.
        </p>
      </header>

      {/* Mode Selector */}
      <div className="flex p-1.5 bg-[#14191f] border border-white/5 rounded-[2rem] w-fit">
        <button 
          onClick={() => setActiveMode('delegate')}
          className={`flex items-center space-x-2 px-8 py-3 rounded-[1.5rem] text-sm font-bold transition-all ${
            activeMode === 'delegate' ? 'bg-emerald-600 text-white shadow-xl shadow-emerald-500/20' : 'text-gray-500 hover:text-white'
          }`}
        >
          <UserPlus size={18} />
          <span>For New Delegates</span>
        </button>
        <button 
          onClick={() => setActiveMode('endorser')}
          className={`flex items-center space-x-2 px-8 py-3 rounded-[1.5rem] text-sm font-bold transition-all ${
            activeMode === 'endorser' ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-500/20' : 'text-gray-500 hover:text-white'
          }`}
        >
          <Handshake size={18} />
          <span>For Stakers (Endorsers)</span>
        </button>
      </div>

      {activeMode === 'delegate' ? (
        <div className="space-y-12 animate-in fade-in slide-in-from-left-4 duration-500">
          {/* Section: Profile Creation */}
          <section className="space-y-8">
            <div className="flex items-center space-x-3 text-white">
              <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400">
                <Layout size={20} />
              </div>
              <h3 className="text-2xl font-bold">Create Your Delegate Profile</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div className="space-y-6">
                 {[
                   { step: 1, title: "Access the Portal", desc: "Visit stake.iotex.io and click on the 'Delegate' tab in the navigation bar." },
                   { step: 2, title: "Start Setup", desc: "Select 'Create Self-Staking Bucket' to begin setting up your primary delegate identity." },
                   { step: 3, title: "Choose Endorsement", desc: "Navigate to the 'By Endorse' tab if you plan to meet requirements via community support." }
                 ].map((item, i) => (
                   <div key={i} className="flex space-x-4 p-6 bg-[#14191f] border border-white/5 rounded-3xl relative group overflow-hidden">
                      <div className="shrink-0 w-8 h-8 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-400 text-sm font-black border border-emerald-500/20">
                         {item.step}
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-white font-bold">{item.title}</h4>
                        <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                      </div>
                   </div>
                 ))}
                 <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-3xl flex items-start space-x-3">
                    <Info size={18} className="text-blue-400 shrink-0 mt-0.5" />
                    <p className="text-[11px] text-blue-200/60 italic leading-relaxed">
                      Need help filling fields? Refer to the <strong>Delegate Management</strong> section in the docs for detailed field definitions.
                    </p>
                 </div>
              </div>
              <div className="space-y-6">
                <div className="bg-[#0b0e11] border border-white/10 rounded-[2.5rem] p-4 shadow-2xl relative group overflow-hidden">
                   <img 
                    src="https://1634134081-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F5whGkGlpM5BFduENPztv%2Fuploads%2FsL39KqbnlSTUGeYUw3Qk%2F1280X1280.png?alt=media&token=ddd67f3d-5137-42df-92a9-3e280baf4416" 
                    alt="Delegate Portal Nav" 
                    className="w-full h-auto rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700"
                   />
                </div>
                <div className="bg-[#0b0e11] border border-white/10 rounded-[2.5rem] p-4 shadow-2xl relative group overflow-hidden">
                   <img 
                    src="https://1634134081-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F5whGkGlpM5BFduENPztv%2Fuploads%2FJVGXkq0s63654IUgNNnK%2F1280X1280%20(1).png?alt=media&token=8af54b0c-1e10-4267-95a8-06c4da5f0c7f" 
                    alt="Endorsement Form" 
                    className="w-full h-auto rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700"
                   />
                </div>
              </div>
            </div>
          </section>

          {/* Section: Management Dashboard */}
          <section className="p-10 bg-gradient-to-br from-emerald-500/10 to-transparent border border-white/5 rounded-[3rem] space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-white">Delegate Dashboard</h3>
                <p className="text-sm text-gray-400">Post-registration operations and monitoring.</p>
              </div>
              <a href="https://stake.iotex.io" target="_blank" className="flex items-center space-x-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl transition-all shadow-xl shadow-emerald-500/20 font-bold text-sm">
                <span>Access My Dashboard</span>
                <ExternalLink size={16} />
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {[
                 { title: "Edit Profile", icon: <Settings size={18} />, desc: "Update your brand assets, social links, and bio." },
                 { title: "Reward Config", icon: <Handshake size={18} />, desc: "Define distribution percentages for your voters." },
                 { title: "Review Requests", icon: <CheckCircle2 size={18} />, desc: "Accept endorsement requests to unlock consensus." }
               ].map((box, i) => (
                 <div key={i} className="bg-black/40 p-6 rounded-3xl border border-white/5 space-y-3">
                   <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400">
                     {box.icon}
                   </div>
                   <h4 className="text-sm font-bold text-white">{box.title}</h4>
                   <p className="text-[11px] text-gray-500 leading-relaxed">{box.desc}</p>
                 </div>
               ))}
            </div>
          </section>

          {/* Section: Approving Requests */}
          <section className="space-y-8">
            <div className="flex items-center space-x-3 text-white">
               <div className="w-10 h-10 bg-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-400">
                 <PlayCircle size={20} />
               </div>
               <h3 className="text-2xl font-bold">Approving Endorsement Requests</h3>
            </div>
            <div className="bg-[#14191f] border border-white/5 p-8 rounded-[2.5rem] space-y-6">
               <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-indigo-400 shrink-0">
                    <ChevronRight size={20} />
                  </div>
                  <div className="space-y-4">
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Go to the <strong>Advanced Configuration</strong> section of your dashboard under "My Profile" to find pending requests.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       <div className="p-5 bg-black/40 border border-white/5 rounded-2xl flex items-center space-x-3">
                          <CheckCircle2 size={16} className="text-emerald-500" />
                          <span className="text-xs text-gray-300">Approval enables consensus participation immediately.</span>
                       </div>
                       <div className="p-5 bg-black/40 border border-white/5 rounded-2xl flex items-center space-x-3">
                          <CheckCircle2 size={16} className="text-emerald-500" />
                          <span className="text-xs text-gray-300">Manage multiple buckets independently.</span>
                       </div>
                    </div>
                  </div>
               </div>
            </div>
          </section>
        </div>
      ) : (
        <div className="space-y-12 animate-in fade-in slide-in-from-right-4 duration-500">
          <section className="space-y-8">
            <div className="flex items-center space-x-3 text-white">
              <div className="w-10 h-10 bg-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-400">
                {/* Fix: Component names must start with a capital letter in React (Handshake) */}
                <Handshake size={20} />
              </div>
              <h3 className="text-2xl font-bold">Endorsement Options</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
               {/* Option 1: Direct */}
               <div className="bg-[#14191f] border border-white/5 rounded-[2.5rem] p-8 space-y-6 flex flex-col relative overflow-hidden group shadow-2xl">
                  <span className="absolute top-4 right-8 text-[10px] font-black text-indigo-400 uppercase tracking-widest bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">Recommended</span>
                  <h4 className="text-xl font-bold text-white">Option 1: Direct Endorse Bucket</h4>
                  <ul className="space-y-4 pt-2">
                    {[
                      { step: 1, text: "Click 'Stake Your IOTX' on the portal homepage." },
                      { step: 2, text: "Select 'Endorse Bucket' under the Native Staking options." },
                      { step: 3, text: "Choose a Delegate and enter stake amount (min 1.2M IOTX)." }
                    ].map((item, i) => (
                      <li key={i} className="flex items-center space-x-3 text-xs text-gray-400">
                        <span className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold shrink-0">{item.step}</span>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-6">
                    <img 
                      src="https://1634134081-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F5whGkGlpM5BFduENPztv%2Fuploads%2FlnSJ1sTSFoo9eIfSM8RQ%2F1280X1280%20(2).png?alt=media&token=18057736-dfa7-4e5f-b6ce-6c1482281135" 
                      alt="Direct Endorse" 
                      className="w-full h-auto rounded-2xl border border-white/5 shadow-inner"
                    />
                  </div>
               </div>

               {/* Option 2: Conversion */}
               <div className="bg-[#14191f] border border-white/5 rounded-[2.5rem] p-8 space-y-6 flex flex-col relative overflow-hidden group shadow-2xl">
                  <h4 className="text-xl font-bold text-white">Option 2: Native to Endorse</h4>
                  <ul className="space-y-4 pt-2">
                    {[
                      { step: 1, text: "Navigate to the 'My Votes' panel in the portal." },
                      { step: 2, text: "Locate a bucket with >1.2M IOTX and click 'Action'." },
                      { step: 3, text: "Select 'Convert to Endorse Bucket' from the menu." }
                    ].map((item, i) => (
                      <li key={i} className="flex items-center space-x-3 text-xs text-gray-400">
                        <span className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-gray-500 font-bold shrink-0">{item.step}</span>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-6">
                    <img 
                      src="https://1634134081-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F5whGkGlpM5BFduENPztv%2Fuploads%2FVSqq2OqETYsZHPna0tjf%2F5674ddbd-fa14-4703-9c48-fedf5d3aac6e.png?alt=media&token=2cb93025-0fcd-4b93-b887-c016ec16303e" 
                      alt="Bucket Conversion" 
                      className="w-full h-auto rounded-2xl border border-white/5 shadow-inner"
                    />
                  </div>
               </div>
            </div>
          </section>

          <div className="p-8 bg-indigo-500/10 border border-indigo-500/20 rounded-[2.5rem] flex items-start space-x-4">
             <Info size={24} className="text-indigo-400 shrink-0 mt-1" />
             <div className="space-y-1">
               <h4 className="font-bold text-white">Important Eligibility</h4>
               <p className="text-xs text-indigo-200/60 leading-relaxed">
                 Only buckets with more than <strong>1.2M IOTX</strong> and currently in <strong>staking status</strong> are eligible for conversion into an Endorse Bucket.
               </p>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tutorials;
