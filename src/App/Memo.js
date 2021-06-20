import React, { useState, useEffect, useMemo } from 'react'


// assume it fetch data using api
const fetchData = () => {
    return Math.random();
}
const runHeavyCalc = data => {
    if(!data) return;
    console.log('Computing heavy func with data ', data);
    return Math.floor(data*100);
}
export default function Memo() {
    const [count, setCount] = useState(0);
    const [data, setData] = useState();
    console.log('App rendered with count', count);

    useEffect(() => {
        const FData = fetchData();
        setData(FData);
    }, []);
    //const result = runHeavyCalc(data);
    const result = useMemo(() => runHeavyCalc(data), [data]);
    return (
        <div>
            <h1>Number Counter</h1>
            <p>Counter: {count}</p>
            <p>Result is: {result}</p>
            <button onClick={() => setCount(count + 1)}>
                Increment Count
            </button>
        </div>
    )
}
