import React, { useState } from 'react'
import { useEffect } from 'react';
import Color from './Color';

const ColorChange = () => {
    const [color, setColor] = useState(null);
    console.log(color)
   const    getColor=(c)=>{
              setColor(c)
      }
    
    return (
        <div style={{ display: 'flex', alignItems: "center", justifyContent: 'center', flexDirection: "column", marginTop: '50px' }}>
            <div style={{ height: "400px", width: "400px", border: '1px solid white', textAlign: "center", background:`${color}` }}>

            </div>
            <div style={{ marginTop: "20px" }}>
                <Color color1={getColor} />
            </div>
        </div>

    )
}
export default ColorChange;