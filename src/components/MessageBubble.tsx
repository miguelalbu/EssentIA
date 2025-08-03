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
            ? 'bg-gradient-to-br from-blue-100 to-pink-100 border border-blue-200' 
            : 'bg-gradient-to-br from-pink-100 to-blue-100 border border-pink-200'
        }`}>
          {isUser ? (
            <User className="h-4 w-4 text-blue-700" />
          ) : (
            <Bot className="h-4 w-4 text-pink-700" />
          )}
        </div>
        
        <div className={`rounded-2xl px-4 py-3 shadow-sm border ${
          isUser 
            ? 'bg-gradient-to-br from-blue-50 to-pink-50 border-blue-200 text-blue-900' 
            : 'bg-white border-pink-200 text-pink-900'
        }`}>
          <p className="text-sm leading-relaxed">{message.text}</p>
          <p className={`text-xs mt-2 ${isUser ? 'text-blue-600' : 'text-pink-600'}`}>
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;