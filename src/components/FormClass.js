import React, { Component } from 'react';


export default class FormClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChangeEmail(event) {
        this.setState({email:event.target.value});
    }
    handleChangePassword(event) {
        this.setState({password:event.target.value});
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(`
          Email: ${this.state.email}
          Password: ${this.state.password}
        `);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Login</h2>
                <div>
                    <label htmlFor="email">
                        Email:
                        <input type="text" value={this.state.email} onChange={this.handleChangeEmail} />
                    </label>
                </div>
                <div>
                    <label htmlFor="password">
                        Password: 
                        <input type="password" value={this.state.password} onChange={this.handleChangePassword} />
                    </label>
                </div>
                <div><h1>{this.state.email}</h1></div>
                <div><h1>{this.state.password}</h1></div>
                <button>Submit</button>
            </form>
        )
    }
}