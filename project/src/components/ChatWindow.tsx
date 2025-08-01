import React, { useState, useRef, useEffect } from 'react';
import MessageBubble from './MessageBubble';
import InputBar from './InputBar';
import Spinner from './Spinner';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Olá! Sou a EssentIA, sua assistente especialista em perfumes. Como posso te ajudar a encontrar a fragrância perfeita hoje?',
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const GEMINI_API_KEY = "AIzaSyCl0elSbTj-L3NkRox5eQQgQVfymBD96IQ";

  const handleSendMessage = async (messageText: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const aiText = await fetchGeminiResponse(messageText, GEMINI_API_KEY);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiText,
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      setMessages(prev => [...prev, {
        id: (Date.now() + 2).toString(),
        text: 'Desculpe, houve um erro ao conectar com a IA.',
        sender: 'ai',
        timestamp: new Date()
      }]);
    }
    setIsLoading(false);
  };

  
  async function fetchGeminiResponse(userText: string, apiKey: string): Promise<string> {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
    const body = {
      contents: [
        {
          parts: [
            {
              text: "Você é uma assistente especialista em perfumes. Responda apenas perguntas relacionadas a perfumes, fragrâncias, dicas de uso, recomendações e curiosidades sobre o universo da perfumaria. Se a pergunta não for sobre perfume, responda educadamente que só pode responder sobre esse tema."
            },
            {
              text: userText
            }
          ]
        }
      ]
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      throw new Error("Erro ao conectar com a IA Gemini");
    }

    const data = await response.json();
    return data?.candidates?.[0]?.content?.parts?.[0]?.text || "Desculpe, não consegui responder no momento.";
  }

  return (
    <div className="flex-1 flex flex-col bg-gradient-to-br from-blue-50 via-pink-50 to-blue-100">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="max-w-4xl mx-auto">
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
          
          {isLoading && (
            <div className="flex justify-start mb-6">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-pink-100 to-blue-100 border border-pink-200 flex items-center justify-center">
                  <div className="w-4 h-4 bg-pink-500 rounded-full"></div>
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3 shadow-sm">
                  <Spinner />
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      <InputBar onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
};

export default ChatWindow;