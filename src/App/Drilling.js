import React from 'react';


// parent
export default function Drilling(){
    return (
        <div>
            <Next foo="Nick" bar={(input) => `How are you,${input}`} />
        </div>
    )
}

// first child
const Next = (props) => (
    <Final foo={props.foo} bar={props.bar} />
)

// second child
const Final = (props) => (
    <p>{props.bar(props.foo)}</p>
)