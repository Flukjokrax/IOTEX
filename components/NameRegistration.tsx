
import React from 'react';
import { Tag, Fingerprint, Type, FileText, Mail, ShieldCheck, CheckCircle2, Info, ArrowRight } from 'lucide-react';

const NameRegistration: React.FC = () => {
  const fields = [
    {
      title: "Profile Account Name",
      requirement: "12 alphanumeric characters",
      desc: "This is your unique on-chain ID used to identify your delegate node across the network.",
      icon: <Fingerprint size={20} className="text-emerald-400" />
    },
    {
      title: "Delegate Name",
      requirement: "Max 20 characters",
      desc: "Your user-friendly public facing brand name that voters will see in the portal.",
      icon: <Type size={20} className="text-indigo-400" />
    },
    {
      title: "Delegate Bio",
      requirement: "Short sentence",
      desc: "A brief representational tagline for your Delegate brand and mission.",
      icon: <FileText size={20} className="text-pink-400" />
    }
  ];

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      <header className="space-y-4">
        <div className="inline-flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
          <Tag size={14} />
          <span>Profile Configuration</span>
        </div>
        <h2 className="text-4xl font-black text-white tracking-tighter">Name Registration</h2>
        <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
          Establish your identity. This stage defines how the network and the community recognize your node.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <div className="bg-[#14191f] border border-white/5 rounded-[2.5rem] p-8 space-y-8">
            <h3 className="text-xl font-bold text-white flex items-center space-x-2">
              <ShieldCheck className="text-emerald-400" />
              <span>Identity Setup</span>
            </h3>
            
            <div className="space-y-8">
              {fields.map((field, i) => (
                <div key={i} className="flex space-x-4">
                  <div className="shrink-0 w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center">
                    {field.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-white">{field.title}</h4>
                    <span className="text-[10px] text-emerald-500/70 font-black uppercase tracking-wider">{field.requirement}</span>
                    <p className="text-xs text-gray-500 leading-relaxed mt-1">
                      {field.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-indigo-500/10 border border-indigo-500/20 p-6 rounded-3xl space-y-4">
            <div className="flex items-center space-x-3 text-indigo-400">
              <Mail size={20} />
              <h4 className="font-bold">Operational Contact</h4>
            </div>
            <p className="text-sm text-indigo-200/60 leading-relaxed">
              <strong>Email Address:</strong> Provide a reliable email for the node operator. IoTeX uses this for urgent technical notifications and critical network updates.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-emerald-500/5 blur-[80px] rounded-full opacity-50"></div>
            <div className="relative bg-[#0b0e11] border border-white/10 rounded-[2.5rem] p-6 shadow-2xl overflow-hidden">
               <div className="flex items-center justify-between mb-6">
                 <div className="text-xs font-bold text-gray-400 bg-white/5 px-3 py-1 rounded-lg">Portal Preview</div>
                 <CheckCircle2 size={16} className="text-emerald-500" />
               </div>
               <img 
                 src="https://1634134081-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F5whGkGlpM5BFduENPztv%2Fuploads%2FNsIaWZDFXU9EDsZ83Ix7%2FScreen%20Shot%202022-09-15%20at%209.36.54%20AM.png?alt=media&token=92d42871-0f9e-49a2-af6f-ec85d047f635" 
                 alt="Name Registration interface" 
                 className="w-full h-auto rounded-xl border border-white/5 shadow-inner mb-6"
               />
               <div className="bg-white/5 rounded-2xl p-4 border border-white/5 group-hover:border-emerald-500/20 transition-colors">
                 <div className="flex items-start space-x-3">
                   <Info size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                   <p className="text-[11px] text-gray-500 leading-relaxed">
                     Once the Name Registration is complete, you will proceed to configure <strong>staking requirements</strong> and <strong>reward mechanisms</strong>.
                   </p>
                 </div>
               </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/20 to-transparent border border-white/5 p-8 rounded-[2.5rem] flex flex-col justify-center">
            <h4 className="text-lg font-bold text-white mb-2">Operator Security</h4>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              The <strong>Operator Address</strong> should be distinct from your Profile Account to ensure that node compromise doesn't lead to profile loss.
            </p>
            <button className="flex items-center space-x-2 text-indigo-400 font-black text-xs uppercase tracking-widest hover:translate-x-1 transition-transform group">
               <span>Learn about Operator Security</span>
               <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NameRegistration;
