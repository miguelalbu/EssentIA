import React from 'react';
import { Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-amber-50 to-rose-50 border-b border-amber-100 shadow-sm">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex items-center justify-center space-x-3">
          <Sparkles className="h-8 w-8 text-amber-600" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-700 to-rose-700 bg-clip-text text-transparent">
            EssentIA
          </h1>
          <Sparkles className="h-8 w-8 text-rose-600" />
        </div>
        <p className="text-center mt-2 text-amber-800/70 text-sm font-medium">
          Seu assistente inteligente para descobrir o perfume perfeito
        </p>
      </div>
    </header>
  );
};

export default Header;