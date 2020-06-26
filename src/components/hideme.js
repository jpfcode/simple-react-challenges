import React, { Component } from 'react';

export default class HideMe extends Component {
   constructor(props) {
      super(props);

      this.state = {
         hidden: false,
         buttonLabel: "Hide"
      }

      this.setHidden = this.setHidden.bind(this);
   }

   setHidden(isHidden) {
      const newLabel = isHidden ? "Show" : "Hide";

      this.setState({
         hidden: isHidden,
         buttonLabel: newLabel
      });
   }

   render() {
      return (
         <div className="my-component">
            <div className="label">
               <h2>{ this.state.hidden ? "  " : "Hide Me!" }</h2>
            </div>
            <button onClick={()=>{ this.setHidden(!this.state.hidden)}}>{ this.state.buttonLabel }</button>
         </div>
      );
   }
}