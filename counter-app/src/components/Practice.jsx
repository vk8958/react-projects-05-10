import React, { useState } from 'react';




const Practice = () => {
    const [show, setShow] = useState(true);
    const [count ,setCount]=useState(0)

    const fun = () => {
        if (show) {
            setShow(false);
        } else {
            setShow(true);
        }
    }

    return (
        <div style={{ color: 'aqua', marginTop: '50px' }}>
            HOOKS
            <h1>{show ? count : " "}</h1>
            <div>
                <button onClick={fun} >Hide</button>
                <button>Show</button>
                <div>
                    <button onClick={fun}>{show ? "Hide" : 'Show'}</button>
                </div>

            </div>

        </div>
    )
}

export default Practice;

