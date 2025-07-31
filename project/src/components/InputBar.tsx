import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface InputBarProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

const InputBar: React.FC<InputBarProps> = ({ onSendMessage, isLoading }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  return (
    <div className="bg-white border-t border-amber-100 p-4">
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
        <div className="flex space-x-3">
          <div className="flex-1 relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ex: Quero um perfume doce para noite..."
              disabled={isLoading}
              className="w-full px-4 py-3 rounded-full border-2 border-amber-200 focus:border-amber-400 focus:outline-none transition-colors duration-200 bg-amber-50/50 text-gray-800 placeholder-amber-600/50 disabled:opacity-50"
            />
          </div>
          <button
            type="submit"
            disabled={!message.trim() || isLoading}
            className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 disabled:from-gray-300 disabled:to-gray-400 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl disabled:shadow-md transform hover:scale-105 active:scale-95 disabled:scale-100 disabled:cursor-not-allowed"
          >
            <Send className="h-5 w-5 text-white" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputBar;