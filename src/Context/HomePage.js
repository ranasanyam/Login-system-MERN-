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
                <UserConsumer>
                    {(props) => {
                        console.log(props);
                        return <div>{props.name} loggedIn Successfully....</div>
                    }}
                </UserConsumer>
            </div>
        )
    }
}
