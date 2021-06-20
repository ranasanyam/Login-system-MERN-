import React, { Component } from 'react';


export default class Random extends Component {
    forceUpdateState = () => {
        this.forceUpdate();
    }
    render() {
        return (
            <div>
                <h2>Generate Random Numbers</h2>
                <h4>Random Numbers: {Math.random()}</h4>
                <button onClick={this.forceUpdateState}>Force Update</button>
            </div>
        )
    }
}