import './App.css'
import Home from './components/Home';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">
      <div>
        <Sidebar />
      </div>

      <div>
        <Home />
      </div>

    </div>
  );
}

export default App;
