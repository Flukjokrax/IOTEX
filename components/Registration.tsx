
import React from 'react';
import { UserPlus, Play, Wallet, ExternalLink, ShieldCheck, Info, CheckCircle2, Server } from 'lucide-react';

const Registration: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      <header className="space-y-4">
        <div className="inline-flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
          <UserPlus size={14} />
          <span>Delegate Onboarding</span>
        </div>
        <h2 className="text-4xl font-black text-white tracking-tighter">Profile Registration</h2>
        <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
          The first step to becoming an IoTeX Delegate is registering your profile on the governance portal. Choose between autonomous node management or a hosted service.
        </p>
      </header>

      {/* Hosted Service Info */}
      <div className="bg-indigo-500/10 border border-indigo-500/20 p-8 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[80px] rounded-full"></div>
        <div className="shrink-0 w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform duration-500">
          <Server size={32} />
        </div>
        <div className="flex-1 space-y-2">
          <h4 className="text-xl font-bold text-white">Prefer a Hosted Service?</h4>
          <p className="text-sm text-indigo-200/60 leading-relaxed max-w-2xl">
            If you'd rather avoid the technical aspects of configuring and managing a full node, check out <strong>Fastblock</strong>. They provide managed Delegate infrastructure so you can focus on community growth.
          </p>
          <a 
            href="https://delegates.iotex.io/get-started/hosted-service" 
            target="_blank" 
            className="inline-flex items-center space-x-2 text-indigo-400 text-xs font-black uppercase tracking-widest mt-2 hover:text-indigo-300 transition-colors"
          >
            <span>Explore Fastblock</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>

      {/* Video Section */}
      <section className="space-y-6">
        <div className="flex items-center space-x-3 text-white">
          <Play size={24} className="text-emerald-500" />
          <h3 className="text-2xl font-bold">Video Onboarding</h3>
        </div>
        <div className="aspect-video w-full rounded-[2.5rem] overflow-hidden border border-white/10 bg-black/40 shadow-2xl relative group">
           <iframe 
             className="w-full h-full"
             src="https://www.youtube.com/embed/RJAeNcx4Asc" 
             title="Become an IoTeX Delegate" 
             frameBorder="0" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
             referrerPolicy="strict-origin-when-cross-origin" 
             allowFullScreen
           ></iframe>
        </div>
      </section>

      {/* Step by Step Guide */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-8">
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white flex items-center space-x-3">
              <ShieldCheck className="text-emerald-400" />
              <span>Become a Delegate</span>
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Registering requires connecting an authorized IoTeX wallet to the Delegates Portal. This link establishes your identity on the blockchain.
            </p>
          </div>

          <div className="bg-[#14191f]/40 border border-white/5 rounded-3xl p-6 space-y-4">
            <h4 className="text-xs font-black text-gray-500 uppercase tracking-widest">Supported Wallets</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                "ioPay Desktop",
                "ioPay Mobile",
                "MetaMask",
                "Trust Wallet",
                "MathWallet",
                "imToken"
              ].map((wallet, i) => (
                <div key={i} className="flex items-center space-x-2 p-3 bg-white/5 rounded-xl border border-transparent hover:border-white/10 transition-all">
                  <Wallet size={14} className="text-emerald-500" />
                  <span className="text-[11px] font-semibold text-gray-300">{wallet}</span>
                </div>
              ))}
            </div>
          </div>

          <a 
            href="https://stake.iotex.io" 
            target="_blank" 
            className="flex items-center justify-between p-6 bg-emerald-600 hover:bg-emerald-500 text-white rounded-3xl shadow-xl shadow-emerald-500/20 group transition-all"
          >
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tight">Open Delegates Portal</span>
              <span className="text-[10px] uppercase font-bold tracking-widest opacity-70">Official IoTeX Governance</span>
            </div>
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
               <ExternalLink size={20} />
            </div>
          </a>
        </div>

        <div className="relative">
           <div className="absolute inset-0 bg-emerald-500/5 blur-[100px] rounded-full opacity-50"></div>
           <div className="relative bg-[#0b0e11] border border-white/10 rounded-[2.5rem] p-4 shadow-2xl">
              <div className="text-xs font-bold text-gray-500 mb-4 px-4 py-2 bg-white/5 rounded-xl w-fit">Portal Interface Preview</div>
              <img 
                src="https://1634134081-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F5whGkGlpM5BFduENPztv%2Fuploads%2Fbv6pdBXapWrhrSYbNtu9%2FScreen%20Shot%202022-09-15%20at%209.29.29%20AM.png?alt=media&token=06a918c4-d2a0-407a-a57a-b2023477a997" 
                alt="IoTeX Delegates Portal registration screen" 
                className="w-full h-auto rounded-2xl shadow-inner border border-white/5"
              />
              <div className="mt-6 space-y-4 px-4 pb-4">
                 <div className="flex items-start space-x-3">
                    <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                    <p className="text-xs text-gray-400">Click <strong>"Become a Delegate"</strong> on the landing page.</p>
                 </div>
                 <div className="flex items-start space-x-3">
                    <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                    <p className="text-xs text-gray-400">Connect your preferred wallet from the supported list.</p>
                 </div>
                 <div className="flex items-start space-x-3">
                    <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                    <p className="text-xs text-gray-400">Follow the on-screen prompts to input your Delegate profile details.</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
