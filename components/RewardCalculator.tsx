
import React, { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Info, Zap, TrendingUp, DollarSign } from 'lucide-react';

const RewardCalculator: React.FC = () => {
  const [stake, setStake] = useState(1200000);
  const [voters, setVoters] = useState(5000000);
  const [commission, setCommission] = useState(10);

  const stats = useMemo(() => {
    // Mock calculation logic for IoTeX rewards
    const annualBaseReward = (stake + voters) * 0.05; // 5% hypothetical APR
    const delegateShare = annualBaseReward * (commission / 100);
    const monthlyReward = delegateShare / 12;
    
    return {
      annual: Math.round(delegateShare),
      monthly: Math.round(monthlyReward),
      voterYield: 5 - (5 * (commission / 100))
    };
  }, [stake, voters, commission]);

  const chartData = [
    { name: 'Month 1', reward: stats.monthly },
    { name: 'Month 3', reward: stats.monthly * 3 },
    { name: 'Month 6', reward: stats.monthly * 6 },
    { name: 'Month 12', reward: stats.annual },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header>
        <h2 className="text-3xl font-bold text-white mb-2">Delegate Reward Calculator</h2>
        <p className="text-gray-400">Estimate your potential earnings based on self-stake, voter endorsement, and commission settings.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#14191f] p-6 rounded-2xl border border-gray-800 space-y-6">
          <div>
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 block">Self Stake (IOTX)</label>
            <input 
              type="range" min="0" max="2400000" step="100000"
              value={stake} onChange={(e) => setStake(Number(e.target.value))}
              className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
            <div className="text-xl font-mono text-white mt-2">{stake.toLocaleString()}</div>
          </div>
          
          <div>
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 block">Total Votes Received</label>
            <input 
              type="range" min="1200000" max="20000000" step="1000000"
              value={voters} onChange={(e) => setVoters(Number(e.target.value))}
              className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
            <div className="text-xl font-mono text-white mt-2">{voters.toLocaleString()}</div>
          </div>

          <div>
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 block">Commission Fee (%)</label>
            <input 
              type="range" min="0" max="100" step="1"
              value={commission} onChange={(e) => setCommission(Number(e.target.value))}
              className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
            <div className="text-xl font-mono text-white mt-2">{commission}%</div>
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-emerald-500/10 border border-emerald-500/20 p-6 rounded-2xl">
              <div className="flex items-center space-x-2 text-emerald-400 mb-2">
                <TrendingUp size={16} />
                <span className="text-xs font-bold uppercase">Estimated Annual</span>
              </div>
              <div className="text-3xl font-bold text-white">{stats.annual.toLocaleString()} IOTX</div>
              <div className="text-xs text-emerald-500/60 mt-1">Based on current epoch settings</div>
            </div>
            <div className="bg-indigo-500/10 border border-indigo-500/20 p-6 rounded-2xl">
              <div className="flex items-center space-x-2 text-indigo-400 mb-2">
                <Zap size={16} />
                <span className="text-xs font-bold uppercase">Voter Net APY</span>
              </div>
              <div className="text-3xl font-bold text-white">{stats.voterYield.toFixed(2)}%</div>
              <div className="text-xs text-indigo-500/60 mt-1">Attractive to stakeholders</div>
            </div>
          </div>

          <div className="bg-[#14191f] p-6 rounded-2xl border border-gray-800 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1a202c" vertical={false} />
                <XAxis dataKey="name" stroke="#4a5568" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#4a5568" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0b0e11', border: '1px solid #2d3748', borderRadius: '12px' }}
                  itemStyle={{ color: '#10b981' }}
                />
                <Bar dataKey="reward" radius={[6, 6, 0, 0]}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 3 ? '#10b981' : '#312e81'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-blue-500/5 border border-blue-500/20 p-6 rounded-2xl flex items-start space-x-4">
        <Info className="text-blue-400 shrink-0" size={20} />
        <div>
          <h4 className="text-sm font-semibold text-blue-300 mb-1">About Commission Fees</h4>
          <p className="text-xs text-gray-400 leading-relaxed">
            As a delegate, you can set a commission fee. Higher fees increase your node's revenue but might discourage voters from staking with you. 
            Balance is key to maintaining a competitive consensus rank.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RewardCalculator;
