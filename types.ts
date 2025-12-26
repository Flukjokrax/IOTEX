
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
  GUIDE = 'guide',
  DEVELOPER = 'developer',
  ASSISTANT = 'assistant',
  CALCULATOR = 'calculator',
  TERMINAL = 'terminal'
}
