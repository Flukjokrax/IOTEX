
import React from 'react';
import { ShieldCheck, Zap, Lock, Link2, Code, Terminal, ExternalLink, Activity, Settings } from 'lucide-react';

const EdgeProxy: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      <header className="space-y-4">
        <div className="inline-flex items-center space-x-2 text-cyan-400 text-xs font-bold uppercase tracking-widest bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
          <ShieldCheck size={14} />
          <span>Application Layer Security</span>
        </div>
        <h2 className="text-4xl font-black text-white tracking-tighter">Edge Proxy (Envoy)</h2>
        <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
          Shield your node with <strong>Envoy Proxy</strong>. Add sophisticated rate limiting and connection management to your IoTeX infrastructure.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Protection Card */}
        <div className="bg-[#14191f] border border-white/5 rounded-[2.5rem] p-8 space-y-6 relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-500 shadow-2xl">
           <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Lock size={120} />
           </div>
           <div className="flex items-center space-x-4 mb-4">
              <div className="w-14 h-14 bg-cyan-500/20 rounded-2xl flex items-center justify-center text-cyan-400">
                 <Zap size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white">L7 Defense</h3>
                <span className="text-[10px] font-black uppercase tracking-widest text-cyan-500/70">Request Sanitization</span>
              </div>
           </div>
           <p className="text-sm text-gray-400 leading-relaxed">
             Envoy provides another layer of protection by managing HTTP/HTTP2 traffic and enforcing connection limits across all network interactions.
           </p>
           <ul className="space-y-3 pt-2">
              {[
                "Rate limiting on HTTP/HTTP2 requests.",
                "Global connection limit enforcement.",
                "Advanced request logging & observability.",
                "Service node gRPC-Web support."
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-3 text-xs text-cyan-200/60">
                  <ShieldCheck size={16} className="text-cyan-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
           </ul>
        </div>

        {/* gRPC-Web Card */}
        <div className="bg-indigo-500/5 border border-indigo-500/10 rounded-[2.5rem] p-8 space-y-6 relative overflow-hidden group hover:border-indigo-500/30 transition-all duration-500 shadow-2xl">
           <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Link2 size={120} />
           </div>
           <div className="flex items-center space-x-4 mb-4">
              <div className="w-14 h-14 bg-indigo-500/20 rounded-2xl flex items-center justify-center text-indigo-400">
                 <Settings size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white">Service Node</h3>
                <span className="text-[10px] font-black uppercase tracking-widest text-indigo-500/70">gRPC-Web Protocol</span>
              </div>
           </div>
           <p className="text-sm text-gray-400 leading-relaxed">
             Essential for delegates serving API requests to browser applications. Envoy's <code className="text-indigo-300">grpc-web</code> filter bridges the gap between web clients and the IoTeX node.
           </p>
           <div className="pt-4">
             <a href="https://github.com/grpc/grpc-web" target="_blank" className="inline-flex items-center space-x-2 text-indigo-400 font-bold text-xs uppercase tracking-widest hover:text-indigo-300 transition-colors">
               <span>Docs: grpc-web</span>
               <ExternalLink size={14} />
             </a>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
           {/* Code Preview Section */}
           <div className="bg-black/40 border border-white/5 rounded-[2.5rem] p-8 space-y-6">
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center space-x-3">
                  <Terminal className="text-cyan-400" />
                  <h3 className="text-xl font-bold">Example Configuration</h3>
                </div>
                <div className="text-[10px] font-bold text-gray-500 px-3 py-1 bg-white/5 rounded-lg border border-white/5 font-mono">envoy.yaml</div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                This configuration snippet demonstrates setting a <strong>50 connection limit</strong> and enabling the HTTP rate limit filter.
              </p>
              
              <div className="bg-[#0b0e11] rounded-2xl p-6 border border-white/10 shadow-inner overflow-x-auto">
                <pre className="text-[11px] font-mono text-cyan-100/70 leading-relaxed">
{`static_resources:
  listeners:
  - name: listener_0
    address:
      socket_address: { address: 0.0.0.0, port_value: 10000 }
    filter_chains:
    - filters:
      - name: envoy.filters.network.http_connection_manager
        typed_config:
          "@type": type.googleapis.com/envoy.extensions.filters.network.http_connection_manager.v3.HttpConnectionManager
          stat_prefix: ingress_http
          # ... rate limit configuration ...
          common_http_protocol_options:
            max_connection_duration: 3600s
          http_filters:
          - name: envoy.filters.http.router
            typed_config:
              "@type": type.googleapis.com/envoy.extensions.filters.http.router.v3.Router
          # Max connections enforced here
          per_connection_buffer_limit_bytes: 32768
`}
                </pre>
              </div>
           </div>

           {/* Rate Limit Integration */}
           <div className="flex items-start space-x-4 p-8 bg-indigo-500/10 border border-indigo-500/20 rounded-[2.5rem]">
              <Activity size={24} className="text-indigo-400 shrink-0 mt-1" />
              <div className="space-y-2">
                <h4 className="font-bold text-white">Lyft Rate Limit Integration</h4>
                <p className="text-xs text-indigo-200/60 leading-relaxed">
                  Envoy pairs perfectly with the <a href="https://github.com/lyft/ratelimit" target="_blank" className="underline decoration-indigo-400/30 underline-offset-4 font-bold">Lyft Ratelimit</a> service to provide fine-grained control over incoming traffic peaks, preventing service exhaustion.
                </p>
              </div>
           </div>
        </div>

        <div className="space-y-6 sticky top-8">
          <div className="bg-gradient-to-br from-cyan-900/20 to-transparent border border-white/10 rounded-[2.5rem] p-8 space-y-6 shadow-2xl">
            <h3 className="text-lg font-bold text-white flex items-center space-x-2">
              <Code size={20} className="text-cyan-400" />
              <span>Full Gist</span>
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Access the complete Envoy and Rate Limit configuration example shared by the IoTeX core team.
            </p>
            <div className="pt-4 border-t border-white/5">
              <a 
                href="https://gist.github.com/yutongp/c61292bf5c9c6e3058df96989365cb0c" 
                target="_blank"
                className="w-full py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-2xl transition-all shadow-xl shadow-cyan-500/20 flex items-center justify-center space-x-2 group"
              >
                 <span>View Config Gist</span>
                 <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
            <div className="flex items-center space-x-2 p-4 bg-white/5 rounded-2xl border border-white/5">
               <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
               <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Recommended for gateways</span>
            </div>
          </div>
          
          <div className="p-8 bg-black/20 border border-white/5 rounded-[2.5rem] space-y-4">
             <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest">Architect's Tip</h4>
             <p className="text-xs text-gray-500 italic leading-relaxed">
               "If you intend to use your node as an IoTeX API gateway, Envoy is not just a security layer—it's a performance necessity."
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EdgeProxy;
