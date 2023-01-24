import React from 'react'
import { useState, useEffect } from 'react'

function Vikas() {
    const [items, setItems] = useState([]);
    const [count, setCount] = useState(-1);
    const [id, setId] = useState([]);

    const fetchAPI = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        console.log("hii I am before fetch")
        setItems(data);
        console.log(data);
    }

    useEffect(() => {
        fetchAPI();
    }, []);

    useEffect(() => {
        setCount(count + 1);
        console.log(id);
    }, [id])

    const fun = (e) => {
         setId((e)=>data.filter((el,i)=>el.id!=e.id));
        console.log(e);
    }
    return (
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
            <h1 style={{ color: 'grey', position: 'fixed' }}>{count}</h1>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: "center", border: '1px solid grey', flexWrap: 'wrap' }}>

                {items.map((e, i) => (
                    <div style={{ border: '1px solid grey', borderRadius: '10px', marginTop: "20px", padding: "10px", marginLeft: '20px', flexDirection: 'column', display: 'flex' }}>

                        <img src={e.image} alt="" style={{ height: '200px', width: '200px' }} />
                        <button onClick={() => fun(e)} style={{ background: 'transparent', border: '.1px solid grey', borderRadius: "10px", padding: "5px", marginTop: '10px' }}>Add To Cart</button>
                    </div>
                ))}

            </div>
        </div>

    )
}

export default Vikas;