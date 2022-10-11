
import './App.css';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import { useSelector } from 'react-redux'
import Vikas from './components/class'

function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  console.log(myState)
  return (
    <>
      <Navbar />
      <div className="Container">
      
        <Shop props={myState}/>
        <Vikas/>
      </div>
    </>

  );
}

export default App;
