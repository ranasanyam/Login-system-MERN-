import React from 'react'


const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee'
    },
    dark: {
        foreground: '#ffffff',
        background: '#06d6a0'
    }
}
// creating context api
const ThemeContext = React.createContext(themes.light);

// parent component
export default function FnContext() {
    return (
        <ThemeContext.Provider value={themes.dark}>
            <CurrentTheme />
        </ThemeContext.Provider>
    )
}

// child component
function CurrentTheme() {
    return(
        <div>
            <SecondChild />
        </div>
    )
}
// second child
function SecondChild() {
    const theme = React.useContext(ThemeContext);
    console.log(theme);
    return (
        <button style={{ backgroundColor: theme.background, color: theme.foreground}}>I am styled by theme context!</button>
    )
}