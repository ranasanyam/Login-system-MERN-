import React, { Component } from 'react'
import UserContext from './Store'
import { UserConsumer } from './Store'
export default class HomePage extends Component {

    //static contextType = UserContext;
    //componentDidMount() {
    //    const user = this.context;
    //    console.log(user);
    //}

    render() {
        return (
            <div>
                <button onClick={() => {
                    const newUser = { name: 'Snow', loggedIn: true }
                }}>
                    Update Context User
                </button>
                <p>{`Current User: `}</p>
            </div>
        )
    }
}
