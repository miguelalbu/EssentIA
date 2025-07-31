import React from 'react';
import { Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.sender === 'user';
  
  return (
    <div className={`flex mb-6 ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`flex max-w-xs md:max-w-md lg:max-w-lg ${isUser ? 'flex-row-reverse' : 'flex-row'} items-start space-x-3`}>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${isUser ? 'ml-3' : 'mr-3'} ${
          isUser 
            ? 'bg-gradient-to-br from-amber-100 to-rose-100 border border-amber-200' 
            : 'bg-gradient-to-br from-violet-100 to-indigo-100 border border-violet-200'
        }`}>
          {isUser ? (
            <User className="h-4 w-4 text-amber-700" />
          ) : (
            <Bot className="h-4 w-4 text-violet-700" />
          )}
        </div>
        
        <div className={`rounded-2xl px-4 py-3 shadow-sm border ${
          isUser 
            ? 'bg-gradient-to-br from-amber-50 to-rose-50 border-amber-200 text-amber-900' 
            : 'bg-white border-gray-200 text-gray-800'
        }`}>
          <p className="text-sm leading-relaxed">{message.text}</p>
          <p className={`text-xs mt-2 ${isUser ? 'text-amber-600' : 'text-gray-500'}`}>
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;