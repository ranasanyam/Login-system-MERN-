import React, { useState, useEffect } from 'react';
import useCustomHook from './useCustomHook';
const EffectHook = () => {
    //const [count, setCount] = useState(0);

    const orderBook = useCustomHook();
    useEffect(() => {
        document.title = `You clicked ${orderBook.orderCount.count} times`;
    });
    return (
        <div>
            <p>You clicked {orderBook.orderCount.count} times.</p>
            <button onClick={() => orderBook.changeOrderCount()}>Click Me</button>
        </div>
    )
}
export default EffectHook;