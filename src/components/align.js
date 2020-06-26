import React, { Component } from 'react';

export default class AlignMe extends Component {
   constructor(props) {
      super();

      this.state = {
         alignment: "center-align"
      };

      this.changeAlignment = this.changeAlignment.bind(this);
   }

   changeAlignment(alignment) {
      this.setState({
         alignment: alignment
      })
   }

   render() {
      return (
         <div className='my-component alignment-wrapper'>
            <div className={`label ${this.state.alignment}`}>
               <h2 id='align-me'>Align Me!</h2>
            </div>
            <div className="buttons">
               <button onClick={()=> {this.changeAlignment('left-align');}}>Left</button>
               <button onClick={()=> {this.changeAlignment('center-align');}}>Center</button>
               <button onClick={()=> {this.changeAlignment('right-align');}}>Right</button>
            </div>
         </div>
      );
   }
}