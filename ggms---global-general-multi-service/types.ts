
export interface Service {
  id: string;
  title: string;
  category: 'Marketing' | 'Sicurezza' | 'Social Media' | 'Digital & AI';
  description: string;
  longDescription: string;
  images: string[];
  features: string[];
}

export type ChatAction = 'collect_name' | 'collect_email' | 'collect_phone' | 'finish_lead';

export interface ChatNode {
  id: string;
  text: string;
  options?: ChatOption[];
  inputAction?: ChatAction;
  scrollTarget?: string;
  nextId?: string; // Usato per sequenze automatiche dopo input
}

export interface ChatOption {
  label: string;
  nextId: string;
  action?: () => void;
  scrollTarget?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: number;
}
