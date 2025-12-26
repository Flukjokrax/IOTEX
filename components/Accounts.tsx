
import React from 'react';
import { Key, UserCircle, Cpu, Wallet, ShieldAlert, CheckCircle2, AlertTriangle, HelpCircle, ArrowRight } from 'lucide-react';

const Accounts: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      <header className="space-y-4">
        <div className="inline-flex items-center space-x-2 text-indigo-400 text-xs font-bold uppercase tracking-widest bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
          <Key size={14} />
          <span>Account Architecture</span>
        </div>
        <h2 className="text-4xl font-black text-white tracking-tighter">Delegate Accounts</h2>
        <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
          Security is paramount. Before registering, it's critical to understand the three distinct account roles and how to secure each one.
        </p>
      </header>

      {/* Distiction Alert */}
      <div className="bg-blue-500/10 border border-blue-500/20 p-6 rounded-[2rem] flex items-start space-x-4">
        <div className="shrink-0 p-3 bg-blue-500/20 rounded-2xl text-blue-400">
          <HelpCircle size={24} />
        </div>
        <div>
          <h4 className="font-bold text-white mb-1 text-lg">Are these different accounts?</h4>
          <p className="text-sm text-blue-200/60 leading-relaxed">
            While they don't <em>necessarily</em> have to be three different physical addresses, using distinct accounts for <strong>Profile</strong>, <strong>Operator</strong>, and <strong>Rewards</strong> is the standard for high-security Delegate operations.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Account */}
        <div className="relative group p-8 bg-[#14191f] border border-white/5 rounded-[2.5rem] hover:border-emerald-500/30 transition-all duration-500">
          <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-400 mb-8 group-hover:scale-110 transition-transform">
            <UserCircle size={32} />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Profile Account</h3>
          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            The master identity. Used to register in the network and manage node configurations. This address <strong>cannot be changed</strong> later.
          </p>
          <div className="mt-auto pt-6 border-t border-white/5 space-y-3">
             <div className="flex items-center space-x-2 text-emerald-400 font-bold text-[10px] uppercase tracking-widest">
               <ShieldAlert size={14} />
               <span>Hardware Wallet Suggested</span>
             </div>
             <p className="text-[11px] text-gray-500 italic">Losing this key = total loss of profile and rewards.</p>
          </div>
        </div>

        {/* Operator Account */}
        <div className="relative group p-8 bg-[#14191f] border border-white/5 rounded-[2.5rem] hover:border-indigo-500/30 transition-all duration-500">
          <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-400 mb-8 group-hover:scale-110 transition-transform">
            <Cpu size={32} />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Operator Account</h3>
          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            Used by the node software. Its private key must be in the config file. We advise a dedicated account to keep your master profile keys off the server.
          </p>
          <div className="mt-auto pt-6 border-t border-white/5 space-y-3">
             <div className="flex items-center space-x-2 text-indigo-400 font-bold text-[10px] uppercase tracking-widest">
               <AlertTriangle size={14} />
               <span>No Hardware Wallets</span>
             </div>
             <p className="text-[11px] text-gray-500 italic">Required for automated block signing by node.</p>
          </div>
        </div>

        {/* Rewards Account */}
        <div className="relative group p-8 bg-[#14191f] border border-white/5 rounded-[2.5rem] hover:border-pink-500/30 transition-all duration-500">
          <div className="w-14 h-14 bg-pink-500/10 rounded-2xl flex items-center justify-center text-pink-400 mb-8 group-hover:scale-110 transition-transform">
            <Wallet size={32} />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Rewards Account</h3>
          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            Receives block rewards upon claiming. Can be shared with HERMES for auto-distribution to your community of voters.
          </p>
          <div className="mt-auto pt-6 border-t border-white/5 space-y-3">
             <div className="flex items-center space-x-2 text-pink-400 font-bold text-[10px] uppercase tracking-widest">
               <CheckCircle2 size={14} />
               <span>HERMES Compatible</span>
             </div>
             <p className="text-[11px] text-gray-500 italic">Claiming requires ioctl CLI interaction.</p>
          </div>
        </div>
      </div>

      {/* Summary Table */}
      <section className="space-y-6">
         <h3 className="text-2xl font-bold text-white">Summary of Accounts</h3>
         <div className="bg-black/40 border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl">
            <table className="w-full text-left text-sm">
               <thead className="bg-white/5 text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em]">
                  <tr>
                     <th className="px-8 py-5">Account Role</th>
                     <th className="px-8 py-5">Primary Responsibility</th>
                     <th className="px-8 py-5">Hardware Wallet Support</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-white/5">
                  <tr className="hover:bg-emerald-500/[0.02] transition-colors">
                     <td className="px-8 py-6 font-bold text-white">Profile Account</td>
                     <td className="px-8 py-6 text-gray-400">Main delegate identity and configuration management.</td>
                     <td className="px-8 py-6">
                        <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-[10px] font-black uppercase">Highly Suggested</span>
                     </td>
                  </tr>
                  <tr className="hover:bg-indigo-500/[0.02] transition-colors">
                     <td className="px-8 py-6 font-bold text-white">Operator Account</td>
                     <td className="px-8 py-6 text-gray-400">Required to run node software and sign block production.</td>
                     <td className="px-8 py-6">
                        <span className="px-3 py-1 bg-red-500/10 text-red-400 border border-red-500/20 rounded-full text-[10px] font-black uppercase">Not Supported</span>
                     </td>
                  </tr>
                  <tr className="hover:bg-pink-500/[0.02] transition-colors">
                     <td className="px-8 py-6 font-bold text-white">Rewards Account</td>
                     <td className="px-8 py-6 text-gray-400">Receives block rewards and handles distribution to voters.</td>
                     <td className="px-8 py-6">
                        <span className="px-3 py-1 bg-red-500/10 text-red-400 border border-red-500/20 rounded-full text-[10px] font-black uppercase">No (ioctl Required)</span>
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </section>

      {/* Quick Tips */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
         <div className="p-8 bg-white/5 border border-white/5 rounded-[2.5rem] relative group">
            <h4 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
               <ShieldAlert className="text-orange-400" />
               <span>Security Warning</span>
            </h4>
            <p className="text-sm text-gray-400 leading-relaxed">
               Please notice that you will <strong>not be able to change</strong> the Profile Account address. Losing the private key will result in losing access to your profile and rewards permanently.
            </p>
         </div>
         <div className="p-8 bg-emerald-500/10 border border-emerald-500/20 rounded-[2.5rem] flex flex-col justify-center">
            <h4 className="text-lg font-bold text-white mb-2 italic">Next Step</h4>
            <p className="text-sm text-emerald-200/60 mb-6">Once you've secured your addresses, you're ready to register your profile.</p>
            <button className="flex items-center space-x-2 text-emerald-400 font-black text-xs uppercase tracking-widest hover:translate-x-1 transition-transform">
               <span>Proceed to Registration</span>
               <ArrowRight size={16} />
            </button>
         </div>
      </div>
    </div>
  );
};

export default Accounts;
