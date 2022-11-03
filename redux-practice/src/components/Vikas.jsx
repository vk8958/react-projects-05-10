import React from 'react'
import { UserContext } from '../App'


function Vikas() {
    return (
        <UserContext.Consumer>
            {
                (e) => {
                    return <h1>{e}</h1>
                }
            }
        </UserContext.Consumer>
    )
}

export default Vikas