
import React from 'react';
import { Server, HardDrive, Cpu, Network, ShieldAlert, CheckCircle2, Info, AlertTriangle, Layers, Terminal } from 'lucide-react';

const HardwareSpecs: React.FC = () => {
  const specs = [
    { label: "RAM", value: "64 GB", icon: <Layers size={18} className="text-blue-400" /> },
    { label: "Storage", value: "500 GB+", icon: <HardDrive size={18} className="text-emerald-400" /> },
    { label: "Disk Type", value: "SSD / NVMe", icon: <Server size={18} className="text-indigo-400" /> },
    { label: "CPU", value: "8 Cores, 2.4GHz+", icon: <Cpu size={18} className="text-purple-400" /> },
    { label: "Network", value: "1 Gbit Bandwidth", icon: <Network size={18} className="text-orange-400" /> },
  ];

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="space-y-4">
        <div className="inline-flex items-center space-x-2 text-blue-400 text-xs font-bold uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
          <Server size={14} />
          <span>Infrastructure standards</span>
        </div>
        <h2 className="text-4xl font-black text-white tracking-tighter">Hardware Specifications</h2>
        <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
          Reliable block production requires robust infrastructure. Adhering to these minimum technical standards ensures network health and consistent Delegate rewards.
        </p>
      </header>

      {/* Critical Warning */}
      <div className="bg-amber-500/10 border border-amber-500/20 p-6 rounded-3xl flex items-start space-x-4">
        <div className="shrink-0 p-2 bg-amber-500/20 rounded-xl text-amber-500 mt-1">
          <AlertTriangle size={20} />
        </div>
        <div>
          <h4 className="font-bold text-amber-200 mb-1">Infrastructure Compliance</h4>
          <p className="text-sm text-amber-200/60 leading-relaxed">
            Failing to meet these standards can affect entire network performance. Nodes unable to generate blocks on time may be probed for <strong>six blockchain epochs</strong> without reward.
          </p>
        </div>
      </div>

      {/* Specs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {specs.map((spec, i) => (
          <div key={i} className="bg-[#14191f] border border-white/5 p-6 rounded-3xl hover:border-white/10 transition-all group">
            <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
              {spec.icon}
            </div>
            <div className="text-xs font-black text-gray-500 uppercase tracking-widest mb-1">{spec.label}</div>
            <div className="text-xl font-bold text-white">{spec.value}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Software Guidelines */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-2xl font-bold text-white flex items-center space-x-3">
            <Terminal className="text-emerald-400" />
            <span>Software Stack</span>
          </h3>
          <div className="bg-black/40 border border-white/5 rounded-[2.5rem] overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5 text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em]">
                <tr>
                  <th className="px-8 py-4">Component</th>
                  <th className="px-8 py-4">Requirement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { component: "OS", req: "Debian Stretch Linux (or newer)" },
                  { component: "Compilers", req: "Go-Lang > 1.18.5" },
                  { component: "Containerization", req: "Docker & Docker-Compose" },
                  { component: "Operational Tools", req: "Monitoring & Alerting suites" },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-8 py-5 font-bold text-gray-300">{row.component}</td>
                    <td className="px-8 py-5 text-gray-400 font-mono text-xs">{row.req}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Operational Guidelines */}
        <div className="bg-gradient-to-br from-indigo-500/10 to-transparent border border-white/5 p-8 rounded-[2.5rem] space-y-6">
          <h3 className="text-xl font-bold text-white flex items-center space-x-2">
            <ShieldAlert size={20} className="text-indigo-400" />
            <span>Operations</span>
          </h3>
          <ul className="space-y-4">
            {[
              "Maintain 99.99% server uptime.",
              "Failover across different geolocations.",
              "Regular data backups and software updates.",
              "Preventive security hardening (Firewalls, SSH)."
            ].map((text, i) => (
              <li key={i} className="flex items-start space-x-3 text-sm text-gray-400">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
          <div className="pt-4 mt-6 border-t border-white/5">
             <div className="flex items-center space-x-3 p-4 bg-indigo-500/10 rounded-2xl border border-indigo-500/20">
                <Info size={18} className="text-indigo-400 shrink-0" />
                <p className="text-[11px] text-indigo-200/70 font-medium">
                  <strong>Backup Nodes:</strong> Implement at least one backup node to ensure zero downtime during maintenance cycles.
                </p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HardwareSpecs;
