
export interface Step {
  id: number;
  title: string;
  description: string;
  command?: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export enum Tab {
  HOME = 'home',
  OVERVIEW = 'overview',
  REWARDS = 'rewards',
  HARDWARE = 'hardware',
  ACCOUNTS = 'accounts',
  REGISTRATION = 'registration',
  NAME_REGISTRATION = 'name_registration',
  STAKING_BUCKET = 'staking_bucket',
  ENDORSEMENT = 'endorsement',
  SERVER_INFO = 'server_info',
  REWARDS_POLICY = 'rewards_policy',
  PROFILE_DATA = 'profile_data',
  ADVANCED = 'advanced',
  SERVER_PROVIDER = 'server_provider',
  EDGE_PROXY = 'edge_proxy',
  KUBERNETES = 'kubernetes',
  HIGH_AVAILABILITY = 'high_availability',
  GRAVITY_CHAIN = 'gravity_chain',
  IMPROVEMENTS = 'improvements',
  HOSTED_SERVICE = 'hosted_service',
  TUTORIALS = 'tutorials',
  PROJECTIONS = 'projections',
  GUIDE = 'guide',
  DEVELOPER = 'developer',
  ASSISTANT = 'assistant',
  CALCULATOR = 'calculator',
  TERMINAL = 'terminal'
}
