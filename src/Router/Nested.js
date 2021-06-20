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
const items = [
    {
        name: 'Category One',
        id: 0
    }, 
    {
        name: 'Category Two',
        id: 1
    }
]
const products = [
    {
        name: 'First Product',
        id: 0
    }, 
    {
        name: 'Second Product',
        id: 1
    }
]
export default function Nested() {
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
                    <li>
                        <Link to="/orders">Orders</Link>
                    </li>
                </ul>
            </nav>
            <Route exact path="/" component={Home} />
            <Route path="/category" component={Category} />
            <Route exact path="/category" render={() => {
                return (
                    <div>
                        {items.map(item => (
                            <div key={item.id}>
                                <Link to={`/category/${item.id}`}>{item.name}</Link>
                            </div>
                        ))}
                    </div>
                )
            }} />
            <Route path="/product">
                <Product />
            </Route>
            <Route path="/product" exact render={() => {
                return (
                    <div>
                        {products.map(product => (
                            <div key={product.id}>
                                <Link to={`/product/${product.id}`}>{product.name}</Link>
                            </div>
                        ))}
                    </div>
                )
            }} />
            <Route path="/orders" render={() => <h1>Your Orders.</h1>} />
        </div>
    )
}
