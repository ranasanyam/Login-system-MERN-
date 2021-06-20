import React from 'react'
import { Link, Route } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}
const Category = () => {
    return (
        <div>
            <h1>Category</h1>
        </div>
    )
}
const Product = () => {
    return (
        <div>
            <h1>Product</h1>
        </div>
    )
}
export default function Routes() {
    return (
        <div>
            <nav className="navbar navbar-light">
                <ul className="nav navbar-nav">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/category">Category</Link>
                    </li>
                    <li>
                        <Link to="/product">Product</Link>
                    </li>
                </ul>
            </nav>
            <Route path="/">
                <Home />
            </Route>
            <Route path="/category">
                <Category />
            </Route>
            <Route path="/product">
                <Product />
            </Route>
        </div>
    )
}
