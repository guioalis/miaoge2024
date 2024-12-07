export interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
  image?: string; // Base64 encoded image
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
}

export interface ModelOption {
  id: string;
  name: string;
  description: string;
  supportsImages?: boolean;
  isImageGenerator?: boolean;
}

export const AVAILABLE_MODELS: ModelOption[] = [
  {
    id: 'grok-beta',
    name: 'Grok Beta',
    description: 'x.ai 官方对话模型'
  },
  {
    id: 'flux-1',
    name: 'FLUX.1',
    description: 'Hugging Face图像生成模型',
    isImageGenerator: true
  }
];
