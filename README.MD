# EssentIA

Assistente Virtual de Perfumes com IA  
Descubra o perfume perfeito para cada ocasião com a ajuda da inteligência artificial Gemini!

## ✨ Funcionalidades

- Chatbot moderno e responsivo
- Recomenda perfumes com base em perguntas sobre gosto, ocasião e clima
- IA Gemini integrada (Google)
- Visual clean com degradê azul e rosa

## 🚀 Tecnologias

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Gemini API (Google)](https://aistudio.google.com/app/apikey)

## 🛠️ Como rodar o projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/essentia.git
   cd essentia
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure a variável de ambiente:**
   - Crie um arquivo `.env` na raiz do projeto.
   - Adicione sua chave da Gemini API:
     ```
     VITE_GEMINI_API_KEY=sua_api_key_aqui
     ```

4. **Inicie o projeto:**
   ```bash
   npm run dev
   ```
   O app estará disponível em [http://localhost:5173](http://localhost:5173) (ou porta do Vite).

## ⚠️ Segurança

> **Nunca exponha sua API Key em projetos públicos ou produção!**  
> Para produção, utilize um backend para proteger sua chave.