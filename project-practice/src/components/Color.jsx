import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Color = ({ color1 }) => {
    const [type, setType] = useState(null);
   console.log(type)
    const fun = (e) => {
        const {value} =e.target
        setType(value)
          color1(value)
    }

    return (
        <div>
           
                <input
                    type='text'
                    onChange={fun}
                    value={type}
                    
                />

           


        </div>
    )
}

export default Color