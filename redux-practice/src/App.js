
import './App.css';
import Vikas from './components/Vikas';
import UseRefHook from './components/UseRefHook';
import UseMemoHook from './components/UseMemoHook';
import UseReducerHook from './components/UseReducerHook'
import Hii from './components/Hii'



function App() {



  // fetch api data
  // const getUserData = async () => {
  //   const response = await fetch(url);
  //   const jsonData = await response.json();
  //   setData(jsonData);
  // }



  return (
    <div className="Container">
      {/* <Vikas  /> */}
      {/* <UseRefHook /> */}
      {/* <UseMemoHook /> */}

      <UseReducerHook />
      <Hii />
    </div>


  );
}

export default App;
//this is the redux concept redux is more important than contex api

