import React, { Component } from 'react';

export default class Rendering extends Component {

    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: false
        }
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLoginClick() {
        this.setState({ isLoggedIn: true });
    }
    handleLogoutClick() {
        this.setState({ isLoggedIn: false });
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if(isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />
        }

        return (
            <div className="App">
                <Greetings isLoggedIn={this.state.isLoggedIn} />
                {button}
            </div>
        )
    }
}
// for login

function LoginButton(props){
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    )
}
function LogoutButton(props){
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    )
}
// for greetings
const Greetings = (props) => {
    if(props.isLoggedIn) {
        return <h2>Successfully Log In....</h2>
    } else {
        return <h2>Logout Successfully....</h2>
    }
}