import React, { Component } from 'react';
import moment from 'moment'

export default class Clock extends Component {
   constructor() {
      super();

      this.state = {
         currentTime: moment()
      };
   }

   updateTime() {
      this.setState({ currentTime: moment()});
   }

   componentDidMount() {
      this.liveTime = setInterval(() => {
         this.updateTime()
      }, 1000);
   }

   componentWillUnmount() {
      clearInterval(this.liveTime);
   }

   render() {
      const currentTime = this.state.currentTime;
      return (
         <div className="my-component clock-wrapper">
            <div className="center-align"><h2>{ currentTime.format('LTS') }</h2></div>
         </div>
      );
   }
}