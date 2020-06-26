import React, { Component } from 'react';

export default class Counter extends Component {
   constructor(props) {
      super(props);

      this.state = {
         counter: 0
      }

      this.changeCounter = this.changeCounter.bind(this);
   }

   changeCounter(isIncrease) {
      if(isIncrease) {
         this.setState({
            counter: this.state.counter + 1
         });
      } else {
         this.setState({
            counter: this.state.counter - 1
         })
      }
   }

   render() {
      return (
         <div className="my-component counter-wrapper">
            <button onClick={()=>{this.changeCounter(true)}}>Up</button>
            <h2>{ this.state.counter }</h2>
            <button onClick={()=>{this.changeCounter(false)}}>Down</button>
         </div>
      );
   }
}