
import './App.css';
import Videos from './components/Videos'
function App() {
  const arr = [5, 8, 4, 6, 2];
  const arrObj = [
    {
      "name": "vikas",
      "class": "11"
    },
    {
      "name": "rahul",
      "class": 22
    }
  ]
  return (
    <div className="App">
      {arr.filter((e,i)=>{
       return (e%2==0);
      })}
      {arr.filter((e, i) => {
        return e / 2 == 0;
      })}
      {/* <Videos/> */}
    </div>
  );
}

export default App;
