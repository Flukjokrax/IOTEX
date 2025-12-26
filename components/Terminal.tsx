
import React, { useState } from 'react';
import { Terminal as TerminalIcon, ShieldCheck, Settings, Database, Activity } from 'lucide-react';

const Terminal: React.FC = () => {
  const [output, setOutput] = useState<string[]>(['$ systemctl status iotex-node', '● iotex-node.service - IoTeX Full Node', '   Loaded: loaded (/etc/systemd/system/iotex-node.service)', '   Active: active (running) since Mon 2024-05-20']);

  const quickCommands = [
    { label: 'Check Status', cmd: 'docker ps' },
    { label: 'View Logs', cmd: 'docker logs -f iotex-node' },
    { label: 'Restart Node', cmd: 'docker-compose restart' },
    { label: 'Config Check', cmd: 'cat config.yaml | grep external' },
  ];

  const handleRun = (cmd: string) => {
    setOutput(prev => [...prev, `$ ${cmd}`, 'Executing command...', 'Response: Success (Operation Completed)']);
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header>
        <h2 className="text-3xl font-bold text-white mb-2">Quick Commands</h2>
        <p className="text-gray-400">Common administrative commands for managing your node infrastructure via CLI.</p>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {quickCommands.map((item, idx) => (
          <button 
            key={idx}
            onClick={() => handleRun(item.cmd)}
            className="flex flex-col items-center justify-center p-6 bg-[#14191f] border border-gray-800 rounded-2xl hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all group"
          >
            <TerminalIcon className="text-gray-500 group-hover:text-emerald-400 mb-3" size={24} />
            <span className="text-xs font-semibold text-white group-hover:text-emerald-300">{item.label}</span>
          </button>
        ))}
      </div>

      <div className="bg-black rounded-2xl border border-gray-800 overflow-hidden shadow-2xl">
        <div className="flex items-center px-4 py-2 bg-gray-900 border-b border-gray-800">
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <div className="mx-auto text-[10px] font-mono text-gray-500 uppercase tracking-widest">root@iotex-node-v1</div>
        </div>
        <div className="p-6 h-64 overflow-y-auto font-mono text-sm space-y-1 scrollbar-thin">
          {output.map((line, i) => (
            <div key={i} className={line.startsWith('$') ? 'text-emerald-400 mt-2' : 'text-gray-400'}>
              {line}
            </div>
          ))}
          <div className="flex items-center text-emerald-400 mt-2">
            <span>$</span>
            <span className="ml-2 w-2 h-4 bg-emerald-500 animate-pulse"></span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#14191f] p-6 rounded-2xl border border-gray-800 flex items-center space-x-4">
          <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400">
            <ShieldCheck size={24} />
          </div>
          <div>
            <h4 className="font-semibold text-white">Security Hardening</h4>
            <p className="text-xs text-gray-500">Enable UFW and restrict port 4689.</p>
          </div>
        </div>
        <div className="bg-[#14191f] p-6 rounded-2xl border border-gray-800 flex items-center space-x-4">
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
            <Database size={24} />
          </div>
          <div>
            <h4 className="font-semibold text-white">DB Maintenance</h4>
            <p className="text-xs text-gray-500">Regular snapshots for fast recovery.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
