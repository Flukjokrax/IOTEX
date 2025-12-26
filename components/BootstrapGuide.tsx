
import React, { useState } from 'react';
import { BOOTSTRAP_STEPS } from '../constants';
import { Terminal, CheckCircle2, Copy, ExternalLink } from 'lucide-react';

const BootstrapGuide: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header>
        <h2 className="text-3xl font-bold text-white mb-2">Bootstrap a Full Node</h2>
        <p className="text-gray-400 max-w-2xl">
          Follow these steps to initialize your IoTeX full node. This node can later be configured as a Delegate node for consensus participation.
        </p>
      </header>

      <div className="grid gap-6">
        {BOOTSTRAP_STEPS.map((step, idx) => (
          <div 
            key={step.id} 
            className={`relative p-6 rounded-2xl border transition-all duration-300 ${
              idx === currentStep 
                ? 'bg-[#1a202c] border-emerald-500/50 shadow-lg shadow-emerald-500/5' 
                : 'bg-[#14191f] border-gray-800 opacity-60 grayscale-[0.5]'
            }`}
            onClick={() => setCurrentStep(idx)}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                  idx <= currentStep ? 'bg-emerald-500 text-black' : 'bg-gray-800 text-gray-500'
                }`}>
                  {idx < currentStep ? <CheckCircle2 size={20} /> : step.id}
                </div>
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
              </div>
              {idx === currentStep && (
                <span className="text-[10px] uppercase font-bold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">Active</span>
              )}
            </div>

            <p className="text-gray-400 mb-6 text-sm leading-relaxed ml-14">
              {step.description}
            </p>

            {step.command && (
              <div className="ml-14 relative group">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500/30 rounded-full"></div>
                <div className="bg-black/40 p-4 rounded-xl flex items-center justify-between font-mono text-sm text-emerald-300">
                  <code className="truncate pr-4">$ {step.command}</code>
                  <button 
                    onClick={(e) => { e.stopPropagation(); copyToClipboard(step.command!, idx); }}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-500 hover:text-white shrink-0"
                  >
                    {copiedIndex === idx ? <span className="text-xs text-emerald-400 font-sans">Copied!</span> : <Copy size={16} />}
                  </button>
                </div>
              </div>
            )}

            {idx === 4 && (
              <div className="ml-14 mt-4">
                <a 
                  href="https://delegates.iotex.io/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 text-sm font-medium underline decoration-emerald-500/30 underline-offset-4"
                >
                  <span>Go to Registration Portal</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center pt-10">
        <button 
          disabled={currentStep === 0}
          onClick={() => setCurrentStep(prev => prev - 1)}
          className="px-6 py-2 rounded-xl bg-gray-800 text-gray-400 hover:text-white disabled:opacity-30 transition-all"
        >
          Previous
        </button>
        <div className="text-gray-500 text-sm">Step {currentStep + 1} of {BOOTSTRAP_STEPS.length}</div>
        <button 
          disabled={currentStep === BOOTSTRAP_STEPS.length - 1}
          onClick={() => setCurrentStep(prev => prev + 1)}
          className="px-6 py-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-500 shadow-lg shadow-emerald-500/20 transition-all"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default BootstrapGuide;
