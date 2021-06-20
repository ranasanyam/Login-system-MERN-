import React, { useState } from 'react';

export default function Count() {

    const [count, setCount] = useState(0);
    return (
        <div className="App">
            <p>You clicked {count} times.</p>
            <button onClick={() => setCount(count + 1)}>
                Click Me
            </button>
        </div>
    )
}