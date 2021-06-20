import React from 'react'

const order = {
    size: 'Medium',
    price: '$9'
}
const order1 = {
    size: 'Small',
    price: '$5'
}
export default function ParentToChild() {
    return (
        <div>
            <Store {...order} />
            <Store {...order1} />
        </div>
    )
}

function Store(props) {
    return (
        <div>
            <h3>Order</h3>
            <Pizza {...props} />
        </div>
    )
}
function Pizza(props) {
    return (
        <div>
            <ul>
                <li>Pizza Size: {props.size}</li>
                <li>Pizza Price: {props.price}</li>
            </ul>
        </div>
    )
}