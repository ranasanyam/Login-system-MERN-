import React, { useState, Component } from 'react'

// parent child

export default class Dictionary extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
    }
    handleChild(child1Data){
        this.setState({
            data: child1Data
        })
    }
    render() {
        return (
                <div>
                    <p>Parent</p>
                    <Child1 callback={this.handleChild.bind(this)} />
                    <Child2 data={this.state.data} />
                </div>
        )
    }
}
// first child
class Child1 extends Component{
    getContent(event) {
        this.props.callback(event.target.value);
    }
    render() {
        return (
            <div>
                <p>Child One</p>
                <input type="text" onChange={this.getContent.bind(this)} placeholder="Type something in child one" />
            </div>
        )
    }
}

// second child
class Child2 extends Component{
    render() {
        return (
            <p>Child Two : {this.props.data}</p>
        )
    }
}