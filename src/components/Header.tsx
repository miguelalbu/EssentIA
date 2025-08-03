import React from 'react';
import { Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-100 via-pink-100 to-blue-200 border-b border-blue-100 shadow-sm">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex items-center justify-center space-x-3">
          <Sparkles className="h-8 w-8 text-pink-400" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-700 via-pink-500 to-blue-600 bg-clip-text text-transparent">
            EssentIA
          </h1>
          <Sparkles className="h-8 w-8 text-blue-400" />
        </div>
        <p className="text-center mt-2 text-blue-800/70 text-sm font-medium">
          Seu assistente inteligente para descobrir o perfume perfeito
        </p>
        <p className='text-center mt-1 text-blue-600/70 text-xs font-light'>
          Desenvolvido por @luarr.cosmeticos
        </p>
      </div>
    </header>
  );
};

export default Header;