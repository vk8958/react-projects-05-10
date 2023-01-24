import React, { useRef } from 'react'



// const UseRefHook = () => {
//     const initialRef = useRef();
//     const buttonRef = useRef();
//     const fun = () => {
//         initialRef.current.value = "200000000000";
//         initialRef.current.style.color = 'green';
//         buttonRef.current.setAttribute("disabled", true);
//         buttonRef.current.style.backgroundColor = "black";

//     }

//the redux should be practice to control to manage about to procuce to control and redux is most import part of managing to control react shoul work good with redux and contex api is also a goodd optioon to aply resux conceept


const UseReducerHook=()=>{

const initialRef=useRef();

 const fun=()=>{
    initialRef.current.value="2000000";
    initialRef.current.style.color='green';
 }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>  UseRefHook
            <input type="nubmer" ref={initialRef} />
            <button onClick={fun} ref={buttonRef}>CLICK ME</button>
        </div>
    )
}

export default UseReducerHook;