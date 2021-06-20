import React, { Component } from 'react'

export default class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
        }
        //this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e) {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            <div className="App">
                <button onClick={() => {this.handleClick()}}>{this.state.isToggleOn ? 'ON' : "OFF"}</button>
            </div>
        )
    }
}
