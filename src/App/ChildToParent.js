import React, { useState } from 'react'

// parent component
export default function ChildToParent() {
    const [order, setOrder] = useState({
        size: 'Medium',
        price: '$9'
    });
    const handleCallback = (childData) => {
        console.log(childData);
        setOrder((state) => {
            return {
                ...state,
                size: childData
            }
        })
    }
    return (
        <div>
            <Pizza {...order} parentCallback={handleCallback} />
        </div>
    )
}

// child component

function Pizza(props) {

    const onTrigger = () => {
        props.parentCallback('small');
    }
    return (
        <ul>
            <li>Pizza Size: {props.size}</li>
            <li>Pizza Price: {props.price} </li>
            <li><button onClick={onTrigger}>Change Size</button></li>
        </ul>
    )
}