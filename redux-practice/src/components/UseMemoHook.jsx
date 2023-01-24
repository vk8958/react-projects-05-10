import React, { useState, useMemo } from 'react'

const UseMemoHook = () => {

    const [count, setCount] = useState(10);
    const [item, setItem] = useState(0);

    // const fun = () => {
    //     console.log("I am function");
    //     return count * 10;

    // }

    const usememo = useMemo(() => {
        console.log("Hii I am Jeruslem here I am ")
        return count * 10;
    }, [count])

    return (
        <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: "center" }}>
            UseMemoHook
            <h4>Count:{count}</h4>
            <h4>Items:{item}</h4>
            <h1>{usememo}</h1>
            <button onClick={() => setCount(count * 50)}>CountUpdate</button>
            <button onClick={() => setItem(item + 1)}>ItemUpdate</button>
        </div>
    )
}

export default UseMemoHook