import React, { Component } from 'react'

const ThemeContext = React.createContext('light');

// parent component
export default class Theme extends Component {
    render() {
        return (
            <div>
                <ThemeContext.Provider value="Dark">
                    <CurrentTheme  />
                </ThemeContext.Provider>
            </div>
        )
    }
}
// child component
function CurrentTheme() {
    return(
        <div>
            <SecondChild />
        </div>
    )
}
// child component
class SecondChild extends Component{

    render() {
        console.log(this);
        return (
            <h1>Using Context Api</h1>
        )
    }
}
SecondChild.contextType = ThemeContext;