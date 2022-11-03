
import './App.css';
import Navbar from './components/Navbar';
import React, { createContext } from 'react';

const UserContext = createContext();

function App() {


  return (
    <UserContext.Provider value={"vikas"}>
      <Navbar />
      <div className="Container">
       <Vikas/>    
      </div>
    </UserContext.Provider>

  );
}

export default App;
export {UserContext};
