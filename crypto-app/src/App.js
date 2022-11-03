
import './App.css';
import Navbar from './components/Navbar';
import {Link, Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/dashboard">Dashboard</Link>
        <Routes>
        
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
      <Navbar />
    </div>
  );
}

export default App;
