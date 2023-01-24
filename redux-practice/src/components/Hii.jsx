import React,{useRef} from 'react';


const Hii = () => {

       const initialref=useRef();
    const ref=()=>{
          initialref.current.style.color="red"
    }
    return (
        <div>
            <h1 ref={initialref}>Hii everyone </h1>
            <button onClick={ref} ref={initialref}>CLICK</button>
        </div>
    )
}

export default Hii;


