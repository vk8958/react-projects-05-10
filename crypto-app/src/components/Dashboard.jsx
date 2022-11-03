import React from 'react'
import { useState, useEffect } from 'react'
import './Dashboard.css'
import CallMadeIcon from '@mui/icons-material/CallMade';
import CallReceivedIcon from '@mui/icons-material/CallReceived';


function Dashboard() {
    const [data, setData] = useState([]);




    async function getData() {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')

        const res = await response.json();
        console.log(res);
        setData(res);

    }


    useEffect(() => {
        getData();
        console.log(data)
    }, [])

    return (
        <div className=''>
            {data.map((e, i) => (
                <div className='card'>
                    <div className='logo'>
                        <img src={e.image} alt="" />
                        <div className='title'>
                            <h1 style={{textTransform:"uppercase"}}>{e.symbol}-USD</h1>
                            <p style={{marginTop:'-25px'}}>{e.name}</p>
                        </div>
                    </div>
                    <div>
                        <button className='btn1'><h2>{e.price_change_percentage_24h} %</h2></button>
                       <span style={{border:'2px solid black',borderRadius:'50px',padding:'10px',marginLeft:'10px',color:'black'}}>{e.price_change_percentage_24h<0?<CallReceivedIcon/>:<CallMadeIcon/>}</span> 
                    </div>
                    <h2>{}</h2>

                </div>


            ))}
        </div>
    )
}

export default Dashboard