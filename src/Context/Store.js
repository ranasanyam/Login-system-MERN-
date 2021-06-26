import React, { createContext } from 'react';
 
const UserContext = createContext();

export const UserConsumer = UserContext.Consumer;

export default UserContext;

export class UserProvider extends React.Component{
    // context state
    state = {
        user: {}
    }
    setUser = (user) => {
        console.log(user);
        this.setState((prevState) => ({user}))
    }
    render() {
        console.log(this);
        return(
            <UserContext.Provider value="">
                <div></div>
            </UserContext.Provider>
        )
    }
}