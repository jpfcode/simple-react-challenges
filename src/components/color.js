import React, { Component } from 'react';

export default class ColorMe extends Component {
   constructor(props) {
      super(props);

      this.state = {
         color: "#000000",
         message: "Color Me!"
      }

      this.handleChange = this.handleChange.bind(this);
   }

   handleChange(event) {
      this.setState({
         [event.target.name]: event.target.value
      });
   }

   render() {
      return (
         <div className="my-component">
            <h2 style={{ color:this.state.color }}>{this.state.message}</h2>
            <input name="color" value={ this.state.color } onChange={this.handleChange}/>
            <input name="message" value={ this.state.message } onChange={this.handleChange}/>
         </div>
      );
   }
}