import React from 'react'
import './Stats.css'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';

const data = [
    {
        icon: <DonutSmallIcon />,
        name: "Revenue",
        value: "$20,456",
        per: "+2.65%",
        color: "green"
    },
    {
        icon: <LocalMallIcon />,
        name: "Orders",
        value: "5,643",
        per: "-0.82%",
        color: "red"
    },
    {
        icon: <SwitchAccountIcon />,
        name: "Customers",
        value: "45,254",
        per: "-1.04%",
        color: "red"
    }
]


function Stats() {
    return (
        <div className='main-box ' >
            {data.map((e, i) => (
                <div className='box' style={{display:'flex'}}>
                    <div className='icon'>{e.icon}</div>
                    <div style={{lineHeight:"0px",color:'grey',marginBottom:'12px'}} >
                        <h4>{e.name}</h4>
                        <h2 style={{color:"black",fontWeight:'600'}}>{e.value}</h2>
                    </div>
                    <div style={{color:e.color,marginLeft:"90px",marginTop:'50px'}}> {e.per}</div>
                </div>


            ))}
        </div>
    )
}

export default Stats