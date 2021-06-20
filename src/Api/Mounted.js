import React, { Component } from 'react'

export default class Mounted extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favoriteColor: 'blue'
        }
        console.log('Constructor Called');
    }

    // to update the state before render method
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps', props);
        console.log('getDerivedStateFromProps', state);
        return {
            favoriteColor: props.favcol
        }
    }
    render() {
        console.log('Render Called');
        return (
            <div>
                <h1>My Favorite Color is {this.state.favoriteColor}</h1>
            </div>
        )
    }
}
