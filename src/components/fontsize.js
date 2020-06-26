import React, { Component } from 'react';

export default class FontSize extends Component {
   constructor(props) {
      super(props);

      this.state = {
         fontSize: 20,
         increment: 5
      }

      this.increaseFontSize = this.increaseFontSize.bind(this);
      this.decreaseFontSize = this.decreaseFontSize.bind(this);
   }

   increaseFontSize() {
      let newFontSize = this.state.fontSize + this.state.increment;

      this.setState({
         fontSize: newFontSize
      })
   }

   decreaseFontSize() {
      let newFontSize = this.state.fontSize - this.state.increment;
      if (newFontSize < 10) newFontSize = 10;

      this.setState({
         fontSize: newFontSize
      })
   }

   render() {
      let myStyle = {
         fontSize: this.state.fontSize + "px"
      }
      return (
         <div className="my-component">
            <button onClick={() => {this.increaseFontSize()}}>Bigger</button>
            <button onClick={() => {this.decreaseFontSize()}}>Smaller</button>
            <h2 style={myStyle}>{this.state.fontSize}px</h2>
            
         </div>
      );
   }
}
