export const DEFAULT_CHAT_MODEL: string = 'chat-model-small';

interface ChatModel {
  id: string;
  name: string;
  description: string;
}

export const chatModels: Array<ChatModel> = [
  {
    id: 'gpt-4o-mini',
    name: 'GPT-4o-mini',
    description: 'OpenAI\'s latest and most powerful model',
  },
  {
    id: 'google/gemini-2.0-pro-exp-02-05:free',
    name: 'Gemini-2.0-pro-exp-02-05',
    description: 'Google\'s latest and most powerful model',
  },
];
