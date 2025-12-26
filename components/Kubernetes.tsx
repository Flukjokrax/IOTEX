
import React from 'react';
import { Box, Activity, Shield, Cpu, Terminal, ExternalLink, Zap, Info, Layers } from 'lucide-react';

const Kubernetes: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      <header className="space-y-4">
        <div className="inline-flex items-center space-x-2 text-blue-400 text-xs font-bold uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
          <Box size={14} />
          <span>Container Orchestration</span>
        </div>
        <h2 className="text-4xl font-black text-white tracking-tighter">Kubernetes (k8s)</h2>
        <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
          Scale and manage your Delegate infrastructure with enterprise-grade container orchestration. <strong>Kubernetes</strong> simplifies deployment, upgrades, and high-availability.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {[
          { 
            title: "Automated Scaling", 
            desc: "Easily scale your node instances and manage containerized services with precision.",
            icon: <Layers className="text-blue-400" />
          },
          { 
            title: "Health Monitoring", 
            desc: "k8s automatically restarts failing nodes and performs health checks to maximize uptime.",
            icon: <Activity className="text-emerald-400" />
          },
          { 
            title: "Operational Efficiency", 
            desc: "Reduces manual intervention and long-term operation costs through automation.",
            icon: <Zap className="text-yellow-400" />
          }
        ].map((feature, i) => (
          <div key={i} className="bg-[#14191f] border border-white/5 rounded-[2rem] p-8 space-y-4 hover:border-blue-500/30 transition-all group">
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              {feature.icon}
            </div>
            <h3 className="text-lg font-bold text-white">{feature.title}</h3>
            <p className="text-xs text-gray-500 leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        <div className="lg:col-span-3 space-y-8">
           <div className="bg-black/40 border border-white/5 rounded-[2.5rem] p-8 space-y-6 shadow-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 text-white">
                  <Terminal className="text-blue-400" />
                  <h3 className="text-xl font-bold">Probe Configuration</h3>
                </div>
                <div className="text-[10px] font-bold text-gray-500 bg-white/5 px-2 py-1 rounded-lg">deployment.yaml</div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                IoTeX nodes utilize specific liveness and readiness probes. These health checks ensure that traffic is only routed to healthy nodes and that failing processes are recycled immediately.
              </p>
              
              <div className="bg-[#0b0e11] rounded-2xl p-6 border border-white/10 shadow-inner overflow-x-auto">
                <pre className="text-[11px] font-mono text-blue-100/70 leading-relaxed">
{`livenessProbe:
  httpGet:
    path: "/liveness"
    port: 8080
  initialDelaySeconds: 15
  timeoutSeconds: 2
  periodSeconds: 15
  failureThreshold: 5
readinessProbe:
  httpGet:
    path: "/readiness"
    port: 8080
  initialDelaySeconds: 30
  timeoutSeconds: 2
  periodSeconds: 15
  failureThreshold: 5`}
                </pre>
              </div>
           </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
           <div className="bg-gradient-to-br from-blue-900/20 to-transparent border border-white/10 rounded-[2.5rem] p-8 space-y-6 shadow-xl">
             <h3 className="text-xl font-bold text-white flex items-center space-x-2">
               <Shield className="text-blue-400" />
               <span>Expert Recommendation</span>
             </h3>
             <p className="text-sm text-gray-400 leading-relaxed">
               "We heavily rely on k8s in our test environment. k8s will for sure reduce your operation cost and maximize your delegate uptime."
             </p>
             <div className="pt-6 border-t border-white/5">
                <a 
                  href="https://kubernetes.io/" 
                  target="_blank"
                  className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center space-x-2"
                >
                  <span>Official K8s Docs</span>
                  <ExternalLink size={16} />
                </a>
             </div>
           </div>

           <div className="p-8 bg-white/5 border border-white/5 rounded-[2.5rem] space-y-4">
              <div className="flex items-center space-x-3 text-emerald-400">
                <Info size={18} />
                <h4 className="text-xs font-black uppercase tracking-widest">Network Architecture</h4>
              </div>
              <p className="text-[10px] text-gray-500 leading-relaxed">
                The setup we currently run for the IoTeX testnet follows a distributed architecture with multiple replicas and ingress controllers managing P2P and RPC traffic.
              </p>
              <img 
                src="https://github.com/iotexproject/iotex-bootstrap/raw/master/infra/infra.png?raw=true" 
                alt="IoTeX Infrastructure Diagram" 
                className="w-full h-auto rounded-xl border border-white/5 grayscale hover:grayscale-0 transition-all duration-500"
              />
           </div>
        </div>
      </div>
    </div>
  );
};

export default Kubernetes;
