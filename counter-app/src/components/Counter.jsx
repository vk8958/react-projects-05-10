import React,{useState} from 'react'
import './Counter.css'


const Counter=()=>{

    const [count,setCount]=useState(0);
     const fun=(id)=>{
        if(id==1){
           setCount(count-1)
        }
        else{
            setCount(count+1)
        }
     }
         
    return (
        <div>
             <h1>Counter</h1>
             <h1>{count}</h1>
             <button className='btn' onClick={()=>fun(1)}>DECREMENT</button>
             <button className='btn' onClick={()=>fun(2)}>INCREMENT</button>
        </div>
    )
}


export default Counter