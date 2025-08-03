import Header from './components/Header';
import ChatWindow from './components/ChatWindow';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-rose-50 flex flex-col">
      <Header />
      <ChatWindow />
    </div>
  );
}

export default App;