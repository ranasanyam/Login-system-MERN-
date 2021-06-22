 import React, { Component } from 'react'
 
 export default class Update extends Component {
     constructor(props) {
         super(props);
         this.state = {
             level: '0'
         }
         console.log("Constructor Called", this.state.level);
     }
     componentDidMount() {
         setTimeout(() => {
             this.setState({ level: '1'});
         }, 3000);
     }
     //getSnapshotBeforeUpdate(prevProps, prevState) {
     //    console.log('getSnapshotBeforeUpdate Called', prevState);
     //    document.getElementById('before').innerHTML = "Before the update,the previous year was " + prevState.year;
     //    return prevState;
     //}
     componentDidUpdate(prevProps, prevState) {
         console.log('previous Props', prevProps);
         console.log('previous state', prevState);
        document.getElementById('after').innerHTML = "componentDidUpdate " + this.state.level;
     }


    // shouldComponentUpdate() {
    //     return true;
    // }
     render() {
         console.log("Render Called");
         return (
             <div>
                 <h1 style={{ margin: 'auto', width: '50%', padding: 20, marginTop: '10%', border: 'solid 1px #e5e5e5', textAlign: 'center', fontSize: 18 }}>
                     <div id="after"></div>
                 </h1>
             </div>
         )
     }
 }
 