
import React, { useState } from 'react';
import { SMART_CONTRACT_CODE, INTERACT_CODE } from '../constants';
import { Code2, ExternalLink, Copy, Check, Blocks, Zap, Cpu } from 'lucide-react';

const DeveloperHub: React.FC = () => {
  const [activePart, setActivePart] = useState<1 | 2>(1);
  const [copied, setCopied] = useState(false);

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header>
        <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">
          <Blocks size={14} />
          <span>Layer 1 Ecosystem</span>
        </div>
        <h2 className="text-3xl font-bold text-white mb-2">Developer Quick Start</h2>
        <p className="text-gray-400 max-w-2xl leading-relaxed">
          Welcome to the IoTeX Layer 1 Quick Start. Get up and running with EVM-compatible smart contract development and interaction.
        </p>
      </header>

      {/* Part Selection */}
      <div className="flex p-1 bg-[#14191f] border border-gray-800 rounded-xl w-fit">
        <button 
          onClick={() => setActivePart(1)}
          className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
            activePart === 1 ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20' : 'text-gray-500 hover:text-white'
          }`}
        >
          Part 1: Deploy Contract
        </button>
        <button 
          onClick={() => setActivePart(2)}
          className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
            activePart === 2 ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20' : 'text-gray-500 hover:text-white'
          }`}
        >
          Part 2: Interact with JS
        </button>
      </div>

      {activePart === 1 ? (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start animate-in fade-in slide-in-from-left-4 duration-300">
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                <Zap size={20} className="text-yellow-400" />
                <span>Smart Contract Deployment</span>
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Learn how to write and deploy a basic Ethereum-compatible smart contract to the IoTeX testnet using Solidity and Web3.js.
              </p>
              <ul className="space-y-3">
                {[
                  "Write a simple message log contract",
                  "Use Solidity 0.8.x syntax",
                  "Emit on-chain log events",
                  "Deploy to IoTeX Testnet"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-xs text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-xl">
              <h4 className="text-sm font-bold text-indigo-300 mb-2">Required Tools</h4>
              <div className="flex flex-wrap gap-2">
                {['MetaMask', 'Solidity', 'Web3.js', 'Remix IDE'].map(tool => (
                  <span key={tool} className="text-[10px] px-2 py-1 bg-indigo-500/20 text-indigo-200 rounded-md border border-indigo-500/10">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <a 
              href="https://docs.iotex.io/blockchain/quick-start/deploy-a-simple-contract" 
              target="_blank"
              className="inline-flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-all group"
            >
              <span>Full Tutorial Guide</span>
              <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-black rounded-2xl border border-gray-800 overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-4 py-3 bg-gray-900/50 border-b border-gray-800">
                <div className="flex items-center space-x-2">
                  <Code2 size={16} className="text-blue-400" />
                  <span className="text-[11px] font-mono text-gray-400">SimpleMessage.sol</span>
                </div>
                <button 
                  onClick={() => copyCode(SMART_CONTRACT_CODE)}
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  {copied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
                </button>
              </div>
              <div className="p-6 overflow-x-auto">
                <pre className="font-mono text-xs leading-relaxed text-emerald-100">
                  {SMART_CONTRACT_CODE}
                </pre>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start animate-in fade-in slide-in-from-right-4 duration-300">
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                <Cpu size={20} className="text-blue-400" />
                <span>App Interaction</span>
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Build a Node.js application to interact with your deployed contract. Call functions and view events without spending IOTX on Testnet.
              </p>
              <ul className="space-y-3">
                {[
                  "Node.js environment setup",
                  "Web3.js integration",
                  "Calling contract methods",
                  "Handling blockchain events"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-xs text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
              <h4 className="text-sm font-bold text-emerald-300 mb-2">Testnet RPC</h4>
              <code className="text-[10px] text-emerald-200/70 break-all">
                https://babel-api.testnet.iotex.io
              </code>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-black rounded-2xl border border-gray-800 overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-4 py-3 bg-gray-900/50 border-b border-gray-800">
                <div className="flex items-center space-x-2">
                  <Code2 size={16} className="text-yellow-400" />
                  <span className="text-[11px] font-mono text-gray-400">interact.js</span>
                </div>
                <button 
                  onClick={() => copyCode(INTERACT_CODE)}
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  {copied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
                </button>
              </div>
              <div className="p-6 overflow-x-auto">
                <pre className="font-mono text-xs leading-relaxed text-blue-100">
                  {INTERACT_CODE}
                </pre>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeveloperHub;
