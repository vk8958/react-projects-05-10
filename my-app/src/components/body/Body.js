import React, { useState } from "react";
import './Body.css'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';



const Body = () => {
    const [show, setShow] = useState(0);
    const [id,setId]=useState(0);
    console.log(id)
    
   
     
    

    return (
        <div className="container">
            <h1>Runner's Workout</h1>

            <div className="border">
                <div className="img-container">
                    <div onMouseOut={()=>setId(0)}  onMouseOver={()=>setId(1)} id='one'   className='inner-img'>
                        <h3 style={{ marginLeft: '10px' }}>STRENGTH</h3>
                        {id==1 ? <h3 style={{ marginRight: '10px' }}><NavigateNextIcon /></h3> : ""}
                    </div>
                    <div onMouseOut={()=>setId(0)}  onMouseOver={()=>setId(2)} id='two' className="inner-img">
                        <h3 style={{ marginLeft: '10px' }}>MOBILITY</h3>
                        {id==2 ? <h3 style={{ marginRight: '10px' }}><NavigateNextIcon /></h3> : ""}
                    </div>
                    <div onMouseOut={()=>setId(0)}  onMouseOver={()=>setId(3)} id='three' className="inner-img">
                        <h3 style={{ marginLeft: '10px' }}>DRILLS</h3>
                        {id==3 ? <h3 style={{ marginRight: '10px' }}><NavigateNextIcon /></h3> : ""}
                    </div>
                </div>
            </div>

        </div>
    )

}

export default Body;