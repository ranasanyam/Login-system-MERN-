 import React, { Component } from 'react'
 
 export default class Update extends Component {
     constructor(props) {
         super(props);
         this.state = {
             year: '2020'
         }
         console.log(this.state.year);
         console.log("Constructor Called");
     }
     componentDidMount() {
         setTimeout(() => {
             this.setState({ year: '2022'});
         }, 3000);
     }
     getSnapshotBeforeUpdate(prevProps, prevState) {
         console.log('getSnapshotBeforeUpdate Called', prevState);
         document.getElementById('before').innerHTML = "Before the update,the previous year was " + prevState.year;
         return prevState;
     }
     componentDidUpdate() {
        document.getElementById('after').innerHTML = "After the update,the current year is " + this.state.year;
     }
     changeYear = () => {
         this.setState({ year: '2021'});
         console.log("Handle fun", this.state.year);
     }

    // shouldComponentUpdate() {
    //     return true;
    // }
     render() {
         console.log("Render Called");
         return (
             <div>
                 <h1>Current year is {this.state.year}</h1>
                 <h1 id="before"></h1>
                 <h1 id="after"></h1>
                 <button onClick={this.changeYear}>Change Gender</button>
             </div>
         )
     }
 }
 