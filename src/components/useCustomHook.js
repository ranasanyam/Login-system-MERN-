import React, { useState } from 'react';

// to tell react that it is a hook you need to pass use as a prefix to the function
export default function useCustomHook() {
    const [orderCount, setOrderCount] = useState({count: 0});

    const changeOrderCount = () => {
        setOrderCount({count: orderCount.count + 1})
    }
    return { orderCount, changeOrderCount};
}