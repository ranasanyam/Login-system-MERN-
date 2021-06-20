import React, { useState, useRef } from 'react'

export default function Ref1() {

    const [count, setCount] = useState(0);
    const counter = useRef(null);

    const increment = () => {
        setCount(count + 1);
        console.log(counter.current.innerHTML);
    }
    return (
        <div>
            Count <span ref={counter}>{count}</span>
            <button onClick={increment}>+</button>
        </div>
    )
}
