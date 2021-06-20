import React, { Component } from 'react';



export default class UserClass extends Component{
    render() {
        return (
            <div className="App">
                <h2>{this.props.name}</h2>
            </div>
        )
    }
}