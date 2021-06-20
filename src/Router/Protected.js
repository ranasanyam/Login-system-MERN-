import React, { useState } from 'react'
import { Link, Route, Redirect } from 'react-router-dom';


const Home = () => {
    return(
        <div>
            <h1>Home</h1>
        </div>
    )
}
const Protect = () => {
    return(
        <div>
            <h1>Protected</h1>
        </div>
    )
}
const Unprotected = () => {
    return(
        <div>
            <h1>Unprotected</h1>
        </div>
    )
}
export default function Protected() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => {
        setIsAuthenticated(true);
        console.log("Logged User :" + isAuthenticated);
    }
    const logout = () => {
        setIsAuthenticated(false);
        console.log("Logged User :" + isAuthenticated);
    }
    return (
        <div>
            <nav className="navbar navbar-light">
                <ul className="nav navbar-nav">
                    <li>
                        <Link to="/">Link to Home Page</Link>
                    </li>
                    <li>
                        <Link to="/protected">Link to Protected Page</Link>
                    </li>
                    <li>
                        <Link to="/unprotected">Link to Unprotected Page</Link>
                    </li>
                </ul>
                <button onClick={login}>Login</button>
                <button onClick={logout}>Logout</button>
            </nav>
            <GuardedRoute path="/protected" component={Protect} auth={isAuthenticated} />
            <Route exact path="/" component={Home} />
            <Route path="/protected" component={Protect} />
            <Route exact path="/unprotected" component={Unprotected} />

            <Route path="/orders" render={() => <h1>Your Orders.</h1>} />
        </div>
    )
}
const GuardedRoute = ({ component: Component, auth, ...rest}) => (
    <Route {...rest} render={(props) => (
        auth === true ? <Component {...props} /> : <Redirect to="/" />
    )}></Route>
)