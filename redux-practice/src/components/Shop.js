import React from 'react'




function Shop(props) {
    console.log(props.myState)
    return (
        <div className='mx-5 d-flex'>
            <h1>Deposite/Withdraw Money</h1>
            <button className="btn btn-primary mx-2">-</button>

              <h1>{props.myState}</h1>

            <button className="btn btn-primary mx-2">+</button>
        </div>
    )
}

export default Shop