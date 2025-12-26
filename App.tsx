
import React, { useState } from 'react';
import Layout from './components/Layout';
import Home from './components/Home';
import Overview from './components/Overview';
import Rewards from './components/Rewards';
import HardwareSpecs from './components/HardwareSpecs';
import Accounts from './components/Accounts';
import Registration from './components/Registration';
import NameRegistration from './components/NameRegistration';
import StakingBucket from './components/StakingBucket';
import Endorsement from './components/Endorsement';
import ServerInfo from './components/ServerInfo';
import RewardsPolicy from './components/RewardsPolicy';
import ProfileData from './components/ProfileData';
import Projections from './components/Projections';
import Advanced from './components/Advanced';
import ServerProvider from './components/ServerProvider';
import EdgeProxy from './components/EdgeProxy';
import Kubernetes from './components/Kubernetes';
import HighAvailability from './components/HighAvailability';
import GravityChain from './components/GravityChain';
import Improvements from './components/Improvements';
import HostedService from './components/HostedService';
import Tutorials from './components/Tutorials';
import BootstrapGuide from './components/BootstrapGuide';
import Assistant from './components/Assistant';
import RewardCalculator from './components/RewardCalculator';
import Terminal from './components/Terminal';
import DeveloperHub from './components/DeveloperHub';
import { Tab } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.HOME);

  const renderContent = () => {
    switch (activeTab) {
      case Tab.HOME:
        return <Home setActiveTab={setActiveTab} />;
      case Tab.OVERVIEW:
        return <Overview />;
      case Tab.REWARDS:
        return <Rewards />;
      case Tab.HARDWARE:
        return <HardwareSpecs />;
      case Tab.ACCOUNTS:
        return <Accounts />;
      case Tab.REGISTRATION:
        return <Registration />;
      case Tab.NAME_REGISTRATION:
        return <NameRegistration />;
      case Tab.STAKING_BUCKET:
        return <StakingBucket />;
      case Tab.ENDORSEMENT:
        return <Endorsement />;
      case Tab.SERVER_INFO:
        return <ServerInfo />;
      case Tab.REWARDS_POLICY:
        return <RewardsPolicy />;
      case Tab.PROFILE_DATA:
        return <ProfileData />;
      case Tab.PROJECTIONS:
        return <Projections />;
      case Tab.SERVER_PROVIDER:
        return <ServerProvider />;
      case Tab.EDGE_PROXY:
        return <EdgeProxy />;
      case Tab.KUBERNETES:
        return <Kubernetes />;
      case Tab.HIGH_AVAILABILITY:
        return <HighAvailability />;
      case Tab.GRAVITY_CHAIN:
        return <GravityChain />;
      case Tab.IMPROVEMENTS:
        return <Improvements />;
      case Tab.HOSTED_SERVICE:
        return <HostedService />;
      case Tab.TUTORIALS:
        return <Tutorials />;
      case Tab.ADVANCED:
        return <Advanced />;
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
        return <Home setActiveTab={setActiveTab} />;
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      <div className="pb-24">
        {renderContent()}
      </div>
      
      {/* Quick Access Footer for Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#0b0e11]/90 backdrop-blur-xl border-t border-white/10 px-6 py-4 flex justify-around items-center z-50 overflow-x-auto text-xs font-bold">
        <button onClick={() => setActiveTab(Tab.HOME)} className={`flex flex-col items-center p-2 rounded-2xl shrink-0 transition-all ${activeTab === Tab.HOME ? 'text-emerald-400 bg-emerald-500/10' : 'text-gray-500'}`}>
          <span>🏠</span>
        </button>
        <button onClick={() => setActiveTab(Tab.ACCOUNTS)} className={`flex flex-col items-center p-2 rounded-2xl shrink-0 transition-all ${activeTab === Tab.ACCOUNTS ? 'text-emerald-400 bg-emerald-500/10' : 'text-gray-500'}`}>
          <span>🔑</span>
        </button>
        <button onClick={() => setActiveTab(Tab.PROJECTIONS)} className={`flex flex-col items-center p-2 rounded-2xl shrink-0 transition-all ${activeTab === Tab.PROJECTIONS ? 'text-emerald-400 bg-emerald-500/10' : 'text-gray-500'}`}>
          <span>📈</span>
        </button>
        <button onClick={() => setActiveTab(Tab.TUTORIALS)} className={`flex flex-col items-center p-2 rounded-2xl shrink-0 transition-all ${activeTab === Tab.TUTORIALS ? 'text-emerald-400 bg-emerald-500/10' : 'text-gray-500'}`}>
          <span>📖</span>
        </button>
        <button onClick={() => setActiveTab(Tab.ASSISTANT)} className={`flex flex-col items-center p-2 rounded-2xl shrink-0 transition-all ${activeTab === Tab.ASSISTANT ? 'text-emerald-400 bg-emerald-500/10' : 'text-gray-500'}`}>
          <span>🤖</span>
        </button>
      </div>
    </Layout>
  );
};

export default App;
