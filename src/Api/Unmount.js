import React, { Component } from 'react'

export default class Unmount extends Component {

    state = { display: true };

    delete = () => {
        this.setState({ display: false });
    }
    render() {
        let comp;
        if(this.state.display){
            comp = <ComponentOne /> 
        }
        
        return (
            <div>
                {comp}
                <button onClick={this.delete}>Delete the Component</button>
            </div>
        )
    }
}
class ComponentOne extends React.Component{
    componentWillUnmount() {
        console.log('The component is going to be unmounted');
    }
    render() {
        return <h1>Unmounting Component</h1>
    }
}