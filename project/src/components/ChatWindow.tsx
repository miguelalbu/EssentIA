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

  const handleSendMessage = async (messageText: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    // Simular resposta da IA
    setTimeout(() => {
      const aiResponses = [
        'Que interessante! Com base na sua preferência por perfumes doces para a noite, eu recomendaria fragrâncias com notas de baunilha, âmbar e frutas vermelhas. Você tem alguma marca preferida ou orçamento em mente?',
        'Excelente escolha! Perfumes frescos são perfeitos para o dia a dia. Que tal algo com notas cítricas como bergamota e limão siciliano, ou prefere algo mais aquático com notas marinhas?',
        'Adoro essa categoria! Perfumes amadeirados transmitem sofisticação e elegância. Você prefere algo mais intenso com sândalo e vetiver, ou mais suave com cedro e patchouli?',
        'Que perfil interessante! Para ocasiões especiais, costumo recomendar fragrâncias marcantes. Você se inclina mais para algo floral intenso, oriental misterioso ou gourmand sedutor?'
      ];

      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
        sender: 'ai',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1500 + Math.random() * 1000); // Variação no tempo de resposta
  };

  return (
    <div className="flex-1 flex flex-col bg-gradient-to-br from-amber-50/30 to-rose-50/30">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="max-w-4xl mx-auto">
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
          
          {isLoading && (
            <div className="flex justify-start mb-6">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-violet-100 to-indigo-100 border border-violet-200 flex items-center justify-center">
                  <div className="w-4 h-4 bg-violet-700 rounded-full"></div>
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