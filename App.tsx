
import React, { useState } from 'react';
import Layout from './components/Layout';
import BootstrapGuide from './components/BootstrapGuide';
import Assistant from './components/Assistant';
import RewardCalculator from './components/RewardCalculator';
import Terminal from './components/Terminal';
import DeveloperHub from './components/DeveloperHub';
import { Tab } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.GUIDE);

  const renderContent = () => {
    switch (activeTab) {
      case Tab.GUIDE:
        return <BootstrapGuide />;
      case Tab.DEVELOPER:
        return <DeveloperHub />;
      case Tab.ASSISTANT:
        return <Assistant />;
      case Tab.CALCULATOR:
        return <RewardCalculator />;
      case Tab.TERMINAL:
        return <Terminal />;
      default:
        return <BootstrapGuide />;
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      <div className="pb-20">
        {renderContent()}
      </div>
      
      {/* Quick Access Footer for Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#14191f] border-t border-gray-800 px-6 py-3 flex justify-around items-center z-50">
        <button onClick={() => setActiveTab(Tab.GUIDE)} className={`p-2 rounded-lg ${activeTab === Tab.GUIDE ? 'text-emerald-500 bg-emerald-500/10' : 'text-gray-500'}`}>
          🚀
        </button>
        <button onClick={() => setActiveTab(Tab.DEVELOPER)} className={`p-2 rounded-lg ${activeTab === Tab.DEVELOPER ? 'text-emerald-500 bg-emerald-500/10' : 'text-gray-500'}`}>
          🛠️
        </button>
        <button onClick={() => setActiveTab(Tab.ASSISTANT)} className={`p-2 rounded-lg ${activeTab === Tab.ASSISTANT ? 'text-emerald-500 bg-emerald-500/10' : 'text-gray-500'}`}>
          🤖
        </button>
        <button onClick={() => setActiveTab(Tab.CALCULATOR)} className={`p-2 rounded-lg ${activeTab === Tab.CALCULATOR ? 'text-emerald-500 bg-emerald-500/10' : 'text-gray-500'}`}>
          📊
        </button>
        <button onClick={() => setActiveTab(Tab.TERMINAL)} className={`p-2 rounded-lg ${activeTab === Tab.TERMINAL ? 'text-emerald-500 bg-emerald-500/10' : 'text-gray-500'}`}>
          💻
        </button>
      </div>
    </Layout>
  );
};

export default App;
